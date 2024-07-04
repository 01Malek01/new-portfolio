"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/styles/Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper relative h-[70vh] flex items-center justify-center">
      <motion.div
      initial={{  opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="hero-container  glass h-[80vh] relative flex flex-col items-center justify-center gap-1">

        <motion.div
          initial={{ translateY: -100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="hero-text mt-10 card-title flex flex-col gap-9 justify-center items-center"
        >
          <h1 className="text-[2rem] md:text-[4rem] font-bold text-slate-100">
            Malek Mostafa
          </h1>
          <p className="text-[1.3rem] text-center md:text-[1.5rem] text-slate-300">MERN Stack Developer</p>

        </motion.div>
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="intro">
          <p className="text-[12px] text-center md:text-[16px] text-slate-300 mt-4 w-[50%] mx-auto   ">
            I'm a passionate and creative web developer with expertise in modern web technologies including React, Next.js, Node.js, and more. I love building responsive and user-friendly interfaces that provide great user experiences. Check out my projects to see my work!
          </p>
        </motion.div>

        <div className="hero-btns-container mt-1 flex justify-between md:gap-2 md:flex-row flex-col gap-1 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10 animate-pulse"
          >
            <a href="/Resume.pdf" download="/Resume.pdf">
              <button className="hero-btn">Download Resume</button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2}}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10 "
          >
            <a href="#projects" >
              <button className="hero-btn">Go to Projects</button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="hero-btn-container md:mt-10"
          >
            <a href="https://projects-show-ms8j.vercel.app/" target="_blank">
              <button className="hero-btn-2">Try 3D Projects Show</button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
