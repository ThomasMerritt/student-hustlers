// src/pages/About.js
import React from "react";
import "../styles/About.css";
import teamImage from "../assets/team.jpg";

function About() {
    return (
        <div>
            <section id="image-section">
                <div className="image-container">
                    <img 
                        loading="lazy" 
                        decoding="async" 
                        src={teamImage}
                        alt="Team"
                        width="1024" 
                        height="894" 
                    />
                </div>
            </section>
        </div>
    );
}

export default About; // Default export
