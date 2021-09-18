import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer'>
            <p>
                <a href='https://github.com/Trayehunter1' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/hunter-johnson-50b648182/' target='_blank' rel='noopener noreferrer' alt='Linked In profile link'>
                    <FaLinkedinIn/>
                </a>
                <a href='hunterjohnsoninfo@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                </a>
                
            </p>
        </div>
    )
}

export default Footer