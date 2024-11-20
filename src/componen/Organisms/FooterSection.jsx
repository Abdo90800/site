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
        className="my-8"
        text={
          <>
            <span className="font-normal text-base leading-[28px] text-[#C8C8C8]">
              We are here to create the best software product for
            </span>
            <br />
            <span className="font-normal text-base leading-[28px] text-[#C8C8C8]">
              your business So, feel free to contact us
            </span>
          </>
        }
      />
      <CallToActionCard />
    </div>
  </header>
);

export default FooterSection;
