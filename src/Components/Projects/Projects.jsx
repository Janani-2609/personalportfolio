import React from 'react'
import './Projects.css'

const Projects = () => {

  const handlePortfolio = () => {
    // Replace 'your-linkedin-profile' with your actual LinkedIn profile username or URL
    const gitPortfolioURL = 'https://github.com/Janani-2609/personalportfolio.git';
    window.open(gitPortfolioURL, '_blank');
  };

  const handleTicTacToe = () => {
    // Replace 'your-linkedin-profile' with your actual LinkedIn profile username or URL
    const gitTicTacToeURL = 'https://github.com/Janani-2609/tic-tac-toe.git';
    window.open(gitTicTacToeURL, '_blank');
  };


  return (
    <center>

      <div id="project-header">
        <h1>My Projects.</h1>
        <div id="project-container">
          <div className="projects">
            <h3>My Portfolio</h3>
            <p>It is a personal website built using React.js, showcasing my skills, projects, and more. The goal is to create an interactive and visually appealing portfolio to highlight my proficiency in web development.</p>
            <button className="project-btn" onClick={handlePortfolio}>View Git</button>
          </div>
          <div className="projects2">
            <h3>Tic-Tac-Toe</h3>
            <p>This React Tic Tac Toe project showcases a two-player game with editable player names, a responsive game board, and a rematch option which is developed during my React JS course in Udemy. </p>
            <button className="project-btn" onClick={handleTicTacToe}>View Git</button>
          </div>
        </div>
      </div>
    </center>

  )
}

export default Projects