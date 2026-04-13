import React from 'react';
import Section from '../components/Section';
import { ArrowRight, CheckCircle2, Star, Quote, Award, Users, Smile, Stethoscope, Shield, Heart, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const Home = () => {
  const pageRef = useScrollReveal();

  return (
    <div className="home-page" ref={pageRef}>
      {/* Premium Hero Section */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="hero-decorative-circle"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ animation: 'heroFadeUp 0.6s ease-out 0.15s both' }}>
              Experience the Pinnacle of <br />
              <span className="text-gradient">Modern Dentistry.</span>
            </h1>
            <p className="hero-subtitle" style={{ animation: 'heroFadeUp 0.6s ease-out 0.3s both' }}>
              Step into a world combining state-of-the-art technology with luxurious comfort. Our expert team ensures every patient receives personalized, world-class treatment in a tranquil environment.
            </p>
            <div className="hero-actions" style={{ animation: 'heroFadeUp 0.6s ease-out 0.45s both' }}>
              <NavLink to="/contact" className="btn btn-primary btn-lg hero-cta-primary">Book Consultation <ArrowRight size={18} /></NavLink>
              <a href="tel:+15551234567" className="btn btn-secondary btn-lg">Talk to an Expert</a>
            </div>
            
            <div className="hero-features" style={{ animation: 'heroFadeUp 0.6s ease-out 0.6s both' }}>
              <div className="feature"><CheckCircle2 size={18} className="text-primary" /> Top Ranked Team</div>
              <div className="feature"><CheckCircle2 size={18} className="text-primary" /> Advanced Tech</div>
              <div className="feature"><CheckCircle2 size={18} className="text-primary" /> Stress-free Care</div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Preview - Enhanced layout */}
      <Section lightBg>
        <div className="section-header text-center reveal-up" style={{marginBottom: '2rem', marginTop: '-1.5rem'}}>
          <span className="section-subtitle">Premium Treatments</span>
          <h2>Comprehensive Dental Solutions</h2>
          <p className="max-w-700 mx-auto mt-1">From routine maintenance to complete smile makeovers, our clinic utilizes cutting-edge medical hardware and premium materials.</p>
        </div>
        
        <div className="grid grid-3 services-grid">
          <div className="service-card reveal-up">
            <div className="service-icon-bg">
              <Shield size={28} className="text-primary" />
            </div>
            <h3>Preventive Dentistry</h3>
            <p>Comprehensive oral screening, deep cleaning, and expert diagnostics using 3D imaging technology.</p>
            <NavLink to="/services" className="service-link">Discover More &rarr;</NavLink>
          </div>
          
          <div className="service-card service-card-featured reveal-up delay-100">
            <div className="service-icon-bg">
              <Stethoscope size={28} />
            </div>
            <h3>Advanced Implants</h3>
            <p>Permanent, masterfully crafted tooth replacements modeled precisely for your facial structure.</p>
            <NavLink to="/services" className="service-link" style={{color: 'rgba(255,255,255,0.9)'}}>Discover More &rarr;</NavLink>
          </div>
          
          <div className="service-card reveal-up delay-200">
            <div className="service-icon-bg">
              <Zap size={28} className="text-primary" />
            </div>
            <h3>Cosmetic Aesthetics</h3>
            <p>Invisalign, porcelain veneers, and professional laser whitening for a striking, confident appearance.</p>
            <NavLink to="/services" className="service-link">Discover More &rarr;</NavLink>
          </div>
        </div>
        <div className="text-center mt-3 reveal-up">
           <NavLink to="/services" className="btn btn-secondary">View All Treatments</NavLink>
        </div>
      </Section>

      {/* Enhanced About Preview / Why Choose Us */}
      <Section>
        <div className="grid grid-2 align-center gap-4">
          <div className="about-collage-wrapper reveal-left">
             <img src="/images/reception.png" alt="Luxurious Reception Area" className="about-image image-main" />
             <img src="/images/equipment.png" alt="State-of-the-Art Equipment" className="about-image image-secondary shadow-lg" />
             <div className="experience-badge">
               <span className="experience-number">15+</span>
               <span className="experience-text">Years of Excellence</span>
             </div>
          </div>
          <div className="about-content reveal-right">
            <span className="section-subtitle">Why Choose NovaDental</span>
            <h2 className="mb-2">We redefined the dental experience.</h2>
            <p className="mb-2 text-lg">
              Going to the dentist shouldn't evoke anxiety. We designed NovaDental from the ground up to feel like a premium wellness spa, staffed exclusively by elite dental professionals.
            </p>
            <div className="feature-grid mt-2">
               <div className="feature-item">
                  <div className="feature-icon"><CheckCircle2 className="text-primary"/></div>
                  <div>
                    <h4>World-Class Sterilization</h4>
                    <p className="text-sm">Hospital-grade hygiene standards across all our operating rooms.</p>
                  </div>
               </div>
               <div className="feature-item mt-1">
                  <div className="feature-icon"><Heart className="text-primary" size={20}/></div>
                  <div>
                    <h4>Anxiety-Free Methods</h4>
                    <p className="text-sm">Offering sedation dentistry and relaxing amenities overhead.</p>
                  </div>
               </div>
               <div className="feature-item mt-1">
                  <div className="feature-icon"><Shield className="text-primary" size={20}/></div>
                  <div>
                    <h4>Transparent Consultations</h4>
                    <p className="text-sm">Clear pricing and detailed 3D walkthroughs of your treatment.</p>
                  </div>
               </div>
            </div>
            <NavLink to="/about" className="btn btn-secondary mt-3">Read Our Full Story</NavLink>
          </div>
        </div>
      </Section>

      {/* Doctor Highlight Section */}
      <Section lightBg>
         <div className="doctor-highlight-wrapper">
            <div className="doctor-image-container reveal-left">
               <img src="/images/treating.png" alt="Dr. Thompson performing a dental procedure" className="doctor-image" />
            </div>
            <div className="doctor-info reveal-right">
               <span className="section-subtitle">Master Expertise</span>
               <h2 className="mb-1">Meet Our Lead Specialist</h2>
               <blockquote className="doctor-quote">
                 "True dentistry is an art form. We don't just fix teeth; we architect smiles that change how you carry yourself in the world."
               </blockquote>
               <h4 className="mb-0 text-primary">Dr. Alexander Thompson, DDS</h4>
               <p className="text-sm font-medium">Fellow, International Congress of Oral Implantologists</p>
               <div className="doctor-credentials mt-2">
                 <span className="credential"><CheckCircle2 size={16} /> 15+ Years Clinical Experience</span>
                 <span className="credential"><CheckCircle2 size={16} /> Pioneer in Guided Implant Surgery</span>
                 <span className="credential"><CheckCircle2 size={16} /> 500+ Successful Implant Cases</span>
               </div>
            </div>
         </div>
      </Section>

      {/* Testimonials Section */}
      <section className="testimonials-section section relative">
         <div className="container">
            <div className="section-header text-center reveal-up">
               <span className="section-subtitle" style={{color: 'rgba(32, 178, 170, 0.9)'}}>Patient Stories</span>
               <h2 className="text-white">What Our Clients Say</h2>
            </div>
            
            <div className="grid grid-3">
               <div className="testimonial-card reveal-up">
                  <Quote size={36} className="quote-icon" />
                  <p className="testimonial-text">"I have always had extreme anxiety regarding dentists, but the team here completely changed my perspective. The facility feels like a high-end spa, and the procedure was entirely painless."</p>
                  <div className="testimonial-author">
                     <div className="author-avatar" style={{background: 'linear-gradient(135deg, #20B2AA, #178a84)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem'}}>SJ</div>
                     <div>
                        <h4>Sarah Jenkins</h4>
                        <div className="stars"><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/></div>
                     </div>
                  </div>
               </div>

               <div className="testimonial-card reveal-up delay-100">
                  <Quote size={36} className="quote-icon" />
                  <p className="testimonial-text">"They handled my complex implant surgery flawlessly. The 3D scanning technology they used was fascinating, and the final result is indistinguishable from my natural teeth."</p>
                  <div className="testimonial-author">
                     <div className="author-avatar" style={{background: 'linear-gradient(135deg, #0f172a, #1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem'}}>DC</div>
                     <div>
                        <h4>David Chen</h4>
                        <div className="stars"><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/></div>
                     </div>
                  </div>
               </div>

               <div className="testimonial-card reveal-up delay-200">
                  <Quote size={36} className="quote-icon" />
                  <p className="testimonial-text">"From the front desk staff to the hygienists and doctors, everyone operates at the highest level of care. Best dental clinic in the city, hands down."</p>
                  <div className="testimonial-author">
                     <div className="author-avatar" style={{background: 'linear-gradient(135deg, #20B2AA, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.125rem'}}>MR</div>
                     <div>
                        <h4>Maria Rodriguez</h4>
                        <div className="stars"><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/><Star size={14} fill="var(--color-primary)" className="text-primary"/></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Blog Preview Section */}
      <Section>
         <div className="section-header text-center reveal-up">
            <span className="section-subtitle">Dental Insights</span>
            <h2>Latest From Our Journal</h2>
         </div>
         <div className="grid grid-3">
            <div className="blog-card reveal-up">
               <div className="blog-image-wrapper">
                  <img src="/images/blog_1.png" alt="Oral Hygiene Guide" className="blog-image" />
                  <span className="blog-category">Hygiene</span>
               </div>
               <div className="blog-content">
                  <span className="blog-date">Oct 12, 2023</span>
                  <h3>The Ultimate Guide to Premium Oral Hygiene at Home</h3>
                  <p>Discover the techniques top dentists use to maintain perfect oral health between clinical visits.</p>
                  <NavLink to="/blog" className="read-more">Read Article &rarr;</NavLink>
               </div>
            </div>

            <div className="blog-card reveal-up delay-100">
               <div className="blog-image-wrapper">
                  <img src="/images/equipment.png" alt="Dental Implant Equipment" className="blog-image" />
                  <span className="blog-category">Treatments</span>
               </div>
               <div className="blog-content">
                  <span className="blog-date">Nov 05, 2023</span>
                  <h3>Demystifying Dental Implants: What to Expect</h3>
                  <p>A comprehensive walkthrough of the permanent solution to missing teeth, leveraging 3D guided surgery.</p>
                  <NavLink to="/blog" className="read-more">Read Article &rarr;</NavLink>
               </div>
            </div>

            <div className="blog-card reveal-up delay-200">
               <div className="blog-image-wrapper">
                  <img src="/images/patient.png" alt="Smiling Patient" className="blog-image" />
                  <span className="blog-category">Cosmetic</span>
               </div>
               <div className="blog-content">
                  <span className="blog-date">Dec 01, 2023</span>
                  <h3>Invisalign vs. Traditional Aligners</h3>
                  <p>An honest comparison to help you choose the ideal orthodontic path for your lifestyle and profession.</p>
                  <NavLink to="/blog" className="read-more">Read Article &rarr;</NavLink>
               </div>
            </div>
         </div>
      </Section>

      {/* CTA Section */}
      <section className="cta-section reveal-fade relative overflow-hidden">
        <div className="cta-bg-layer"></div>
        <div className="container text-center reveal-zoom relative z-10">
          <h2 className="mb-1 text-white">Elevate Your Smile Today.</h2>
          <p className="max-w-700 mx-auto text-lg mb-3" style={{color: 'rgba(255,255,255,0.85)'}}>Schedule a personalized consultation with our experts and discover the difference of premium dental care.</p>
          <div className="cta-buttons">
            <NavLink to="/contact" className="btn btn-primary btn-lg px-6 cta-book-btn">Book Consultation</NavLink>
            <span className="separator mx-2 text-white">or</span>
            <a href="tel:+15551234567" className="text-white hover-primary font-bold">Call (555) 123-4567</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
