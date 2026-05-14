import { Link } from 'react-router-dom';
import './Hero.css';
import burgerImage from "../assets/burger.png"

export default function Hero() {
  return (
    <section className="hero-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Savor the <span className="highlight">Flavor</span> of SHALOM'S Kitchen
          </h1>
          <p className="hero-sub">Handcrafted dishes, bold sauces, and warm vibes that make every bite a celebration.</p>
          <div className="hero-actions">
            <Link to="/products" className="order-btn">Order Now</Link>
            <Link to="/about" className="learn-btn">Our Story</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={burgerImage} alt="Shalom's Kitchen Signature Burger" className="hero-img-main" />
          <div className="hero-badge">
            <span className="badge-text">New Summer Menu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
