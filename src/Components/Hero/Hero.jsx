import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from "../../assets/my_resume.pdf"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Kevin Andrews,</span><br></br>Full stack Developer.</h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a 
            href= "https://drive.google.com/file/d/1j-QfHqvL1Et-gJCG4jmoZ4gpa4r3Hjfr/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer" 
          >
        My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
