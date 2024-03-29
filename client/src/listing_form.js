import React, { useState } from "react";
import map from "./pic/map.png";

function ListingForm() {
  const [moveInDate, setMoveInDate] = useState("");
  const [moveOutDate, setMoveOutDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>1. What are you subleasing?</h1>
      <p>
        List your entire place or even just a room. Add it's location, and share
        some other basic info about your property.
      </p>

      {/* Single Choice */}
      <p>What type of property are you listing?</p>
      <label>
        <input type="radio" name="propertyType" value="apartment" required />{" "}
        Apartment
      </label>
      <label>
        <input type="radio" name="propertyType" value="house" required /> House
      </label>

      <br />
      <p>Are you offering an entire home or just a room??</p>
      <label>
        <input type="radio" name="propertyType" value="apartment" required />{" "}
        Entire Home
      </label>
      <label>
        <input type="radio" name="propertyType" value="house" required />{" "}
        Private Room(s)
      </label>
      <label>
        <input type="radio" name="propertyType" value="house" required /> Shared
        Room(s)
      </label>

      <br />
      {/* Text Entry */}
      <label htmlFor="location">Where's your place located?</label>
      <br />
      <input type="text" id="location" name="location" required />
      <br />
      <img src={map} alt="mapping" width="500" height="auto" />

      <br />
      {/* drop down option */}
      <label htmlFor="rating">How many bedrooms and bathrooms are there?</label>
      <br />
      <select id="rating" name="rating" required>
        <option value=""># of bedrooms</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <select id="rating" name="rating" required>
        <option value=""># of bathrooms</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <br />

      <label htmlFor="move-in-date">
        When is your place first available for move-in?
      </label>
      <br />
      <input
        type="date"
        id="move-in-date"
        name="moveInDate"
        value={moveInDate}
        onChange={(e) => setMoveInDate(e.target.value)}
      />
      <br />
      <label htmlFor="move-out-date">When is the latest move-out?</label>
      <br />
      <input
        type="date"
        id="move-out-date"
        name="moveOutDate"
        value={moveOutDate}
        onChange={(e) => setMoveOutDate(e.target.value)}
      />

      <br />

      {/* Submit Button */}
      <br />
      <input type="submit" value="Submit Listing" />
    </form>
  );
}

export default ListingForm;
