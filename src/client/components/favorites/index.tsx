import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import { JobAdEntity, useGetMeFavoritesQuery } from "../../../GraphQl/graphql";

const Favorites = () => {
  const { data } = useGetMeFavoritesQuery({
    fetchPolicy: "network-only",
  });
  const favorites = data?.me?.favoriteEvents;

  return (
    <>
      <div className="p-4 bg-white rounded-md md:px-36">
        <p className="mb-3 mt-3 text-2xl">Favoriten</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {data?.me?.favoriteEvents?.map((event: any) => {
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
      <div className="p-4 bg-white rounded-md md:px-36">
        <p className="mb-3 mt-3 text-2xl">Jobs</p>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {data?.me?.favoriteJobAds?.map((job: any) => {
            return (
              <SlideCard
                width="w-full md:w-1/2"
                className="mb-4 md:h-72"
                eventName={job?.company?.name}
                location={`${job?.company?.address?.street}, 
                ${job?.company?.address?.houseNumber}, 
                ${job?.company?.address?.place}`}
                date={job.dueDate}
                route={`/job/${job.id}`}
                color={job?.type?.color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorites;
