import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoTiktok, IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">SHALOM'S Kitchen</h2>
            <p className="brand-desc">Serving the most delicious handcrafted meals since 2010. Quality you can taste in every bite.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><IoLogoInstagram size={20} /></a>
              <a href="#" aria-label="Facebook"><IoLogoFacebook size={20} /></a>
              <a href="#" aria-label="Twitter"><IoLogoTwitter size={20} /></a>
              <a href="#" aria-label="TikTok"><IoLogoTiktok size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Menu</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><IoLocationOutline /> Ogun State, Mowe.</p>
            <p>Redemption City, T.A 101011</p>
            <p className="phone"><IoCallOutline /> +234 (706) 142-5970</p>
            <p className="email"><IoMailOutline /> hello@shalomskitchen.com</p>
          </div>

          <div className="footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Get exclusive offers and news delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shalom's Kitchen. All rights reserved. Designed by Alex.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>    
  )
}

export default Footer;