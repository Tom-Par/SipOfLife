import React from "react"
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">coffee · travel · music</p>
          <h1 className="hero__title">slow mornings</h1>
          <p className="hero__subtitle">
            coffee, places, and music for unhurried days.
          </p>
        </div>

        <div className="hero__media" aria-label="Hero image">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
