import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: '1. How can I place an order?',
      answer:
        'You can browse our products, select the items you want, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.',
    },
    {
      question: '2. What payment methods do you accept?',
      answer:
        'We accept major credit and debit cards, net banking, UPI, and popular digital wallets for your convenience.',
    },
    {
      question: '3. How long does delivery take?',
      answer:
        'Delivery usually takes between 3 to 7 business days depending on your location. You will receive a tracking number once your order is shipped.',
    },
    {
      question: '4. What is your return policy?',
      answer:
        'If you are not satisfied with your purchase, you can return the item within 15 days of delivery, provided it is unused and in original packaging. Please refer to our Returns & Refunds page for more details.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="faq-item"
          onClick={() => handleClick(index)}
          style={{ cursor: 'pointer' }}
        >
          <h3 className="faq-question">{item.question}</h3>
          {activeIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
