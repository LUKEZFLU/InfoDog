import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";
import Housing_1 from "./pic/UPlace_main.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
import Housing_5 from "./pic/Housing_1.jpg";
import Housing_6 from "./pic/Housing_6.jpg";
// import map from "./pic/map.png";
import Map from './components/map.js';
import filter_icon from "./pic/filter_icon.jpg";

function Explore() {
  let navigate = useNavigate();

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
          <div class="check-in">
            <label for="location">Location</label>
            <input type="text" id="locationInput" placeholder="UW" />
          </div>
        </div>
        <div className="input-container">
          <div class="check-in">
              <label for="movein">Move-in</label>
              <input type="date" id="movein" name="movein"></input>
          </div>
        </div>
        <div className="input-container">
          <div class="check-out">
              <label for="moveout">Move-out</label>
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

          <div class="filter-option">
            <label for="house-type">House Type</label>
            <select id="house-type" name="house-type">
              <option value="any">Any type</option>
              <option value="studio">Studio</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
          <div class="filter-option">
            <label for="furnish">Furnished</label>
            <select id="furnish" name="furnish">
              <option value="any">Any type</option>
              <option value="furnished">Furnished</option>
              <option value="unfurnished">Unfurnished</option>
            </select>
          </div>
          <div class="filter-option">
            <label for="pet-friendly">Pet Friendly</label>
            <select id="pet-friendly" name="pet-friendly">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div class="filter-option">
            <label for="verfication">Verfication</label>
            <select id="verfication" name="verfication">
              <option value="any">Any type</option>
              <option value="uw">UW email</option>
              <option value="official">Official email</option>
            </select>
          </div>
          <div class="filter-option">
            <label for="bedroom">Bedroom</label>
            <select id="bedroom" name="bedroom">
              <option value="studio">Studio</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="≥3">≥3</option>
            </select>
          </div>
          <div class="filter-option">
            <label for="price">Price</label>
            <input type="text" id="priceMin" placeholder="1200" />
            <span id="char_space">---</span>
            <input type="text" id="priceMax" placeholder="2000" />
          </div>
          <div class="filter-option">
            <label for="radius">Search Radius (miles)</label>
            <span>Maximum radius 30 </span>
            <input type="text" id="radiusInput" placeholder="10" />
          </div>

        </div>
        
      )}

      <div className="layout-container">
        {/* houses */}
        <div className="grid-container">
          <div className="house-container">
            <img
              src={Housing_1}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>U place</h3>
            <p>U Village | $1750/month | 2b2b</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_2}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>Cielo</h3>
            <p>Lake City | $1800/month | studio</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_3}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>Trailside</h3>
            <p>U Village | $2100/month | 1b1b</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_4}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>Avaron</h3>
            <p>Queen Anne | $2270/month | studio</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_5}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>Edgepoint</h3>
            <p>Greenwood | $1570/month | 2b1b</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_6}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
            <h3>Cedar</h3>
            <p>Roosvelt | $1420/month | 4b4b</p>
          </div>

        </div>

        {/* map */}
        <div className="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Explore;
