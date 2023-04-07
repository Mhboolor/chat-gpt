import React from "react";
import "./MainHeaderContent.css";

import HeaderImage from "../../../../assets/images/Header-Illustration.png";
import user1 from "../../../../assets/images/user1.png";
import user2 from "../../../../assets/images/user2.png";
import user3 from "../../../../assets/images/user3.png";
import user4 from "../../../../assets/images/user4.png";
import user5 from "../../../../assets/images/user5.png";
import user6 from "../../../../assets/images/user6.png";

function MainHeaderContent() {
  return (
    <div className="mainheadercontent">
      <div className="mainheadercontent__left">
        <h1 className="title">
          Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h1>
        <p className="mainheadercontent__text">
          Yet bed any for travelling assistance indulgence unpleasing. <br />{" "}
          Not thoughts all exercise blessing. Indulgence way <br /> everything
          joy alteration boisterous the attachment. Party <br /> we years to
          order allow asked of.
        </p>
        <div className="mainheadercontent__email-box">
          <input
            type="email"
            className="mainheadercontent__email-inp"
            placeholder="Your Email Address"
          />
          <a href="#" className="btn mainheadercontent__email-btn">
            Get Started
          </a>
        </div>
        <div className="mainheadercontent__user-box">
          <div className="user-box__img">
            <img src={user1} alt="UserImage" className="user-box__img__item" />
            <img src={user2} alt="UserImage" className="user-box__img__item" />
            <img src={user3} alt="UserImage" className="user-box__img__item" />
            <img src={user4} alt="UserImage" className="user-box__img__item" />
            <img src={user5} alt="UserImage" className="user-box__img__item" />
            <img src={user6} alt="UserImage" className="user-box__img__item" />
            <span className="user-box__img__item">16k+</span>
          </div>
          <div className="user-box__text">
            1,600 people requested access a visit in last 24 hours
          </div>
        </div>
      </div>
      <div className="mainheadercontent__right">
        <img
          src={HeaderImage}
          alt="Header-Image"
          className="mainheadercontent__image"
        />
      </div>
    </div>
  );
}

export default MainHeaderContent;
