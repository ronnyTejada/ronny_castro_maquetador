import React from "react";
import GlobalStyle from "./globalStyles";


import Hero from "./sections/Hero/Hero";
import Gallery from "./sections/Gallery/Gallery";
import MostListened from "./sections/MostListened/MostListened";
import Contact from "./sections/Contact/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalStyle />
      <Hero />
      <Gallery />
      <MostListened />
      <Contact />
    </div>
  );
}

export default App;
