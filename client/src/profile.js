import React from "react";
import testImage from "./pic/Housing_1.jpg";
import "./profiles.css"
import { useState, useEffect } from "react";

function Profile() {
  // State variables to store user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nfirstName, nsetFirstName] = useState("");
  const [nlastName, nsetLastName] = useState("");
  const [nemail, nsetEmail] = useState("");
  const [npassword, nsetPassword] = useState("");
  const [hasHouseId, setHasHouseId] = useState(false); // State for checking house ID presence



  // Fetch user data from the server
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      const houseId = localStorage.getItem('houseId'); // Check for house ID in localStorage
      setHasHouseId(!!houseId);
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
          setEmail(userData.email);
        } else {
          throw new Error(userData.error || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle form submission to update user data
  const handleUpdate = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!nfirstName || !nlastName || !nemail || !npassword) {
      alert("All fields are required.");
      return; // 如果任一字段为空，则不提交数据，并提示用户
    }
    try {
      const response = await fetch(`http://localhost:3001/api/v1/users/update`, {
        method: 'PUT', // 确定使用 PUT 方法更新数据
        headers: {
          'Content-Type': 'application/json' // 设置内容类型为 JSON
        },
        body: JSON.stringify({
          userId,
          firstName: nfirstName,
          lastName: nlastName,
          email: nemail,
          password: npassword
        })
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to update user data");
      }
      alert("Information updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };



  return (
    <div className="personal-info-back">
      <div className="profile-container">
        <h1>Personal Infomation: {`${firstName}  ${lastName} (${email})`}</h1>
        <form className="formm" onSubmit={handleUpdate}>
          {/* Legal Name with First and Last Name in the same line */}
          <div className="forms-row">
            <label htmlFor="Fname">Legal Name:</label>
            <input type="text" id="Fname" name="Fname" placeholder="First Name" value={nfirstName} onChange={(e) => nsetFirstName(e.target.value)} required />
            <input type="text" id="Lname" name="Lname" placeholder="Last Name" value={nlastName} onChange={(e) => nsetLastName(e.target.value)} required />
          </div>

          {/* Password in a row */}
          <div className="forms-row">
            <label >Password:</label>
            <input type="text" name="password" placeholder="New password" value={npassword} onChange={(e) => nsetPassword(e.target.value)} required />
          </div>

          {/* Email in a row */}
          <div className="forms-row">
            <label htmlFor="email">Institutional Email:</label>
            <input type="text" id="email" name="email" placeholder="New email" value={nemail} onChange={(e) => nsetEmail(e.target.value)} required />
          </div>
          <button className="forms-save-button">Update</button>

        </form>


        {hasHouseId && (
          <div className="your-place-container">
            <h2>Your Place</h2>
            <img src={testImage} alt="amenities images" width="100" height="auto" />
            <button className="personal-info-button">Delete</button>
          </div>
        )}


        <h2>Contact Request</h2>
        {hasHouseId && (
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
        )}
      </div>
    </div>

  );
}

export default Profile;