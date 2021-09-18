import React from 'react';
import Image from '../../assets/Image.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={Image} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Systematic Product Owner with a detail-oriented and thorough approach to defining requirements, outlining specifications and working with team members to bring to life high-quality products for customers. I'm a planner and problem-solver with in-depth understanding of technical products. Currently, developing my coding knowlege and hands on experience through a coding bootcamp at Vanderbilt to bringforth top techical expertise within the Product field.
        </p>
      </div>
    </section>
  );
}

export default About;
