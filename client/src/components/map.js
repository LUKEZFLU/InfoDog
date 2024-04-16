import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Import Leaflet CSS

const Map = () => {
  //const position = [47.6062, -122.3321]; // Seattle coordinates
  const position = [47.654892,  -122.307785]; // UW coordinates

  return (
    <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A simple popup example.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
