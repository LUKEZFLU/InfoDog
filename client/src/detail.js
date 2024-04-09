import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./detail.css";
import Housing_1 from "./pic/Housing_1.jpg";
import Housing_2 from "./pic/Housing_2.jpg";
import Housing_3 from "./pic/Housing_5.jpg";
import Housing_4 from "./pic/Housing_8.jpg";
import Housing_5 from "./pic/Housing_4.jpg";
import pentagram from "./pic/pentagram.jpg";

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

      <div className="room-layout-container">
        {/* large image */}
        <div className="large-image-container">
          <img src={Housing_5} alt="amenities images" />
        </div>

        {/* room-detail */}
        <div className="grid-container">
          <div className="box-container">
            <img
              src={Housing_1}
              alt="amenities images"
            />
          </div>
          <div className="box-container">
            <img
              src={Housing_2}
              alt="amenities images"
            />
          </div>
          <div className="box-container">
            <img
              src={Housing_3}
              alt="amenities images"
            />
          </div>
          <div className="box-container">
            <img
              src={Housing_4}
              alt="amenities images"
            />
            {/* <h3>Avaron</h3>
            <p>Queen Anne | $2270/month | studio</p> */}
          </div>
        </div>
        
      </div>

      


      <div className="room-layout-container">

        {/* text */}
        <div className="text">
            <h1 id="detail-headers">Dog-friendly 2B2B Apartment nearby UW</h1>
            <span>7 reviews</span>
            <span id="note">Seattle, WA</span>
            <hr></hr>
            
            <div>
                <h3>Apartment</h3>
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

        {/* sidebox */}
        <div className="sidebox-container">
            
            <div class="booking-widget">
                <div class="price-review">
                    <div class="price">$2100 / Month</div>
                    <div class="reviews">7 reviews</div>
                </div>
                
                <div class="date-selection">
                    <div class="check-in">
                        <label for="checkin">Check-in</label>
                        <input type="date" id="checkin" name="check-in"></input>
                    </div>
                    
                    <div class="check-out">
                        <label for="checkout">Check-out</label>
                        <input type="date" id="checkout" name="check-out"></input>
                    </div>
                </div>
                
                {/* <div class="guests">
                    <label for="guests">GUESTS</label>
                    <select id="guests" name="guests">
                        <option value="1">1 guest</option>
                        <option value="2" selected>2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                    </select>
                </div> */}
                <div class="guests">
                    <label for="guests">Guests</label>
                    <input id="guests" name="guests"></input>
                </div>
                
                <button type="button" class="contact-host">Contact Host</button>
                
                <div class="charge-info">You won’t be charged yet</div>
                <hr></hr>

                
                <img src={pentagram} id="pentagram" alt="amenities images" />

            </div>

        </div>

      </div>
    
      


    </div>
  );
}

export default Detail;
