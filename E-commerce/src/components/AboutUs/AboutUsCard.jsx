import React, { useRef } from "react";
import "./aboutUs.css";
const AboutUsCard = ({ props }) => {
  const { q, a } = props;
  const tabRef = useRef();

  return (
    <div className="aboutUs-tab">
      <details>
        <summary>{q}</summary>
        <div className="aboutUs-tab-open" ref={tabRef}>
          <span>{a}</span>
        </div>
      </details>
    </div>
  );
};

export default AboutUsCard;
