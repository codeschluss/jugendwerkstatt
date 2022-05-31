import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import { EventEntity, useGetMeFavoritesQuery } from "../../../GraphQl/graphql";

const Favorites = () => {
  const { data } = useGetMeFavoritesQuery();
  const favorites = data?.me?.favoriteEvents;

  return (
    <div className="p-4 bg-white rounded-md md:px-36">
      <p className="mb-3 mt-3 text-2xl">Favoriten</p>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {favorites?.map((event: any) => {
          return (
            <SlideCard
              width="w-full md:w-1/2"
              className="mb-4 md:h-72"
              eventName={event?.name}
              location={`${event?.address?.street}, ${event?.address?.houseNumber}, ${event?.address?.place}`}
              date={event?.schedules[event.schedules.length - 1]?.startDate}
              route={`/event/${event.id}`}
              imgUrl={event?.titleImage?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
