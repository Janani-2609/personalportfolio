import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../images/j-logo.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import burgerMenu from '../../images/burger-menu.jpg'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const openLinkedInProfile = () => {
        // Replace 'your-linkedin-profile' with your actual LinkedIn profile username or URL
        const linkedinProfileURL = 'https://www.linkedin.com/in/janani-s-4b4123253/';
        window.open(linkedinProfileURL, '_blank');
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="logo-img" className="logo-img" />
            <div className="navbar-menu">
                <Link activeClass='active' to='home-container' spy={true} smooth={true} offset={-100} duration={500} className='navbar-menu-list'>Home</Link>
                <Link activeClass='active' to='about-container' spy={true} smooth={true} offset={-100} duration={500}className='navbar-menu-list'>About</Link>
                <Link activeClass='active' to='project-header' spy={true} smooth={true} offset={-90} duration={500}className='navbar-menu-list'>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='navbar-menu-list'>Contact</Link>
            </div>
            <div className="linkedin" onClick={openLinkedInProfile}>
                
                <FontAwesomeIcon icon={faLinkedinIn} size='1.5x'/>
               
            </div>
            <div className="burger-menu">
            <img src={burgerMenu} alt="logo-img" className="mobileMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="nav-menu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to='home-container' spy={true} smooth={true} offset={-100} duration={500} className='menu-list'onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about-container' spy={true} smooth={true} offset={-100} duration={500}className='menu-list' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='project-header' spy={true} smooth={true} offset={-90} duration={500}className='menu-list' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className='menu-list' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar