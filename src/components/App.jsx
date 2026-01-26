import React from "react"

import Hero from "./Hero";
import Highlights from "./Highlights";
import Header from "./Header";
import Footer from "./Footer"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Highlights />


      <section id="travel" className="section">
        <div className="container">
          <h2 className="sectionTitle">Travel</h2>
          <p className="sectionSubtitle">
            New streets, train windows, and quiet routes. I like moving slowly and
            noticing small details.
          </p>
        </div>
      </section>

      <section id="coffee" className="section">
        <div className="container">
          <h2 className="sectionTitle">Coffee</h2>
          <p className="sectionSubtitle">
            The simplest ritual. Warm light, a clean counter, and a cup that makes
            time feel softer.
          </p>
        </div>
      </section>

      <section id="music" className="section">
        <div className="container">
          <h2 className="sectionTitle">Music</h2>
          <p className="sectionSubtitle">
            Background sound for thinking and building. Calm tracks, headphones on,
            focus in.
          </p>
        </div>
      </section>


      </main>
      <Footer />
    </div>
      
  );
}
