import Buttonn from "../Atoms/Buttonn";
import Heading from "../Atoms/Heading";
import ListUl from "../Atoms/ListUl";
import PriceCardItem from "../Atoms/PriceCardAtom";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Text from "../Atoms/Text";
import Imgatom from "../Atoms/Imgatom";
const PriceCard = () => {
  const listItems_1 = ["Web App", "Dashboard", "Mobile App", "Landing Page"];
  const listItems_2 = ["E-commerce", "Services", "Events", "Lead generation"];
  const cardsData = [
    {
      image: "/images/priceimg/img-1.png",
      content: (
        <div className="w-full h-auto pt-11 pl-11 flex flex-col ">
          <Heading
            className="font-semibold text-2xl leading-9 text-[#121212] w-[302px] h-[72px]"
            text="Flexible Pricing for Companies of All Sizes."
          />
          <div>
            <Heading className="font-normal text-base" text="We Offer : " />
            <ListUl
              className="list-disc pl-5 font-normal text-base "
              items={listItems_1}
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
      //   Card_2
      content: (
        <div className="relative w-full h-full bg-[#A68356] flex flex-col justify-between rounded-2xl p-6 overflow-hidden ">
          <div className="flex  items-center">
            <div className="w-full h-[107px] flex flex-col gap-2">
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
              className="absolute top-1 right-2"
              alt="star"
              width={120}
              height={120}
            />
          </div>
          <div className="para">
            <Text
              text={
                <p className="text-white text-base font-light">
                  A well-designed landing page can be effective for a variety of
                  businesses.
                </p>
              }
            />
          </div>
          <div>
            <ListUl
              className="list-disc pl-5 font-normal text-base"
              items={listItems_2}
              classli="text-white"
            />
          </div>
          <Buttonn>Get Yours Now!</Buttonn>
          <Text
            text={
              <p className="font-normal text-lg text-white">
                Prefer E-mail?{" "}
                <strong className="text-white underline">Let’s Chat</strong>
              </p>
            }
          />
        </div>
      ),
    },
    {
      // Card_3
      content: (
        <div className="relative w-full h-full bg-white flex flex-col  rounded-2xl py-6 px-4 overflow-hidden">
          <div className="flex  items-center">
            <div className="w-full h-[107px] flex flex-col gap-2">
              <button className="w-[44px] h-[44px] rounded-full bg-black flex justify-center items-center">
                <PhoneAndroidIcon className="text-white w-[30px] h-[30px]" />
              </button>
              <Text
                text={
                  <div>
                    <h1 className="font-medium text-xl ">Mobile App</h1>
                    <p className="text-sm font-medium">Perfect👌</p>
                  </div>
                }
              />
            </div>
            <Imgatom
              src="/images/priceimg/small-circle.png"
              className="absolute top-6 right-10"
              alt="star"
              width={20}
              height={20}
            />
            <Imgatom
              src="/images/priceimg/big-circle.png"
              className="absolute top-12 right-2"
              alt="star"
              width={60}
              height={58}
            />
          </div>
          <div className="para">
            <Text
              text={
                <p className="text-[#494949] text-base font-normal">
                  For Your Business to enhances engagement and if you want to
                  strengthening your brand loyalty.
                </p>
              }
            />
          </div>
          <Imgatom
            src="/images/priceimg/phone.png"
            className="absolute -bottom-10 left-0 right-0 mx-auto"
            alt="star"
            width={163}
            height={335}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="cards flex lg:flex items-center justify-between flex-col md:flex-row price-container bg-[#E7E7E7] p-4 rounded-3xl gap-4 mt-8">
      {cardsData.map((card, index) => (
        <PriceCardItem
          key={index}
          className={`w-full h-[420px] ${
            index === 0
              ? "lg:w-[616px] md:w-[360px] md:h-[420px]"
              : "lg:w-[300px] md:w-[260px] md:h-[420px]"
          }`}
          image={card.image}
        >
          {card.content}
        </PriceCardItem>
      ))}
    </section>
  );
};

export default PriceCard;
