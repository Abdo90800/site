import Text from "../Atoms/Text";
const mainbath = "/images/priceImg";
const images = [
  `${mainbath}/main.png`,
  `${mainbath}/PriceCard-Premium.png`,
  `${mainbath}/PriceCard-Starter.png`,
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
    </div>
  );
};

export default PriceFrame;
