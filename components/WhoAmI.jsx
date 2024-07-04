"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function WhoAmI() {
  return (
    <section className="wai-wrapper md:p-10 rounded bg-gradient-to-r from-red-800 via-red-900 to-blue-950 min-h-screen flex items-center justify-center">
      <div className="wai-container flex flex-col md:flex-row bg-black bg-opacity-10 p-6 rounded-lg shadow-lg gap-5">
        <motion.figure
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="wai-image order-2 flex-1 mt-[-4rem]"
        >
          <Image
            src={"/html-system-website-concept.jpg"}
            alt="image by Freepik"
            width={500}
            height={500}
            className="rounded-lg object-contain hidden md:block"
          />
        </motion.figure>
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="wai-text flex flex-col order-1 w-[50%] ml-10 flex-1 mt-[4rem]"
        >
          <header>
            <h2 className="md:text-[3rem] text-[2rem] font-bold text-slate-200">I'm Malek</h2>
          </header>
          <p className="md:text-[1.1rem] text-[1rem] md:p-5 text-slate-200 text-start py-4">
            As a passionate full-stack developer with a strong focus on front-end technologies, I create responsive and engaging user interfaces. With solid back-end skills in Node.js, Express, and MongoDB, I build robust, scalable, and efficient full-stack applications. I thrive in collaborative environments, contributing my skills and learning from others to deliver exceptional results. My goal is to stay updated with the latest technologies and deliver cutting-edge solutions.
          </p>
        </motion.article>
      </div>
    </section>
  );
}

export default WhoAmI;
