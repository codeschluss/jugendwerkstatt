import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import {
  JobAdEntity,
  useDeleteEventFavoriteMutation,
  useDeleteJobAdFavoriteMutation,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favorites = () => {
  const favorites = useGetMeFavoritesQuery({
    fetchPolicy: "network-only",
  });
  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();
  const [deleteJobAdFavorite] = useDeleteJobAdFavoriteMutation();

  return (
    <>
      {favorites.data?.me?.favoriteEvents?.length !== 0 && (
        <div className="p-4 md:m-12 bg-white rounded-md md:px-36">
          <p className="mb-3 mt-3 text-2xl">Events</p>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {favorites.data?.me?.favoriteEvents?.map((event: any) => {
              return (
                <SlideCard
                  isFavorite={true}
                  width="w-full md:w-1/2"
                  className="mb-4 md:h-72"
                  eventName={event?.name}
                  location={`${event?.address?.street}, ${event?.address?.houseNumber}, ${event?.address?.place}`}
                  date={event?.nextSchedule}
                  route={`/event/${event.id}`}
                  imgUrl={event?.titleImage?.id}
                  removeFavorite={() =>
                    deleteEventFavorite({
                      variables: {
                        eventId: event.id,
                      },
                    }).then(() => favorites.refetch())
                  }
                />
              );
            })}
          </div>
        </div>
      )}
      {favorites.data?.me?.favoriteJobAds?.length !== 0 && (
        <div className="p-4 bg-white rounded-md md:px-36">
          <p className="mb-3 mt-3 text-2xl">Jobs</p>
          <div className="flex flex-col md:flex-row md:flex-wrap">
            {favorites.data?.me?.favoriteJobAds?.map((job: any) => {
              return (
                <SlideCard
                  isFavorite={true}
                  width="w-full md:w-1/2"
                  className="mb-4 md:h-72"
                  eventName={job?.company?.name}
                  location={`${job?.company?.address?.street}, 
                ${job?.company?.address?.houseNumber}, 
                ${job?.company?.address?.place}`}
                  date={job.dueDate}
                  route={`/job/${job.id}`}
                  color={job?.type?.color}
                  removeFavorite={() =>
                    deleteJobAdFavorite({
                      variables: {
                        jobAdId: job.id,
                      },
                    }).then(() => favorites.refetch())
                  }
                />
              );
            })}
          </div>
        </div>
      )}
      {favorites.data?.me?.favoriteJobAds?.length === 0 &&
      favorites.data?.me?.favoriteEvents?.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center text-4xl">
          <FavoriteBorderIcon fontSize="large" />
          <p>Upss... looks like you havnt added any favorites...</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Favorites;
