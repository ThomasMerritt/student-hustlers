import React from "react";
import '../styles/Carousel.css';
import Briana_ad from "../images/Briana_ad.jpg";
import Suhani_ad from "../images/Suhani_ad.jpg";
import Parnika_ad from "../images/Parnika_ad.jpg";

function Caraousel() {
    const images = [Briana_ad, Suhani_ad, Parnika_ad];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex -1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex ===images.length -1 ? 0 : prevIndex + 1));

    };

    return (
        <div class="carousel">
            <div className="left-arrow" onClick ={goToPrevious}>
                <p>Prev</p>
            </div>
            <div className="carousel-items">
                <img src = {images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className = "carousel-image" />

            </div>
            <div className="right-arrow" onClick={goToNext}>
                <p>Next</p>
            </div>
        </div>
    );
}

export default Caraousel;