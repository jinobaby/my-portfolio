import React from 'react'
import Navbar from './Navbar'
import ProfileCard from './templates/ProfileCard'
import './Styles/About.css'
import ShinyText from './templates/ShinyText'
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";
import { 
  JavaScriptIcon, 
  CPlusPlusIcon, 
  ReactIcon, 
  GitIcon, 
  GitHubIcon, 
  ShopifyIcon, 
  AzureIcon, 
  Mongodb,
  Tailwindcss
} from './Icons/icons';

function About() {
  return (
    <div className="about-flex-container">
      <div className="about-left">
        <ProfileCard
          name="Jino Baby"
          title="Full Stack Dev"
          handle="jinobaby"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/my-portfolio/IMG_8269.PNG"
          miniAvatarUrl="/my-portfolio/IMG_8269.PNG"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => window.open('mailto:jbaby2527@conestogac.on.ca?subject=Hello Jino!&body=Hi Jino, I found your portfolio and would like to connect with you.', '_blank')}
        />
      </div>
      <div className="about-right">
        <h2 className='about-title'>About</h2>

        <p className='about-description'>
          I'm Jino. I enjoy building dynamic, creative products from start to finish.
            Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping.
          </p>
        <div className='about-skills'>
          <h2>Technologies I work with</h2>
          <div className='about-skills-list'>

            <button className='skill-button'>
              <JavaScriptIcon />
              <ShinyText text="JavaScript" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <Mongodb />
              <ShinyText text="MongoDB" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <Tailwindcss />
              <ShinyText text="Tailwind CSS" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <CPlusPlusIcon />
              <ShinyText text="C / C++" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <ReactIcon />
              <ShinyText text="React" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <GitIcon />
              <ShinyText text="Git" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <GitHubIcon />
              <ShinyText text="GitHub" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <ShopifyIcon />
              <ShinyText text="Shopify" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <RiNodejsLine />
              <ShinyText text="Node.js" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <SiExpress />
              <ShinyText text="Express.js" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <SiMysql />
              <ShinyText text="SQL / NoSQL" disabled={false} speed={3} className='custom-class' />
            </button>

            <button className='skill-button'>
              <AzureIcon />
              <ShinyText text="Azure" disabled={false} speed={3} className='custom-class' />
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About