import React, { FunctionComponent, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGetEventsQuery } from "../../GraphQl/graphql";
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Virtual } from 'swiper';
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

  const slideTo = (index:any) => {
    console.log('e kena kliku')
    swiperRef.slideTo(index - 1, 0);
  };

  const slides = Array.from({ length: 1000 }).map(
    (_, index) => `Slide ${index + 1}`
  );

  useEffect(() => {
    let events = result.data?.getEvents?.result;
    setAllEvents(events);
    console.log(events)
  }, [result.data?.getEvents?.result, allEvents]);

  return (
    <div>
      { allEvents &&
      <div className="map">
        <MapContainer center={[allEvents[0].address.latitude,allEvents[0].address.longitude]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=MjiCJwnWXgOykin9V6Np"
          />

          {
            allEvents?.map((event: any) => {
              return (
                <div key={event.id} onClick={() => slideTo(10)}>
                  <Marker position={[event.address.latitude, event.address.longitude]} >
                    <Popup>
                      <p>Stadt : {event.address.place}</p>
                      <p>Straße : {event.address.street}</p>
                      <p>Postleitzahl: {event.address.postalCode}</p>
                    </Popup>
                  </Marker>
                </div>
              )
            })
          }
        </MapContainer>

        <div className="slider">
          <Swiper
          onSwiper={setSwiperRef}
          modules={[Virtual]}
            spaceBetween={0}
            slidesPerView={1.5}
            onSlideChange={() => console.log()}
          >
            {/* {allEvents?.map((el: any) => {
              return (
                <SwiperSlide key={el.id}>
                  <div>
                    <SlideCard
                      route={`/event/${el.id}`}
                      key={el?.name}
                      eventName={el?.name}
                      location={el?.address?.street}
                      date="Freitag, 25/02/22"
                      imgUrl={el?.titleImage?.id}
                    />
                  </div>
                </SwiperSlide>
              );
            })} */}
            {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
          </Swiper>
        </div>
      </div>
      }
    </div>
  );
};

export default Map;
