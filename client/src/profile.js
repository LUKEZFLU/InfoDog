import React from "react";

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
      </form>
    </div>
  );
}

export default Profile;
