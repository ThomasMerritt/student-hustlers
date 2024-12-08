import React from "react";
import "../styles/Vendors.css";

function Vendors({ 
    name = "Default Vendor", 
    rating = "No rating available", 
    rank = "N/A", 
    description = "No description provided", 
    image = null, // Add image prop
    isTopVendor = false, // New field
    onViewProfile = () => console.log("View profile clicked"), 
    onBookNow = () => console.log("Book now clicked") 
}) {
    return (
        <div className="top-vendor-item">
            <div className="name-rating">
                <div className="vendor-name">
                    <p>{name}</p> {/* Vendor Name */}
                </div>
                {isTopVendor && (
                    <div className="vendor-rank">
                        <p>{rank}</p> {/* Vendor Rank */}
                    </div>
                )}
                <div className="vendor-rating">
                    <p><b>Rating:</b> {rating}</p> {/* Vendor Rating */}
                </div>
            </div>
            <div className="vendor-body">
                <div className="vendor-body-left">
                    <div className="vendor-picture">
                        {image ? (
                            <img src={image} alt={`${name} logo`} /> // Display image if provided
                        ) : (
                            <p>Image Here</p> // Placeholder for missing image
                        )}
                    </div>
                </div>
                <div className="vendor-body-right">
                    <div className="vendor-body-right-top">
                        <p>{description}</p> {/* Vendor Description */}
                    </div>
                    <div className="vendor-body-right-bottom">
                        <button className="vendor-button" onClick={onViewProfile}>
                            View Profile
                        </button>
                        <button className="vendor-button" onClick={onBookNow}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vendors;