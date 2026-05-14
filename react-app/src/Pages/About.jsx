import React from 'react';
import { IoFlameOutline, IoHeartOutline, IoSparklesOutline } from 'react-icons/io5';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="subtitle">Our Story</span>
          <h1>Quality, Tradition, & <span className="highlight">SHALOM'S Kitchen</span></h1>
          <p>Founded in 2010, Shalom's Kitchen has been the cornerstone of handcrafted meals and authentic flavors in the heart of Ogun State.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="text-box">
              <h2>The Passion Behind Every Bite</h2>
              <p>We believe that food is more than just sustenance; it's an experience. That's why we source only the freshest local ingredients and follow traditional recipes passed down through generations, all while adding our unique "Shalom's" twist.</p>
              <p>Our ingredients are never frozen, our sauces are made daily from scratch, and our vibes? Always warm and welcoming.</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h3>50k+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-card">
                <h3>12</h3>
                <p>Signature Sauces</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Fresh Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="underline"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon"><IoFlameOutline size={40} color="var(--primary)" /></div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our ingredients or the preparation of our meals.</p>
            </div>
            <div className="value-card">
              <div className="icon"><IoHeartOutline size={40} color="var(--primary)" /></div>
              <h3>Community</h3>
              <p>Shalom's Kitchen is more than a restaurant; it's a place where the community comes together.</p>
            </div>
            <div className="value-card">
              <div className="icon"><IoSparklesOutline size={40} color="var(--primary)" /></div>
              <h3>Innovation</h3>
              <p>We constantly experiment with new flavors while respecting the classics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
