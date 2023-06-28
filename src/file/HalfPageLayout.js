import React, { useEffect, useRef } from "react";
import "../style/HalfPageLayout.css";
import image from "../file/sildesimg/3.webp";

const HalfPageLayout = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-animation");
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="half-page-layout" ref={sectionRef}>
      <div className="half-page-layout__content">
        <div className="half-page-layout__image">
          <img src={image} alt="e" />
        </div>
        <div className="half-page-layout__text">
          <h1 className="half-page-layout__title">Why Choose Us</h1>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            diam elit. Nulla in ex velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HalfPageLayout;
