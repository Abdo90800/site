// Import required components
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Image from "next/image";
// import ima1 from "../../public/images/webdev.png";
// import ima2 from "../../public/images/mobiledev.png";
// import ima3 from "../../public/images/uxui.png";
import Text from "../Atoms/Text";

import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";
function OurServicesCard() {
  const arr = [
    {
      id: "1",
      discription:
        "We create responsive and user-friendly websites not only visually appealing but also optimized for performance and SEO.",
      name: "1.Web App development",
      photo: "/images/webdev.png",
    },
    {
      id: "2",
      discription:
        "Our mobile app development services cover both Android and iOS platforms and ensure seamless user experiences.",
      name: "2.Mobile App development",
      photo: "/images/Mobdev.png",
    },
    {
      id: "3",
      discription:
        "Our roots in UX/UI design mean we excel at creating user-centric designs. We focus on delivering intuitive interfaces",
      name: "3.UX/UI design",
      photo: "/images/uiux.png",
    },
  ];

  return (
    <>
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Our Services</span>
            <span className="textclients">we can help you with</span>{" "}
            <span className="offerday">
            🎉Its our birthday 40%off - 1 - day limited offer click to Learn
              more🎉
            </span>
          </div>
        }
        className="textListen"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {arr.map((e) => {
          return (
            <div key={e.id} style={{ mb: 20 }}>
              <Card
                sx={{
                  height: "256px",
                  border: "none",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "white",
                  cursor: "pointer",
                  padding: "16px",
                  gap: "16px",
                  "&:hover": {
                    background: "linear-gradient(45deg,#F0F0F0, #E0E0E0)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <img
                    src={e.photo}
                    alt="image"
                    width={80}
                    height={80}
                    style={{
                      paddingLeft: "10px",
                      borderRadius: "10px",
                      color: "#EAEAEA",
                      margin: "5px",
                    }}
                  />
                  <hr style={{ color: "#EAEAEA", margin: "5px" }} />
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: "#121212",
                      lineHeight: "24px",
                      textAlign: "start",
                      paddingBottom: "10px",
                    }}
                  >
                    {e.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#494949",
                      lineHeight: "24px",
                      textAlign: "start",
                    }}
                  >
                    {e.discription}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default OurServicesCard;
