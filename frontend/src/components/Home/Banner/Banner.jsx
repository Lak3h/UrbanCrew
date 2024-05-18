import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import Typing from 'react-typing-effect';

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h4>UNLEASH THE POWER OF  </h4>
                    <h1 >ENGINEERING</h1>
                    <h4>
                     WITH COIMBATORE'S LEADING AND MOST TRUSTED BRAND
                    </h4>
                    <br></br>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Call Us</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
