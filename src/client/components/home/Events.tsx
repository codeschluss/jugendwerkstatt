import {
  EventEntity,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const useEvents = useGetEventsQuery({});

  const [eventFavorite] = useAddEventFavoriteMutation();

  const fetchedData: [EventEntity] = useEvents.data?.getEvents?.result as [
    EventEntity
  ];

  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();

  const favorites = useGetMeFavoritesQuery({});
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
