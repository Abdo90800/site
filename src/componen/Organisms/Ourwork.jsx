import Image from "next/image";
import Text from "../Atoms/Text";
import Container from "@mui/material/Container";

function Ourwork() {
  return (
<<<<<<< HEAD
    <div style={{ marginBottom: "50px" }}>
=======
    <div style={{ marginBottom: "50px" }} id="work">
>>>>>>> 853a5cc10e5ed7333539861939a640d725517479
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textListen">Our work</span>
            <span className="textclients">
              Over view of what we have done
            </span>{" "}
          </div>
        }
        className="textListen"
      />
<<<<<<< HEAD
      <Container className="imagesgalssteel flex flex-col gap-4 justify-center text-center lg:grid lg:grid-cols-2 lg:justify-between items-center mx-auto">
=======
      <Container
        className="imagesgalssteel"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" }, // استخدم flexWrap هنا بدون marginBottom
        }}
      >
>>>>>>> 853a5cc10e5ed7333539861939a640d725517479
        <img
          src="/images/glasstel.png"
          alt="Glasstel1"
          className="Glasstel"
          style={{ width: "570px", height: "427px" }}
        />
        <img
          src="/images/Glasstel2.png"
          alt="Glasstel2"
          className="glasstel"
          style={{ width: "570px", height: "427px" }}
        />
      </Container>
    </div>
  );
}

export default Ourwork;
