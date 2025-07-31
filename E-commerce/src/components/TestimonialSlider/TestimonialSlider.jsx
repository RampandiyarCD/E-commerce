import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = ({ testimonials}) => {
  const [index, setIndex] = useState(0);

  // here is sliding changes automatically for every 5sec
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIndex((prev) => (
        prev === testimonials.length - 1 ? 0 : prev + 1));//if we reach the end go bck to start again or add 1
    },2000);

    return () => clearInterval(slideTimer);
  }, [testimonials.length]);
//here we can chnage oru slide using clicking on buttons
  const changeSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="slider-box">
      <div className="single-slide">
        <p className="text">"{testimonials[index].text}"</p>
        <div className="person-info">
          <h3 className="person-name">{testimonials[index].name}</h3>
          <p className="person-role">{testimonials[index].role}</p>
        </div>
      </div>

      <div className="dot-box">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'dot-btn active' : 'dot-btn'}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;