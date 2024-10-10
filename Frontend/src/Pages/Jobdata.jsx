import React from 'react';
import './JobPortal.css';
import { Link } from 'react-router-dom';

const JobPortal = () => {
 
  return (
    
    <div className="job-portal">
        <header className="header">
          <div className="logo">JobPortal</div>
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="/">Logout</a>
          </nav>
        </header>
       

        <main>
       
          <section className="banner">
            <h1>Find Your Dream Job</h1>
            <input type="text" placeholder="Search by keywords, location, or company" />
          </section>
          <section className="quick-access">
            <div className="option">
              <button className='btn'><a href='https://www.naukri.com/browse-jobs'>Browse Job Openings</a></button>
              <p>Explore available job listings and apply directly to your preferred companies.</p>
            </div>
            <div className="option">
              <button className='btn'><Link to='/Job_status' >Check Application Status</Link></button>
              <p>Track your application progress and see feedback from employers.</p>
            </div>
            <div className="option">
              <button className='btn'><Link to='/Explorejobs'>Explore Companies</Link></button>
              <p>Discover companies by industry, size, and location.</p>
            </div>
          </section>

          <section className="featured-listings">
            <h2>Featured Job Listings</h2>
            <div className="listing">
              <div>Software Engineer | Tech Company | Remote | 1 day ago</div>
             <button className='btn'> <Link to='/Adduser'>Apply Now</Link></button>
            </div>
            {/* Repeat for more listings */}
          </section>

          <section className="industry-categories">
            <h2>Explore by Industry</h2>
            <ul>
              <li>Tech</li>
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Retail</li>
              <li>Hospitality</li>
              <li>More...</li>
            </ul>
          </section>

          <section className="testimonials">
            <h2>What Our Users Say</h2>
            <blockquote>"I found my dream job in just two weeks!"</blockquote>
            <blockquote>"The application tracking feature is incredibly helpful."</blockquote>
          </section>
        </main>

        <footer>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
          <div className="social-media">
            <a href="https://www.instagram.com/lakshmi_narayana_51/">Instagram</a>
            <a href="https://github.com/Lakshminarayana51">GitHub</a>
            <a href="https://www.linkedin.com/in/lakkoju-lakshmi-narayana-2a909b310/">LinkedIn</a>
          </div>
        </footer>
      </div>
     
  );
};

export default JobPortal;
