import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useState } from 'react';
import "./detail.css";
import bath from "./pic/UPlace_bath.jpg";
import kitchen from "./pic/UPlace_kitchen.jpg";
import living from "./pic/UPlace_living.jpg";
import balcony from "./pic/UPlace_balcony.jpg";
import mainImg from "./pic/UPlace_main.jpg";
import pentagram from "./pic/pentagram.jpg";
import Popup from './components/popup';
import housingData from './data/housingData.json';

function Detail() {
  let navigate = useNavigate();
  let {housingID} = useParams();

  const housingDetail = housingData.find(house => house.housingID.toString() === housingID);


  const [buttonPopup, setButtonPopup] = useState(false);

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
          <h1 id="detail-headers">{housingDetail.title}</h1>
          <span id="note">{housingDetail.location}</span>
          <hr></hr>

          <div>
            <h4>
              <span>{housingDetail.propertyType}</span>{""}
              <span>{housingDetail.homeType}</span>
            </h4>
            <span>{housingDetail.bathrooms} bedroom(s)</span>
            <span> {housingDetail.bathrooms} bath(s)</span>
            <h4>Available from {housingDetail.moveInDate} to {housingDetail.moveOutDate}</h4>
          </div>
          <hr></hr>
          <h2 id="detail-headers">
            Description
          </h2>
          <p>
            {housingDetail.description}
          </p>
          <hr></hr>

          <h2 id="detail-headers">
            Area
          </h2>
          <p>
            {housingDetail.area} sqft
          </p>

          <hr></hr>
          <h2 id="detail-headers">What this place offers</h2>
          <div>
            {housingDetail.amenities.map((amenity, index) => (
              <div key={index} className="amenities-each">{amenity}</div>
            ))}
          </div>

          <hr></hr>
          <h2 id="detail-headers">Roommate(s)</h2>
          <h3>Still living</h3>
          <div>There will be {housingDetail.roommates} roomate(s) still living in the place </div>
          <h3>Brife Description</h3>
          <p>{housingDetail.roommateDescription}</p>

          <hr></hr>
          {/* New section T/F */}
          <h2 id="detail-headers">Others</h2>
          <h3>Furnished Situation</h3>
          <p>{housingDetail.furnished ? "Yes" : "No"}</p>
          <h3>Pet Allowed</h3>
          <p>{housingDetail.petPolicy ? "Yes" : "No"}</p>
          <h3>Deposit Required</h3>
          <p>{housingDetail.deposit ? "Yes" : "No"}</p>
          <hr></hr>
        </div>

        {/* sidebox */}
        <div className="sidebox-container">
          <div class="booking-widget">
            <div class="price">${housingDetail.price} / Month</div>
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

            <button type="button" class="contact-host" onClick={() => setButtonPopup(true)}>Contact Host</button>

            <div class="charge-info">You won't be charged yet</div>
            <hr></hr>
            <img src={pentagram} id="pentagram" alt="pentagram analysis images" />
          </div>
        </div>

      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>  
        <h3>System Information</h3> 
        <p> The request has been sent to the host</p> 
      </Popup>

    </div>
  );
}

export default Detail;
