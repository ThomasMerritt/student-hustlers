// src/pages/About.js
import React from "react";
import "../styles/About.css";

function About() {
    return (
        <div>
            <section id="meet-team-2071">
                <div class="cs-container">
                    <div class="cs-content">
                        <span class="cs-topper">Our Team</span>
                        <h2 class="cs-title">Meet Our Team</h2>
                        <p class="cs-text">
                            Orci eu lobortis elementum nibh tellus. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Luctus accumsan tortor posuere ac ut consequat semper. Et pharetra pharetra massa massa ultricies mi quis.
                        </p>
                    </div>
                    <ul class="cs-card-group">
                        <li class="cs-item">
                            <span class="cs-name">Dr. Ronald Richards</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Cameron Williamson</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Brooklyn Simmons</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Savannah Nguyen</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Albert Flores</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Eleanor Pena</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Dianne Russell</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                        <li class="cs-item">
                            <span class="cs-name">Dr. Darlene Robertson</span>
                            <div class="cs-flex">
                                <span class="cs-job">Dental Surgeon</span>
                                <span class="cs-department">Cosmetic and Aesthetic Dentistry</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <picture className="cs-background">
                    <source 
                        media="(max-width: 600px)" 
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/dentist-staff.jpeg" 
                    />
                    <source 
                        media="(min-width: 601px)" 
                        srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/dentist-staff.jpeg" 
                    />
                    <img 
                        loading="lazy" 
                        decoding="async" 
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/dentist-staff.jpeg" 
                        alt="dentist staff" 
                        width="1024" 
                        height="894" 
                    />
                </picture>
            </section>
                                
        </div>
    );
}

export default About; // Default export