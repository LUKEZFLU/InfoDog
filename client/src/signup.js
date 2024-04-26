import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from './components/popup';
import nonInstitutionalEmails from './data/domains.json';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(""); // 新添加的状态
  const [birthday, setBirthday] = useState(""); // 新添加的状态
  const [message, setMessage] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !gender || !birthday) {
      setMessage("All fields must be filled out.");
      setButtonPopup(true);
      return;
    }

    const emailDomain = email.substring(email.lastIndexOf('@') + 1);
  
    if (nonInstitutionalEmails.includes(emailDomain)) {
      setMessage("Please Sign Up With Your Institutional Email Address.");
      setButtonPopup(true);
      return;
    }

    const createdAt = new Date().toISOString();

    axios.post('http://localhost:3001/api/v1/users', { firstName, lastName, email, password, gender, birthday, createdAt })
      .then(result => {
        console.log('Registration successful:', result);
        setMessage("Registration successful! You will be directed to the login page after 3 seconds");
        setButtonPopup(true);
        setTimeout(() => {
          navigate('/Login');
        }, 3000); // 3000ms
      })
      .catch(err => {
        console.error('Registration failed:', err);
        setMessage('User Already Exists, Please Go to Login Page.');
        setButtonPopup(true);
      });
  };

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
          <div className="text"></div>
          <form onSubmit={handleSubmit}>
            <div className="emai-section-instance">
              <div className="input-container">
                <div>First Name</div>
                <input type="text" id="first_name_input" onChange={(e) => setFirstName(e.target.value)} />
                <div>Last Name</div>
                <input type="text" id="last_name_input" onChange={(e) => setLastName(e.target.value)} />
                <div>Institutional Email</div>
                <input type="email" id="email_input" onChange={(e) => setEmail(e.target.value)} />
                <div>Password</div>
                <input type="password" id="password_input" onChange={(e) => setPassword(e.target.value)} />
                <div>Gender</div>
                <select onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div>Birthday</div>
                <input type="date" onChange={(e) => setBirthday(e.target.value)} />
              </div>
            </div>
            <div className="text-wrapper-13">
              <button type="submit">Sign-Up</button>
              <button onClick={() => navigate("/login")}>I have an account</button>
            </div>
          </form>
          <p className="text-wrapper-16">
            By clicking Sign Up, I state that I have read and understood the terms and conditions.
          </p>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>System Information</h3>
        <p>{message} </p>
      </Popup>
    </div>
  );
};

export default Signup;
