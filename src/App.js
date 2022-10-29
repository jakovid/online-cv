import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Education />
      <Footer />

    </div>
  );
}

