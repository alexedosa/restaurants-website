import React from 'react';
import { IoStar } from 'react-icons/io5';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Tunde Oladapo",
      role: "Local Foodie",
      text: "The best burgers in Mowe! The secret sauce is actually magical. SHALOM'S Kitchen never misses.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Regular Customer",
      text: "I love the vibe here. The incredible chef's specials and the fresh Kunu make it the perfect spot for me.",
      rating: 5
    },
    {
      name: "Chidi Okafor",
      role: "Burger Enthusiast",
      text: "Quality you can taste. You can tell the ingredients are fresh. Definitely my go-to spot now.",
      rating: 5
    },
    {
      name: "Efe Williams",
      role: "Burger Lover",
      text: "The spicy wings are out of this world! Perfect balance of heat and flavor. 10/10 recommendation.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Testimonials</span>
          <h2>What Our Foodies Say</h2>
          <div className="underline"></div>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <IoStar key={i} />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="user-info">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
