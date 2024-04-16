import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Import Leaflet CSS
import customIcon from "../pic/location_mark.png"

const Map = () => {
  //const position = [47.6062, -122.3321]; // Seattle coordinates
  const position = [47.6612984,  -122.3131523]; // U District coordinates

  const customMarkerIcon = new L.Icon({
    iconUrl: customIcon,
    iconSize: [35, 35], // size of the icon
    iconAnchor: [17, 35], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer center={position} zoom={16} style={{ height: '200%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>This is you current location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
