import React from "react"

function HeroImage(props) {
    return         <div className="heroMedia" aria-label="Hero image">
    <img className="heroImg" src={props.heroImage} alt="Guy making coffee"/>
    </div>
}

export default HeroImage;