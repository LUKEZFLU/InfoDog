import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
  
    <div className="container">
      <header className="hero">
        <div className="hero-content">
          <h1 className="title">The Easy Way To Find</h1>
          <p className="tagline">
            iLease brings you closer to your dream residences and the house
            you've always wanted to live in
          </p>
          <div className="hero-buttons">
            <button className="btn find" onClick={() => navigate("/explore")}>
              Find a Place
            </button>
            <button className="btn list" onClick={() => navigate("/list-your-place")}>
              List your Place
            </button>
          </div>
        </div>
      </header>

      <section className="feature-section">
      <div className="container">
        <div className="feature-row">
          <div className="feature-col image-col">
            <img src="../pic/yuppies-work-station.png" alt="Descriptive Alt Text" />
          </div>
          <div className="feature-col text-col">
            <h2>Find houses and apartments according to your needs</h2>
            <h2>List your houses and apartments for people who needs</h2>
          </div>
        </div>
      </div>
      </section>

      <section className="how-it-works">
        <div className="section-header">
          <span className="line"></span>
          <h2>HOW IT WORKS?</h2>
          <span className="line"></span>
            <div className="divider"></div>
        </div>
        <div class="bottom-container">
          <div className="bottomimage">
              <img src="../pic/multipicture.jpg" alt="Descriptive Alt Text" />
          </div>
          <div className="homepage-steps-container">
            <div className="homepage-step">
              <h3>1. Search For The Perfect Home</h3>
              <p>
                For those looking, please explore listings filtered by your
                selection.
              </p>
              <p>
                For those listing, please list the information of your house in
                details
              </p>
            </div>
            <div className="homepage-step">
              <h3>2. Express Interest</h3>
              <p>
                For those looking, please express interest and introduce yourself to the leaseholders.
              </p>
              <p>
                For those listing, please wait patiently for booking request and get know about each other.
              </p>
            </div>
            <div className="homepage-step">
              <h3>3. Negotiate With Leaseholders</h3>
              <p>
                For both, please discuss logistics friendly such as rent and move-in/move-out dates. When you're ready, send an official offer to the lister.
              </p>
            </div>
          </div>
        </div>
        
    </section>

  
    </div>
  );
}

export default Home;
