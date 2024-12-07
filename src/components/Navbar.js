import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/Navbar.css";

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Monitor auth state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user); // Set to true if user exists, otherwise false
        });

        return () => unsubscribe(); // Cleanup on component unmount
    }, []);

    return (
        <div className="navbar">
            <div className="left"></div>
            <div className="nav-items">
                <Link to="/about" className="nav-item">About</Link>
                <hr className="vertical-line" />
                <Link to="/create" className="nav-item">Create an Account</Link>
                <hr className="vertical-line" />
                {/* Show Login button only if user is not authenticated */}
                {!isAuthenticated && (
                    <>
                        <Link to="/login" className="nav-item">Login</Link>
                        <hr className="vertical-line" />
                    </>
                )}
                <Link to="/apply" className="nav-item">Apply to be a Hustler!</Link>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Navbar;