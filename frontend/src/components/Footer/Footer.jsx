import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              384/2A, Vijayakumar layout, Sowmayampalayam, Coimbatore-6411048
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9080978040</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: urbancrewequipments@gmail.com</div>
          </div>
        </div>

        <div className="map-card">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8650125686568!2d76.9102609!3d11.0487459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f79613873a3%3A0xc848ff08791ebea3!2sUrbanCrew%20Equipments!5e0!3m2!1sen!2sin!4v1688224037919!5m2!1sen!2sin" width="200" height="250" style={{border:"8"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    
        
        ></iframe>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <Link to="/" className="text">Home</Link>
          <Link to="/Aboutpage" className="text">About</Link>
          <Link to="/Category" className="text">Category</Link>
          {/* Add more route links as needed */}
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">URBANCREW EQUIPMENTS - 2023</span>
          <img src={Payment} alt="Payment Methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
