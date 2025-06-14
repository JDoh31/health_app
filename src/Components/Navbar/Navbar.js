import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './Pictures/doctor-5180142_1280.png';
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileForm from "../ProfileForm/ProfileForm";

import "./Navbar.css";



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => setClick(!click);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };
    
    const toggleForm = () => {
        setShowProfile(!showProfile);
        setShowForm(!showForm);
    };
    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");
      const storedname = sessionStorage.getItem("name");

      if (storedemail) {
            setIsLoggedIn(true);
            setEmail(storedemail);
            setUsername(storedname);
            if (!storedname) {
                setUsername(storedemail);
            }
          }
        }, []);
  return (
    <nav>
      <div className="nav_logo">
        <Link to="/">
        StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
        <img src={logo} alt="" height="26" width="52" viewBox="0 0 1000 1000"/>
            <title>Bunch of Doctors png icon</title>
        <span>.</span>
      </div>
      <div className="nav_icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav_links active' : 'nav_links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/ReviewForm">Reviews</Link>
        </li>
        <li className="link">
          <Link to="/instant-consultation">Appointments</Link>
        </li>
        {isLoggedIn?(
          <>
            <div className="dropdown-menu"></div>
            <li className="welcome-user">
                <Link to="/">Welcome, {username.split('@')[0]}</Link>
                <div className="dropdown-menu">
                    <li onClick={toggleProfile}>Your Profile</li>
                    {showProfile && (
                        <div onClick={toggleForm}>
                            <ProfileCard user={{ avatar: 'avatar_url', name: username, email: email }} />
                        </div>
                    )}
                    {showForm && (
                        <div>
                            <ProfileForm/>
                        </div>
                    )}
                    <li><a href="/Reports">Your Report</a></li>
                </div>
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_up">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/Login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

