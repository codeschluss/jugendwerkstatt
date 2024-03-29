import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterContext from "../../../contexts/FilterContext";
import {
  ConjunctionOperator,
  EventCategoryEntity,
  EventEntity,
  QueryOperator,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventCategoriesQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import FilterHeader from "../../../shared/components/header/filterHeader";
import { useAuthStore } from "../../../store";
import SideBar from "../filter/SideBar";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

const Events = () => {
  const [categoriesData, setCategoriesData] = useState<
    EventCategoryEntity | any
  >();
  const { category, dates } = useContext(FilterContext);
  const { isAuthenticated } = useAuthStore();

  const [eventFavorite] = useAddEventFavoriteMutation({});

  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();
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
        path: "events.schedules.startDate",
        value: dates?.startDate?.$d,
      },
    });

  dates.endDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.LessOrEqual,
        path: "events.schedules.endDate",
        value: dates?.endDate?.$d,
      },
    });

  const result = useGetEventCategoriesQuery(
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
  });
  const refetchQueries = () => {
    result.refetch();
    favorites.refetch();
  };

  useEffect(() => {
    result.refetch();
  }, [category, dates]);

  useEffect(() => {
    if (result.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setCategoriesData(result?.data?.getEventCategories?.result);
    }
  }, [result.data]);

  return (
    <div className="m-auto md:m-12 md:mt-0">
      <div
        className="flex items-center w-full h-16 pl-2 overflow-hidden border-t-2
       border-white  bg-primary md:bg-transparent md:border-none justify-between"
      >
        <SideBar type="EVENT" />

        <FilterHeader />
      </div>

      <div className="p-4">
        {" "}
        {categoriesData
          ?.filter((cat: EventCategoryEntity | undefined | null) =>
            cat?.events?.some(
              (event: EventEntity | undefined | null) => event?.nextSchedule
            )
          )
          .map((category: EventCategoryEntity) => {
            return (
              <Slider
                title={category?.name || ""}
                className="-mx-4"
                key={category.id}
              >
                {category?.events
                  ?.filter(
                    (event: EventEntity | undefined | null) =>
                      event?.nextSchedule
                  )
                  .map((el: any) => {
                    const checkId = (obj: any) => obj.id === el.id;
                    const hasId =
                      favorites?.data?.me?.favoriteEvents?.some(checkId);
                    return (
                      <SlideCard
                        key={el.id}
                        isFavorite={hasId}
                        eventName={el?.name}
                        location={`${el?.address?.street}, ${el?.address?.houseNumber}, ${el?.address?.place}`}
                        date={el?.nextSchedule.startDate}
                        shareUrl={`event/${el.id}`}
                        route={`/event/${el.id}`}
                        imgUrl={`data:${el?.titleImage?.mimeType};base64,${el?.titleImage?.base64}`}
                        setFavorite={() =>
                          eventFavorite({
                            variables: {
                              jobAdId: el.id,
                            },
                          }).then(() => refetchQueries())
                        }
                        removeFavorite={() =>
                          deleteEventFavorite({
                            variables: {
                              eventId: el.id,
                            },
                          }).then(() => refetchQueries())
                        }
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

export default Events;
