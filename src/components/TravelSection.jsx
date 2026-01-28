import React from "react";
import travelImage from "../assets/travel-mountains.JPG"; // your generated image

export default function TravelSection() {
  return (
    <section id="travel" className="section section--full section--travel" aria-label="Travel">
      <div className="container">
        <div className="travelImage">
          <img src={travelImage} alt="Green mountains Dolomity" />
        </div>

        <div className="travelContent">

          <div className="travelBody">
            <p className="travelP">
              I like moving slowly through places. Trains instead of planes, walking
              instead of rushing. Watching how light changes in unfamiliar streets.
            </p>

            <p className="travelP">
              Travel, for me, is not about collecting destinations, but about paying
              attention — to sounds, to colors, to small moments that would be easy
              to miss otherwise.
            </p>
          </div>
          <h2 className="travelTitle">Travel</h2>
          
        </div>
      </div>
    </section>
  );
}
