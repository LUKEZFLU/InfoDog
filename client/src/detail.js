import {useParams } from "react-router-dom";
import { React, useState, useEffect, useRef } from 'react';
import "./detail.css";
import bath from "./pic/UPlace_bath.jpg";
import kitchen from "./pic/UPlace_kitchen.jpg";
import living from "./pic/UPlace_living.jpg";
import balcony from "./pic/UPlace_balcony.jpg";
import mainImg from "./pic/UPlace_main.jpg";
import Popup from './components/popup';
import axios from 'axios';

function Detail() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [house, setHouse] = useState(null);
  const { id } = useParams();

  const checkinRef = useRef(null);
  const checkoutRef = useRef(null);
  const guestsRef = useRef(null);

  useEffect(() => {
    if (id) { // Ensure id is not undefined
      axios.get(`http://localhost:3001/api/v1/house/${id}`)
        .then(response => {
          setHouse(response.data);
          localStorage.setItem('currentHouseId', id);
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


  const handleContactHost = async () => {
    const checkin = checkinRef.current.value;
    const checkout = checkoutRef.current.value;
    const guests = guestsRef.current.value;
  
  
    if (!checkin || !checkout || !guests) {
      alert('Please fill out all fields.');
    } else {
      const userId = localStorage.getItem('userId');
      const houseId = localStorage.getItem('currentHouseId'); // 从localStorage获取houseId
  
      if (userId) {
        try {
          const response = await fetch('http://localhost:3001/api/v1/message/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: userId,
              houseId: houseId,
              checkin: checkin,
              checkout: checkout,
              guest: guests
            }),
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            setButtonPopup(true);
          } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert(errorData.message || 'Failed to contact the host. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
      } else {
        alert('Please log in to contact the host.');
      }
    }
  };
  
  

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
            <img src={bath} alt="bath images" />
          </div>
          <div className="box-container">
            <img src={kitchen} alt="kitchen images" />
          </div>
          <div className="box-container">
            <img src={living} alt="living room images" />
          </div>
          <div className="box-container">
            <img src={balcony} alt="balcony images" />
          </div>
        </div>
      </div>

      <div className="room-layout-container">
        {/* text */}
        <div className="text">
          <h1 id="detail-headers">{house.title}</h1>
          <span id="note">{house.location}</span>
          <hr />

          <div>
            <h4>
              <span>{house.propertyType}</span>{""}
              <span>{house.roomType}</span>
            </h4>
            <span>{house.bedrooms} bedroom(s)</span>
            <span> {house.bathrooms} bath(s)</span>
            <h4>Available from {house.moveInDate} to {house.moveOutDate}</h4>
          </div>
          <hr />
          <h2 id="detail-headers">Description</h2>
          <p>{house.description}</p>
          <hr />

          <h2 id="detail-headers">Area</h2>
          <p>{house.area} sqft</p>
          <hr />

          <h2 id="detail-headers">What this place offers</h2>
          <div>
            {amenitiesValues.map((key, index) => (
              <div key={index} className="amenities-each">{key}</div>
            ))}
          </div>
          <hr />

          <h2 id="detail-headers">Roommate(s)</h2>
          <h3>Still living</h3>
          <div>There will be {house.roommates} roommate(s) still living in the place</div>
          <h3>Brief Description</h3>
          <p>{house.roommateDescription}</p>
          <hr />

          {/* New section T/F */}
          <h2 id="detail-headers">Others</h2>
          <h3>Furnished Situation</h3>
          <p>{house.furnished ? "Yes" : "No"}</p>
          <h3>Pet Allowed</h3>
          <p>{house.petPolicy ? "Yes" : "No"}</p>
          <h3>Deposit Required</h3>
          <p>{house.deposit ? "Yes" : "No"}</p>
          <hr />
        </div>

        {/* sidebox */}
        <div className="sidebox-container">
          <div className="booking-widget">
            <div className="price">${house.price} / Month</div>
            <div className="date-selection">
              <div className="check-in">
                <label id="checkin">Check-in</label>
                <input type="date" id="checkin" name="check-in" ref={checkinRef} />
              </div>

              <div className="check-out">
                <label id="checkout">Check-out</label>
                <input type="date" id="checkout" name="check-out" ref={checkoutRef} />
              </div>
            </div>
            <div className="guests">
              <label id="guests">Guests</label>
              <input id="guests" name="guests" placeholder="number" ref={guestsRef} />
            </div>

            <button type="button" className="contact-host" onClick={handleContactHost}>Contact Host</button>

            <div className="charge-info">You won't be charged yet</div>
            <hr />
            {/* <img src={pentagram} id="pentagram" alt="pentagram analysis images" /> */}
          </div>
        </div>
      </div>
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>System Information</h3>
        <p>The request has been sent to the host</p>
      </Popup>
    </div>
  );
}

export default Detail;
