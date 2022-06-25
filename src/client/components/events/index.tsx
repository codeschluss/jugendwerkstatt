import { useContext, useEffect, useState } from "react";
import FilterContext from "../../../contexts/FilterContext";
import {
  ConjunctionOperator,
  EventCategoryEntity,
  QueryOperator,
  useGetEventCategoriesQuery,
} from "../../../GraphQl/graphql";
import FilterHeader from "../../../shared/components/header/filterHeader";
import SideBar from "../filter/SideBar";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

const Events = () => {
  const [categoriesData, setCategoriesData] = useState<
    EventCategoryEntity | any
  >();
  const { category, dates } = useContext(FilterContext);

  const filterOperands: any = [];

  useEffect(() => {
    category &&
      filterOperands.push({
        entity: {
          operator: QueryOperator.Equal,
          path: "id",
          value: category?.id,
        },
      });
  }, [category]);

  useEffect(() => {
    dates.startDate &&
      filterOperands.push({
        entity: {
          operator: QueryOperator.GreaterOrEqual,
          path: "events.schedules.startDate",
          value: dates?.startDate?.$d,
        },
      });
  }, [dates.startDate]);

  useEffect(() => {
    dates.endDate &&
      filterOperands.push({
        entity: {
          operator: QueryOperator.LessOrEqual,
          path: "events.schedules.endDate",
          value: dates?.endDate?.$d,
        },
      });
  }, [dates.endDate]);

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
    <div className="m-auto ">
      <div className="flex items-center w-full h-16 pl-2 overflow-hidden border-t-2 border-white md:absolute md:top-14 bg-primary md:bg-transparent md:border-none">
        <SideBar />

        <FilterHeader />
      </div>

      <div className="p-4">
        {categoriesData?.map((category: EventCategoryEntity, index: number) => (
          <Slider key={index} title={category?.name || ""} className="-mx-4">
            {category?.events?.map((el: any, idx) => (
              <SlideCard
                key={idx}
                eventName={el?.name}
                location={`${el?.address?.street}, ${el?.address?.houseNumber}, ${el?.address?.place}`}
                date={el?.schedules[el.schedules.length - 1]?.startDate}
                route={`/event/${el.id}`}
                imgUrl={el?.titleImage?.id}
              />
            ))}
          </Slider>
        ))}
      </div>
    </div>
  );
};

export default Events;
