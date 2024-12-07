// src/pages/About.js
import React from "react";
import "../styles/About.css";

function About() {
    return (
        <div>
            <section id="why-choose-1657">
                <div class="cs-container">
                    <div class="cs-content">
                        <div class="cs-flex">
                            <span class="cs-topper">Why Choose Us</span>
                            <h2 class="cs-title">Grow Your Business with Our New Bold Agency</h2>
                        </div>
                        <ul class="cs-ul">
                            <li class="cs-li">
                                <span class="cs-number">01</span>
                                <p class="cs-li-text">
                                    Aqestic recusandae laudantium optio amet a quisquam saepe aliquid, voluptate praesentium dicta fuga dolor error perspiciatis voluptatem eum cupiditate totam reiciendis quam minus.
                                </p>
                            </li>
                            <li class="cs-li">
                                <span class="cs-number">02</span>
                                <p class="cs-li-text">
                                    Aqestic recusandae laudantium optio amet a quisquam saepe aliquid, voluptate praesentium dicta fuga dolor error perspiciatis voluptatem eum cupiditate totam reiciendis quam minus.
                                </p>
                            </li>
                            <li class="cs-li">
                                <span class="cs-number">03</span>
                                <p class="cs-li-text">
                                    Aqestic recusandae laudantium optio amet a quisquam saepe aliquid, voluptate praesentium dicta fuga dolor error perspiciatis voluptatem eum cupiditate totam reiciendis quam minus.
                                </p>
                            </li>
                        </ul>
                    </div>  
                    <div class="cs-wrapper">
                        <picture class="cs-picture">
                            <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting12.jpg" />
                            <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting12.jpg" />
                            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting12.jpg" alt="meeting" width="630" height="414" />
                        </picture>
                        <p class="cs-review">
                            <svg class="cs-quote" preserveAspectRatio="none" viewBox="0 0 100 93" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".4" clip-path="url(#a)" fill="var(--quoteColor)"><path d="M22.94 84H0L18.305.854H55L22.94 84ZM67.94 84H45L63.305.854H100L67.94 84Z"/></g><defs><clipPath id="a-1657"><path fill="#fff" transform="translate(0 .854)" d="M0 0h100v83.146H0z"/></clipPath></defs></svg>
                            Professional & modern, a theme designed to help your business stand out from the rest. For marketing firms, business endeavors & business consulting.
                        </p>
                    </div>
                </div>
            </section>
                                
        </div>
    );
}

export default About; // Default export