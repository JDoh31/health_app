import './Navbar.css';
import logo from './Pictures/doctor-5180142_1280.png';

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                {/* Navigation Logo Section */}
                <div className="nav_logo">
                    <a href="/">
                        StayHealthy Inc
                        <img src={logo} alt="" height="26" width="52" viewBox="0 0 1000 1000"/>
                            <title>Bunch of Doctors png icon</title>
                    </a>
                    <span>.</span>
                </div>
                <div className="nav_icon" onClick="{handleClick}">
                    <i className="fa fa-times fa fa-bars"></i>
                </div>

                {/* Navigation Section */}
                <ul className="nav_links active">
                    <li className="link">
                        <a href="/">Home</a>
                    </li>
                    <li className="link">
                        <a href="#">Appointments</a>
                    </li>
                    <li className="link">
                        <a href="/Sign_Up">
                            <button className="btn1">Sign Up</button>
                        </a>
                    </li>
                    <li className="link">
                        <a href="/Login">
                            <button className="btn1">Login</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;