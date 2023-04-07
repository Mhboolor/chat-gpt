import React from 'react'
import './BottomHeaderContent.css'
import Google from "./../../../assets/images/google.png";
import Slack from "./../../../assets/images/slack.png";
import Atlassing from "./../../../assets/images/atlassian.png";
import Dropbox from "./../../../assets/images/dropbox.png";
import Shopify from "./../../../assets/images/shopify.png";

function BottomHeaderContent() {
  return (
    <div className="bottomheadercontent">
        <img
          src={Google}
          alt="ComponyLogo"
          className="bottomheadercontent__item"
        />
        <img
          src={Slack}
          alt="ComponyLogo"
          className="bottomheadercontent__item"
        />
        <img
          src={Atlassing}
          alt="ComponyLogo"
          className="bottomheadercontent__item"
        />
        <img
          src={Dropbox}
          alt="ComponyLogo"
          className="bottomheadercontent__item"
        />
        <img
          src={Shopify}
          alt="ComponyLogo"
          className="bottomheadercontent__item"
        />
      </div>
  )
}

export default BottomHeaderContent