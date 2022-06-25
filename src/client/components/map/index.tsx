import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import {
  ConjunctionOperator,
  EventEntity,
  QueryOperator,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Virtual } from "swiper";
import { API_URL } from "../../../config/app";
import { getHour } from "../../../shared/utils/date/getHour";
import { MapSocial } from "./MapSocial";
import FilterContext from "../../../contexts/FilterContext";
import SideBar from "../filter/SideBar";
import FilterHeader from "../../../shared/components/header/filterHeader";
import SlideCard from "../slideItems/SlideCard";

SwiperCore.use([Virtual]);

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [selectedEvent, setSelectedEvent] = useState<
    EventEntity | null | undefined
  >();

  const { category, dates } = useContext(FilterContext);

  const filterOperands: any = [];
  console.log(dates, "dates");
  console.log(category, "category");

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
        path: "schedules.startDate",
        value: dates?.startDate?.$d,
      },
    });

  dates.endDate &&
    filterOperands.push({
      entity: {
        operator: QueryOperator.LessOrEqual,
        path: "schedules.endDate",
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

  useEffect(() => {
    result.refetch();
    setSelectedEvent(undefined);
  }, [category, dates]);

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
        <div className="map relative">
          <div className="pl-2 md:absolute  md:top-0 right-0 overflow-hidden bg-white md:bg-slate-400  border-t-2 border-white md:border-none    items-center  z-20 flex  h-16">
            <SideBar type="EVENT" />

            <FilterHeader />
          </div>

          <MapContainer
            center={[
              allEvents[0]?.address?.latitude,
              allEvents[0]?.address?.longitude,
            ]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=MjiCJwnWXgOykin9V6Np"
            />

            {allEvents
              ?.filter(
                (event: EventEntity | undefined | null) =>
                  event?.nextSchedule && event.address?.latitude
              )
              .map((event: any, index: number) => {
                return (
                  <div key={event?.id}>
                    <Marker
                      eventHandlers={{
                        click: () => setSelectedEvent(event),
                      }}
                      position={[
                        event?.address?.latitude,
                        event?.address?.longitude,
                      ]}
                    >
                      <Tooltip>
                        <p>Stadt : {event?.address?.place}</p>
                        <p>Straße : {event?.address?.street}</p>
                        <p>Postleitzahl: {event?.address?.postalCode}</p>
                      </Tooltip>
                    </Marker>
                  </div>
                );
              })}
          </MapContainer>

          <div
            className={`absolute bg-white transform-gpu transition-all duration-200 text-white ${
              selectedEvent ? "-bottom-0 md:-left-0" : "-bottom-64 md:left-full"
            }  h-64 z-10 w-full md:w-1/3 p-3`}
          >
            <SlideCard
              isFavorite={hasId}
              width="w-full"
              className=""
              eventName={selectedEvent?.name}
              location={`${selectedEvent?.address?.street}, ${selectedEvent?.address?.houseNumber}, ${selectedEvent?.address?.place}`}
              date={selectedEvent?.nextSchedule}
              route={`/selectedEvent/${selectedEvent?.id}`}
              imgUrl={selectedEvent?.titleImage?.id}
              setFavorite={() =>
                eventFavorite({
                  variables: {
                    jobAdId: selectedEvent?.id,
                  },
                }).then(() => favorites.refetch())
              }
              removeFavorite={() =>
                deleteEventFavorite({
                  variables: {
                    eventId: selectedEvent?.id,
                  },
                }).then(() => favorites.refetch())
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
