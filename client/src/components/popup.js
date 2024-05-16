import React from 'react'
import './popup.css'
import closeImg from '../pic/Close.png'; 


function Popup(props) {
    return (props.trigger) ? ( // show the following if the trigger is true
        <div className="popup">
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}><img src={closeImg} alt="Close"/></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup



// Below is a example of using this component
// import Popup from './components/popup';    // import this component
// import {useState} from 'react';    // must import use state


// function App() {
//   const [buttonPopup, setButtonPopup] = useState(false);   //setting
//   return (
//     <div className="App">
//       <main>
//         <h1>React App!</h1>
//         <br></br>
//         <button onClick={() => setButtonPopup(true)}>Open Popup</button>   // add setButtonPopup(true) to give a chance to open

//       </main>

//       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>     // implement this popup
//         <h3>Well done!</h3> // Title
//         <p>Stay Patient for people to send your contact requests. </p> // Message
//       </Popup>

//     </div>
//   );
// }

// export default App;