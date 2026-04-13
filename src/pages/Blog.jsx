import React from 'react';
import Section from '../components/Section';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { publicAsset } from '../utils/publicAsset';
import './Blog.css';

const Blog = () => {
  const pageRef = useScrollReveal();
  const receptionImage = publicAsset('images/reception.jpg');

  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Premium Oral Hygiene at Home",
      excerpt: "Discover the specific tools and techniques top dentists use to maintain perfect oral health between their clinical visits.",
      date: "Oct 12, 2023",
      category: "Hygiene",
      image: publicAsset('images/blog_1.jpg'),
      author: "Dr. Elena Rodriguez",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Demystifying Dental Implants: What to Expect",
      excerpt: "A comprehensive walkthrough of the permanent solution to missing teeth, leveraging 3D guided surgery for painless recovery.",
      date: "Nov 05, 2023",
      category: "Treatments",
      image: publicAsset('images/equipment.jpg'),
      author: "Dr. Alexander Thompson",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Invisalign vs. Traditional Aligners",
      excerpt: "An honest comparison to help you choose the ideal orthodontic path for your lifestyle, budget, and timeline.",
      date: "Dec 01, 2023",
      category: "Cosmetic",
      image: publicAsset('images/patient.jpg'),
      author: "Dr. Marcus Chen",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Why Oral Health is the Gateway to Wellness",
      excerpt: "Recent studies link gum disease to cardiovascular issues. Learn why taking care of your teeth might be the best thing for your heart.",
      date: "Jan 14, 2024",
      category: "Wellness",
      image: publicAsset('images/dentist.jpg'),
      author: "Dr. Sarah Jenkins",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="blog-page" ref={pageRef}>
      <section className="page-header relative overflow-hidden">
        <div className="page-header-bg" style={{ backgroundImage: `url("${receptionImage}")` }}></div>
        <div className="container text-center reveal-up relative z-10">
          <h1 className="text-white">Dental Insights & News</h1>
          <p className="subtitle text-white max-w-700 mx-auto">Deep dives into modern dental procedures, clinic updates, and professional hygiene advice from our leading experts.</p>
        </div>
      </section>

      <Section>
        {/* Featured Post */}
        <div className="featured-post mb-4 reveal-up">
           <div className="grid grid-2 collapse-on-mobile gap-0">
             <div className="featured-image-wrapper">
               <img src={receptionImage} alt="NovaDental Opens New Pediatric Wing" className="featured-image" />
             </div>
             <div className="featured-content">
               <span className="blog-tag">Clinic News</span>
               <h2 className="mb-1 featured-title">NovaDental Opens New Wing Dedicated to Pediatric Comfort</h2>
               <p className="text-lg color-text-light mb-2">We are thrilled to announce the opening of our brand new pediatric wing, designed specifically to eradicate dental anxiety in children using child-friendly aesthetics, VR entertainment, and specialized sedation techniques...</p>
               <div className="post-meta flex gap-2 color-text-light text-sm mb-2">
                 <span className="flex align-center gap-05"><Calendar size={14}/> Feb 20, 2024</span>
                 <span className="flex align-center gap-05"><User size={14}/> Clinic PR Team</span>
                 <span className="flex align-center gap-05"><Clock size={14}/> 10 min read</span>
               </div>
               <a href="#" className="btn btn-secondary">Read Full Story</a>
             </div>
           </div>
        </div>

        <div className="grid grid-2 gap-3 mt-4">
          {posts.map((post, index) => (
            <article key={post.id} className={`blog-card-premium reveal-up delay-${(index % 2) * 100}`}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta flex align-center justify-between mb-1">
                  <span className="blog-date flex align-center gap-05"><Calendar size={14}/>{post.date}</span>
                  <span className="blog-reading-time flex align-center gap-05"><Clock size={14}/>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-author flex align-center gap-05"><User size={14}/>{post.author}</span>
                  <a href="#" className="read-more">Read More <ArrowRight size={16}/></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
