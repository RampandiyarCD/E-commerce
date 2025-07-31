import React from "react";
import AboutUsCard from "./AboutUsCard";
import QNA from "../../utils/aboutUs";

const AboutUs = () => {


  return (
    <div className="aboutUs-container">
      <h1 className="text-white">About US</h1>
      {QNA.map((qna) => (
        <AboutUsCard key={qna.id} props={{ q: qna.q, a: qna.a }} />
      ))}
    </div>
  );
};

export default AboutUs;
