import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <nav>
          <div id="logo">iLease</div>
          <button className="login-button">Login</button>
          <Link to="/about-us"><button id="about-us-button">About us</button></Link>
        </nav>
        <div className="hero">
        <h1>The Easy Way To Find</h1>
            <p>iLease brings you closer to your dream residences and the house you've always wanted to live in</p>
            <div className="hero-buttons">
              <button>Find a Place</button>
              <button>List your Place</button>
            </div>
        </div>
      </header>

      <section className="how-it-works">
      <h2>HOW IT WORKS?</h2>
          <ol>
            <li>
              <h3>Search For The Perfect Home</h3>
              <p>For those looking, please explore listings filtered by your selection.</p>
              <p>For those listing, please list the information of your house in details</p>
            </li>
            <li>
              <h3>Express Interest</h3>
              <p>For those looking, please express interest and introduce yourself to the leaseholders.</p>
              <p>For those listing, please wait patiently for booking request and get know about each other.</p>
            </li>
            <li>
              <h3>Negotiate With Leaseholders</h3>
              <p>For both, please discuss logistics friendly such as rent and move-in/move-out dates. When you're ready, send an official offer to the lister.</p>
            </li>
          </ol>
      </section>
    </div>
  );
}

export default Home;

