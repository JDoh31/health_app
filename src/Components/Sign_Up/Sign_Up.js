// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {

    // JSX to render the Sign Up form
    return (
        <div className="Sign_Up">
            <div className="container" style={{ marginTop: "5%" }}>
            <div className="signup-grid">
                <div className="signup-text">
                <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: "left" }}>
                Already a member?{" "}
                <span>
                    <a href="../Login/Login.html" style={{ color: "#2190ff" }}>
                    {" "}
                    Login
                    </a>
                </span>
                </div>
                <div className="signup-form">
                <form>
                    <div className="form-group">
                    <label htmlFor="role">Role (Ex: Doctor or Patient):</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        required=""
                        className="form-control"
                        placeholder="Enter your role"
                        aria-describedby="helpId"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required=""
                        className="form-control"
                        placeholder="Enter your name"
                        aria-describedby="helpId"
                    />
                    <br />
                    <br />
                    </div>
                    <div className="form-group">
                    <label htmlFor="pnum">Phone Number:</label>
                    <input
                        type="text"
                        id="pnum"
                        name="pnum"
                        required=""
                        className="form-control"
                        placeholder="Enter your phone number"
                        aria-describedby="helpId"
                    />
                    <br />
                    <br />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required=""
                        className="form-control"
                        placeholder="Enter your email"
                        aria-describedby="helpId"
                    />
                    <br />
                    <br />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        required=""
                        className="form-control"
                        placeholder="Enter your password"
                        aria-describedby="helpId"
                    />
                    <br />
                    <br />
                    </div>
                    <div className="btn-group">
                    <button
                        type="submit"
                        className="btn btn-primary mb-s mr-1 waves-effect waves-light"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="btn btn-danger mb-2 waves-effect waves-light"
                    >
                        Reset
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Sign_Up; // Export the Sign_Up component for use in other components