import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <center>
    <div id="project-container">
      <h1>My Projects.</h1>
      <div className="projects">
       <h3>My Portfolio</h3>
       <p>It is a personal website built using React.js, showcasing my skills, projects, and more. The goal is to create an interactive and visually appealing portfolio to highlight my proficiency in web development.</p>
        <button className="project-btn">View Git</button>
      </div>
    </div>
    </center>
  )
}

export default Projects