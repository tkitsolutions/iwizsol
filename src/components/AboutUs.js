import React from "react";
import aboutimg from '../assets/new/AboutImg.svg'

const AboutUs = () => {
  return (
    <section className="aboutus" id="aboutus">
      <div className="aboutus__img">
        <img src={aboutimg} alt="no img found"/>
      </div>
      <div className="aboutus__content">
        <h1>
          About<span> Us</span>
        </h1>
        <p>
          Welcome to XYZ, your one-stop destination for cutting-edge solutions
          in embedded systems, IoT and web services. At XYZ, we bring together a
          team of skilled professionals who are passionate about creating
          innovative solutions that bridge the gap between technology and
          real-world applications.
        </p>
        <button>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
