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
                        <span className="cs-topper">Our Courses</span>
                        <h2 className="cs-title">Stitch Center for Process Safety Training</h2>
                        <p className="cs-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum accusantium fuga dolore
                            nulla provident inventore possimus, incidunt, tenetur voluptate laudantium consequuntur
                            commodi. In perferendis quod, non ad veniam similique assumenda deleniti nobis quaerat
                            ipsum cum! Velit provident eligendi cumque excepturi!
                        </p>
                        <ul className="cs-faq-group">
                            <li className="cs-faq-item active">
                                <button className="cs-button">
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
                                    <span className="cs-button-text">On-Demand e-Training</span>
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
                                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/calendar-gold.svg"
                                        alt="icon"
                                        width="32"
                                        height="32"
                                    />
                                    <span className="cs-button-text">Hybrid e-Training</span>
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
                                    <span className="cs-button-text">Live Instructor e-Training</span>
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
                                    <span className="cs-button-text">Onsite Classroom Training</span>
                                    <span className="cs-indicator" aria-hidden="true"></span>
                                </button>
                                <p className="cs-item-p">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat
                                    enim molestias quam, illum ullam ipsa repellat, necessitatibus quis cumque
                                    voluptatum nesciunt. Quia possimus est in recusandae saepe nostrum.
                                </p>
                            </li>
                        </ul>
                        <a href="#" className="cs-button-solid">View All Courses</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HustlerPage;