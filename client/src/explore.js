import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./explore.css";
import Housing_2 from "./pic/Housing_2.jpg";
import filter_icon from "./pic/filter_icon.jpg";
import Map from './components/map.js';

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('./pic/explore-img', false, /\.(png|jpe?g|svg)$/));

function Explore() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [housingData, setHousingData] = useState([]);
  const [filteredHousingData, setFilteredHousingData] = useState([]);

  const initialFilters = {
    location: '',
    propertyType: 'any',
    roomType: 'any',
    furnished: 'any',
    petFriendly: 'any',
    deposit: 'any',
    bedrooms: '',
    bathrooms: '',
    roommates: '',
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
    moveInDate: '',
    moveOutDate: ''
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [id]: value }));
  };

  const fetchAllHouses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/house');
      const housesWithImages = response.data.map(house => ({
        ...house,
        imageSrc: getRandomImage()  
      }));
      setHousingData(housesWithImages);
      setFilteredHousingData(housesWithImages); 
    } catch (error) {
      console.error('Error fetching all houses:', error);
    }
  };

  const applyFilters = () => {
    let filteredData = housingData;
    const {
      location,
      propertyType,
      roomType,
      furnished,
      petFriendly,
      deposit,
      bedrooms,
      bathrooms,
      roommates,
      priceMin,
      priceMax,
      areaMin,
      areaMax,
      moveInDate,
      moveOutDate
    } = filters;

    if (location) {
      filteredData = filteredData.filter((house) => house.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (propertyType !== 'any') {
      filteredData = filteredData.filter((house) => house.propertyType === propertyType);
    }
    if (roomType !== 'any') {
      filteredData = filteredData.filter((house) => house.roomType === roomType);
    }
    if (furnished !== 'any') {
      filteredData = filteredData.filter((house) => house.furnitureIncluded === (furnished === 'furnished' ? 'Yes' : 'No'));
    }
    if (petFriendly !== 'any') {
      filteredData = filteredData.filter((house) => house.petsAllowed === (petFriendly === 'yes' ? 'Yes' : 'No'));
    }
    if (deposit !== 'any') {
      filteredData = filteredData.filter((house) => house.depositRequired === (deposit === 'yes' ? 'Yes' : 'No'));
    }
    if (!isNaN(parseInt(bedrooms))) {
      filteredData = filteredData.filter((house) => house.bedrooms === parseInt(bedrooms));
    }
    if (!isNaN(parseInt(bathrooms))) {
      filteredData = filteredData.filter((house) => house.bathrooms === parseInt(bathrooms));
    }
    if (!isNaN(parseInt(roommates))) {
      filteredData = filteredData.filter((house) => house.roommatesCount === parseInt(roommates));
    }
    if (priceMin || priceMax) {
      filteredData = filteredData.filter((house) => {
        const price = parseInt(house.price);
        const min = parseInt(priceMin || 0);
        const max = parseInt(priceMax || Number.MAX_SAFE_INTEGER);
        return price >= min && price <= max;
      });
    }
    if (areaMin || areaMax) {
      filteredData = filteredData.filter((house) => {
        const area = parseInt(house.area);
        const min = parseInt(areaMin || 0);
        const max = parseInt(areaMax || Number.MAX_SAFE_INTEGER);
        return area >= min && area <= max;
      });
    }
    if (moveInDate) {
      filteredData = filteredData.filter((house) => new Date(house.moveInDate) <= new Date(moveInDate));
    }
    if (moveOutDate) {
      filteredData = filteredData.filter((house) => new Date(house.moveOutDate) >= new Date(moveOutDate));
    }

    setFilteredHousingData(filteredData);
  };

  useEffect(() => {
    fetchAllHouses();
  }, []);

  const toggleFilters = () => setShowFilters(!showFilters);

  const clearFilters = () => {
    setFilters(initialFilters);
    setFilteredHousingData(housingData);
  };

  const HouseCard = ({ imageSrc, altText, navigate, title, caption }) => (
    <div className="house-container" onClick={() => navigate()}>
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{caption}</p>
    </div>
  );

  return (
    <div>
      <div className="search-container">
        <div className="input-container">
          <div className="check-in">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="U District"
            />
          </div>
        </div>
        <div className="input-container">
          <div className="check-in">
            <label htmlFor="moveInDate">Move-in</label>
            <input type="date" id="moveInDate" value={filters.moveInDate} onChange={handleInputChange} />
          </div>
        </div>
        <div className="input-container">
          <div className="check-out">
            <label htmlFor="moveOutDate">Move-out</label>
            <input type="date" id="moveOutDate" value={filters.moveOutDate} onChange={handleInputChange} />
          </div>
        </div>
        <div className="input-container">
          <br></br>
          <button id="search-button" className='button-style' onClick={applyFilters}>Search</button>
        </div>
        <img
          src={filter_icon}
          alt="Filter icon"
          onClick={toggleFilters}
          id="filter-toggle"
          className="filter-icon"
          />
      </div>

      {showFilters && (
        <div>
          <div className="filter-container">
            <div className="filter-option">
              <label htmlFor="propertyType">Property Type</label>
              <select id="propertyType" value={filters.propertyType} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="roomType">Room Type</label>
              <select id="roomType" value={filters.roomType} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="Entire Home">Entire Home</option>
                <option value="Private Room(s)">Private Room(s)</option>
                <option value="Shared Room(s)">Shared Room(s)</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="furnished">Furnished</label>
              <select id="furnished" value={filters.furnished} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="furnished">Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="petFriendly">Pet Friendly</label>
              <select id="petFriendly" value={filters.petFriendly} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="deposit">Deposit</label>
              <select id="deposit" value={filters.deposit} onChange={handleInputChange}>
                <option value="any">Any</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="bedrooms">Bedroom</label>
              <input type="text" id="bedrooms" value={filters.bedrooms} onChange={handleInputChange} placeholder="number" />
            </div>
            <div className="filter-option">
              <label htmlFor="bathrooms">Bathroom</label>
              <input type="text" id="bathrooms" value={filters.bathrooms} onChange={handleInputChange} placeholder="number" />
            </div>
            <div className="filter-option">
              <label htmlFor="roommates">Roommate Number</label>
              <input type="text" id="roommates" value={filters.roommates} onChange={handleInputChange} placeholder="number" />
            </div>
            <div className="filter-option">
              <label htmlFor="priceMin">Price</label>
              <input type="text" id="priceMin" value={filters.priceMin} onChange={handleInputChange} placeholder="1200" />
              <span id="char_space">---</span>
              <input type="text" id="priceMax" value={filters.priceMax} onChange={handleInputChange} placeholder="2000" />
            </div>
            <div className="filter-option">
              <label htmlFor="areaMin">Area Range (sqft)</label>
              <input type="text" id="areaMin" value={filters.areaMin} onChange={handleInputChange} placeholder="400" />
              <span id="char_space">---</span>
              <input type="text" id="areaMax" value={filters.areaMax} onChange={handleInputChange} placeholder="800" />
            </div>
          </div>
          {/* clear button */}
          <div className="clear-button-container">
            <button id="clear-button" className='button-style clear-button' onClick={clearFilters}>Clear</button>
          </div>
        </div>
      )}

      <div className="layout-container-bottom">
        <div className="grid-container-bottom">
          {filteredHousingData.map((house, index) => (
            <HouseCard
              key={index}
              imageSrc={house.imageSrc}
              altText={house.title} 
              navigate={() => navigate(`/details/${house._id}`)} 
              title={house.title}
              caption={house.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
