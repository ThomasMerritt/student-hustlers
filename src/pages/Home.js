// src/pages/About.js
import React from "react";
import Carousel from "../components/Carousel";
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            {/* Carousel Section */}
            <Carousel />
            <hr className="horizontal-line" />
            
            {/* Home Content Section */}
            <div className="home-content">
                <h1>Welcome to Student Hustle</h1>
                <p>
                    Student Hustle is a service designed for college students to:
                </p>
                <ul>
                    <li>Operate side hustles efficiently</li>
                    <li>Discover verified lifestyle services on campus</li>
                    <li>Enhance a sense of community on campus</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;