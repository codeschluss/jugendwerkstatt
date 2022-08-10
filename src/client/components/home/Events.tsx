import {
  EventEntity,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeBasicFavoritesQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  let fetchedData = null;

  const useEvents = useGetEventsQuery({
    skip: !!fetchedData,
    variables: {
      params: {
        page: 0,
        size: 5,
      },
    },
  });

  const [eventFavorite] = useAddEventFavoriteMutation();

  fetchedData = useEvents.data?.getEvents?.result as [EventEntity];

  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();

  const favorites = useGetMeBasicFavoritesQuery({});
  const refetchQueries = () => {
    useEvents.refetch();
    favorites.refetch();
  };

  return (
    <Slider title="Events" link={"/events"}>
      {fetchedData
        ?.filter((event: EventEntity | undefined | null) => event?.nextSchedule)
        .map((el: any) => {
          const checkId = (obj: any) => obj.id === el.id;
          const hasId = favorites?.data?.me?.favoriteEvents?.some(checkId);

          return (
            <SlideCard
              shareUrl={`event/${el.id}`}
              route={`/event/${el.id}`}
              key={el?.id}
              isFavorite={hasId}
              eventName={el?.name}
              location={el?.address?.street}
              date={el?.nextSchedule.startDate}
              imgUrl={`data:${el?.titleImage?.mimeType};base64,${el?.titleImage?.base64}`}
              setFavorite={() =>
                eventFavorite({
                  variables: {
                    jobAdId: el.id,
                  },
                }).then(() => refetchQueries())
              }
              removeFavorite={() =>
                deleteEventFavorite({
                  variables: {
                    eventId: el.id,
                  },
                }).then(() => refetchQueries())
              }
            />
          );
        })}
    </Slider>
  );
};

export default Events;
