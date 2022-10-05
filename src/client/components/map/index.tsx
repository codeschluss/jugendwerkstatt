import { FunctionComponent, useContext, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import SwiperCore, { Virtual } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FilterContext from "../../../contexts/FilterContext";
import {
  ConjunctionOperator,
  EventEntity,
  QueryOperator,
  useAddEventFavoriteMutation,
  useDeleteEventFavoriteMutation,
  useGetEventsQuery,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import FilterHeader from "../../../shared/components/header/filterHeader";
import { useAuthStore } from "../../../store";
import SideBar from "../filter/SideBar";
import SlideCard from "../slideItems/SlideCard";
import "./style.css";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Virtual]);

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [selectedEvent, setSelectedEvent] = useState<
    EventEntity | null | undefined
  >();

  const { category, dates } = useContext(FilterContext);
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

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

  const favorites = useGetMeFavoritesQuery({
    skip: !isAuthenticated,
  });
  const refetchQueries = () => {
    result.refetch();
    favorites.refetch();
  };

  useEffect(() => {
    let events = result.data?.getEvents?.result;
    setAllEvents(events);
  }, [result.data?.getEvents?.result]);

  const checkId = (obj: any) => obj.id === selectedEvent?.id;
  const hasId = favorites?.data?.me?.favoriteEvents?.some(checkId);

  return (
    <div className="overflow-hidden relative">
      {allEvents && (
        <div className="map relative">
          <div
            className="pl-2 md:fixed  md:top-20 right-0 overflow-hidden
           bg-white md:bg-slate-400  border-t-2 border-white md:border-none    
           items-center   z-20 flex mt-4  h-16 "
          >
            <SideBar type="EVENT" />

            <FilterHeader />
          </div>

          <MapContainer
            center={
              allEvents.length > 0
                ? [
                    allEvents[0]?.address?.latitude,
                    allEvents[0]?.address?.longitude,
                  ]
                : [48.333, 9.888]
            }
            zoom={allEvents.length > 0 ? 13 : 11}
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
                        allEvents === undefined ? 1 : event?.address?.latitude,
                        allEvents === undefined ? 1 : event?.address?.longitude,
                      ]}
                    ></Marker>
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
              date={selectedEvent?.nextSchedule?.startDate}
              route={`/events/${selectedEvent?.id}`}
              imgUrl={`data:${selectedEvent?.titleImage?.mimeType};base64,${selectedEvent?.titleImage?.base64}`}
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
