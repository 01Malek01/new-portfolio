'use client'
import React, { useEffect, useState } from 'react'
import FrontProject from './FrontProjects'
import FullProjects from './FullProjects'
import { motion } from 'framer-motion'
import { RiArrowGoBackFill } from "react-icons/ri";



function Projects() {
  const [choice, setChoice] = useState(null)
  const handleChoice = (choice) => {
    setChoice(choice)
  }
  useEffect(() => {
    console.log(choice);
  }, [choice])
  return (
    <>
      {
        choice !== null && (
          <div className="mt-6 go-back ml-5">
            <button className='btn btn-warning' onClick={() => setChoice(null)}>Go Back <RiArrowGoBackFill /> </button>
          </div>
        )
      }
      {choice == null ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          id="projects" className="projects-wrapper h-[100vh] flex flex-col relative items-center justify-center">
          <h1 className="absolute top-5 text-5xl font-bold">Projects</h1>
          <div className="projects-container flex flex-col gap-8 items-center justify-center mt-6">
            <div className="projects-choice-title">
              <h1 className=" text-3xl text-center md:text-5xl text-white">What Would You Like To See?</h1>
              <p className="md:ml-2 mx-auto text-center">Click to show the projects</p>
            </div>
            <div className="projects-choice flex flex-col md:flex-row gap-5">
              <button onClick={() => handleChoice("full-stack")} className="btn btn-outline btn-primary">
                Full Stack Projects
              </button>
              <button onClick={() => handleChoice("front-end")} className="btn btn-outline btn-secondary">
                Front End Projects
              </button>
            </div>
          </div>
          <div className="mt-5"></div>
        </motion.section>
      ) : (

        choice == "front-end" ?
          (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className='flex justify-center items-center'
            >
              <FrontProject />
            </motion.div>
          ) :
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='flex justify-center items-center'

          >
            <FullProjects />
          </motion.div>

      )}
    </>
  );

}

export default Projects
