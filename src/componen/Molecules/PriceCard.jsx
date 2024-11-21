import Buttonn from "../Atoms/Buttonn";
import Heading from "../Atoms/Heading";
import ListUl from "../Atoms/ListUl";
import PriceCardItem from "../Atoms/PriceCardAtom";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Text from "../Atoms/Text";
import Imgatom from "../Atoms/Imgatom";
const PriceCard = () => {
  const listItems = ["Web App", "Dashboard", "Mobile App", "Landing Page"];
  const cardsData = [
    {
      image: "/images/priceimg/img-1.png",
      content: (
        <div className="w-[616px] h-[491px] pt-11 pl-11 flex flex-col ">
          <Heading
            className="font-semibold text-2xl leading-9 text-[#121212] w-[302px] h-[72px]"
            text="Flexible Pricing for Companies of All Sizes."
          />
          <div>
            <Heading className="font-normal text-base" text="We Offer : " />
            <ListUl
              className="list-disc pl-5 font-normal text-base"
              items={listItems}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[302px] h-[91px] my-6">
            <Buttonn className="mb-4">Book a Free 15-min call</Buttonn>
            <p className="font-normal text-lg">
              Prefer E-mail?{" "}
              <strong className="text-[#121212] underline">Let’s Chat</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      // عنصر بدون صورة، بمحتوى مخصص
      content: (
        <div className="w-[300px] h-full bg-[#A68356] flex flex-col justify-between rounded-2xl p-6">
          <div className="flex  items-center">
            <div className="w-[138px] h-[107px] flex flex-col gap-2">
              <button className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center">
                <ImportantDevicesIcon className="text-white w-[25px] h-[25px]" />
              </button>
              <Text
                text={
                  <div>
                    <h1 className="font-medium text-xl text-white">
                      Landing Page
                    </h1>
                    <p className="text-sm font-medium text-white">
                      ✨Most Popular✨
                    </p>
                  </div>
                }
              />
            </div>
            <Imgatom
              src="/images/priceimg/star.png"
              alt="star"
              width={125}
              height={125}
            />
          </div>
          <div className="para">
            <Text
              text={
                <p>
                  A well-designed landing page can be effective for a variety of
                  businesses.
                </p>
              }
            />
          </div>
          <div>
            <ListUl />
          </div>
          <Buttonn>Get Yours Now!</Buttonn>
          <Text text={<p>Prefer E-mail? Let’s Chat</p>} />
        </div>
      ),
    },
    {
      image: "/images/priceimg/PriceCard-Premium.png",
    },
  ];

  return (
    <section className="cards flex items-center justify-between flex-col lg:flex-row price-container bg-[#E7E7E7] p-4 rounded-3xl gap-4 mt-8">
      {cardsData.map((card, index) => (
        <PriceCardItem
          key={index}
          className={`w-[300px] h-[491px] md:w-[550px] md:h-[420px] lg:w-[300] lg-h[491]`}
          image={card.image}
        >
          {card.content}
        </PriceCardItem>
      ))}
    </section>
  );
};

export default PriceCard;
