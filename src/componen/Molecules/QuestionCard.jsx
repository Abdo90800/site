"use client";
import Imgatom from "../Atoms/Imgatom";
import CardText from "../Atoms/CardText";
import { useState } from "react";
const QuestionCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <CardText className="w-full rounded-3xl flex justify-center items-center p-4 bg-[#E7E7E7] border border-[#D7D7D7] mb-10">
      <div className="bg-[url('/images/priceimg/frame.png')] bg-cover bg-center w-full py-8 px-6 rounded-2xl">
        <div className="flex gap-4 items-center">
          <Imgatom
            src="/Avatar.png"
            alt="avatar.png"
            width={65}
            height={65}
            className="border border-[#D7D7D7] rounded-[10px]"
          />
          <h1 className="leading-7 font-medium text-xl lg:text-2xl">
            Didn’t find the answer?!
          </h1>
        </div>
        <p className="font-normal text-sm lg:text-base leading-6 text-[#494949] mt-4">
          I’m human being, just like you - ask me anything.
        </p>
        <button className="w-full h-[48px] rounded-xl border border-[#D5D5D5] mt-6 bg-white text-[#121212] font-normal text-sm lg:text-base">
          <div className="flex justify-center items-center gap-2">
            <Imgatom
              src="/images/Gmail.png"
              alt="Gmail"
              width={24}
              height={24}
            />
            <h1>E-mail US</h1>
          </div>
        </button>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-full h-[48px] rounded-xl border border-[#D5D5D5] mt-4 bg-white text-[#121212] font-normal text-sm lg:text-base hover:shadow-md"
        >
          <div className="flex justify-center items-center gap-2">
            <Imgatom
              src="/images/WhatsApp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            <h1 className="font-normal text-base text-[#121212]">
              {hover ? "+966 59 744 2483" : "Chat on WhatsApp"}
            </h1>
          </div>
        </button>
      </div>
    </CardText>
  );
};

export default QuestionCard;
