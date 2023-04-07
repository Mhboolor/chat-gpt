import React from "react";
import "./Imagination.css";
import Image from "../../../assets/images/Feature Image.png";

function Imagination() {
  return (
    <div className="imagination">
      <div className="imagination__img-box">
        <img src={Image} alt="ImaginationImage" className="imagination__img" />
      </div>
      <div className="imagination__content-box">
        <p className="imagination__req-text">Request Early Access to Get Started</p>
        <h3 className="imagination__title title">The possibilities are <br /> beyond your imagination</h3>
        <p className="imagination__text">
          Yet bed any for travelling assistance indulgence unpleasing. Not <br />
          thoughts all exercise blessing. Indulgence way everything joy <br />
          alteration boisterous the attachment. Party we years to order <br /> allow
          asked of.
        </p>
        <a href="#" className="imagination__link">
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  );
}

export default Imagination;
