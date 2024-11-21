// src/components/organisms/HeaderSection.js
import Footer from "../Molecules/Footer";
import Heading from "../Atoms/Heading";
import CallToActionCard from "../Molecules/CallToActionCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const FooterSection = () => (
  <header className="header-section w-full h-auto mx-[24px] ">
    <div>
      <Footer />
    </div>

    <div className="main-content relative">
      <Heading
        className="my-8"
        text={
          <>
            <span className="font-normal text-sm lg:text-base leading-[21px] lg:leading-[28px] text-[#C8C8C8]">
              We are here to create the best software product for
            </span>
            <br />
            <span className="font-normal text-sm lg:text-base leading-[21px] lg:leading-[28px] text-[#C8C8C8]">
              your business So, feel free to contact us
            </span>
          </>
        }
      />
      <CallToActionCard />
      <div className="mt-[60px]">
        <span className="block border-[0.5px] border-[#C8C8C880] mx-auto w-[50%] lg:w-[1216px] "></span>
        <br />
        <div className="absolute bottom-6 min-w-[1216px] h-[52px] mx-auto flex items-center lg:justify-between justify-center flex-col lg:flex-row ">
          <div className="w-[463px] grid grid-rows-3 justify-center lg:flex lg:justify-between text-center text-wrap ">
            <div>
              <p className="font-medium text-xs leading-5 text-[#C8C8C8]">
                © 2024 Copyright Wolf. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-around">
              <p className="font-medium text-xs leading-5 text-[#C8C8C8]">
                Privacy Policy
              </p>
              <p className="font-medium text-xs leading-5 text-[#C8C8C8]">
                Terms of Use
              </p>
            </div>
          </div>
          <div className="icons">
            <WhatsAppIcon className="text-[18px] text-[#C8C8C8] mx-1" />
            <LinkedInIcon className="text-[18px] text-[#C8C8C8] mx-1" />
            <FacebookIcon className="text-[18px] text-[#C8C8C8] mx-1" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default FooterSection;
