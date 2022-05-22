import { useGetJobAdsQuery } from "../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import { JobAdEntity } from "./Test";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const result = useGetJobAdsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  const fetchedData: [JobAdEntity] = result.data?.getJobAds?.result as [
    JobAdEntity
  ];

  return (
    <Slider title="Jobs">
      {fetchedData?.map((el: any) => {
        return (
          <SlideCard
            route={`/job-ad/${el.id}`}
            key={el?.id}
            eventName={el?.company?.name}
            location={el?.company?.address?.street}
            date={el?.startDate}
            // imgUrl={el?.titleImage?.id}
            color={el?.type?.color}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
