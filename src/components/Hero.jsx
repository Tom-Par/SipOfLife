import React from "react"
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import heroImage from "./../assets/kitchen_coffee.png"


export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner">
        <HeroText/>
        <HeroImage heroImage={heroImage}/>
      </div>
    </section>
  );
}
