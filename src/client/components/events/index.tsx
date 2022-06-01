import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import {
  EventCategoryEntity,
  useExampleGetEventsQuery,
  useGetEventCategoriesQuery,
} from "../../../GraphQl/graphql";
import { useEffect, useState } from "react";

const Events = () => {
  const [categoriesData, setCategoriesData] = useState<
    EventCategoryEntity | any
  >();

  const result = useGetEventCategoriesQuery();

  useEffect(() => {
    if (result.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setCategoriesData(result?.data?.getEventCategories?.result);
    }
  }, [result.data]);

  console.log(result.data?.getEventCategories?.result, "events");

  return (
    <div className="p-4 m-auto">
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
  );
};

export default Events;
