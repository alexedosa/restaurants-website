import React from 'react';
import { IoCartOutline, IoTrashOutline, IoAddOutline, IoRemoveOutline, IoCardOutline, IoBusinessOutline, IoCubeOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const deliveryFee = cartItems.length > 0 ? 1500 : 0;
  const total = cartTotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Your <span className="highlight">Cart</span></h1>
          <p>{cartItems.length} items in your basket</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}><IoRemoveOutline /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}><IoAddOutline /></button>
                  </div>
                  <div className="item-total">
                    ₦{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <IoTrashOutline />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₦{cartTotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
              <div className="payment-icons">
                <span><IoCardOutline /> Visa</span>
                <span><IoBusinessOutline /> Bank Transfer</span>
                <span><IoCubeOutline /> Cash on Delivery</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-icon"><IoCartOutline size={80} opacity={0.3} /></div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet. Go check our menu!</p>
            <button className="browse-btn" onClick={() => window.location.href='/products'}>Browse Menu</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
