import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import {
  ConjunctionOperator,
  EventCategoryEntity,
  QueryOperator,
  useGetEventCategoriesQuery,
} from "../../../GraphQl/graphql";
import { useContext, useEffect, useState } from "react";
import FilterHeader from "../../../shared/components/header/filterHeader";
import Fab from "@mui/material/Fab";
import { FilterIcon } from "@heroicons/react/outline";
import SideBar from "../filter/SideBar";
import FilterContext from "../../../contexts/FilterContext";

const Events = () => {
  const [categoriesData, setCategoriesData] = useState<
    EventCategoryEntity | any
  >();
  const { category, dates } = useContext(FilterContext);

  const result = useGetEventCategoriesQuery({
    variables: {
      params: {
        expression: {
          conjunction: {
            operator: ConjunctionOperator.And,
            operands: [
              {
                entity: {
                  operator: QueryOperator.Equal,
                  path: "id",
                  value: category?.id,
                },
              },
              {
                entity: {
                  operator: QueryOperator.GreaterOrEqual,
                  path: "events.schedules.startDate",
                  value: dates?.startDate?.$d,
                },
              },
              {
                entity: {
                  operator: QueryOperator.LessOrEqual,
                  path: "events.schedules.endDate",
                  value: dates?.endDate?.$d,
                },
              },
            ],
          },
        },
      },
    },
  });

  useEffect(() => {
    if (result.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setCategoriesData(result?.data?.getEventCategories?.result);
    }
  }, [result.data]);

  return (
    <div className=" m-auto">
      <div className="pl-2 md:absolute  md:top-14 overflow-hidden bg-primary md:bg-transparent border-t-2 border-white md:border-none w-full items-center flex  h-16">
        <SideBar />

        <FilterHeader />
      </div>

      <div className="p-4">
        {" "}
        {categoriesData?.map((category: EventCategoryEntity) => {
          return (
            <Slider title={category?.name || ""} className="-mx-4">
              {category?.events?.map((el: any) => {
                console.log(el, "eventData");
                return (
                  <SlideCard
                    eventName={el?.name}
                    location={`${el?.address?.street}, ${el?.address?.houseNumber}, ${el?.address?.place}`}
                    date={el?.schedules[el.schedules.length - 1]?.startDate}
                    route={`/event/${el.id}`}
                    imgUrl={el?.titleImage?.id}
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
