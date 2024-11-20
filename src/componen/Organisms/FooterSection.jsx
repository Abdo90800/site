// src/components/organisms/HeaderSection.js
import Footer from "../Molecules/Footer";
import Heading from "../Atoms/Heading";
import Text from "../Atoms/Text";
import CallToActionCard from "../Molecules/CallToActionCard";

const FooterSection = () => (
  <header className="header-section">
    <div>
      <Footer />
    </div>

    <div className="main-content">
      <Heading
        text={
          <>
            <span className="help-text">Helping Brands to Stand</span> <br />
            <span className="help-text">Out in The Digital Era</span>
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

export default FooterSection;
