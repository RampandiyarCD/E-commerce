


import { useState, useEffect } from "react";
import "./offerBanner.css";

const OfferBanner = () => {
  const [showOffer, setShowOffer] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); 

  useEffect(() => {
    const timer = setTimeout(() => {
      startClosing();
    }, 121000);

    return () => clearTimeout(timer);
  }, []);

  const startClosing = () => {
    setIsClosing(true);
    setTimeout(() => setShowOffer(false), 2000);
  };

  const handleClose = () => {
    startClosing();
  };
  
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
  }, 1000);
  return () => clearInterval(timer);
}, []);

  if (!showOffer) return null;

const formatTime = () => {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

  return (
    <div className={`offer_container ${isClosing ? "offer_container_closing" : ""}`}>
      <div className="offer_ribbon">HOT DEAL</div>
      
      <div className="offer_discount_badge">60% OFF</div>
      
      <div className="offer_content">
        <h1 className="offer_heading">T-Shirt + Pant Combo</h1>
        <p className="offer_subheading">Limited Time Offer</p>
        
        <div className="offer_benefits_list">
          <p className="offer_benefit_item">Free delivery on all orders</p>
          <p className="offer_benefit_item">Up to ₹100 cashback</p>
        </div>
        
        <p className="offer_terms">With SBI Credit Card EMI Transactions</p>
        
        <div className="offer_timer">
          <span>Offer ends in:</span>
          <div className="offer_timer_display">00:{formatTime()}</div>
        </div>
      </div>
      
      <button className="offer_close_button" onClick={handleClose}>
        ×
      </button>
    </div>
  );
};

export default OfferBanner;