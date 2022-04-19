import { MapContainer, TileLayer } from 'react-leaflet'
import './style.css';

const Map = () => {

  return (
    <div>
      <MapContainer center={[40.505, -100.09]} zoom={13} >
  
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map;