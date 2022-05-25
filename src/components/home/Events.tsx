import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { EventEntity, useGetEventsQuery } from "../../GraphQl/graphql";
import { GET_EVENTS } from "../../GraphQl/Querry";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const useEvents = useGetEventsQuery();

  const fetchedData: [EventEntity] = useEvents.data?.getEvents?.result as [
    EventEntity
  ];

  return (
    <Slider title="Events">
      {fetchedData?.map((el: any) => {
        return (
          <SlideCard
            route={`/event/${el.id}`}
            key={el?.id}
            eventName={el?.name}
            location={el?.address?.street}
            date={el?.schedules[el?.schedules?.length - 1]?.startDate}
            imgUrl={el?.titleImage?.id}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
