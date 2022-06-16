import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import {
  EventEntity,
  useAddEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const useEvents = useGetEventsQuery({
    fetchPolicy: "network-only",
  });

  const [eventFavorite] = useAddEventFavoriteMutation({});

  const fetchedData: [EventEntity] = useEvents.data?.getEvents?.result as [
    EventEntity
  ];

  const favorites = useGetMeFavoritesQuery({
    fetchPolicy: "network-only",
  });
  const refetchQueries = () => {
    useEvents.refetch();
    favorites.refetch();
  };

  return (
    <Slider title="Events" link={"/events"}>
      {fetchedData?.map((el: any) => {
        const checkId = (obj: any) => obj.id === el.id;
        const hasId = favorites?.data?.me?.favoriteEvents?.some(checkId);

        return (
          <SlideCard
            route={`/event/${el.id}`}
            key={el?.id}
            isFavorite={hasId}
            eventName={el?.name}
            location={el?.address?.street}
            date={el?.schedules[el?.schedules?.length - 1]?.startDate}
            imgUrl={el?.titleImage?.id}
            setFavorite={() =>
              eventFavorite({
                variables: {
                  jobAdId: el.id,
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
