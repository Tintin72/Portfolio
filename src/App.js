import React from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contacts />
    </main>
  );
}
