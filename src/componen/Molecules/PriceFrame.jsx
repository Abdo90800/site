import { Container } from "@mui/material";
import Text from "../Atoms/Text";
import "@/styles/price.scss";
import PriceCard from "./PriceCard";

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
      <Container>
        <PriceCard />
      </Container>
    </div>
  );
};

export default PriceFrame;
