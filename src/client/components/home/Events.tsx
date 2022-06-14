import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import {
  EventEntity,
  useAddEventFavoriteMutation,
  useGetEventsQuery,
} from "../../../GraphQl/graphql";
import { GET_EVENTS } from "../../../GraphQl/Querry";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const useEvents = useGetEventsQuery();

  const [eventFavorite] = useAddEventFavoriteMutation({});

  const fetchedData: [EventEntity] = useEvents.data?.getEvents?.result as [
    EventEntity
  ];

  return (
    <Slider title="Events" link={"/events"}>
      {fetchedData?.map((el: any) => {
        return (
          <SlideCard
            route={`/event/${el.id}`}
            key={el?.id}
            eventName={el?.name}
            location={el?.address?.street}
            date={el?.schedules[el?.schedules?.length - 1]?.startDate}
            imgUrl={el?.titleImage?.id}
            setFavorite={() =>
              eventFavorite({
                variables: {
                  jobAdId: el.id,
                },
              })
            }
          />
        );
      })}
    </Slider>
  );
};

export default Events;
