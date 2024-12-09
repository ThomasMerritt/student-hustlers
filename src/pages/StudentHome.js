import React from "react";
import "../styles/StudentHome.css";
import Vendors from "../components/Vendors";
import suhaniShellImage from '../assets/suhani-shell.png';
import { useNavigate } from "react-router-dom";

function StudentHome() {
    const navigate = useNavigate();

    const handleViewProfile = (vendorName) => {
        navigate(`/${vendorName}`); // Navigate to vendor-specific page
    };

    const handleBookNow = (vendorName) => {
        navigate(`/book-vendor/${vendorName}`); // Navigate to booking page
    };

    return (
        <div className="student-home">
            <div className="search-profile-container">
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="profile-container">
                    <div className="profile">
                        <h2>Profile</h2>
                    </div>
                    <div className="profile-picture">
                        <p>Image</p>
                    </div>
                </div>
            </div>

            <div className="filter-utility-container">
                <div className="filter-container">
                    <button className="filter-button">Filter</button>
                    <button className="filter-button">Sort By</button>
                </div>
                <div className="utility-container">
                    <button className="utility-button">Settings</button>
                    <button className="utility-button">Change Password</button>
                    <button className="utility-button">Appointments</button>
                </div>
            </div>

            <div className="student-home-body">
                <div className="appointments-favorites-container">
                    <div className="upcoming-appointments">
                        <div className="upcoming-appointments-title">
                            <p>Upcoming Appointments</p>
                        </div>
                        <div className="upcoming-appointments-list">
                            <div className="appointment-item">
                                <label>
                                    <strong>Who:</strong>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="appointment-input"
                                    />
                                </label>
                                <label>
                                    <strong>Where:</strong>
                                    <input
                                        type="text"
                                        placeholder="Enter location"
                                        className="appointment-input"
                                    />
                                </label>
                                <label>
                                    <strong>Time:</strong>
                                    <input
                                        type="time"
                                        className="appointment-input"
                                    />
                                </label>
                                <button className="reschedule-button">Reschedule?</button>
                            </div>
                        </div>
                        <div className="more-container">
                            <button className="more-button">More</button>
                        </div>
                    </div>
                    <div className="favorite-vendors">
                        <div className="favorite-vendors-title">
                            <p>Favorite Vendors</p>
                        </div>
                        <div className="favorite-vendors-list">
                            <p>You don't have any favorite vendors yet</p>
                            <p>Book one to add here</p>
                        </div>
                    </div>
                </div>
                <div className="service-vendors-container">
                    <div className="top-vendors-title">
                        <h2>Top Vendors For You!</h2>
                    </div>
                    <div className="top-vendors-list">
                    <Vendors 
                        name="Suhani Sells Seashells"
                        rating="5.0"
                        rank="1"
                        description="I sell seashells in North District!"
                        image={suhaniShellImage}
                        isTopVendor={true}
                        onViewProfile={() => handleViewProfile("hustler-page")}
                        onBookNow={() => handleBookNow("suhani-sells-seashells")}
                    />
                    <Vendors 
                        name="Parnika Painting Nails!"
                        rating="4.8"
                        rank="2"
                        description="Specializes in painting nails. I have been painting nails ever since I was a kid and I love painting nails! Hope you like my nails!"
                        image="https://via.placeholder.com/125" 
                        isTopVendor={true}
                        onViewProfile={() => console.log("Viewing John's profile")}
                        onBookNow={() => console.log("Booking with John")}
                    />
                        
                    </div>
                    <div className="explore-vendors-title">
                        <h2>Explore</h2>
                        
                    </div>
                    <div className="explore-vendors-list">
                        <Vendors 
                            name="Briana's Braids"
                            rating="4.8"
                            rank="1"
                            description="I have been braiding for 10 years. There is no one who can braid hair like me! "
                            image="https://via.placeholder.com/125" 
                            onViewProfile={() => console.log("Viewing John's profile")}
                            onBookNow={() => console.log("Booking with John")}
                        />
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default StudentHome;