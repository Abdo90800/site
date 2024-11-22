// src/components/organisms/HeaderSection.js
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
            <span className="helptext">Helping Brands to Stand</span> <br />
            <span className="helptext">Out in The Digital Era</span>
          </>
        }
      />
      <Text
        className="subtext"
        text={
          <>
            <span>We are here to create the best software product for.</span>
            <br />
            <span>your business</span>
          </>
        }
        styleClass="subtext"
      />
      <CallToActionCard />
    </div>
  </header>
);

export default HeaderSection;
