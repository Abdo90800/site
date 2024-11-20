import React from "react";
import HeaderSection from "../Organisms/HeaderSection";
import HomeCard from "../Organisms/HomeCard";
import OurServicesHome from "../Organisms/OurServicesHome";
import Ourwork from "../Organisms/Ourwork";
import SliderImgPhone from "../Organisms/SliderImgPhone";
import PriceSection from "../Organisms/PriceSection";
import QuestionSection from "../Organisms/QuestionSection";

function HomeTemplate() {
  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: "url(/Section.png)",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <HeaderSection />
      </div>
      <HomeCard />
      <OurServicesHome />
      <Ourwork />
    </>
  );
}

export default HomeTemplate;
