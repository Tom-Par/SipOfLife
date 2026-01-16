import React from "react";

function HeroText(props) {
    return (<div className="hero__text">
          <p className="hero__eyebrow">{props.heroEyebrow}</p>
          <h1 className="hero__title">{props.heroTitle}</h1>
          <p className="hero__subtitle">
            {props.heroSubtitle}
          </p>
        </div>)
}

export default HeroText;