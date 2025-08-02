import React from "react";
import AboutUsCard from "./AboutUsCard";
import "./aboutUs.css";
const AboutUs = () => {
  const Data = JSON.parse(localStorage.getItem("Data")) || [];
  const QNA = Data.QNA;

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
