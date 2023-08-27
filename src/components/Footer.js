import React from "react";
import logo from "../assets/logoblue.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerContent">
          <div className="about">
            <img src={logo} />
            <p>
              Welcome to XYZ, your one-stop destination for cutting-edge
              solutions in embedded systems, IoT and web services. At XYZ, we
              bring together a team of skilled professionals who are passionate
              about creating innovative solutions that bridge the gap between
              technology and real-world applications.
            </p>
            <div className="icons">
              <div>
                <AiOutlineTwitter  />
              </div>
              <div>
               <FaFacebookF />
              </div>
              <div>
                <AiFillInstagram />
              </div>
              <div>
                <BsYoutube />
              </div>
            </div>
          </div>
          <div className="quickmenu">
            <h1>Quick Links</h1>
            <div>Home</div>
            <div>About Us</div>
            <div>Services</div>
            <div>Products</div>
          </div>
          <div className="contact">
            <div>
              <HiMail className="icon"/>
              <p>mail.tkitsolutions@gmail.com</p>
            </div>
            <div>
              <MdLocationOn  className="icon"/>
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbar">
        &#169; 2023 - TKIT SOL | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
