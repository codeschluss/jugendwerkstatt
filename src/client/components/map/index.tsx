import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import {
  ConjunctionOperator,
  EventEntity,
  QueryOperator,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Virtual } from "swiper";
import { API_URL } from "../../../config/app";
import { getHour } from "../../../shared/utils/date/getHour";
import { MapSocial } from "./MapSocial";
import FilterContext from "../../../contexts/FilterContext";

SwiperCore.use([Virtual]);

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [selectedEvent, setSelectedEvent] = useState<
    EventEntity | null | undefined
  >();

  const { category, dates } = useContext(FilterContext);

  const filterOperands: any = [];

  category &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.Equal,
        path: "category.id",
        value: category?.id,
      },
    });

  dates.startDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.GreaterOrEqual,
        path: "events.schedules.startDate",
        value: dates?.startDate?.$d,
      },
    });

  dates.endDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.LessOrEqual,
        path: "events.schedules.endDate",
        value: dates?.endDate?.$d,
      },
    });

  const result = useGetEventsQuery(
    filterOperands &&
      filterOperands.length && {
        fetchPolicy: "network-only",
        variables: {
          params: {
            expression: {
              conjunction: {
                operator: ConjunctionOperator.And,
                operands: filterOperands,
              },
            },
          },
        },
      }
  );

  const [eventFavorite] = useAddEventFavoriteMutation({});

  const [deleteEventFavorite] = useDeleteEventFavoriteMutation();

  const favorites = useGetMeFavoritesQuery({});
  const refetchQueries = () => {
    result.refetch();
    favorites.refetch();
  };

  useEffect(() => {
    let events = result.data?.getEvents?.result;
    setAllEvents(events);
  }, [result.data?.getEvents?.result, allEvents]);

  const theDate = new Date(selectedEvent?.nextSchedule?.startDate);
  const year = theDate.getFullYear();
  const month = theDate.getMonth();
  const day = theDate.getDate();

  const weekDays = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  const weekDay = weekDays[theDate.getDay()];

  const checkId = (obj: any) => obj.id === selectedEvent?.id;
  const hasId = favorites?.data?.me?.favoriteEvents?.some(checkId);

  return (
    <div className="overflow-hidden relative">
      {allEvents && (
        <div className="map">
          <MapContainer
            center={[
              allEvents[0].address.latitude,
              allEvents[0].address.longitude,
            ]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=MjiCJwnWXgOykin9V6Np"
            />

            {allEvents
              ?.filter(
                (event: EventEntity | undefined | null) => event?.nextSchedule
              )
              .map((event: any, index: number) => {
                return (
                  <div key={event.id}>
                    <Marker
                      eventHandlers={{
                        click: () => setSelectedEvent(event),
                      }}
                      position={[
                        event.address.latitude,
                        event.address.longitude,
                      ]}
                    >
                      <Tooltip>
                        <p>Stadt : {event.address.place}</p>
                        <p>Straße : {event.address.street}</p>
                        <p>Postleitzahl: {event.address.postalCode}</p>
                      </Tooltip>
                    </Marker>
                  </div>
                );
              })}
          </MapContainer>

          <div
            className={`absolute bg-white transform-gpu transition-all duration-200 ${
              selectedEvent ? "-bottom-0 md:-left-0" : "-bottom-64 md:left-full"
            }  h-64 z-10 w-full md:w-1/3 p-3`}
          >
            <div className="flex justify-between items-start">
              <div className="w-1/2 md:w-1/2">
                {" "}
                <img
                  alt={selectedEvent?.name || ""}
                  className="object-cover w-full h-full rounded-md shadow-md  inset-0"
                  src={`${API_URL}media/${selectedEvent?.titleImage?.id}`}
                />
              </div>
              <div className="mr-2 flex flex-col items-end">
                <p className="text-base">{selectedEvent?.name}</p>
                <p className="text-sm">{`${weekDay}, ${day}.${month}.${year}`}</p>
                <p className="text-sm">
                  {`${getHour(
                    selectedEvent?.nextSchedule?.startDate
                  )}${" Uhr"}`}
                </p>
                <MapSocial
                  url={`event/${selectedEvent?.id}`}
                  isFavorite={hasId}
                  setFavorite={() =>
                    eventFavorite({
                      variables: {
                        jobAdId: selectedEvent?.id,
                      },
                    }).then(() => refetchQueries())
                  }
                  removeFavorite={() =>
                    deleteEventFavorite({
                      variables: {
                        eventId: selectedEvent?.id,
                      },
                    }).then(() => refetchQueries())
                  }
                />
              </div>
            </div>
            <p className="text-sm md:text-base mt-1 overflow-auto">
              {selectedEvent?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
