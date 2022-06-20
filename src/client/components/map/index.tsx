import React, { FunctionComponent, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { EventEntity, useGetEventsQuery } from "../../../GraphQl/graphql";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Virtual } from "swiper";
SwiperCore.use([Virtual]);

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const result = useGetEventsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  const slideTo = (index: any) => {
    swiperRef.slideTo(index - 1, 0);
  };

  useEffect(() => {
    let events = result.data?.getEvents?.result;
    setAllEvents(events);
  }, [result.data?.getEvents?.result, allEvents]);

  return (
    <div>
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

            {allEvents?.map((event: any, index: number) => {
              return (
                <div key={event.id} onClick={() => slideTo(index)}>
                  <Marker
                    position={[event.address.latitude, event.address.longitude]}
                  >
                    <Popup>
                      <p>Stadt : {event.address.place}</p>
                      <p>Straße : {event.address.street}</p>
                      <p>Postleitzahl: {event.address.postalCode}</p>
                    </Popup>
                  </Marker>
                </div>
              );
            })}
          </MapContainer>

          <div className="slider">
            <Swiper
              onSwiper={setSwiperRef}
              modules={[Virtual]}
              spaceBetween={0}
              slidesPerView={1.5}
            >
              {allEvents?.map((el: EventEntity, index: number) => {
                return (
                  <SwiperSlide key={el.id}>
                    <div className="w-full h-32  bottom-0 z-50">
                      <img
                        src={`http://localhost:8061/api/media/${el.titleImage?.id}`}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
