import React, { useState, useEffect, useMemo } from 'react'
import './Styles/Navbar.css'
import { Home, Information, Workflow, MessageBadge } from './Icons/icons'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const iconStyle = { color: 'white', height: 30, width: 30 };

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: Information, href: '#about' },
    { id: 'experience', label: 'Experience', icon: Workflow, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: Workflow, href: '#projects' },
  ], []);

  // Handle smooth scrolling
  const handleNavClick = (e, href, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Handle keyboard navigation
  const handleKeyDown = (e, href, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(e, href, sectionId);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle resume download
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/my-portfolio/resume.pdf';
    link.download = 'Jino_Baby_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`wrap-container-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <ul className={`navbar-main ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {/* Close button for mobile menu */}
          {isMobileMenuOpen && (
            <button
              className="mobile-close-btn"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'rgba(192, 117, 219, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                color: 'var(--color-light)',
                zIndex: 1002,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--color-main)';
                e.target.style.color = 'var(--background-black)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(192, 117, 219, 0.2)';
                e.target.style.color = 'var(--color-light)';
              }}
            >
              ✕
            </button>
          )}
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className={isActive ? 'active' : ''}>
                <IconComponent style={iconStyle} />
                <a
                  className='nav-lists'
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.href, item.id)}
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          {/* Resume Download Button */}
          <li className="resume-btn-list">
            <a
              href="/my-portfolio/resume.pdf"
              className="resume-btn nav-lists"
              download="Jino_Baby_Resume.pdf"
              onClick={handleResumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="Download Resume"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar