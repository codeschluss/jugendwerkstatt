import {
  JobAdEntity,
  useAddJobAdFavoriteMutation,
  useGetJobAdsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const result = useGetJobAdsQuery({
    fetchPolicy: "network-only",
  });

  const fetchedData: [JobAdEntity] = result.data?.getJobAds?.result as [
    JobAdEntity
  ];
  const [jobFavorites] = useAddJobAdFavoriteMutation();

  const favorites = useGetMeFavoritesQuery({
    fetchPolicy: "network-only",
  });
  const refetchQueries = () => {
    result.refetch();
    favorites.refetch();
  };

  return (
    <Slider title="Jobs" link={"/jobs"}>
      {fetchedData?.map((el: any) => {
        const checkId = (obj: any) => obj.id === el.id;
        const hasId = favorites?.data?.me?.favoriteJobAds?.some(checkId);
        return (
          <SlideCard
            route={`/job-ad/${el.id}`}
            gradient={false}
            key={el?.id}
            isFavorite={hasId}
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
              }).then(() => refetchQueries());
            }}
          />
        );
      })}
    </Slider>
  );
};

export default Events;
