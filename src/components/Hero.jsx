import React from "react"
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import heroImage from "./../assets/kitchen_coffee.png"


export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner">
        <HeroText 
         heroEyebrow="coffee · travel · music"
         heroTitle="slow mornings"
         heroSubtitle="coffee, places, and music for unhurried days."
        />
        <HeroImage heroImage={heroImage}/>
      </div>
    </section>
  );
}
