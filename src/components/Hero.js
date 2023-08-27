import React from "react";
import heroImg from "../assets/hero image.svg"
import iotImg from "../assets/iot.svg"
import webImg from "../assets/web.svg"
import ucImg from "../assets/uc.svg"
import arrow from "../assets/Arrow.svg"

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
      <h1>Molding Bytes and Bits, Sculpting Digital Realities</h1>
      <p>
        Empowering Innovation: Your trusted partner for high-quality PCB
        manufacturing, expert microcontroller programming, and cutting-edge IoT
        gadget development.
      </p>
      <button>Contact Us <img src={arrow}/></button>
      </div>
      <div className="heroImg">
        <img src={heroImg} className='personImg'  about="IMG NOT FOUND"/>
        <img src={iotImg} className='iotImg' about="IMG NOT FOUND"/>
        <img src={webImg} className='webImg'  about="IMG NOT FOUND"/>
        <img src={ucImg}  className='ucImg'  about="IMG NOT FOUND"/>

        
      </div>
    </section>
  );
};

export default Hero;
