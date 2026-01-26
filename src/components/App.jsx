import React from "react";

import Hero from "./Hero";
import Highlights from "./Highlights";
import Header from "./Header";
import Footer from "./Footer";
import TopicSection from "./TopicSection";
import { topics } from "../content/topics";

export default function App() {
  return (
    <div>
      <Header />
      <main id="top">
        <Hero />
        <Highlights />

        {topics.map((topic) => (
          <TopicSection
            key={topic.id}
            id={topic.id}
            title={topic.title}
            text={topic.sectionText}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
