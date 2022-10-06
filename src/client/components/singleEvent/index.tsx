import { useParams } from "react-router-dom";
import {
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventImagesQuery,
  useGetEventQuery,
  useGetMeBasicFavoritesQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import { useAuthStore } from "../../../store";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import { EventDetails } from "./eventDetails/EventDetails";
import { EventHeader } from "./eventHeader/EventHeader";
import { TitleImgSlider } from "./slider/Slider";

export const SingleEvent = () => {
  const params = useParams();
  const { isAuthenticated } = useAuthStore();

  const eventQuery = useGetEventQuery({
    variables: { id: params.id || "" },
  });

  const eventImages = useGetEventImagesQuery({
    variables: {
      entity: { id: params.id },
    },
  });

  const [eventFavorite] = useAddEventFavoriteMutation({});
  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();

  const favorites = useGetMeBasicFavoritesQuery({
    skip: !isAuthenticated,
    fetchPolicy: "network-only",
  });

  const checkId = (obj: any) => obj.id === eventQuery.data?.getEvent?.id;
  const hasId = favorites?.data?.me?.favoriteEvents?.some(checkId);

  const refetchQueries = () => {
    eventQuery.refetch();
    favorites.refetch();
  };

  const desc: any =
    eventQuery?.data?.getEvent?.description?.substring(0, 1) === '"'
      ? eventQuery?.data?.getEvent?.description?.substring(
          1,
          eventQuery?.data?.getEvent?.description.length - 1
        )
      : eventQuery?.data?.getEvent?.description;

  return (
    <div>
      <div className="flex flex-col md:flex-row  md:bg-gray-100 md:p-3 ">
        <TitleImgSlider
          imgUrl={`data:${eventQuery.data?.getEvent?.titleImage?.mimeType};base64,${eventQuery.data?.getEvent?.titleImage?.base64}`}
        />
        <div className="p-5 md:w-1/2 md:ml-4 md:flex-grow rounded-md bg-white">
          <EventHeader
            isFavorite={hasId}
            url={`event/${params.id}`}
            eventName={eventQuery?.data?.getEvent?.name || null || undefined}
            setFavorite={() =>
              eventFavorite({
                variables: {
                  jobAdId: eventQuery?.data?.getEvent?.id,
                },
              }).then(() => refetchQueries())
            }
            removeFavorite={() =>
              deleteEventFavorite({
                variables: {
                  eventId: eventQuery?.data?.getEvent?.id,
                },
              }).then(() => refetchQueries())
            }
          />

          <EventDetails
            street={
              eventQuery?.data?.getEvent?.address?.street || null || undefined
            }
            houseNr={
              eventQuery?.data?.getEvent?.address?.houseNumber ||
              null ||
              undefined
            }
            plz={
              eventQuery?.data?.getEvent?.address?.postalCode ||
              null ||
              undefined
            }
            place={
              eventQuery?.data?.getEvent?.address?.place || null || undefined
            }
            tel={
              eventQuery?.data?.getEvent?.organizer?.phone || null || undefined
            }
            email={
              eventQuery?.data?.getEvent?.organizer?.mail || null || undefined
            }
            web={
              eventQuery?.data?.getEvent?.organizer?.website ||
              null ||
              undefined
            }
            group={
              eventQuery?.data?.getEvent?.organizer?.name || null || undefined
            }
            startSchedule={
              eventQuery?.data?.getEvent?.nextSchedule &&
              eventQuery?.data?.getEvent?.nextSchedule?.startDate
            }
            startDate={
              eventQuery?.data?.getEvent?.nextSchedule &&
              eventQuery?.data?.getEvent?.nextSchedule?.startDate
            }
            endSchedule={
              eventQuery?.data?.getEvent?.nextSchedule &&
              eventQuery?.data?.getEvent?.nextSchedule?.endDate
            }
            endDate={
              eventQuery?.data?.getEvent?.nextSchedule &&
              eventQuery?.data?.getEvent?.nextSchedule?.endDate
            }
            theRest={
              eventQuery?.data?.getEvent?.category?.name || null || undefined
            }
            description={
              eventQuery?.data?.getEvent?.description || null || undefined
            }
          />
        </div>
      </div>
      <div className="hidden md:block p-5 rounded-md bg-white mt-8 md:mt-1 md:mx-3">
        <p className="text-3xl">{eventQuery?.data?.getEvent?.name}</p>
        <div
          className="prose-xl"
          dangerouslySetInnerHTML={{
            __html: eventQuery?.data?.getEvent?.description ? desc : "",
          }}
        />
      </div>
      {eventImages?.data?.getEvent?.images?.length != 0 && (
        <Slider title="Fotos">
          {eventImages?.data?.getEvent?.images?.map((el: any) => {
            return (
              <SlideCard
                key={el?.id}
                imgUrl={`data:${el?.mimeType};base64,${el?.base64}`}
                route="#"
              />
            );
          })}
        </Slider>
      )}
    </div>
  );
};
