import React, { useState } from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { publicAsset } from '../utils/publicAsset';
import './Contact.css';

const Contact = () => {
  const pageRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const receptionImage = publicAsset('images/reception.jpg');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page" ref={pageRef}>
      <section className="page-header relative overflow-hidden">
        <div className="page-header-bg" style={{ backgroundImage: `url("${receptionImage}")` }}></div>
        <div className="container text-center reveal-up relative z-10">
          <h1 className="text-white">Let's Connect</h1>
          <p className="subtitle text-white max-w-700 mx-auto">We're here to answer any questions you have and schedule your consultation at a time convenient for you.</p>
        </div>
      </section>

      <Section>
        <div className="contact-card-wrapper reveal-up" style={{marginTop: '-6rem', position: 'relative', zIndex: 20}}>
          <div className="contact-card">
            {/* Contact Information */}
            <div className="contact-info-panel">
              <h2 className="text-white">Get In Touch</h2>
              <p className="contact-info-desc">Our team typically responds to all inquiries within 2 hours during normal business operation.</p>
              
              <div className="contact-details-list">
                <div className="contact-method">
                  <div className="contact-icon-circle"><MapPin size={22} /></div>
                  <div>
                    <h4>Luxurious Location</h4>
                    <p>123 Health Ave, Medical District<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon-circle"><Phone size={22} /></div>
                  <div>
                    <h4>Direct Line</h4>
                    <p>+1 (555) 123-4567<br/>Emergency: +1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon-circle"><Mail size={22} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@novadental.clinic</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon-circle"><Clock size={22} /></div>
                  <div>
                    <h4>Clinic Hours</h4>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle2 size={48} className="text-primary" />
                  <h3>Request Received!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 2 hours to confirm your appointment.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="text-secondary mb-2">Request Appointment</h3>
                  
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" placeholder="E.g., John Doe" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input type="tel" id="contact-phone" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input type="email" id="contact-email" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contact-service">Premium Service Interest</label>
                    <select id="contact-service">
                      <option value="consultation">Initial Consultation & Scan</option>
                      <option value="implants">Dental Implants</option>
                      <option value="cosmetic">Cosmetic Veneers</option>
                      <option value="whitening">Laser Whitening</option>
                      <option value="orthodontics">Orthodontics / Invisalign</option>
                      <option value="rootcanal">Root Canal Therapy</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contact-message">Message (Optional)</label>
                    <textarea id="contact-message" rows="4" placeholder="Any specific dental anxieties or concerns we should know about?"></textarea>
                  </div>
                  
                  <button type="submit" id="contact-submit-btn" className="btn btn-primary w-100 btn-lg">Complete Request <ArrowRight size={18}/></button>
                  <p className="text-sm color-text-light text-center mt-1">100% HIPAA compliant and discrete.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <section className="map-section section pt-0">
        <div className="container">
           <div className="map-wrapper">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152643883013!2d-73.9880199234852!3d40.75712203551522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700984832598!5m2!1sen!2sus" 
               width="100%" 
               height="400" 
               style={{border:0, display: 'block'}} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="NovaDental Clinic Location">
             </iframe>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
