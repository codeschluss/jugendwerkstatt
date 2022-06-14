import {
  JobAdEntity,
  useAddJobAdFavoriteMutation,
  useGetJobAdsQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

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
  const [jobFavorites] = useAddJobAdFavoriteMutation();
  return (
    <Slider title="Jobs" link={"/jobs"}>
      {fetchedData?.map((el: any) => {
        return (
          <SlideCard
            route={`/job-ad/${el.id}`}
            gradient={false}
            key={el?.id}
            eventName={el?.company?.name}
            location={el?.company?.address?.street}
            date={el?.startDate}
            // imgUrl={el?.titleImage?.id}
            color={el?.type?.color}
            setFavorite={() => {
              jobFavorites({
                variables: {
                  jobAdId: el.id,
                },
              });
            }}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
