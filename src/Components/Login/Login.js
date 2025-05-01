// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {

    // JSX to render the Sign Up form
    return (
        <div className="Login">
            <div className="container">
            <div className="login-grid">
                <div className="login-text">
                <h2>Login</h2>
                </div>
                <div className="login-text">
                Are you a new member?{" "}
                <span>
                    <a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}>
                    {" "}
                    Sign Up Here
                    </a>
                </span>
                </div>
                <br />
                <div className="login-form">
                <form>
                    {/*Email field*/}
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
                    {/*Password field*/}
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
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
                    {/*Submit and Reset Buttons*/}
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
                    <div className="login-text">Forgot Password?</div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login; // Export the Sign_Up component for use in other components