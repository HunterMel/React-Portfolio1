import React from 'react'
import { BiCode, BiCodeAlt } from 'react-icons/bi'
import { VscMilestone } from 'react-icons/vsc'

const Resume = () => {
    return (
        <div class='container-fluid' id='resume'>
                <h2> <BiCode/> Resume <BiCodeAlt/></h2>
                <div class='container' id='resume'>
                    <h3> Hunter Johnson </h3>
                    <section id='resume-info'>
                        <p>Systematic Product Owner with a detail-oriented and thorough approach to defining requirements, outlining specifications and working with team members to bring to life high-quality products for customers. I'm a planner and problem-solver with in-depth understanding of technical products. Currently, developing my coding knowlege and hands on experience through a coding bootcamp at Vanderbilt to bringforth top techical expertise within the Product field.
                        </p>
                    </section>
                    <h4><VscMilestone/> Technical Skills</h4>
                    <section id='resume-info'>
                        <h4>Front End</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                        <h4>Back End</h4>
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
                        </ul>
                    </section>
                    <h4>Education</h4>
                    <section id='resume-info'>
                        <p>Vanderbilt University Bootcamp Certificate</p>
                        <p> Through a fast-paced, immersive curriculum, I've learned in-demand front-end and back-end application technologies.
                        </p>
                        <p>The University Of Tennessee Knoxville</p>
                        <p>Kinesiology</p>
                    </section>
                </div>
        </div>
    )
}

export default Resume