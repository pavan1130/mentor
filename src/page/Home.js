import React from "react";
import "../style/Home.css";
import OurServices from "../file/OurServices";
// import { Route } from "react-router-dom";
import Footer from "../helps/Footer";
import ImageSlider from "../file/ImageSlider";
import HalfPageLayout from "../file/HalfPageLayout";

function Home() {
  return (
    <div className="home">
      <div className="empty-space"></div>
      <ImageSlider />

      <div className="empty-space"></div>
      {/* <div className="about">
        <h2>Talk to Us</h2>
        <div className="button-container">
          <button
            className="button primary-button"
            onClick={handleButton1Click}
          >
            REGISTER
          </button>
          <button
            className="button secondary-button"
            onClick={handleButton2Click}
          >
            GUEST USER
          </button>
        </div>
      </div> */}
      <div></div>
      <HalfPageLayout />
      <OurServices />
      <Footer />
    </div>
  );
}
export default Home;
