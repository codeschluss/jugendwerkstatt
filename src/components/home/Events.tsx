import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import EventContext from "../../contexts/EventContext";
import { useGetEventsQuery } from "../../GraphQl/graphql";
import { GET_EVENTS } from "../../GraphQl/Querry";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import { EventEntity } from "./Test";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const { setAllEvents, allEvents } = useContext(EventContext);

  const fetchedData: [EventEntity] = allEvents as [EventEntity];

  return (
    <Slider title="Events">
      {fetchedData?.map((el) => {
        return (
          <SlideCard
            route={`/event/${el.id}`}
            key={el?.name}
            eventName={el?.name}
            location={el?.address?.street}
            date="Freitag, 25/02/22"
            imgUrl={el?.titleImage?.id}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
