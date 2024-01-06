import React from 'react'
import './Home.css'
import laptop from '../../images/laptop.png'
import email from '../../images/email.png'
import { Link } from 'react-scroll';
import Resume from '../../Files/Janani-Resume.pdf';

const Home = () => {
    const emailAddress = 'jananisuku26@gmail.com';
    const handleEmailImageClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <div id="home">
            <div id="home-container">
                <span className='hi-text'>Hi, I'm <span className="name-text">Janani</span><br></br><span className='title' >WEB DEVELOPER</span></span>
                <p className='home-para'>I am a passionate and innovative web developer with a keen eye for detail and a love for creating digital
                    experiences that leave a lasting impression. As a dedicated professional, I thrive on turning ideas into
                    interactive and user-friendly websites and applications. I am always eager to explore new technologies
                    and frameworks to stay at the forefront of this dynamic field. If you're seeking a dedicated and
                    results-driven web developer to enhance your team's capabilities, feel free to explore my profile.</p>
                <div className="btns">

                    <a href={Resume} download="Janani-Resume.pdf"
                        target="_blank"
                        rel="noreferrer" >
                        <button className="home-btn" role='button'>
                            Download CV</button>
                    </a>

                    <img src={email} alt="email" className="email-img"
                        onClick={handleEmailImageClick} />

                </div>
            </div>
            <img src={laptop} className="laptop-img" alt="laptop" />
        </div>

    )
}

export default Home
