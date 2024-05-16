import React from "react";
import testImage from "./pic/Housing_1.jpg";
import "./profiles.css"
import { useState, useEffect } from "react";
import Popup from './components/popup';


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
  const [messages, setMessages] = useState([]);



  // 在 useEffect 中添加 fetchMessages 函数
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      const houseId = localStorage.getItem('houseId'); // Check for house ID in localStorage
      setHasHouseId(houseId && houseId !== 'no');
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

    const fetchMessages = async () => {
      const houseId = localStorage.getItem('houseId');
      if (!houseId) {
        console.error("No houseId found in localStorage");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/api/v1/message/messages?houseId=${houseId}`);
        const messagesData = await response.json();
        if (response.ok) {
          setMessages(messagesData);
        } else {
          throw new Error(messagesData.error || "Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchUserData();
    fetchMessages();
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

  // delete the house
  const handleDelete = async () => {
    const houseId = localStorage.getItem('houseId');
    if (!houseId) {
      alert("No house ID found to delete.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/v1/house/deletehouse?houseId=${houseId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Failed to delete house!");
      }
      localStorage.setItem('houseId', 'no');
      setHasHouseId(false);
      alert("House deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting house:", error);
      alert(error.message);
    }
  };

  // handle refuse message
  const handleRefuse = async (messageId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/message/refuse?messageId=${messageId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error("Failed to delete message");
      }
      alert("Message refused successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error refusing message:", error);
      alert(error.message);
    }
  };

  // handle accept message
  const handleAccept = async (userEmail) => {
    const houseId = localStorage.getItem('houseId');
    try {
      // Delete the house
      const deleteHouseResponse = await fetch(`http://localhost:3001/api/v1/house/deletehouse?houseId=${houseId}`, {
        method: 'DELETE'
      });
      if (!deleteHouseResponse.ok) {
        throw new Error("Failed to delete house");
      }

      // Update localStorage and state
      localStorage.setItem('houseId', 'no');
      setHasHouseId(false);

      // Show email alert
      alert(`Tenant's email: ${userEmail}, this message is shown only once.`);

      // Refresh page
      window.location.reload();
    } catch (error) {
      console.error("Error accepting message:", error);
      alert(error.message);
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
            <button className="personal-info-button" onClick={handleDelete}>Delete</button>
          </div>
        )}


        <h2>Message Center</h2>

        {messages.length > 0 ? (
          messages.map((message) => (
            <div className="your-favorite-container">
              <img src={testImage} alt="amenities images" width="100" height="auto" />
              <div className="contact-request-time-info">
                <p >{message.user.firstName} {message.user.lastName} | {message.user.gender} | Guest: {message.guest}</p>
                <p>Checkin: {new Date(message.checkin).toLocaleDateString()}</p>
                <p>Checkout: {new Date(message.checkout).toLocaleDateString()}</p>
              </div>
              <button className="contact-requst-button-1"onClick={() => handleAccept(message.user.email)}>Accept</button>
              <button className="contact-requst-button-2" onClick={() => handleRefuse(message._id)}>Refuse</button>
            </div>
          ))
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>

  );
}

export default Profile;