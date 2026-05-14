import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { burgers } from '../data/burgers';
import { useCart } from '../context/CartContext';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();
  
  const categories = ['All', 'Burgers', 'Sides', 'Drinks', 'Combos'];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <span className="subtitle">Shalom's Kitchen Menu</span>
          <h1>Experience <span className="highlight">Pure Flavor</span></h1>
          <p>Every dish is prepared with passion and the finest ingredients to ensure a delightful feast.</p>
        </div>
      </section>

      <section className="products-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {burgers.map((burger) => (
              <div key={burger.id} className="product-card">
                <div className="product-image">
                  <img src={burger.img} alt={burger.name} />
                  <div className="product-badge">Best Choice</div>
                </div>
                <div className="product-info">
                  <div className="title-price">
                    <h3>{burger.name}</h3>
                    <span className="price">{burger.price}</span>
                  </div>
                  <p className="desc">Signature double patty with our secret house sauce and caramelized onions.</p>
                  <div className="product-footer">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => <IoStar key={i} color="var(--accent)" />)}
                      <span> (4.9)</span>
                    </div>
                    <button className="add-btn" onClick={() => addToCart(burger)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
