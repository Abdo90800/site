// src/components/organisms/HeaderSection.js
import React from "react";
import Navbar from "../molecules/Navbar";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import CallToActionCard from "../molecules/CallToActionCard";

const HeaderSection = () => (
  <header className="header-section">
    <div>
      <Navbar />
    </div>

    <div className="main-content">
      <Heading
        text={
          <>
            <span>Helping Brands to Stand</span> <br />
            <span> Out in The Digital Era</span>
          </>
        }
    
      />
      <Text
      className="text-weare"
        text={
          <>
            <span>We are here to create the best software product for.</span>
            <br />
            <span>your business</span>
          </>
        }
        styleClass="subtext"
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "white",
          lineHeight: "24px",
          textAlign: "center",
      
        }}
      />
      <CallToActionCard />
    </div>
  </header>
);

export default HeaderSection;
