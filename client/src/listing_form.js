import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listing_form.css";

function ListingForm() {
  //Steps indicator
  const [currentStep, setCurrentStep] = useState(1);
  const goNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const goPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // step 1
  const [propertyType, setPropertyType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [moveOutDate, setMoveOutDate] = useState('');
  const [depositRequired, setDepositRequired] = useState('');
  const [furnitureIncluded, setFurnitureIncluded] = useState('');

  // step 2
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [roommatesCount, setRoommatesCount] = useState(0);
  const [roommatesReason, setRoommatesReason] = useState('');
  const [petsAllowed, setPetsAllowed] = useState('');

  // Function to handle all text input changes generically
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'roommatess':
        setRoommatesCount(value);
        break;
      case 'roommates':
        setRoommatesReason(value);
        break;
      default:
        break;
    }
  };

  // Function to handle the radio buttons for pets allowed
  const handlePetsAllowedChange = (event) => {
    setPetsAllowed(event.target.value);
  };



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


  // step 3 and user ID
  const [uwemail, setUwemail] = useState('');

  const handleEmailChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'email':
        setUwemail(value);
        break;
      default:
        break;
    }
  };
  const userId = localStorage.getItem('userId');

  // Form submission
const navigate = useNavigate();
const handleSubmit = async (event) => {
  event.preventDefault();
  // Check for empty fields
  const fields = [propertyType, roomType, location, bedrooms, bathrooms, price, area, moveInDate, moveOutDate, depositRequired, furnitureIncluded, title, description, roommatesCount, roommatesReason, petsAllowed, selectedAmenities, uwemail];
  if (fields.some(field => field === null || field === undefined || field === '')) {
    alert('Please fill in all the fields.');
    return; // Exit the function to prevent form submission
  }
  if (!uwemail.endsWith('@uw.edu') && !uwemail.endsWith('@washington.edu')) {
    alert('Please enter a valid UW email address that ends with @uw.edu or @washington.edu.');
    return; // Exit the function to prevent form submission
  }
  const formData = {
    propertyType,
    roomType,
    location,
    bedrooms: Number(bedrooms),
    bathrooms: Number(bathrooms),
    price: Number(price),
    area: Number(area),
    moveInDate,
    moveOutDate,
    depositRequired,
    furnitureIncluded,
    title,
    description,
    roommatesCount: Number(roommatesCount),
    roommatesReason,
    petsAllowed,
    selectedAmenities,
    uwemail,
    userId
  };
  console.log('Submitting form data:', formData);
  // Make an HTTP POST request to the server
  try {
    const response = await fetch(`http://localhost:3001/api/v1/house/`, {
      method: 'POST', // Use POST method to submit new house data
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Failed to add new house");
    }
    // Update localStorage with the new houseId
    localStorage.setItem('houseId', result.houseId);
    alert("House added successfully!");
    navigate("/profile");
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};


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
          <div className="step-container">
            {currentStep === 1 && (
              <>

                <h1>1. What are you subleasing?</h1>
                <p>
                  List your entire place or even just a room. Add it's location,
                  and share some other basic info about your property.
                </p>
                {/* Single Choice for property types */}
                <div className="question_sec">
                  <p>What type of property are you listing?</p>
                  <div>
                    <label>
                      <input type="radio" name="propertyType" value="apartment" required onChange={(e) => setPropertyType(e.target.value)} checked={propertyType === 'apartment'} /> Apartment
                    </label>
                    <label>
                      <input type="radio" name="propertyType" value="house" required onChange={(e) => setPropertyType(e.target.value)} checked={propertyType === 'house'} /> House
                    </label>
                  </div>
                </div>

                {/* More choices */}
                <div className="question_sec">
                  <p>Are you offering an entire home or just a room?</p>
                  <div>
                    <label>
                      <input type="radio" name="propertyType2" value="Entire Home" required onChange={(e) => setRoomType(e.target.value)} checked={roomType === 'Entire Home'} /> Entire Home
                    </label>
                    <label>
                      <input type="radio" name="propertyType2" value="Private Room(s)" required onChange={(e) => setRoomType(e.target.value)} checked={roomType === 'Private Room(s)'} /> Private Room(s)
                    </label>
                    <label>
                      <input type="radio" name="propertyType2" value="Shared Room(s)" required onChange={(e) => setRoomType(e.target.value)} checked={roomType === 'Shared Room(s)'} /> Shared Room(s)
                    </label>
                  </div>
                </div>
                {/* Text Entry for location */}
                <div className="question_sec">
                  <p>Where's your place located?</p>
                  <input type="text" id="location" name="location" required onChange={(e) => setLocation(e.target.value)} value={location} />
                </div>

                {/* Bedrooms and bathrooms */}
                <div className="question_sec">
                  <p>How many bedrooms and bathrooms are there?</p>
                  <input type="number" id="bedrooms" name="bedrooms" min="0" max="10" onChange={(e) => setBedrooms(e.target.value)} value={bedrooms} placeholder="0" /> Bedrooms
                  <input type="number" id="bathrooms" name="bathrooms" min="0" max="10" onChange={(e) => setBathrooms(e.target.value)} value={bathrooms} placeholder="0" /> Bathrooms
                </div>

                {/* Price and area input */}
                <div className="question_sec">
                  <p>How much money does your house plan to be sublet for?</p>
                  <input type="number" id="price" placeholder="Input the money" required onChange={(e) => setPrice(e.target.value)} value={price} />
                  <p>What is the approximate area of your house (sqft)?</p>
                  <input type="number" placeholder="Your home area" required onChange={(e) => setArea(e.target.value)} value={area} />
                </div>

                {/* Dates */}
                <div className="question_sec">
                  <p>When is your place first available for move-in?</p>
                  <input type="date" id="move-in-date" name="moveInDate" onChange={(e) => setMoveInDate(e.target.value)} value={moveInDate} />
                  <p>When is the latest move-out?</p>
                  <input type="date" id="move-out-date" name="moveOutDate" onChange={(e) => setMoveOutDate(e.target.value)} value={moveOutDate} />
                </div>

                {/* Deposit required */}
                <div className="question_sec">
                  <p>Do you need your tenant to pay the deposit before?</p>
                  <label>
                    <input type="radio" name="option" value="yes" required onChange={(e) => setDepositRequired(e.target.value)} checked={depositRequired === 'yes'} /> Yes
                  </label>
                  <label>
                    <input type="radio" name="option" value="no" required onChange={(e) => setDepositRequired(e.target.value)} checked={depositRequired === 'no'} /> No
                  </label>
                </div>

                {/* Furniture included */}
                <div className="question_sec">
                  <p>Does the room being rented include furniture?</p>
                  <label>
                    <input type="radio" name="option_funiture" value="yes" required onChange={(e) => setFurnitureIncluded(e.target.value)} checked={furnitureIncluded === 'yes'} /> Yes
                  </label>
                  <label>
                    <input type="radio" name="option_funiture" value="no" required onChange={(e) => setFurnitureIncluded(e.target.value)} checked={furnitureIncluded === 'no'} /> No
                  </label>
                </div>
                <br></br>
              </>
            )}

            {/* // Step 2 */}
            {currentStep === 2 && (
              <>
                <h1>2. Add details</h1>
                <p>Add some more color to your place, including photos of rooms and common areas, and introduce any roommates you have.</p>
                <div className="question_sec">
                  <p>Create a title for your apartment</p>
                  <input type="text" id="title" name="title" required onChange={handleInputChange} value={title} />
                </div>
                <div className="question_sec">
                  <p>Create a description for your apartment</p>
                  <input type="text" id="description" name="description" required onChange={handleInputChange} value={description} />
                </div>
                <div className="question_sec">
                  <p>How many roommates will still be living in the place?</p>
                  <input type="number" id="roommatess" name="roommatess" min="0" max="10" placeholder="0" onChange={handleInputChange} value={roommatesCount} /> Roommates
                  <br />
                  <input type="text" id="roommates" name="roommates" placeholder="Enter 'NA' if no roommates" required onChange={handleInputChange} value={roommatesReason} />
                </div>
                <div className="question_sec">
                  <p>What amenities does your apartment offer?</p>
                  <div>
                    {amenitiesOptions.map((amenities) => (
                      <label key={amenities.name}>
                        <input type="checkbox" name={amenities.name} checked={selectedAmenities[amenities.name]} onChange={handleAmenitiesChange} />
                        {amenities.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="question_sec">
                  <p>Are Pets Allowed?</p>
                  <label>
                    <input type="radio" name="option_pet" value="yes" required onChange={handlePetsAllowedChange} checked={petsAllowed === 'yes'} /> Yes
                  </label>
                  <label>
                    <input type="radio" name="option_pet" value="no" required onChange={handlePetsAllowedChange} checked={petsAllowed === 'no'} /> No
                  </label>
                </div>
                <br></br>
              </>
            )}

            {/* steps 3 */}
            {/* Step 3 */}
            {currentStep === 3 && (
              <>
                <h1>3. Verification</h1>
                <p>Help your future subtenant get to know you, and verify your identity to make your listing stand out with a "Verified" badge.</p>
                <div className="question_sec">
                  <p>Enter Your UW Email</p>
                  <input type="text" id="email" name="email" placeholder="i.e. xxx@uw.edu" required onChange={handleEmailChange} value={uwemail} />
                </div>
                <br></br>
              </>
            )}

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
                <br />
                <p>You may need to logout and login again to see your account update</p>
                <br></br>
              </>
            )}

            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="button-style" onClick={goPreviousStep}>
                  Previous Step
                </button>
              )}
              {currentStep < 4 && (
                <button type="button" className="button-style" onClick={goNextStep}>
                  Next Step
                </button>
              )}
              {currentStep === 4 && (
                <input type="submit" value="Submit Listing" className="button-style" />
              )}
            </div>

          </div>
          {/* Navigation buttons go here */}

        </form>
      </div>
    </div>
  );
}

export default ListingForm;