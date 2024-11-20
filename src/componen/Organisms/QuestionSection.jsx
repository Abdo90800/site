"use client";
import { Container } from "@mui/material";
import Text from "../Atoms/Text";
import CardText from "../Atoms/CardText";
import Imgatom from "../Atoms/Imgatom";
import { useState } from "react";

const QuestionSection = () => {
  const [hover, setHover] = useState(false);
  return (
    <section className="question-section ">
      <Container className="grid grid-cols-2">
        <div className="card-section w-[519px]">
          <Text
            style={{ width: "492px", padding: "5px", marginBottom: "30px" }}
            text={
              <div>
                <p style={{ fontSize: "14px", color: "#494949" }}>FAQs</p>
                <h1
                  style={{
                    fontSize: "32px",
                    lineHeight: "48px",
                    fontWeight: "500",
                    color: "#121212",
                  }}
                >
                  Inquiries? We've got solutions for you
                </h1>
              </div>
            }
          />
          <CardText className="w-[519px] h-[321px] rounded-3xl flex justify-center items-center p-2 bg-[#E7E7E7] border border-[#D7D7D7] mb-10 ">
            <div className=" bg-[url('/images/priceimg/frame.png')] bg-cover bg-center w-[503px] h-[305px] py-8 px-6 rounded-2xl">
              <div className="flex gap-1 max-w-fit">
                <Imgatom
                  src="/Avatar.png"
                  alt="avatar.png"
                  width={65}
                  height={65}
                  className="border border-[#D7D7D7] rounded-[10px] m-2 "
                />
                <h1 className="leading-9 font-medium text-2xl w-[173px] h-[72px]">
                  Didn’t find the answer?!
                </h1>
              </div>
              <p className="font-normal text-base leading-6 text-[#494949] ml-2">
                I’m human being, just like you - ask me anything.
              </p>
              <button className="w-[455px] h-[48px] rounded-xl border-[0.5px] border-[#D5D5D5] pt-3 pb-3 bg-white text-[#121212] font-normal my-5 text-base">
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
                className="w-[455px] h-[48px] rounded-xl border-[0.5px] border-[#D5D5D5] pt-3 pb-3 bg-white text-[#121212] font-normal  text-base shadow-[#00000033] hover:bg-[linear-gradient(to_right,_#F0F0F0,_#E0E0E0)]"
              >
                <div className="flex justify-center items-center gap-2">
                  <Imgatom
                    src="/images/WhatsApp.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                  <h1 className="font-normal text-base text-[#121212]">
                    {hover ? "+966 59 744 2483" : "Chat on whatsApp"}
                  </h1>
                </div>
              </button>
            </div>
          </CardText>
        </div>
        <div className="question">
          <Text>
            
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default QuestionSection;
