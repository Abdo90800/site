// src/components/atoms/Text.js
import React from "react";

const Text = ({ text, className, style }) => (
  <div className={className} style={style}>
    {text}
  </div>
);

export default Text;
