// src/components/atoms/Text.js
import React from "react";

const Text = ({ text, styleClass, style }) => (
  <div className={styleClass} style={style}>
    {text}
  </div>
);

export default Text;
