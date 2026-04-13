import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, MapPin, Clock, Stethoscope, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar for contact info */}
      <div className="header-top">
        <div className="container header-top-content">
          <div className="header-contact-items">
            <span className="contact-item"><Phone size={14} /> +1 (555) 123-4567</span>
            <span className="contact-item"><MapPin size={14} /> 123 Health Ave, Medical District</span>
            <span className="contact-item"><Clock size={14} /> Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="header-main">
        <div className="container header-main-content">
          <NavLink to="/" className="brand">
            <Stethoscope size={32} className="brand-icon" />
            <div className="brand-text">
              <span className="brand-title">NovaDental</span>
              <span className="brand-subtitle">Modern Clinic</span>
            </div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </nav>
          
          <div className="header-actions">
             <NavLink to="/contact" className="btn btn-primary">Book Appointment</NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu} />
      
      {/* Mobile Slide-in Menu */}
      <nav className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <NavLink to="/" className="brand" onClick={closeMobileMenu}>
            <Stethoscope size={28} className="brand-icon" />
            <div className="brand-text">
              <span className="brand-title">NovaDental</span>
              <span className="brand-subtitle">Modern Clinic</span>
            </div>
          </NavLink>
          <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          <NavLink to="/" end className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"} onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"} onClick={closeMobileMenu}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"} onClick={closeMobileMenu}>Services</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"} onClick={closeMobileMenu}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "mobile-link active" : "mobile-link"} onClick={closeMobileMenu}>Contact</NavLink>
        </div>
        <div className="mobile-menu-footer">
          <NavLink to="/contact" className="btn btn-primary w-100" onClick={closeMobileMenu}>Book Appointment</NavLink>
          <div className="mobile-contact-info">
            <span><Phone size={14} /> +1 (555) 123-4567</span>
            <span><MapPin size={14} /> 123 Health Ave, Medical District</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
