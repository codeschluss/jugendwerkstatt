import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterContext from "../../../contexts/FilterContext";
import {
  ConjunctionOperator,
  JobAdEntity,
  JobTypeEntity,
  QueryOperator,
  useAddJobAdFavoriteMutation,
  useDeleteJobAdFavoriteMutation,
  useGetJobTypesQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import FilterHeader from "../../../shared/components/header/filterHeader";
import { useAuthStore } from "../../../store";
import SideBar from "../filter/SideBar";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

const Jobs = () => {
  const [typesData, setTypesData] = useState<JobTypeEntity | any>();

  const [jobFavorites] = useAddJobAdFavoriteMutation();
  const [deleteJobAdFavorite] = useDeleteJobAdFavoriteMutation();
  const { category, dates } = useContext(FilterContext);
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const filterOperands: any = [];

  category &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.Equal,
        path: "id",
        value: category?.id,
      },
    });

  dates.startDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.GreaterOrEqual,
        path: "jobs.dueDate",
        value: dates?.startDate?.$d,
      },
    });

  dates.endDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.LessOrEqual,
        path: "jobs.startDate",
        value: dates?.endDate?.$d,
      },
    });

  const result = useGetJobTypesQuery(
    filterOperands &&
      filterOperands.length && {
        fetchPolicy: "network-only",
        variables: {
          params: {
            expression: {
              conjunction: {
                operator: ConjunctionOperator.And,
                operands: filterOperands,
              },
            },
          },
        },
      }
  );

  const favorites = useGetMeFavoritesQuery({
    skip: !isAuthenticated,
    fetchPolicy: "network-only",
  });
  const refetchQueries = () => {
    result.refetch();
    favorites.refetch();
  };

  useEffect(() => {
    if (result?.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setTypesData(result?.data?.getJobTypes?.result);
    }
  }, [result.data]);

  return (
    <div className=" m-auto md:m-12 md:mt-0">
      <div
        className=" flex items-center w-full h-16 pl-2 overflow-hidden border-t-2
       border-white  bg-primary md:bg-transparent md:border-none justify-between"
      >
        <SideBar />

        <FilterHeader />
      </div>

      <div className="p-4">
        {typesData
          ?.filter((cat: JobTypeEntity | undefined | null) =>
            cat?.jobAds?.some(
              (job: JobAdEntity | undefined | null) =>
                new Date(job?.dueDate) >= new Date(Date.now()) ||
                new Date(job?.startDate) >= new Date(Date.now())
            )
          )
          .map((category: JobTypeEntity) => {
            return (
              <Slider
                title={category?.name || ""}
                className="-mx-4"
                key={category?.id}
              >
                {category?.jobAds
                  ?.filter(
                    (job: JobAdEntity | undefined | null) =>
                      new Date(job?.dueDate) >= new Date(Date.now()) ||
                      new Date(job?.startDate) >= new Date(Date.now())
                  )
                  .map((el: JobAdEntity | any) => {
                    const checkId = (obj: any) => obj.id === el.id;
                    const hasId =
                      favorites?.data?.me?.favoriteJobAds?.some(checkId);
                    return (
                      <SlideCard
                        shareUrl={`job-ad/${el.id}`}
                        key={el.id}
                        gradient={false}
                        route={`/job-ad/${el.id}`}
                        eventName={el?.title}
                        location={`${el?.company?.name}`}
                        date={el?.dueDate}
                        isFavorite={hasId}
                        color={category?.color}
                        setFavorite={() => {
                          jobFavorites({
                            variables: {
                              jobAdId: el.id,
                            },
                          }).then(() => refetchQueries());
                        }}
                        removeFavorite={() => {
                          deleteJobAdFavorite({
                            variables: {
                              jobAdId: el.id,
                            },
                          }).then(() => refetchQueries());
                        }}
                      />
                    );
                  })}
              </Slider>
            );
          })}
      </div>
    </div>
  );
};

export default Jobs;
