import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/signup.css"

async function createUser(){
  // get data from the html
  let first_name = document.getElementById("first_name_input").value
  let last_name = document.getElementById("last_name_input").value
  let email = document.getElementById("email_input").value
  let password = document.getElementById("password_input").value

  let myData = {
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "password": password
  }

  console.log(myData)

  // send post request to server
  let response = await fetch("api/v1/users", {
      method: "POST",
      body: JSON.stringify(myData),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  if (response.ok) {
      console.log("User created successfully");
      // Optionally navigate to another page or show success message
  } else {
      console.error("Failed to create user");
      // Optionally show error message
  }
}


function Signup() {
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
            {/* id="locationInput"  has been removed due to rule violation*/}
              <div>First Name</div>
              <input type="text" id="first_name_input"/>
              <div>Last Name</div>
              <input type="text" id="last_name_input"/>
              <div>UW Email Address</div>
              <input type="email" id="email_input"/>
              <div>Password</div>
              <input type="text" id="password_input"/> 
            </div>
          </div>
          <div className="text-wrapper-13">
          <button onClick={createUser}>Sign-Up</button>
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
