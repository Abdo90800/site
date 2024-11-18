// components/molecules/CardComponent.js
import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import AvatarImage from "../atoms/AvatarImage";
import CardText from "../atoms/CardText";

const CardComponent = ({ photo, description }) => {
  return (
    <Card
      sx={{
        width: 302,
        maxWidth: "100%",
        height: "169px",
        border: "none",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        cursor: "pointer",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <AvatarImage src={photo} alt="Avatar Image" />
        <CardText text={description} />
      </CardContent>
    </Card>
  );
};

export default CardComponent;
