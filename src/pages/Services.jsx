import React from 'react';
import Section from '../components/Section';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, Sparkles, Stethoscope, Wrench, Smile, Diamond } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { publicAsset } from '../utils/publicAsset';
import './Services.css';

const Services = () => {
  const pageRef = useScrollReveal();
  const equipmentImage = publicAsset('images/equipment.jpg');

  const servicesList = [
    {
      id: 1,
      title: "Preventative & General Dentistry",
      description: "Our comprehensive oral exams and hygienic cleanings use specialized ultrasonic scalers to painlessly remove plaque and tartar. Regular maintenance is the bedrock of lifelong oral health.",
      icon: <Shield size={28} />,
      bullets: ["Digital X-Rays", "Oral Cancer Screenings", "Ultrasonic Cleanings"]
    },
    {
      id: 2,
      title: "Premium Teeth Whitening",
      description: "Erase years of coffee, tea, and natural staining with our proprietary laser whitening system. Achieve a smile up to 8 shades brighter in a single 60-minute relaxing session.",
      icon: <Sparkles size={28} />,
      bullets: ["In-Clinic Laser Focus", "Take-Home Kits", "Zero Sensitivity Formulation"]
    },
    {
      id: 3,
      title: "Restorative Implants",
      description: "Missing teeth can alter your facial structure and chewing efficiency. We insert biocompatible titanium posts that act and feel identically to natural tooth roots.",
      icon: <Stethoscope size={28} />,
      bullets: ["3D Guided Placement", "Bone Grafting", "All-on-4 Solutions"]
    },
    {
      id: 4,
      title: "Endodontic Therapy (Root Canals)",
      description: "Eradicate severe tooth decay without losing your natural tooth. Our microscopic endodontic therapy utilizes rotary instruments to remove infection quickly and completely pain-free.",
      icon: <Wrench size={28} />,
      bullets: ["Microscope-Assisted", "Painless Sedation", "Same-Day Crowns"]
    },
    {
      id: 5,
      title: "Orthodontics & Invisalign",
      description: "Straighten your teeth invisibly without the hassle of metal brackets. Our digital scanners model the perfect trajectory for your smile using custom clear aligners.",
      icon: <Smile size={28} />,
      bullets: ["Invisalign Certified", "Clear Ceramic Braces", "Accelerated Paths"]
    },
    {
      id: 6,
      title: "Cosmetic Veneers",
      description: "Instantly correct chips, gaps, or severe discoloration with ultra-thin, custom-crafted porcelain shells sculpted perfectly for your facial symmetry.",
      icon: <Diamond size={28} />,
      bullets: ["Zero-Prep Options", "Lumineers", "Smile Previews"]
    }
  ];

  return (
    <div className="services-page" ref={pageRef}>
      <section className="page-header relative overflow-hidden">
        <div className="page-header-bg" style={{ backgroundImage: `url("${equipmentImage}")` }}></div>
        <div className="container text-center reveal-up relative z-10">
          <h1 className="text-white">Our Master Treatments</h1>
          <p className="subtitle text-white max-w-700 mx-auto">Providing a full spectrum of surgical, restorative, and cosmetic enhancements under one luxurious roof.</p>
        </div>
      </section>

      <Section>
        <div className="section-header text-center reveal-up">
           <span className="section-subtitle">What We Do</span>
           <h2 className="mb-1">Precision Dental Care</h2>
           <p className="max-w-700 mx-auto">We leverage state-of-the-art diagnostic imaging and microscopic procedures to guarantee that every treatment is minimally invasive, highly effective, and entirely comfortable.</p>
        </div>
        <div className="grid grid-2 gap-4">
          {servicesList.map((service, index) => (
            <div key={service.id} className={`service-card-premium reveal-up delay-${(index % 2) * 100}`}>
              <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="flex align-start gap-2 mb-2">
                 <div className="service-icon-bg-alt shrink-0">
                   {service.icon}
                 </div>
                 <div>
                    <h3 className="text-xl mb-0">{service.title}</h3>
                 </div>
              </div>
              <p className="color-text-light mb-2 flex-grow">{service.description}</p>
              
              <ul className="service-bullets mb-3">
                 {service.bullets.map((bullet, i) => (
                    <li key={i}><CheckCircle2 size={16} className="text-primary" /> {bullet}</li>
                 ))}
              </ul>
              <NavLink to="/contact" className="service-link-alt mt-auto border-top pt-2">Book This Treatment <ArrowRight size={16}/></NavLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Embedded Technology Banner */}
      <section className="tech-banner-section reveal-fade">
         <div className="container grid grid-2 align-center gap-4">
            <div className="reveal-left">
               <img src={equipmentImage} alt="Advanced Dental Technology Equipment" className="rounded-xl shadow-lg w-100" style={{border: '4px solid white'}} />
            </div>
            <div className="reveal-right">
               <span className="section-subtitle">Innovation</span>
               <h2 className="mb-2">Powered by Advanced Technology</h2>
               <p className="text-lg">Our commitment to excellence means we never stop investing in clinical technology. We exclusively utilize ultra-low dose digital radiographs, 3D printing for immediate restorations, and intra-oral scanning algorithms.</p>
               <p>This allows us to eliminate messy impressions, reduce your time in the chair, and provide completely predictable outcomes before treatment even begins.</p>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section reveal-fade relative text-center">
        <div className="container text-center reveal-zoom relative z-10">
          <h2 className="mb-1 text-white">Unsure what you need?</h2>
          <p className="max-w-700 mx-auto text-lg mb-3" style={{color: 'rgba(255,255,255,0.85)'}}>Schedule a painless, complimentary consultation. We will provide a thorough digital scan and consult with you on all available options.</p>
          <NavLink to="/contact" className="btn btn-primary btn-lg" style={{background: 'white', color: 'var(--color-primary)'}}>Schedule Consultation</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Services;
