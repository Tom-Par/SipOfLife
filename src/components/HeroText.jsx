import React from "react";

function HeroText(props) {
    return (<div className="heroText">
          <p className="heroEyebrow">{props.heroEyebrow}</p>
          <h1 className="heroTitle">{props.heroTitle}</h1>
          <p className="heroSubtitle">
            {props.heroSubtitle}
          </p>
        </div>)
}

export default HeroText;