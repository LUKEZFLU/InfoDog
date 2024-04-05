import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/login.css"


function Login(){
  let navigate = useNavigate();
  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <img className="amen" alt="Amen" src="/pic/amen-5-1.png" />
          <div className="background-shape"></div>
          
          <div className="already-have-an" alt="Already have an" >
          <h1>Already have account?</h1>
          </div>
          <div className="fill-the-information" alt="Fill the information" >
            Fill the Information Below
          </div>
          <div className="text">{""}</div>
          <div className="emai-section-instance">
            <div className="input-container">
            <div>Email Address</div>
            <input type="text" id="locationInput" />
            <div>Password</div>
            <input type="text" id="locationInput" />
            </div>
          </div>
          <div className="text-wrapper-13">
          <button onClick={() => navigate("/ ")}>Log-in</button>
          </div>
            <p className="ready-to-be-a-user">
              <span className="text-wrapper-14">Ready to be a user? </span>
              <span className="text-wrapper-15">
              <button onClick={() => navigate("/signup")}>Sign-Up</button>
              </span>
            </p>
          <p className="text-wrapper-16">
            By clicking Sign Up, I state that I have read and understood the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
