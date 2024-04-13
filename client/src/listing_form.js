import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import map from "./pic/map.png";
import "./listplace.css";

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
    { name: "accessibility", label: "Accessibility" },
  ];

  return (
    <div>
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
          <div className="step-1">
            {currentStep === 1 && (
              <>
                <h1>1. What are you subleasing?</h1>
                <p>
                  List your entire place or even just a room. Add it's location,
                  and share some other basic info about your property.
                </p>
                {/* Single Choice */}
                {/* property types*/}
                <p>What type of property are you listing?</p>
                <label>
                  <input
                    type="radio"
                    name="propertyType"
                    value="apartment"
                    required
                  />{" "}
                  Apartment
                </label>
                <label>
                  <input
                    type="radio"
                    name="propertyType"
                    value="house"
                    required
                  />{" "}
                  House
                </label>
                <br />
                <p>Are you offering an entire home or just a room??</p>
                <label>
                  <input
                    type="radio"
                    name="propertyType"
                    value="apartment"
                    required
                  />{" "}
                  Entire Home
                </label>
                <label>
                  <input
                    type="radio"
                    name="propertyType"
                    value="house"
                    required
                  />{" "}
                  Private Room(s)
                </label>
                <label>
                  <input
                    type="radio"
                    name="propertyType"
                    value="house"
                    required
                  />{" "}
                  Shared Room(s)
                </label>
                <br />
                {/* Text Entry */}
                {/* location */}
                <label htmlFor="location">Where's your place located?</label>
                <br />
                <input type="text" id="location" name="location" required />
                <br />
                <img src={map} alt="mapping" width="500" height="auto" />
                <br />
                {/* drop down option */}
                {/* rooms selections */}
                <label htmlFor="bedrooms">
                  How many bedrooms and bathrooms are there?
                </label>
                <br />
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
                Bedrooms
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
                Bathrooms
                <br />
                {/* Date of movein/moveout */}
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
                <label htmlFor="move-out-date">
                  When is the latest move-out?
                </label>
                <br />
                <input
                  type="date"
                  id="move-out-date"
                  name="moveOutDate"
                  value={moveOutDate}
                  onChange={(e) => setMoveOutDate(e.target.value)}
                />
                {/* short term subleasing */}
                <p>Do you accept short-term sublease?</p>
                <label>
                  <input type="radio" name="accept" value="yes" required /> Yes
                </label>
                <label>
                  <input type="radio" name="reject" value="no" required /> No
                </label>
              </>
            )}
          </div>

          {/* // Step 2 */}
          <div className="step-2">
            {currentStep === 2 && (
              <>
                <h1>2. Add details</h1>
                <p>
                  Add some more color to your place, including photos of rooms
                  and common areas, and introduce any roommates you have.
                </p>
                {/* text entry for listing title */}
                <label htmlFor="title">Create a title for your apartment</label>
                <br />
                <input type="text" id="title" name="title" required />
                <br />
                {/* text entry for listing description */}
                <label htmlFor="description">
                  Create a description for your apartment
                </label>
                <br />
                <input
                  type="text"
                  id="description"
                  name="description"
                  required
                />
                <br />
                {/* files uploads section */}
                <label htmlFor="image-upload">
                  Add some photos of your place:
                </label>
                <br />
                <input
                  type="file"
                  id="image-upload"
                  name="image-upload"
                  accept="image/png, image/jpeg"
                  onChange={handleFileUpload}
                  multiple
                />
                {/* selection of furnishing */}
                <p> Select applicable furnishings for this room</p>
                {furnishingOptions.map((furnishing) => (
                  <label key={furnishing.name}>
                    <input
                      type="checkbox"
                      name={furnishing.name}
                      checked={selectedFurnishings[furnishing.name]}
                      onChange={handleFurnishingChange}
                    />
                    {furnishing.label}
                  </label>
                ))}
                <br />
                <label htmlFor="roommates">
                  What will be the roommates still living in the place?
                </label>
                <br />
                <input
                  type="number"
                  id="roommatess"
                  name="roommatess"
                  min="0"
                  max="10"
                  onChange={(e) => setRoommates(e.target.value)}
                  placeholder="0"
                />
                Roommates
                <br />
                <input type="text" id="roommates" name="roommates" required />
                {/* selection of amenities */}
                <p> What amenities does your apartment offer?</p>
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
                <br />
                <p>Are Pets Allowed?</p>
                <label>
                  <input type="radio" name="accept" value="yes" required /> Yes
                </label>
                <label>
                  <input type="radio" name="reject" value="no" required /> No
                </label>
                <br />
                <input type="text" id="pets" name="pets" />
              </>
            )}
          </div>

          {/* steps 3 */}
          <div className="step-3">
            {currentStep === 3 && (
              <>
                <h1> 3. Verification</h1>
                <p>
                  Help your future subtenant get to know you, and verify your
                  identity to make your listing stand out with a "Verified"
                  badge
                </p>
                <label htmlFor="email">Enter Your UW Email</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Insitutional Email ONLY No @gmail/@Outlook etc. "
                  required
                />
              </>
            )}
          </div>

          {/* steps 4 */}
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
