import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/Login.css"

function Login(){
  let navigate = useNavigate();
  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <img className="amen" alt="Amen" src="/pic/amen-5-1.png" />
          <div className="background-shape"></div>
          <img className="fill-the-information" alt="Fill the information" src="/pic/fill-the-information-below.png" />
          <img className="already-have-an" alt="Already have an" src="/pic/already-have-an-account.png" />
          <div className="text">{""}</div>
          <div className="text-wrapper-12">
            <div className="input-container">
            <div>Password</div>
            <input type="text" id="locationInput" />
            </div>
          </div>
          <div className="emai-section-instance">
            <div className="input-container">
            <div>Email Address</div>
            <input type="text" id="locationInput" />
            </div>
          </div>
          <div className="text-wrapper-13">
          <button onClick={() => navigate("/ ")}>Log-in</button>
          </div>
          <Link to="/on-boarding-page-u9989">
            <p className="ready-to-be-a-user">
              <span className="text-wrapper-14">Ready to be a user? </span>
              <span className="text-wrapper-15">Sign-Up</span>
            </p>
          </Link>
          <p className="text-wrapper-16">
            By clicking Sign Up, I state that I have read and understood the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
