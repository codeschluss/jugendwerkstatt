import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../GraphQl/Querry";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import { EventEntity } from "./Test";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const { data, loading, error } = useQuery(GET_EVENTS);
  const fetchedData: [EventEntity] = data?.getEvents.result;
  console.log(data);

  return (
    <Slider title="Events">
      {fetchedData?.map((el) => {
        return (
          <SlideCard
            key={el?.name}
            eventName={el?.name}
            location={el?.address?.street}
            date="Freitag, 25/02/22"
            imgUrl={`localhost:8061/api/media/${el?.titleImage?.id}`}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
