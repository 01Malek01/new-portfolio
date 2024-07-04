import React from "react";
import "../styles/Skills.css";
import Slider from "./Slider";

function Skills() {
  return (
    <section className="skills-wrapper mt-50 bg-gradient-to-r from-red-800 via-red-900 to-blue-950 min-h-screen p-8">
      <div className="skills-container">
        <header className="skills-title p-5">
          <h1 className="text-6xl font-bold text-center text-slate-200">Skills</h1>
        </header>
        <article className="skills bg-black bg-opacity-10 p-[2.5rem] rounded-lg shadow-lg">
          <div className="skills-progress flex items-center justify-center">
            <Slider />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
