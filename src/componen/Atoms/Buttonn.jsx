import main from "../../styles/main.scss";

import React from "react";
import Button from "@mui/material/Button";
const Buttonn = ({ children, style, className }) => (
  <Button style={style} className={`custom-button ${className}`}>
    {children}
  </Button>
);

export default Buttonn;
