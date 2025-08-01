import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Shop With Us</h4>
          <div className="footer-links">
            <a href="">Products</a>
            <a href="">Offers</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-links">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">X</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Anything's Stores, All rights reserved.
      </div>
    </footer>
  );
}
