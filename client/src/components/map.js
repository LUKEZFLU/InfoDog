import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Import Leaflet CSS
import redIcon from "../icons/location_mark.png"
import blackIcon from "../icons/housing_mark.png"
import UPlace_main from '../pic/UPlace_main.jpg';
import Cielo from '../pic/Housing_2.jpg';

import Trailside from "../pic/Housing_5.jpg";
import Avaron from "../pic/Housing_8.jpg";
// import Housing_5 from "../pic/Housing_1.jpg";
// import Housing_6 from "../pic/Housing_6.jpg";
import "./map.css";

const Map = ({navigate}) => {
  //const position = [47.6062, -122.3321]; // Seattle coordinates
  const position = [47.6612984,  -122.3131523]; // U District coordinates

  const locationMark = new L.Icon({
    iconUrl: redIcon,
    iconSize: [35, 60], // size of the icon
    iconAnchor: [17, 35], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
  });

  const housingMark = new L.Icon({
    iconUrl: blackIcon,
    iconSize: [25, 45],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35]
  });

  return (
    <MapContainer center={position} zoom={15} style={{ height: '200%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* U District coordinates */}
      <Marker position={[47.6612984,  -122.3131523]} icon={locationMark}>
        <Popup>Location you search for</Popup>
      </Marker>
      {/* other housing marks */}
      <Marker position={[47.66264724731445,-122.29454803466797]} icon={housingMark}>
        <Popup>
          <div className="popup-content" onClick={() => navigate("/detail")}>
            <img src={UPlace_main} alt="U Place Apartments" className="popup-image" />
            <div className="popup-title">U Place Apartments</div>
            <div>U Village | $1750/month | 2b2b</div>
          </div>
        </Popup>
      </Marker>
      <Marker position={[47.6617789,  -122.3164528]} icon={housingMark}>
        <Popup>
          <div className="popup-content" onClick={() => navigate("/detail")}>
            <img src={Cielo} alt="Cielo Apartments" className="popup-image" />
            <div className="popup-title">Cielo Apartments</div>
            <div>Lake City | $1800/month | studio</div>
          </div>
        </Popup>
      </Marker>
      <Marker position={[47.6636989,  -122.3098528]} icon={housingMark}>
        <Popup>
          <div className="popup-content" onClick={() => navigate("/detail")}>
            <img src={Trailside} alt="Trailside" className="popup-image" />
            <div className="popup-title">Trailside</div>
            <div>U Village | $2100/month | 1b1b</div>
          </div>
        </Popup>
      </Marker>
      <Marker position={[47.6573989,  -122.3141528]} icon={housingMark}>
        <Popup>
          <div className="popup-content" onClick={() => navigate("/detail")}>
            <img src={Avaron} alt="Avaron" className="popup-image" />
            <div className="popup-title">Avaron</div>
            <div>Queen Anne | $2270/month | studio</div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
