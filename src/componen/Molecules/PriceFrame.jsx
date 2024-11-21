import { Container } from "@mui/material";
import Imgatom from "../Atoms/Imgatom";
import Text from "../Atoms/Text";
import "@/styles/price.scss";

const mainbath = "/images/priceImg";
const images = [
  `${mainbath}/main.png`,
  `${mainbath}/PriceCard-Starter.png`,
  `${mainbath}/PriceCard-Premium.png`,
];

const PriceFrame = () => {
  return (
    <div>
      <Text
        text={
          <div>
            <p style={{ fontSize: "14px", color: "#494949" }}>pricing</p>
            <h1
              style={{
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: "500",
                color: "#121212",
              }}
            >
              Simplify your work with magic
            </h1>
          </div>
        }
        style={{
          fontWeight: "400",
          color: "black",
          lineHeight: "24px",
          textAlign: "center",
          margin: "10px 0",
          fontSize: "24px",
          lineHeight: "20px",
        }}
      />
      <Container className="price-container flex flex-col lg:flex-row bg-[#E7E7E7] p-4 rounded-3xl gap-4 mt-8">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-full ${
              index === 0 ? "lg:w-[616px]" : "lg:w-[300px]"
            } h-[300px] sm:h-[350px] lg:h-[491px] overflow-hidden rounded-2xl p-2 lg:p-0`}
          >
            <Imgatom
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PriceFrame;
