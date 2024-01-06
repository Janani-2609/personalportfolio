import React from 'react'
import me from '../../images/me1.jpg'
import htmlpic from '../../images/1-removebg-preview.png'
import csspic from '../../images/2-removebg-preview.png'
import bootstrapic from '../../images/3-removebg-preview.png'
import jspic from '../../images/4-removebg-preview.png'
import reactpic from '../../images/5-removebg-preview.png'
import javapic from '../../images/6-removebg-preview.png'
import './About.css'

const About = () => {
    return (
        <center>
            <div id="about-container">
                <div className="myImg">
                    <img src={me} alt="" />
                </div>
                <div className="about-header">
                    <h1>What do I do.</h1>
                    <div className="about-content">
                        <p>Pursuing my masters degree in MCA eager to kickstart a career in IT. Proficient in web development, with a strong
                            commitment to learning and adapting to new challenges. Seeking an entry-level position to apply academic knowledge,
                            contribute to projects, and grow within a dynamic IT environment.</p>
                        <h1>I am good at.</h1>
                        <div className="mySkills">                         
                            <img src={htmlpic} alt=""/>                            
                            <img src={csspic} alt="" />
                            <img src={bootstrapic} alt="" /><br></br>
                            <img src={jspic} alt="" />
                            <img src={reactpic} alt="" />
                            <img src={javapic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default About