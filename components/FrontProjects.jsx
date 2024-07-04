import React from 'react'
import { frontProjects } from '@/utils/front-end'
import ProjectCard from './ProjectCard'
function FrontProject() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  p-5 justify-center  ' >
      {frontProjects.map((project) => (
        <ProjectCard
          key={project.name}
          projectTitle={project.name}
          projectDescription={project.description}
          projectImage={project.image}
          liveLink={project?.liveLink}
          githubLink={project?.githubLink}
          githubLink2={project?.githubLink2}
        />
      ))}
    </div>
  )
}

export default FrontProject