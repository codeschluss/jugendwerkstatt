import React, {FunctionComponent} from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import './style.css';

const Map: FunctionComponent = () => {

  return (
    <div>
      <div className='map-tags'>
        <div className='tag'>tag 1</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
        <div className='tag'>tag 2</div>
      </div>

      <div className='map'>
        <MapContainer center={[40.505, -100.09]} zoom={13} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=MjiCJwnWXgOykin9V6Np"
          />

          <Marker position={[40.505, -100.09]}>
              <Popup>
                Event 1
              </Popup>
          </Marker>

          <Marker position={[40.505, -100.12]}>
              <Popup>
                Event 2
              </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map;