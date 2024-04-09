import React from "react";
import { useNavigate } from "react-router-dom";
import "./detail.css";
import bath from "./pic/UPlace_bath.jpg";
import kitchen from "./pic/UPlace_kitchen.jpg";
import living from "./pic/UPlace_living.jpg";
import balcony from "./pic/UPlace_balcony.jpg";
import mainImg from "./pic/UPlace_main.jpg";
import pentagram from "./pic/pentagram.jpg";

function Detail() {
  let navigate = useNavigate();

  return (
    <div>

      <div className="room-layout-container">
        {/* large image */}
        <div className="large-image-container">
          <img src={mainImg} alt="overall room images" />
        </div>

        {/* room-detail */}
        <div className="room-grid-container">
          <div className="box-container">
            <img
              src={bath}
              alt="bath images"
            />
          </div>
          <div className="box-container">
            <img
              src={kitchen}
              alt="kitchen images"
            />
          </div>
          <div className="box-container">
            <img
              src={living}
              alt="living room images"
            />
          </div>
          <div className="box-container">
            <img
              src={balcony}
              alt="balcony images"
            />
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
                    <div class="price">$1750 / Month</div>
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
                    <input id="guests" name="guests" placeholder="number"></input>
                </div>
                
                <button type="button" class="contact-host">Contact Host</button>
                
                <div class="charge-info">You won’t be charged yet</div>
                <hr></hr>
                <img src={pentagram} id="pentagram" alt="pentagram analysis images" />
            </div>
        </div>

      </div>

    </div>
  );
}

export default Detail;
