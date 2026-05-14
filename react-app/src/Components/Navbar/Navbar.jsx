import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoRestaurantOutline, IoCartOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import "./navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <IoRestaurantOutline size={28} />
        </div>
        <h2>SHALOM'S Kitchen</h2>
      </Link>

      <div className={`nav-content ${isOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
          <IoCloseOutline size={35} />
        </button>
        <div className="links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
        </div>

        <div className="engage">
          <Link to="/signup" onClick={closeMenu}>
            <button className="login-btn">Join Premium</button>
          </Link>
          <Link to="/cart" className="cart-link" onClick={closeMenu}>
            <div className="cart-icon-wrapper">
              <IoCartOutline size={30} className="cart-icon-svg" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </Link>
        </div>
      </div>

      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
        {isOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
      </button>
    </nav>
  );
}

export default Navbar;