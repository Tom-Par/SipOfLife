import React from "react";

function TopicSection(props) {
  return (
    <section id={props.id} className="section" aria-label={props.title}>
      <div className="container">
        <h2 className="sectionTitle">{props.title}</h2>
        <p className="sectionSubtitle">{props.text}</p>
      </div>
    </section>
  );
}

export default TopicSection;
