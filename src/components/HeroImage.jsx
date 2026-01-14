import React from "react"

function HeroImage(props) {
    return         <div className="hero__media" aria-label="Hero image">
    <img className="img" src={props.heroImage} alt="Guy making coffee"/>
    </div>
}

export default HeroImage;