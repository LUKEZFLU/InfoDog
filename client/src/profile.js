import React from "react";
import testImage from "./pic/Housing_1.jpg";
import "./profiles.css"
import { useState, useEffect } from "react";

function Profile() {
  // State variables to store user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Fetch user data from the server
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // 获取存储在localStorage中的UserId
      if (!userId) {
        console.error("No UserId found in localStorage");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/api/v1/users/userInfo?UserId=${userId}`);
        const userData = await response.json();
        if (response.ok) {
          setFirstName(userData.firstName); // Set first name from response
          setLastName(userData.lastName); // Set last name from response
        } else {
          throw new Error(userData.error || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="personal-info-back">
      <div className="profile-container">
        <h1>Personal Infomation: {`${firstName}  ${lastName}`}</h1>
        <form className="formm">
          {/* Legal Name with First and Last Name in the same line */}
          <div className="forms-row">
            <label htmlFor="Fname">Legal Name:</label>
            <input type="text" id="Fname" name="Fname" placeholder="First Name" required />
            <input type="text" id="Lname" name="Lname" placeholder="Last Name" required />
          </div>

          {/* Password in a row */}
          <div className="forms-row">
            <label >Password:</label>
            <input type="text"  name="password" placeholder="New password" required />
          </div>

          {/* Email in a row */}
          <div className="forms-row">
            <label htmlFor="email">Institutional Email:</label>
            <input type="text" id="email" name="email" placeholder="New email" required />
          </div>
          <button className="forms-save-button">Update</button>

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