import React from "react";
import HeaderSection from "../Organisms/HeaderSection";
import HomeCard from "../Organisms/HomeCard";
import OurServicesHome from "../Organisms/OurServicesHome";
import Ourwork from "../Organisms/Ourwork";
import SliderImgPhone from "../Organisms/SliderImgPhone";
import PriceSection from "../Organisms/PriceSection";
import QuestionSection from "../Organisms/QuestionSection";
import FooterSection from "../Organisms/FooterSection";

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
      <SliderImgPhone />
      <PriceSection />
      <QuestionSection />
      <div
        className="section"
        style={{
          backgroundImage: "url(/Section.png)",
          backgroundSize: "cover",
          position: "relative",
          backgroundPosition:"right"
        }}
      >
        <FooterSection />
      </div>
    </>
  );
}

export default HomeTemplate;
