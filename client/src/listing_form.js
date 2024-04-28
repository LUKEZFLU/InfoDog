import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listing_form.css";
import axios from 'axios';
import { isNumber } from "lodash";

function ListingForm() {
  //Movein / out
  const [moveInDate, setMoveInDate] = useState("");
  const [moveOutDate, setMoveOutDate] = useState("");

  //# of bedroom/bathroom
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  //Steps indicator
  const [currentStep, setCurrentStep] = useState(1);

  const goNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  //Form submission

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep === 4) {
      console.log("Form submitted");
      navigate("/profile");
    }
  };

  //Images upload
  const [images, setImages] = useState([]);

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newImages = selectedFiles.filter((file) =>
      file.type.includes("image/")
    );

    if (images.length + newImages.length < 5) {
      alert("You must upload at least 5 images.");
    }
  };

  //Furnishings Selection
  const [selectedFurnishings, setSelectedFurnishings] = useState({
    kingBed: false,
    queenBed: false,
    fullBed: false,
    twinBed: false,
    desk: false,
    naturalLight: false,
    closet: false,
    privateBathroom: false,
    sharedBathroom: false,
  });

  // Handle change when any checkbox is toggled
  const handleFurnishingChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFurnishings((prevFurnishings) => ({
      ...prevFurnishings,
      [name]: checked,
    }));
  };

  // Render checkboxes for furnishings
  const furnishingOptions = [
    { name: "kingBed", label: "King bed" },
    { name: "queenBed", label: "Queen bed" },
    { name: "fullBed", label: "Full bed" },
    { name: "twinBed", label: "Twin bed" },
    { name: "Desk", label: "Desk" },
    { name: "naturalLight", label: "Natural Light" },
    { name: "closet", label: "Closet" },
    { name: "privateBathroom", label: "Private Bathroom" },
    { name: "sharedBathroom", label: "Share Bathroom" },
  ];

  const [roommates, setRoommates] = useState(0);

  //Amenities Selection
  const [selectedAmenities, setSelectedAmenities] = useState({
    stove: false,
    refrigerator: false,
    oven: false,
    dishwasher: false,
    microwave: false,
    tv: false,
    couch: false,
    heating: false,
    airConditioner: false,
    washer: false,
    dryer: false,
    wifi: false,
    parking: false,
    security: false,
    swimmingPool: false,
    gym: false,
    elevator: false,
    accessibility: false,
  });

  // Handle change when any checkbox is toggled
  const handleAmenitiesChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAmenities((prevAmenities) => ({
      ...prevAmenities,
      [name]: checked,
    }));
  };

  // Render checkboxes for Amenities
  const amenitiesOptions = [
    { name: "stove", label: "Stove" },
    { name: "refrigerator", label: "Refrigerator" },
    { name: "oven", label: "Oven" },
    { name: "dishwasher", label: "Dish Washer" },
    { name: "microwave", label: "Microwave" },
    { name: "tv", label: "TV" },
    { name: "couch", label: "Couch" },
    { name: "heating", label: "Heating" },
    { name: "airConditioner", label: "Air Conditioner" },
    { name: "washer", label: "Washer" },
    { name: "dryer", label: "Dryer" },
    { name: "wifi", label: "Wi-Fi" },
    { name: "parking", label: "Parking" },
    { name: "security", label: "Security" },
    { name: "swimmingPool", label: "Swimming Pool" },
    { name: "gym", label: "Gym" },
    { name: "accessibility", label: "Accessibility" }
  ];

  return (
    <div>
      <div class="circle top-right"></div>
      <div class="circle bottom-left"></div>
      <div className="steps-indicator">
        <div className={currentStep >= 1 ? "step active-step" : "step"}>
          Step 1: Intro your place
        </div>
        <div className={currentStep >= 2 ? "step active-step" : "step"}>
          Step 2: Add more details
        </div>
        <div className={currentStep >= 3 ? "step active-step" : "step"}>
          Step 3: Verification
        </div>
        <div className={currentStep >= 4 ? "step active-step" : "step"}>
          Step 4: Confirmation
        </div>
      </div>

      <div className="listing-form-container">
        <form onSubmit={handleSubmit}>
          {/* step 1  */}
          <div className="step-container">
            {currentStep === 1 && (
              <>

                <h1>1. What are you subleasing?</h1>
                <p>
                  List your entire place or even just a room. Add it's location,
                  and share some other basic info about your property.
                </p>
                {/* Single Choice */}
                {/* property types*/}
                <div className="question_sec">
                  <p>What type of property are you listing?</p>
                  <div>
                    <label>
                      <input type="radio" name="propertyType" value="apartment" required /> Apartment
                    </label>
                    <label> 
                      <input type="radio" name="propertyType" value="house" required /> House
                    </label>
                  </div>
                </div>
                <div className="question_sec">
                  <p>Are you offering an entire home or just a room?</p>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="propertyType2"
                        value="apartment"
                        required
                      />{" "}
                      Entire Home
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="propertyType2"
                        value="house"
                        required
                      />{" "}
                      Private Room(s)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="propertyType2"
                        value="house"
                        required
                      />{" "}
                      Shared Room(s)
                    </label>
                  </div>
                </div>
                {/* Text Entry */}
                {/* location */}
                <div className="question_sec">
                  <p>Where's your place located?</p>
                  <div>
                  <input type="text" id="location" name="location" required />
                  <br />
                  </div>
                </div>
                {/* drop down option */}
                {/* rooms selections */}
                <div className="question_sec">
                  <p>
                    How many bedrooms and bathrooms are there?
                  </p>
                  <div>
                    <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    min="0"
                    max="10"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    placeholder="0"
                  />
                  &nbsp;Bedrooms&nbsp;&nbsp;
                  <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    min="0"
                    max="10"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    placeholder="0"
                  />
                  &nbsp;Bathrooms&nbsp;&nbsp;
                  <br />
                  </div>
                </div>

                <div className="question_sec">
                  <p>
                    How much money does your house plan to be sublet for?
                  </p>
                  <div>
                    <input
                        type="number"
                        id="price"
                        placeholder="Input the money"
                        required
                      />
                  </div>
                </div>
                <div className="question_sec">
                  <p>
                    What is the approximate area of your house(sqft)?
                  </p>
                  <div>
                    <input
                        type="number"
                        placeholder="your home area"
                        required
                      />
                  </div>
                </div>
                {/* Date of movein/moveout */}
                <div className="question_sec">
                  <p>
                    When is your place first available for move-in?
                  </p>
                  <div>
                    <input
                      type="date"
                      id="move-in-date"
                      name="moveInDate"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="question_sec">
                  <p>
                    When is the latest move-out?
                  </p>
                  <div>
                    <input
                    type="date"
                    id="move-out-date"
                    name="moveOutDate"
                    value={moveOutDate}
                    onChange={(e) => setMoveOutDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="question_sec">
                  <p>Do you need your tenant to pay the deposit before?</p>
                  <div>
                  <label>
                    <input type="radio" name="option" value="yes" required /> Yes
                  </label>
                  <label>
                    <input type="radio" name="option" value="no" required /> No
                  </label>
                  </div>
                </div>
                <div className="question_sec">
                  <p>Does the room being rented include furniture?</p>
                  <div>
                  <label>
                    <input type="radio" name="option_funiture" value="yes" required /> Yes
                  </label>
                  <label>
                    <input type="radio" name="option_funiture" value="no" required /> No
                  </label>
                  </div>
                </div>
                
              </>
            )}
          </div>

          {/* // Step 2 */}
          <div className="step-container">
            {currentStep === 2 && (
              <>
                <h1>2. Add details</h1>
                <p>
                  Add some more color to your place, including photos of rooms
                  and common areas, and introduce any roommates you have.
                </p>
                <div className="question_sec">
                <p>Create a title for your apartment</p>
                  <div>
                  <input type="text" id="title" name="title" required />
                  </div>
                </div>
                <div className="question_sec">
                  <p>
                  Create a description for your apartment
                  </p>
                  <div>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      required
                    />
                  </div>
                </div>
                <div className="question_sec">
                  <p>
                  Add some photos of your place:
                  </p>
                  <div>
                    <input
                      type="file"
                      id="image-upload"
                      name="image-upload"
                      accept="image/png, image/jpeg"
                      onChange={handleFileUpload}
                      multiple
                    />
                  </div>
                </div>
                <div className="question_sec">
                  <p> What will be the roommates still living in the place?</p>
                  <div>
                    <input
                      type="number"
                      id="roommatess"
                      name="roommatess"
                      min="0"
                      max="10"
                      onChange={(e) => setRoommates(e.target.value)}
                      placeholder="0"
                    />
                    &nbsp;Roommates&nbsp;&nbsp;
                    <br />
                    <input type="text" id="roommates" name="roommates" placeholder="Give the reason why he/she is still here" required />
                  </div>
                </div>
                <div className="question_sec">
                  <p> What amenities does your apartment offer?</p>
                  <div>
                  {amenitiesOptions.map((amenities) => (
                  <label key={amenities.name}>
                    <input
                      type="checkbox"
                      name={amenities.name}
                      checked={selectedAmenities[amenities.name]}
                      onChange={handleAmenitiesChange}
                      required
                    />
                    {amenities.label}
                  </label>
                ))}
                  </div>
                </div>
                <div className="question_sec">
                  <p>Are Pets Allowed?</p>
                  <div>
                <label>
                  <input type="radio" name="option_pet" value="yes" required /> Yes
                </label>
                <label>
                  <input type="radio" name="option_pet" value="no" required /> No
                </label>
                </div>
                </div>
              </>
            )}
          </div>

          {/* steps 3 */}
          <div className="step-container">
            {currentStep === 3 && (
              <>
                <h1> 3. Verification</h1>
                <p>
                  Help your future subtenant get to know you, and verify your
                  identity to make your listing stand out with a "Verified"
                  badge
                </p>
                <div className="question_sec">
                  <p>
                  Enter Your UW Email
                  </p>
                  <div>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Insitutional Email ONLY No @gmail/@Outlook etc. "
                    required
                  />
                  </div>
                </div>
                
              </>
            )}
          </div>

          {/* steps 4 */}
          <div className="step-container">

          {currentStep === 4 && (
            <>
              <h1>4. Confirmation</h1>
              <p>
                <strong>Terms of Service</strong>
              </p>
              <label htmlFor="term">
                <input
                  type="checkbox"
                  id="term"
                  name="term"
                  value="agree"
                  required
                />{" "}
                By checking this box, you confirm that you have read,
                understand, and agree to iLease's <u>Terms of Service.</u>
              </label>
            </>
          )}
                      
           </div>
          {/* Navigation buttons go here */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" onClick={goPreviousStep}>
                Previous Step
              </button>
            )}
            {currentStep < 4 && (
              <button type="button" onClick={goNextStep}>
                Next Step
              </button>
            )}
            {currentStep === 4 && (
              <input type="submit" value="Submit Listing" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ListingForm;