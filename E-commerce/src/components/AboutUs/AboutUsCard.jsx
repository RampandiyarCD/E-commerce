import React, { useRef, useState } from "react";
import "./aboutUs.css";
const AboutUsCard = ({ props }) => {
  const { q, a } = props;
  const tabRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const toggleTab = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="aboutUs-tab">
      <details>
        <summary onClick={toggleTab}>
          <p>{q}</p>
          <p> {isOpen ? "▼" : "▲"}</p>
        </summary>
        <div className="aboutUs-tab-open" ref={tabRef}>
          <span>{a}</span>
        </div>
      </details>
    </div>
  );
};

export default AboutUsCard;
