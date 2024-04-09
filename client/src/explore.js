import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./explore.css";
import Housing_1 from "./pic/Housing_1.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
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
              onClick={() => navigate("/")}
            />
            <h3>Cielo</h3>
            <p>Lake City | $1800/month | studio</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_3}
              alt="amenities images"
              onClick={() => navigate("/")}
            />
            <h3>Trailside</h3>
            <p>U Village | $2100/month | 1b1b</p>
          </div>
          <div className="house-container">
            <img
              src={Housing_4}
              alt="amenities images"
              onClick={() => navigate("/")}
            />
            <h3>Avaron</h3>
            <p>Queen Anne | $2270/month | studio</p>
          </div>
        </div>

        {/* map */}
        <div className="map-container">
          <img src={map} alt="amenities images" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
