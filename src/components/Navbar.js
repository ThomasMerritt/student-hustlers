import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../styles/Navbar.css";

function Navbar() {
   

    return (
        <div className="navbar">
            <div className="left"></div>
            <div className="nav-items">
                <Link to="/about" className="nav-item">About</Link>
                <hr className="vertical-line" />
                <Link to="/create" className="nav-item">Create an Account</Link>
                <hr className="vertical-line" />                
                <Link to="/login" className="nav-item">Login</Link>
                <hr className="vertical-line" />
                <Link to="/apply" className="nav-item">Apply to be a Hustler!</Link>  
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Navbar;