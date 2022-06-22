import { useEffect, useState } from "react";
import {
  JobAdEntity,
  JobTypeEntity,
  useAddJobAdFavoriteMutation,
  useDeleteJobAdFavoriteMutation,
  useGetJobTypesQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

const Jobs = () => {
  const [typesData, setTypesData] = useState<JobTypeEntity | any>();
  const result = useGetJobTypesQuery();
  const [jobFavorites] = useAddJobAdFavoriteMutation();
  const [deleteJobAdFavorite] = useDeleteJobAdFavoriteMutation();

  const favorites = useGetMeFavoritesQuery({
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
    <div className="p-4 m-auto md:m-12">
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
  );
};

export default Jobs;
