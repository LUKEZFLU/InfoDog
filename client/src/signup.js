import React from "react";
import "../src/signup.css"
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './components/popup';
import nonInsitutionalEmails from './data/domains.json';

function Signup() {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) => {
    // Prevent the default form submission
    e.preventDefault();
    if (!first_name || !last_name || !email || !password) {
      setMessage("All fields must be filled out.");
      setButtonPopup(true);
      return;
    }


    // Check if the email is from a non-institutional domain
    const emailDomain = email.substring(email.lastIndexOf('@') + 1);
  
    if (nonInsitutionalEmails.includes(emailDomain)) {
      setMessage("Please Sign Up With Your Inisitutional Email Address.");
      setButtonPopup(true);
      return;
    }

    const createdAt = new Date().toISOString();


    axios.post('http://localhost:3001/api/v1/users', { first_name, last_name, email, password, createdAt })
      .then(result => {
        console.log('Registration successful:', result);
        setMessage("Registration successful! You will be directed to the login page after 3 seconds");
        setButtonPopup(true);
        setTimeout(() => {
          navigate('/Login');
        }, 3000); // 3000ms
      })
      .catch(err => {
        console.error('Registration failed:', err);
        setMessage('User Already Exists, Please Go to Login Page.');
        setButtonPopup(true);
      });
  };

  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <img className="amen" alt="Amen" src="/pic/amen-5-1.png" />
          <div className="background-shape"></div>
          <div className="already-have-an" alt="Already have an" >
            <h1>Create Account</h1>
          </div>
          <div className="fill-the-information" alt="Fill the information" >
            Fill the Information Below
          </div>
          <div className="text"></div>
          <form onSubmit={handleSubmit}>
            <div className="emai-section-instance">
              <div className="input-container">
                {/* id="locationInput"  has been removed due to rule violation*/}
                <div>First Name</div>
                <input type="text" id="first_name_input" onChange={(e) => setFirstName(e.target.value)} />
                <div>Last Name</div>
                <input type="text" id="last_name_input" onChange={(e) => setLastName(e.target.value)} />
                <div>Inisitutional Email</div>
                <input type="email" id="email_input" onChange={(e) => setEmail(e.target.value)} />
                <div>Password</div>
                <input type="text" id="password_input" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="text-wrapper-13">
              <button type="submit">Sign-Up</button>
            </div>
          </form>
          <p className="text-wrapper-16">
            By clicking Sign Up, I state that I have read and understood the terms and conditions.
          </p>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>System Information</h3>
        <p>{message} </p>
      </Popup>
    </div>
  );
};

export default Signup;

