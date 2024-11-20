import Image from "next/image";
import Text from "../Atoms/Text";
import Container from "@mui/material/Container";

function Ourwork() {
  return (
    <div style={{ marginBottom: "50px" }} id="work">
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
      <Container
        className="imagesgalssteel"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" }, // استخدم flexWrap هنا بدون marginBottom
        }}
      >
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
