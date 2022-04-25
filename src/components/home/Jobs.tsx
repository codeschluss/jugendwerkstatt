import { useContext, useEffect } from "react";
import EventContext from "../../contexts/EventContext";
import JobAddContext from "../../contexts/JobAddContext";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import { EventEntity } from "./Test";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const { setAllJobAds, allJobAds } = useContext(JobAddContext);

  const fetchedData: [EventEntity] = allJobAds as [EventEntity];
  console.log(allJobAds, "jobAdds");

  return (
    <Slider title="Jobs">
      {fetchedData?.map((el) => {
        return (
          <SlideCard
            route={`/job-ad/${el.id}`}
            key={el?.name}
            eventName={el?.name}
            location={el?.address?.street}
            date="Freitag, 25/02/22"
            // imgUrl={el?.titleImage?.id}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
