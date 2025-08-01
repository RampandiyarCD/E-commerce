import React from "react";
import AboutUsCard from "./AboutUsCard";
import QNA from "../../utils/aboutUs";
import "./aboutUs.css"
const AboutUs = () => {


  return (
    <div className="aboutUs-container">
      <h1 className="aboutUs-heading">About This Store</h1>
      {QNA.map((qna) => (
        <AboutUsCard key={qna.id} props={{ q: qna.q, a: qna.a }} />
      ))}
    </div>
  );
};

export default AboutUs;
