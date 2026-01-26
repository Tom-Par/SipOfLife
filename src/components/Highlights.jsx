import React from 'react';

function Highlights() {
  const items = [
    {
      
      title: "Travel",
      text: "Small walks, train windows, and new streets at a gentle pace.",
    },
    {
      title: "Coffee",
      text: "Warm cups, quiet kitchens, and the ritual of slowing down.",
    },
    {
      title: "Music",
      text: "Soundtracks for thinking, working, and late-night calm.",
    },
  ];

  return (
    <section className="section highlights" aria-label="Highlights">
      <div className="container">
        <h2 className="sectionTitle">A few things I return to</h2>
        <p className="sectionSubtitle">
          Simple comforts, collected slowly.
        </p>

        <div className="highlightsGrid">
          {items.map((item) => (
            <article key={item.title} className="highlightCard">
              <h3 className="highlightTitle">{item.title}</h3>
              <p className="highlightText">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
