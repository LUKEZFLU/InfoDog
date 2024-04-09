import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./explore.css";
import Housing_1 from "./pic/UPlace_main.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
import Housing_5 from "./pic/Housing_1.jpg";
import Housing_6 from "./pic/Housing_6.jpg";
import map from "./pic/map.png";

function Explore() {
  let navigate = useNavigate();

  return (
    <div>

      <div className="search-container">
        <div className="input-container">
          <div>location</div>
          <input type="text" id="locationInput" placeholder="UW" />
        </div>
        <div className="input-container">
          {/* <div>Move-in</div>
          <input type="text" id="moveinInput" placeholder="yyyy-mm-dd" /> */}
          <div class="check-in">
              <label for="movein">Move-in</label>
              <input type="date" id="movein" name="movein"></input>
          </div>
        </div>
        <div className="input-container">
          {/* <div>Move-out</div>
          <input type="text" id="moveoutInput" placeholder="yyyy-mm-dd" /> */}
          <div class="check-out">
              <label for="moveout">Move-out</label>
              <input type="date" id="moveout" name="moveout"></input>
          </div>
        </div>
        <div className="input-container">
          <p></p>
          <button id="search-button">Search</button>
        </div>
        <div className="input-container">
          <p></p>
          <button id="filter-toggle" onclick="toggleFilters()">Filter</button>
        </div>

        {/* drop-down fitler */}
        <div class="filter-container">
          {/* <button id="filter-toggle" onclick="toggleFilters()">Filters</button> */}
          <div id="filters" class="filter-options">
            <div class="filter-option">
              <label for="house-type">House Type:</label>
              <select id="house-type" name="house-type">
                <option value="studio">Studio</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </select>
            </div>
            <div class="filter-option">
              <label for="pet-friendly">Pet Friendly:</label>
              <select id="pet-friendly" name="pet-friendly">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

          </div>
        </div>


      </div>

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
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
