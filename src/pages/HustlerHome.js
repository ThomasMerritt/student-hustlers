import React from "react";
import "../styles/HustlerHome.css";

function HustlerHome() {
    return (
        <div>
            <section id="reviews-442">
                <div className="cs-wrapper">
                    <div className="cs-container">
                        <div className="cs-content">
                            <p className="cs-review">
                                {/* Placed inside p tag for consistent positioning */}
                                <img
                                    className="cs-quote"
                                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/quote-left.svg"
                                    alt="quote icon"
                                    width="120"
                                    height="106"
                                    loading="lazy"
                                    decoding="async"
                                    aria-hidden="true"
                                />
                                “We purchased our property in Katoomba from Landscape  about 7 years ago. Landscape’s made the process so easy that when it came time to sell we knew immediately where to turn”
                            </p>
                            <span className="cs-author">Dany Olmo - Customer of Landscape</span>
                        </div>
                        <picture className="cs-picture">
                            <source
                                media="(max-width: 600px)"
                                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man-m.jpg"
                            />
                            <source
                                media="(min-width: 601px)"
                                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man.jpg"
                            />
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man.jpg"
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
                        <span className="cs-topper">Best-In-Class</span>
                        <h2 className="cs-title">Why Choose Us?</h2>
                        <p className="cs-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
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
                            <p className="cs-item-text">Happy families.</p>
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
                            <p className="cs-item-text">Happy families.</p>
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
                            <span className="cs-number">24</span>
                            <p className="cs-item-text">Happy families.</p>
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
                            <span className="cs-number">3</span>
                            <p className="cs-item-text">Happy families.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default HustlerHome;