import main from "../../styles/main.scss";

import React from "react";
import Button from "@mui/material/Button";
const Buttonn = ({ children, styleClass ,className}) => (
  <Button className="custom-button">{children}</Button>
);

export default Buttonn;
