import React, { FunctionComponent, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGetEventsQuery } from "../../GraphQl/graphql";
import SlideCard from "../slideItems/SlideCard";
import Slider from "../slideItems/Slider";
import "./style.css";

const Map: FunctionComponent = () => {
  const [allEvents, setAllEvents] = useState<any>();

  const result = useGetEventsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  useEffect(() => {
    let events = result.data?.getEvents?.result;
    setAllEvents(events);
    console.log(events);
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

            {allEvents?.map((event: any) => {
              return (
                <div key={event.id}>
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
            <Slider title="">
              {allEvents?.map((el: any) => {
                return (
                  <SlideCard
                    route={`/event/${el.id}`}
                    key={el?.name}
                    eventName={el?.name}
                    location={el?.address?.street}
                    date="Freitag, 25/02/22"
                    imgUrl={el?.titleImage?.id}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
