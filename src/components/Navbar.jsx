import React, { useState, useEffect, useMemo } from 'react'
import './Styles/Navbar.css'
import {Home, Information, Workflow, MessageBadge} from './Icons/icons'

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
    { id: 'contact', label: 'Contact', icon: MessageBadge, href: '#contact' }
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

  return (
    <div className={`wrap-container-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <ul className={`navbar-main ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
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