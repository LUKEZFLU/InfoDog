import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listplace.css";
import testImage from "./pic/102373.jpg";

function ListPlace() {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <div className="content-container">
        <h2>We are here to help you sublease</h2>
        <p>
          This form will take only 5 minutes to get information about your
          house. Please be patience about the form so that we can do our best to
          help you find the perfect subtenant.{" "}
        </p>
      </div>

      <div className="image-container">
        <img src={testImage} alt="amenities images" />
      </div>

      <button id="start-listing-button">Start listing</button>

      <div className="steps-container">
        <div className="step">
          <h3>Step 1.</h3>
          <p>Fill out the form and publish your leasing.</p>
        </div>
        <div className="step">
          <h3>Step 2.</h3>
          <p>
            You'll wait for booking requests and can chat on iLease to
            negotiate.
          </p>
        </div>
        <div className="step">
          <h3>Step 3.</h3>
          <p>Get a deal outside the platform and move in.</p>
        </div>
      </div>
    </div>
  );
}

export default ListPlace;
