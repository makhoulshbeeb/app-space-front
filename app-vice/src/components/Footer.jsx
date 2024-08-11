import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styles/Footer.css";
import image from "../image/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper">
                <p>Mobile Up</p>
                <p>Contact Us</p>
                <p>Support</p>
                <img src={image} alt="footer logo" className="logo" />
                <p>Help Desk</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            <hr className="hr" />
            <div className="lower">
                <FontAwesomeIcon icon={faFacebookF} className="icons"/>
                <FontAwesomeIcon icon={faInstagram} className="icons"/>
                <FontAwesomeIcon icon={faTwitter} className="icons"/>
                <FontAwesomeIcon icon={faWhatsapp} className="icons"/>
            </div>
            <small className="rights">&copy; AppVice, Inc. 2024. We love our users!</small>
        </div>
    );
};

export default Footer;
