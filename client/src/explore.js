import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";
import Housing_1 from "./pic/UPlace_main.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
import Housing_5 from "./pic/Housing_1.jpg";
import Housing_6 from "./pic/Housing_6.jpg";

import housingData from "./data/housingData.json"
// import map from "./pic/map.png";
import Map from './components/map.js';
import filter_icon from "./pic/filter_icon.jpg";

function Explore() {
  let navigate = useNavigate();

  const HouseCard = ({ imageSrc, altText, navigate, title, caption }) => (
  <div className="house-container">
    <img
      src={imageSrc}
      alt={altText}
      onClick={navigate}
    />
    <h3>{title}</h3>
    <p>{caption}</p>
  </div>
);

  // State to manage filter visibility
  const [showFilters, setShowFilters] = useState(false);

  // Function to toggle the filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div>

      <div className="search-container">
        <div className="input-container">
          <div className="check-in">
            <label htmlFor="location">Location</label>
            <input type="text" id="locationInput" placeholder="U District" />
          </div>
        </div>
        <div className="input-container">
          <div className="check-in">
              <label htmlFor="movein">Move-in</label>
              <input type="date" id="movein" name="movein"></input>
          </div>
        </div>
        <div className="input-container">
          <div className="check-out">
              <label htmlFor="moveout">Move-out</label>
              <input type="date" id="moveout" name="moveout"></input>
          </div>
        </div>
        <div className="input-container">
          <p></p>
          <button id="search-button">Search</button>
        </div>
        {/* Use onClick with camelCase in JSX */}
        {/* <div className="input-container">
          <p></p>
          <button id="filter-toggle" onClick={toggleFilters}>Filter</button>
        </div> */}
        <img
          src={filter_icon}
          alt="amenities images"
          onClick={toggleFilters}
          id="filter-toggle"
        />

      </div>

      {/* drop-down fitler */}
      {showFilters && (
        <div className="filter-container">

          <div className="filter-option">
            <label htmlFor="house-type">House Type</label>
            <select id="house-type" name="house-type">
              <option value="any">Any type</option>
              <option value="studio">Studio</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="furnish">Furnished</label>
            <select id="furnish" name="furnish">
              <option value="any">Any type</option>
              <option value="furnished">Furnished</option>
              <option value="unfurnished">Unfurnished</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="pet-friendly">Pet Friendly</label>
            <select id="pet-friendly" name="pet-friendly">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="verfication">Verfication</label>
            <select id="verfication" name="verfication">
              <option value="any">Any type</option>
              <option value="uw">UW email</option>
              <option value="official">Official email</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="bedroom">Bedroom</label>
            <select id="bedroom" name="bedroom">
              <option value="studio">Studio</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="≥3">≥3</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="price">Price</label>
            <input type="text" id="priceMin" placeholder="1200" />
            <span id="char_space">---</span>
            <input type="text" id="priceMax" placeholder="2000" />
          </div>
          <div className="filter-option">
            <label htmlFor="radius">Search Radius (miles)</label>
            <span>Maximum radius 30 </span>
            <input type="text" id="radiusInput" placeholder="10" />
          </div>

        </div>
        
      )}

      <div className="layout-container">
        <div className="grid-container">
          {housingData.map((house, index) => (
            <HouseCard
              key={index}
              imageSrc={house.imageSrc}
              altText={house.title} 
              navigate={() => navigate(`/details/${house.housingID}`)} 
              title={house.title}
              caption={house.caption}
            />
          ))}
        </div>

        {/* map */}
        <div className="map-container">
          <Map navigate={navigate} />
        </div>
      </div>
    </div>
  );
}

export default Explore;
