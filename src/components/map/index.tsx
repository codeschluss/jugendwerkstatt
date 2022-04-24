import React, { FunctionComponent, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import EventContext from "../../contexts/EventContext";
import { useGetEventsQuery } from "../../GraphQl/graphql";
import "./style.css";

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [averageLocation, setAverageLocation] = useState<any>(undefined);

  const result = useGetEventsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  useEffect(() => {
    const events = result.data?.getEvents?.result;
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
                <div key={event.id}>
                  <Marker position={[event.address.latitude, event.address.longitude]}>
                    <Popup>
                      <p>{event.address.place}</p>
                      <p>{event.address.street}</p>
                      <p>{event.address.postalCode}</p>
                    </Popup>
                  </Marker>
                </div>
              )
            })
          }
        </MapContainer>

        <div className="flex justify-center align-middle">
          {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper:any) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
          asd
        </div>
      </div>
      }
    </div>
  );
};

export default Map;
