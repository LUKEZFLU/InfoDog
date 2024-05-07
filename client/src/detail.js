import { useNavigate, useParams} from "react-router-dom";
import { React, useState, useEffect } from 'react';
import "./detail.css";
import bath from "./pic/UPlace_bath.jpg";
import kitchen from "./pic/UPlace_kitchen.jpg";
import living from "./pic/UPlace_living.jpg";
import balcony from "./pic/UPlace_balcony.jpg";
import mainImg from "./pic/UPlace_main.jpg";
import pentagram from "./pic/pentagram.jpg";
import Popup from './components/popup';
import axios from 'axios';


function Detail() {
  let navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  
  const [house, setHouse] = useState(null);
  const { id } = useParams(); 

useEffect(() => {
    if (id) { // Ensure id is not undefined
    console.log(`House ID: ${id}`);
        axios.get(`http://localhost:3001/api/v1/house/${id}`)
            .then(response => {
                setHouse(response.data);
            })
            .catch(error => {
                console.error('Error fetching house details:', error);
            });
    }
}, [id]);
    
    if (!house) {
        return <div>Loading details...</div>;
    }

const amenitiesValues = house.selectedAmenities ? Object.entries(house.selectedAmenities).filter(([key, value]) => value === true).map(([key]) => key) : [];


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
          <h1 id="detail-headers">{house.title}</h1>
          <span id="note">{house.location}</span>
          <hr></hr>

          <div>
            <h4>
              <span>{house.propertyType}</span>{""}
              <span>{house.roomType}</span>
            </h4>
            <span>{house.bedrooms} bedroom(s)</span>
            <span> {house.bathrooms} bath(s)</span>
            <h4>Available from {house.moveInDate} to {house.moveOutDate}</h4>
          </div>
          <hr></hr>
          <h2 id="detail-headers">
            Description
          </h2>
          <p>
            {house.description}
          </p>
          <hr></hr>

          <h2 id="detail-headers">
            Area
          </h2>
          <p>
            {house.area} sqft
          </p>

          <hr></hr>
          <h2 id="detail-headers">What this place offers</h2>
          <div>
             {amenitiesValues.map((key, index) => (
  <div key={index} className="amenities-each">{key}</div>
))}
          </div>

          <hr></hr>
          <h2 id="detail-headers">Roommate(s)</h2>
          <h3>Still living</h3>
          <div>There will be {house.roommates} roomate(s) still living in the place </div>
          <h3>Brife Description</h3>
          <p>{house.roommateDescription}</p>

          <hr></hr>
          {/* New section T/F */}
          <h2 id="detail-headers">Others</h2>
          <h3>Furnished Situation</h3>
          <p>{house.furnished ? "Yes" : "No"}</p>
          <h3>Pet Allowed</h3>
          <p>{house.petPolicy ? "Yes" : "No"}</p>
          <h3>Deposit Required</h3>
          <p>{house.deposit ? "Yes" : "No"}</p>
          <hr></hr>
        </div>

        {/* sidebox */}
        <div className="sidebox-container">
          <div class="booking-widget">
            <div class="price">${house.price} / Month</div>
            <div class="date-selection">
              <div class="check-in">
                <label id="checkin">Check-in</label>
                <input type="date" id="checkin" name="check-in"></input>
              </div>

              <div class="check-out">
                <label id="checkout">Check-out</label>
                <input type="date" id="checkout" name="check-out"></input>
              </div>
            </div>
            <div class="guests">
              <label id="guests">Guests</label>
              <input id="guests" name="guests" placeholder="number"></input>
            </div>

            <button type="button" class="contact-host" onClick={() => setButtonPopup(true)}>Contact Host</button>

            <div class="charge-info">You won't be charged yet</div>
            <hr></hr>
            {/* <img src={pentagram} id="pentagram" alt="pentagram analysis images" /> */}
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
