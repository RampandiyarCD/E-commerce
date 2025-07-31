import React, { useState } from "react";
import "./aboutUs.css";
const AboutUsCard = ({ props }) => {
  const { q, a } = props;
  const [isOpen, setOpen] = useState(false);
  const toggleTab = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="aboutUs-tab">
      <details>
        <summary onClick={toggleTab}>
          <p>{q}</p>
          <p> {isOpen ? "▲" : "▼"}</p>
        </summary>
        <div className="aboutUs-tab-open">
          <span>{a}</span>
        </div>
      </details>
    </div>
  );
};

export default AboutUsCard;
