import React from "react";
import testImage from "./pic/Housing_1.jpg";
import "./profiles.css"

function Profile() {
  return (
    <div className="personal-info-back">
      <div className="profile-container">
        <h1>Personal Infomation</h1>
        <form className="formm">
          {/* Legal Name with First and Last Name in the same line */}
          <div className="forms-row">
            <label htmlFor="Fname">Legal Name:</label>
            <input type="text" id="Fname" name="Fname" placeholder="First Name" required />
            <input type="text" id="Lname" name="Lname" placeholder="Last Name" required />
          </div>

          {/* Date of Birth in a row */}
          <div className="forms-row">
            <label htmlFor="DOB">Date of Birth:</label>
            <input type="date" id="DOB" name="DOB" required />
          </div>

          {/* Gender Selection in a row */}
          <div className="forms-row">
            <label>Gender:</label>
            <div>
                <input type="radio" name="genderType" value="male" id="male" required />
                <label htmlFor="male">Male</label>
                <input type="radio" name="genderType" value="female" id="female" required />
                <label htmlFor="female">Female</label>
                <input type="radio" name="genderType" value="nonbinary" id="nonbinary" required />
                <label htmlFor="nonbinary">Non Binary</label>
            </div>
          </div>

          {/* Email in a row */}
          <div className="forms-row">
            <label htmlFor="email">Primary Contact Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter Your Email" required />
          </div>
          <button className="forms-save-button">Save</button>

        </form>


        <div className="your-place-container">
          <h2>Your Place</h2>
          <img src={testImage} alt="amenities images" width="100" height="auto" />
          <button className="personal-info-button">Edit</button>
        </div>

        <h2>Contact Requst</h2>
        <div className="your-favorite-container">
          <img src={testImage} alt="amenities images" width="100" height="auto" />
          <div className="contact-request-time-info">
            <p >Alice Hu: Female | Verified Amazon Employee</p>
            <p>Checkin: 5/1/2024</p>
            <p>Checkout: 5/6/2024</p>
          </div>
          <button className="contact-requst-button-1">Accept</button>
          <button className="contact-requst-button-2">Refuse</button>
        </div>
      </div>
    </div>

  );
}

export default Profile;