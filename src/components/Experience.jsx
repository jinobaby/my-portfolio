import React from 'react'
import './Styles/Experience.css'
import ShinyText from './templates/ShinyText';
import { Link } from 'react-router-dom';

function Experience() {
  const experience = [
    {
      id: 1,
      role_title: 'Full Stack Dev',
      company_title: 'Techwingsys',
      time_duration: 'Present',
      description: [
        'Engineered 4+ full-stack apps (MERN) with secure REST APIs (JWT auth), modular services (pagination, uploads), and global state via Redux Toolkit.',
        'Designed scalable dashboards with role-based access, analytics, and reusable UI—delivered weekly under real-world product cycles.',
        'Led full dev lifecycle—from abstract idea to deployment (Render), using GitHub workflows, PR reviews, and agile collaboration.'
      ],
      link: 'https://www.techwingsys.com/'
    },
    {
      id: 2,
      role_title: 'Stock Analyst',
      company_title: 'UW - Stocks Club',
      time_duration: 'Oct 23 - Jan 24',
      description: [
        'Conducted deep financial analysis and authored reports on TSX, NASDAQ, and NYSE-listed companies.',
        'Led research and presented weekly findings to improve strategy reports and data-backed decisions',
      ],
      link: 'https://www.linkedin.com/company/stocks-club/'
    }
  ]
  return (

    <div className="exp-flex-container">
      <h2 className='about-title' >My Experience</h2>
      <div className="flex-container">

        <div className="exp-left">
          {experience.map((exp) => (
            <div className='exp-item' key={exp.id}>
              
              <div className='one-line'>
                <div className='role-title'>{exp.role_title}</div>
                <div className='time-duration-box'>{exp.time_duration}</div>
              </div>
              
              <Link to={exp.link} className="role-title-link">
                <div className='company-title'>{exp.company_title}</div>
              </Link>
              <ShinyText text="Description" disabled={false} speed={3} className='exp-description custom-class' />
              <div className='description-box-hero'>
                {(function () {
                  const elements = [];
                  for (let i = 0; i < exp.description.length; i++) {
                    elements.push(
                      <ShinyText text={`-${exp.description[i]}`} disabled={false} speed={3} className='exp-custom-class' />
                    );
                  }
                  return elements;
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience