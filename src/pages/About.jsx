import React from 'react';
import Section from '../components/Section';
import { Target, Award, Users, CheckCircle2, Heart, Shield, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { publicAsset } from '../utils/publicAsset';
import './About.css';

const About = () => {
  const pageRef = useScrollReveal();
  const receptionImage = publicAsset('images/reception.jpg');
  const treatingImage = publicAsset('images/treating.jpg');
  const dentistImage = publicAsset('images/dentist.jpg');
  const patientImage = publicAsset('images/patient.jpg');

  return (
    <div className="about-page" ref={pageRef}>
      {/* Page Header / Banner */}
      <section className="page-header relative overflow-hidden">
        <div className="page-header-bg" style={{ backgroundImage: `url("${receptionImage}")` }}></div>
        <div className="container text-center reveal-up relative z-10">
          <h1 className="text-white">Our Heritage of Excellence</h1>
          <p className="subtitle text-white max-w-700 mx-auto">Committed to redefining the standard of dental excellence through innovation, empathy, and masterful technique since 2008.</p>
        </div>
      </section>

      {/* Main Intro */}
      <Section className="pb-0">
        <div className="grid grid-2 align-center gap-4">
          <div className="reveal-left">
            <span className="section-subtitle">Our Story</span>
            <h2 className="mb-2">A Tradition of Perfect Smiles</h2>
            <p className="text-lg color-text mb-2">
              NovaDental was founded with a single uncompromising mission: to provide world-class dental care in a welcoming, stress-free, luxury environment. We observed that traditional clinical experiences were fraught with anxiety and lacking in patient-centric hospitality.
            </p>
            <p className="color-text-light mb-2">
              Over the last fifteen years, we have grown from a boutique practice into a leading regional implantology and cosmetic center. Led by industry veterans, our clinic continually invests in the absolute forefront of dental technology—from 3D cone beam scanners to AI-assisted diagnostics.
            </p>
            <ul className="mb-3 about-check-list">
               <li><CheckCircle2 size={16} className="text-primary"/> Comprehensive digital workflows</li>
               <li><CheckCircle2 size={16} className="text-primary"/> Master technicians on-site</li>
               <li><CheckCircle2 size={16} className="text-primary"/> Painless sedation protocols</li>
            </ul>
          </div>
          <div className="about-stats-grid reveal-right">
             <div className="stat-box shadow-lg">
               <h3>15k+</h3>
               <p>Smiles Restored</p>
             </div>
             <div className="stat-box shadow-lg">
               <h3>12+</h3>
               <p>Master Clinicians</p>
             </div>
             <div className="stat-box shadow-lg">
               <h3>15+</h3>
               <p>Years Heritage</p>
             </div>
             <div className="stat-box shadow-lg">
               <h3>25+</h3>
               <p>Awards Won</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Trust & Clinic Facilities */}
      <Section>
         <div className="grid grid-2 align-center gap-4">
           <div className="facility-images reveal-zoom">
             <img src={receptionImage} alt="Premium Clinic Interior with Modern Equipment" className="w-100 rounded-xl shadow-lg" style={{border: '4px solid white'}} />
           </div>
           <div className="facility-content reveal-up">
              <span className="section-subtitle">State-of-the-Art</span>
              <h2 className="mb-2">Our Premium Facilities</h2>
              <p className="mb-2">We designed our clinic to feel less like a hospital and more like a luxury wellness retreat. Enjoy our tranquil waiting suites, calming aromatherapy, and private consultation rooms equipped with ultra-comfortable ergonomic treatment chairs.</p>
              <div className="grid grid-2 gap-2 mt-2">
                 <div className="facility-feature-box">
                    <h4 className="text-primary">3D Imaging</h4>
                    <p className="text-sm color-text-light m-0">Millimeter-accurate diagnostic scans.</p>
                 </div>
                 <div className="facility-feature-box">
                    <h4 className="text-primary">In-house Lab</h4>
                    <p className="text-sm color-text-light m-0">Same-day crowns and adjustments.</p>
                 </div>
                 <div className="facility-feature-box">
                    <h4 className="text-primary">Air Filtration</h4>
                    <p className="text-sm color-text-light m-0">Surgical-grade HEPA purification.</p>
                 </div>
                 <div className="facility-feature-box">
                    <h4 className="text-primary">Sedation</h4>
                    <p className="text-sm color-text-light m-0">Nitrous and IV options available.</p>
                 </div>
              </div>
           </div>
         </div>
      </Section>

      {/* Core Values */}
      <Section lightBg>
        <div className="section-header text-center reveal-up">
          <span className="section-subtitle">Our Philosophy</span>
          <h2>Guiding Principles</h2>
        </div>
        <div className="grid grid-3">
          <div className="value-card reveal-up">
            <Target size={36} className="text-primary mb-1" />
            <h3>Our Mission</h3>
            <p className="color-text-light">To elevate the standard of oral healthcare by combining elite surgical precision with unparalleled emotional intelligence and hospitality.</p>
          </div>
          <div className="value-card reveal-up delay-100">
            <Award size={36} className="text-primary mb-1" />
            <h3>Our Vision</h3>
            <p className="color-text-light">To be internationally recognized as a pioneer in restorative and cosmetic dentistry, setting the benchmark for the modern clinical experience.</p>
          </div>
          <div className="value-card reveal-up delay-200">
            <Heart size={36} className="text-primary mb-1" />
            <h3>Our Values</h3>
            <p className="color-text-light">Absolute integrity, relentless pursuit of excellence, profound empathy, and continuous investment in clinical education.</p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="section-header text-center reveal-up">
          <span className="section-subtitle">The Experts</span>
          <h2>Meet Our Specialists</h2>
          <p className="max-w-700 mx-auto mt-1">Our clinical team consists of board-certified specialists, renowned educators, and masters in aesthetic reconstruction.</p>
        </div>
        <div className="grid grid-3">
          {/* Team Member 1 */}
          <div className="team-card reveal-zoom">
            <img src={treatingImage} alt="Dr. Alexander Thompson performing dental surgery" className="team-image" />
            <div className="team-info">
              <h3>Dr. Alexander Thompson</h3>
              <p className="team-role">Chief of Implantology</p>
              <p className="text-sm color-text-light mt-1">DDS, MS. Fellow of the ICOI. Pioneer in immediate loading protocols.</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="team-card reveal-zoom delay-100">
             <img src={dentistImage} alt="Dr. Elena Rodriguez, cosmetic dentistry specialist" className="team-image" />
            <div className="team-info">
              <h3>Dr. Elena Rodriguez</h3>
              <p className="team-role">Master Ceramist & Aesthetics</p>
              <p className="text-sm color-text-light mt-1">Creator of the "NovaSmile" technique for ultra-thin porcelain veneers.</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="team-card reveal-zoom delay-200">
             <img src={patientImage} alt="Dr. Marcus Chen, endodontic specialist" className="team-image" />
            <div className="team-info">
              <h3>Dr. Marcus Chen</h3>
              <p className="team-role">Endodontic Specialist</p>
              <p className="text-sm color-text-light mt-1">Specializing in painless, microscopic root canal therapeutics.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA Strip */}
      <section className="about-cta-section reveal-fade">
         <div className="container text-center">
            <h3 className="text-white mb-1">Ready to meet the team?</h3>
            <p className="mb-2 max-w-700 mx-auto text-lg" style={{color: 'rgba(255,255,255,0.85)'}}>Let us orchestrate a personalized treatment plan for you.</p>
            <NavLink to="/contact" className="btn btn-primary btn-lg" style={{background: 'white', color: 'var(--color-primary)'}}>Schedule a Visit</NavLink>
         </div>
      </section>
    </div>
  );
};

export default About;
