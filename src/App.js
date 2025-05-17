import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';  
// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          <Notification>
            {/* Set up the Routes for different pages */}
            <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                {/* Define individual Route components for different pages */}
                <Route path="/Sign_Up" element={<Sign_Up/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<BookingConsultation/>}/>
            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;
