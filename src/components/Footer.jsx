import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <div className="brand footer-brand">
            <Stethoscope size={32} className="brand-icon" />
            <div className="brand-text">
              <span className="brand-title">NovaDental</span>
              <span className="brand-subtitle">Modern Clinic</span>
            </div>
          </div>
          <p className="footer-desc">
            Providing premium dental care and aesthetic smiles in a modern, comforting environment. Your smile is our priority.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" title="Facebook" aria-label="Facebook">
              <span className="social-link-text" aria-hidden="true">Fb</span>
            </a>
            <a href="#" className="social-link" title="X" aria-label="X">
              <span className="social-link-text" aria-hidden="true">X</span>
            </a>
            <a href="#" className="social-link" title="Instagram" aria-label="Instagram">
              <span className="social-link-text" aria-hidden="true">Ig</span>
            </a>
            <a href="#" className="social-link" title="LinkedIn" aria-label="LinkedIn">
              <span className="social-link-text" aria-hidden="true">In</span>
            </a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Clinic</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/blog">Dental Blog</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="footer-col links-col">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><NavLink to="/services">Dental Checkups</NavLink></li>
            <li><NavLink to="/services">Teeth Whitening</NavLink></li>
            <li><NavLink to="/services">Dental Implants</NavLink></li>
            <li><NavLink to="/services">Root Canal Treatment</NavLink></li>
            <li><NavLink to="/services">Braces & Aligners</NavLink></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-title">Contact Details</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>123 Health Ave, Medical District, NY 10001</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@novadental.clinic</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} NovaDental Clinic. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
