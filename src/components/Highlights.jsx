import React from "react";
import { topics } from "../content/topics";

function Highlights() {
  return (
    <section className="section highlights" aria-label="Highlights">
      <div className="container">
        <h2 className="sectionTitle">A few things I return to</h2>
        <p className="sectionSubtitle">Simple comforts, collected slowly.</p>

        <div className="highlightsGrid">
          {topics.map((topic) => (
            <article key={topic.id} className="highlightCard">
              <h3 className="highlightTitle">{topic.title}</h3>
              <p className="highlightText">{topic.highlightText}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
