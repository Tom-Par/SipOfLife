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
        <Hero />;
        <Highlights />;
      </main>
      <Footer />
    </div>
      
  );
}
