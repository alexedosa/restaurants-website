import { burgers } from '../data/burgers';
import { useCart } from '../context/CartContext';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const { addToCart } = useCart();

  return (
    <section className="burger-menu">
      <div className="section-header">
        <span className="subtitle">Popular Choices</span>
        <h2>Our Signature Dishes</h2>
        <div className="underline"></div>
      </div>
      <div className="burger-grid">
        {burgers.map((burger) => (
          <div key={burger.id} className="burger-card">
            <div className="card-image">
              <img src={burger.img} alt={burger.name} />
              <div className="price-tag">{burger.price}</div>
            </div>
            <div className="card-info">
              <h3>{burger.name}</h3>
              <p className="description">Experience the perfect blend of fresh ingredients and secret spices.</p>
              <button className="card-btn" onClick={() => addToCart(burger)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BurgerMenu;

