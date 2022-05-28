import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import {
  EventCategoryEntity,
  useGetEventCategoriesQuery,
} from "../../GraphQl/graphql";
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

  return (
    <div className="p-4 m-auto">
      {categoriesData?.map((category: EventCategoryEntity) => {
        return (
          <Slider title={category?.name || ""} className="-mx-4">
            <div key={category.id}>
              {category?.events?.map((el: any) => {
                return (
                  <SlideCard
                    eventName={el?.name}
                    location={`${el?.address?.street}, ${el?.address?.houseNumber}, ${el?.address?.place}`}
                    date={el?.schedules[el.schedules.length - 1]?.startDate}
                    route={"#"}
                    imgUrl={el?.titleImage?.id}
                  />
                );
              })}
            </div>
          </Slider>
        );
      })}
    </div>
  );
};

export default Events;
