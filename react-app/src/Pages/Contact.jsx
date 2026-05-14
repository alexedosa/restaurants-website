import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="subtitle">Get In Touch</span>
          <h1>
            We'd Love to <span className="highlight">Hear From You</span>
          </h1>
          <p>
            Have a question, feedback, or a special inquiry? Our team is here to
            help you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <div className="icon">
                  <IoLocationOutline />
                </div>
                <div>
                  <h3>Visit Us</h3>
                  <p>Ogun State, Mowe. Redemption City, T.A 101011</p>
                </div>
              </div>
              <div className="info-card">
                <div className="icon">
                  <IoCallOutline />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+234 (706) 142-5970</p>
                  <p>+234 (801) 000-0000</p>
                </div>
              </div>
              <div className="info-card">
                <div className="icon">
                  <IoMailOutline />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@shalomskitchen.com</p>
                  <p>support@shalomskitchen.com</p>
                </div>
              </div>
              <div className="info-card">
                <div className="icon">
                  <IoTimeOutline />
                </div>
                <div>
                  <h3>Opening Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 10:00 PM</p>
                  <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Special Request</option>
                    <option>Feedback</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <p>
            <span style={{ display: "flex", justifyContent: "center" }}>
              <IoLocationOutline size={24} />
            </span>{" "}
            <br /> Interactive Map View of the Restaurant. <br />
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              (Coming Soon)
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
