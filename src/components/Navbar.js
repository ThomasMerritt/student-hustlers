import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { auth } from "../firebase-config"; // Import Firebase auth
import "../styles/Navbar.css";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Monitor authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user); // Set true if user is logged in
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = "/";
            console.log("User logged out");
        } catch (error) {
            console.error("Error during logout:", error.message);
        }
    };

    return (
        <div className="navbar">
            <div className="left"></div>
            <div className="nav-items">
                <Link to="/about" className="nav-item">About</Link>
                <hr className="vertical-line" />
                {!isLoggedIn && (
                    <>
                        <Link to="/create" className="nav-item">Create an Account</Link>
                        <hr className="vertical-line" />
                        <Link to="/login" className="nav-item">Login</Link>
                        <hr className="vertical-line" />
                        <Link to="/apply" className="nav-item">Apply to be a Hustler!</Link>
                        
                    </>
                )}
                {isLoggedIn && (
                    <button onClick={handleLogout} className="nav-item logout-button">
                        Logout
                    </button>
                )}
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Navbar;