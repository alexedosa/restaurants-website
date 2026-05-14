import React from 'react';
import { IoColorWandOutline, IoLeafOutline, IoFlashOutline, IoPeopleOutline } from 'react-icons/io5';
import './Experience.css';

const Experience = () => {
  const vibes = [
    {
      icon: <IoColorWandOutline />,
      title: "Chef's Art",
      desc: "Every dish is a masterpiece, crafted with passion and culinary expertise."
    },
    {
      icon: <IoLeafOutline />,
      title: "Farm Fresh",
      desc: "We source only the finest local ingredients for every dish."
    },
    {
      icon: <IoFlashOutline />,
      title: "Swift Service",
      desc: "Your food arrives hot and fresh, exactly when you need it."
    },
    {
      icon: <IoPeopleOutline />,
      title: "Community",
      desc: "A warm, welcoming space for friends and family to gather."
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">The Vibe</span>
          <h2>More Than Just a Meal</h2>
          <div className="underline"></div>
        </div>
        <div className="vibes-grid">
          {vibes.map((vibe, index) => (
            <div key={index} className="vibe-card">
              <div className="vibe-icon">{vibe.icon}</div>
              <h3>{vibe.title}</h3>
              <p>{vibe.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
