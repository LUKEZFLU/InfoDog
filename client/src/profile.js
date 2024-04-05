import React from "react";
import testImage from "./pic/Housing_1.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <h1>Personal Info</h1>

      <form>
        {/* First and Last Name */}
        <label htmlFor="Fname">Legal Name</label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="Lname"
          name="Lname"
          placeholder="Last Name"
          required
        />
        <br />
        {/* DOB */}
        <label htmlFor="DOB">Date of Birth</label>
        <input type="date" id="DOB" name="DOB" required />

        {/* <p>Gender</p> */}
        <br />
        <label>
          Gender
          <input type="radio" name="genderType" value="male" required />
          Male
        </label>
        <label>
          <input type="radio" name="genderType" value="female" required />
          Female
        </label>
        <label>
          <input type="radio" name="genderType" value="nonbinary" required />{" "}
          Non Binary
        </label>

        <br />
        <label htmlFor="email">Primary Contact Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
      </form>

      <div className="your-place-container">
        <h2>Your Place</h2>
        <img src={testImage} alt="amenities images" width="100" height="auto" />
      </div>

      <div className="your-favorite-container">
        <h2>Your Favorite</h2>
        <img src={testImage} alt="amenities images" width="100" height="auto" />
      </div>
    </div>
  );
}

export default Profile;
