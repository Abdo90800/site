// src/components/atoms/Text.js
import React from "react";

const Text = ({ text, styleClass, style }) => (
  <p className={styleClass} style={style}>
    {text}
  </p>
);

export default Text;
