// src/pages/About.js
import React from "react";
import "../styles/About.css";
import teamImage from '../assets/team.jpg';  // Adjust the path as necessary

function About() {
    return (
        <div>
            <section id="about-section">
                <div className="about-content">
                <div className="about-text">
                        <h2>About Us</h2>
                        <p>
                            At Student Hustle, we understand the challenges college students face when managing their side hustles. As students ourselves, we know the struggles of balancing academic life with running a small business. That's why we created a platform designed to simplify the process of discovering and managing self-care and fashion services on campus.
                        </p>
                        <p>
                            Our website brings together everything student entrepreneurs need in one place—whether it’s managing schedules, processing secure payments, or advertising their services. With built-in scheduling tools, verified profiles, and secure payment systems, we aim to foster trust and convenience for both hustlers and customers.
                        </p>
                        <p>
                            Student Hustle empowers students to operate their businesses more efficiently, reducing the need to juggle multiple platforms. Customers can easily discover local services, book appointments, and enjoy secure, reliable transactions—all on one platform. Whether you're offering a service or seeking one, we’ve got you covered!
                        </p>
                    </div>
                    <div className="about-image">
                        <img 
                            src={teamImage} 
                            alt="Student Hustle Team" 
                            loading="lazy" 
                            decoding="async" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
