import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/signup.css"

function Signup(){
  let navigate = useNavigate();
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
          <div className="text">{""}</div>
          <div className="emai-section-instance">
            <div className="input-container">
            <div>First Name</div>
            <input type="text" id="locationInput" />
            <div>Last Name</div>
            <input type="text" id="locationInput" /> 
            <div>UW Email Address</div>
            <input type="text" id="locationInput" />
            <div>Password</div>
            <input type="text" id="locationInput" />
            </div>
          </div>
          <div className="text-wrapper-13">
          <button onClick={() => navigate("/ ")}>Sign-Up</button>
          </div>
          <p className="text-wrapper-16">
            By clicking Sign Up, I state that I have read and understood the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
