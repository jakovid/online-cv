import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Education />
      <Footer />

    </div>
  );
}

