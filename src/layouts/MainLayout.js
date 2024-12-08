import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function MainLayout({ children }) {
    return (
        <div>
            <Banner />
            <div className="content">{children}</div>
        </div>
    );
}

export default MainLayout;