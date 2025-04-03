import React from "react";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

function App() {

  return (
    <div className="w-full h-screen ">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App;