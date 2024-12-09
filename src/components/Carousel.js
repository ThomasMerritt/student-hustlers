import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";
import Briana_ad from "../images/Briana_ad.jpg";
import Suhani_ad from "../images/Suhani_ad.jpg";
import Parnika_ad from "../images/Parnika_ad.jpg";

function Carousel() {
    const images = [Briana_ad, Suhani_ad, Parnika_ad];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [exitingIndex, setExitingIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setExitingIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="carousel-items">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`carousel-image ${
                            index === currentIndex
                                ? "active"
                                : index === exitingIndex
                                ? "exiting"
                                : ""
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;