import React from "react";
import {
  IoRestaurantOutline,
  IoBagHandleOutline,
  IoBicycleOutline,
} from "react-icons/io5";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Dine-In Experience",
      desc: "Enjoy your meal in our warm, vibrant atmosphere designed for comfort and great vibes.",
      icon: <IoRestaurantOutline />,
      features: ["Premium Seating", "Live Music Weekends", "Free Wi-Fi"],
    },
    {
      title: "Swift Takeaway",
      desc: "In a hurry? Order ahead and pick up your fresh, hot meal in minutes.",
      icon: <IoBagHandleOutline />,
      features: ["Fast Prep Time", "Secure Packaging", "Order Online"],
    },
    {
      title: "Home Delivery",
      desc: "We bring the flavor to your doorstep. Hot, fresh, and on time.",
      icon: <IoBicycleOutline />,
      features: [
        "Real-time Tracking",
        "Contactless Delivery",
        "Area-wide Coverage",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="subtitle">What We Offer</span>
          <h1>
            Beyond Just <span className="highlight">Food.</span>
          </h1>
          <p>
            We provide a range of services designed to make your dining
            experience seamless, whether you're with us or at home.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Taste the Difference?</h2>
            <p>
              Join thousands of happy customers and experience Shalom's Kitchen
              today.
            </p>
            <button className="cta-btn">View Full Menu</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
