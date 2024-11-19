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
      <Container className="price-container flex justify-center  bg-[#E7E7E7] p-4 rounded-3xl gap-4 mt-8">
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: index === 0 ? "616px" : "300px",
              height: "491px",
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <Imgatom
              src={img}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PriceFrame;
