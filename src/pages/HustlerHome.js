import React from "react";
import "../styles/HustlerHome.css";
import pfpImage from '../assets/pfp.jpg';

function HustlerHome() {
    return (
        <div>
            <section id="reviews-442">
                <div className="cs-wrapper">
                    <div className="cs-container">
                        <div className="cs-content">
                        <p className="cs-review">
                            {/* Placed inside p tag for consistent positioning */}
                            <span className="upcoming-text">Upcoming:</span>
                            <ul>
                                <li>
                                    <strong>Nails (Fill)</strong> for Thomas <span>@ 3:30 PM</span>, <span>December 15th, 2024</span>
                                </li>
                                <li>
                                    <strong>Nails (Full Set)</strong> for Arman <span>@ 5:00 PM</span>, <span>December 15th, 2024</span>
                                </li>
                                <li>
                                    <strong>Nails (Full Set)</strong> for Michalis <span>@ 6:00 PM</span>, <span>December 16th, 2024</span>
                                </li>
                            </ul>
                        </p>
                        </div>
                        <picture className="cs-picture">
                            <source
                                media="(max-width: 600px)"
                                srcSet={pfpImage}
                            />
                            <source
                                media="(min-width: 601px)"
                                srcSet={pfpImage}
                            />
                            <img
                                loading="lazy"
                                decoding="async"
                                srcSet={pfpImage}
                                alt="person looking left"
                                width="328"
                                height="540"
                                aria-hidden="true"
                            />
                        </picture>
                    </div>
                </div>
            </section>

            <section id="why-choose-442">
                <div className="cs-container">
                    <div className="cs-content">
                    </div>
                    <ul className="cs-card-group">
                        <li className="cs-item">
                            <picture className="cs-picture">
                                <img
                                    className="cs-icon"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon1.svg"
                                    loading="lazy"
                                    decoding="async"
                                    alt="icon"
                                    width="40"
                                    height="40"
                                    aria-hidden="true"
                                />
                            </picture>
                            <span className="cs-number">263</span>
                            <p className="cs-item-text">Views</p>
                        </li>
                        <li className="cs-item">
                            <picture className="cs-picture">
                                <img
                                    className="cs-icon"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon2.svg"
                                    loading="lazy"
                                    decoding="async"
                                    alt="icon"
                                    width="40"
                                    height="40"
                                    aria-hidden="true"
                                />
                            </picture>
                            <span className="cs-number">18</span>
                            <p className="cs-item-text">Bookings</p>
                        </li>
                        <li className="cs-item">
                            <picture className="cs-picture">
                                <img
                                    className="cs-icon"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon3.svg"
                                    loading="lazy"
                                    decoding="async"
                                    alt="icon"
                                    width="40"
                                    height="40"
                                    aria-hidden="true"
                                />
                            </picture>
                            <span className="cs-number">0</span>
                            <p className="cs-item-text">Cancellations</p>
                        </li>
                        <li className="cs-item">
                            <picture className="cs-picture">
                                <img
                                    className="cs-icon"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon4.svg"
                                    loading="lazy"
                                    decoding="async"
                                    alt="icon"
                                    width="40"
                                    height="40"
                                    aria-hidden="true"
                                />
                            </picture>
                            <span className="cs-number">$209.80</span>
                            <p className="cs-item-text">Revenue</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default HustlerHome;