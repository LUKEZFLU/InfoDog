import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/login.css";
import axios from 'axios';
import Popup from './components/popup';
import { useState } from 'react';


function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("All fields must be filled out.");
      setButtonPopup(true);
      return;
    }

    axios.post('http://localhost:3001/api/v1/login', { email, password }) // check login info with backend
      .then(result => {
        console.log('Login successful:', result);
        localStorage.setItem('userId', result.data.userId); 
        localStorage.setItem('houseId', result.data.houseId); 
        console.log("set");
        setMessage("Login successful! You will be directed to the home page");
        setButtonPopup(true);
        setTimeout(() => {
          navigate('/home');
          window.location.reload();
        }, 500); // 500ms
      })
      .catch(err => {
        // console.error('Login failed:', err);
        setMessage('The email or password you entered is incorrect. Please try again.');
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
            <h1>Already have account?</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="emai-section-instance">
              <div className="input-container">
                <div>Email Address</div>
                <input type="email" id="locationInput" onChange={(e) => setEmail(e.target.value)} />
                <div>Password</div>
                <input type="text" id="locationInput" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="text-wrapper-13">
              <button className="button-style">Log-in</button>
            </div>
          </form>
          <p className="ready-to-be-a-user">
            <span className="text-wrapper-14">Ready to be a user? </span>
            <span className="text-wrapper-15">
              <button className="button-style" onClick={() => navigate("/signup")}>Sign-Up</button>
            </span>
          </p>
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

export default Login;
