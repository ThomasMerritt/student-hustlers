import React from "react";
import "../styles/HustlerPage.css"; // Import styles if any
import SuhaniPhoto from "../assets/suhani-shell.png";



function HustlerPage() {
    return (
        
        <div>
            <section id="services-1666">
                <div className="cs-container">
                    <div className="cs-image-group">
                        <picture className="cs-picture">
                            {/* Mobile Image */}
                            <source
                                media="(max-width: 600px)"
                                srcSet={SuhaniPhoto}
                            />
                            {/* Tablet and above Image */}
                            <source
                                media="(min-width: 601px)"
                                srcSet={SuhaniPhoto}
                            />
                            <img
                                loading="lazy"
                                decoding="async"
                                src={SuhaniPhoto}
                                alt="people standing"
                                width="605"
                                height="690"
                            />
                        </picture>
                        {/* SVG Graphic */}

                    </div>
                    <div className="cs-content">
                        <h2 className="cs-title">Suhani Sells Seashells</h2>
                        <p className="cs-text">I sell seashells in North District!
                        </p>
                        <ul className="cs-faq-group">
                        <li className="cs-faq-item">
                            <button
                                className="cs-button"
                                onClick={() => (window.location.href = "/booking")} // Navigate on click
                            >
                                <img
                                    className="cs-icon"
                                    aria-hidden="true"
                                    loading="lazy"
                                    decoding="async"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/computer-gold.svg"
                                    alt="icon"
                                    width="32"
                                    height="32"
                                />
                                <span className="cs-button-text">Book now</span>
                            </button>
                            <p className="cs-item-p">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat
                                enim molestias quam, illum ullam ipsa repellat, necessitatibus quis cumque
                                voluptatum nesciunt. Quia possimus est in recusandae saepe nostrum.
                            </p>
                        </li>
                             <li className="cs-faq-item">
                                <button className="cs-button">
                                    <img
                                        className="cs-icon"
                                        aria-hidden="true"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                    <span className="cs-button-text">Services</span>
                                    <span className="cs-indicator" aria-hidden="true"></span>
                                </button>
                                <p className="cs-item-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat
                                    enim molestias quam, illum ullam ipsa repellat, necessitatibus quis cumque
                                    voluptatum nesciunt. Quia possimus est in recusandae saepe nostrum.
                                </p>
                            </li>
                            <li className="cs-faq-item">
                                <button className="cs-button">
                                    <img
                                        className="cs-icon"
                                        aria-hidden="true"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                    <span className="cs-button-text">Read reviews</span>
                                    <span className="cs-indicator" aria-hidden="true"></span>
                                </button>
                                <p className="cs-item-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat
                                    enim molestias quam, illum ullam ipsa repellat, necessitatibus quis cumque
                                    voluptatum nesciunt. Quia possimus est in recusandae saepe nostrum.
                                </p>
                            </li>
                            <li className="cs-faq-item">
                                <button className="cs-button">
                                    <img
                                        className="cs-icon"
                                        aria-hidden="true"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold-2.svg"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                    <span className="cs-button-text">Message Vendor</span>
                                </button>
                                <p className="cs-item-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat
                                    enim molestias quam, illum ullam ipsa repellat, necessitatibus quis cumque
                                    voluptatum nesciunt. Quia possimus est in recusandae saepe nostrum.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HustlerPage;