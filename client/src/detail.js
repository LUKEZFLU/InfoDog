import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./detail.css";
import Housing_1 from "./pic/Housing_1.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
import Housing_5 from "./pic/Housing_4.jpg";

function Detail() {
  let navigate = useNavigate();

  return (
    <div>
      {/* <button onClick={() => navigate("/")}>Home</button> */}

      {/* <div className="search-container">
        <div className="input-container">
          <div>location</div>
          <input type="text" id="locationInput" placeholder="UW" />
        </div>
        <div className="input-container">
          <div>Move-in</div>
          <input type="text" id="moveinInput" placeholder="yyyy-mm-dd" />
        </div>
        <div className="input-container">
          <div>Move-out</div>
          <input type="text" id="moveoutInput" placeholder="yyyy-mm-dd" />
        </div>
        <div className="input-container">
          <p></p>
          <button id="search-button">Search</button>
        </div>
      </div> */}

      <div className="layout-container">
        {/* large image */}
        <div className="large-image-container">
          <img src={Housing_5} alt="amenities images" />
        </div>

        {/* houses */}
        <div className="grid-container">
          <div className="house-container">
            <img
              src={Housing_1}
              alt="amenities images"
              onClick={() => navigate("/detail")}
            />
          </div>
          <div className="house-container">
            <img
              src={Housing_2}
              alt="amenities images"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="house-container">
            <img
              src={Housing_3}
              alt="amenities images"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="house-container">
            <img
              src={Housing_4}
              alt="amenities images"
              onClick={() => navigate("/")}
            />
            {/* <h3>Avaron</h3>
            <p>Queen Anne | $2270/month | studio</p> */}
          </div>
        </div>
        
      </div>

      {/* text */}
      <h1 id="detail-headers">Dog-friendly 2B2B Apartment nearby UW</h1>
      <span>7 reviews</span>
      <span id="note">Seattle, WA</span>
      <hr></hr>
      
      <div>
        <span><h3>Apartment</h3></span>
        <p id="note">You’ll live in Apartment</p>
        <h3>Available from Mar 1, 2024 to Aug 31, 2024</h3>
      </div>
      <hr></hr>

      <p>
        I'm transferring my lease for this killer spot on the 15th floor at The M, 
        and I've got a sweet deal for you. Picture this: waking up to jaw-dropping 
        views of downtown, Mount Rainier, Bellevue, and the Olympics every day.
      </p>
      <p>
        I'm throwing in a special discount for whoever snags this deal for March! 
        - $200 off every month
      </p>
      <p>
        ...
      </p>
      <b>Show more</b>
      <hr></hr>

      <h2 id="detail-headers">What this place offers</h2>
      <div>
        <span>Stove</span>
        <span>In-unit dryer</span>
        <p></p>
        <span>Dishwasher</span>
        <span>Oven</span>
        <p></p>
        <span>Couch</span>
        <span>In-unit washer</span>
        <p></p>
        <span>TV</span>
        <span>Air conditioning</span>
      </div>
      <hr></hr>
    

    
      


    </div>
  );
}

export default Detail;
