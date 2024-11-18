// components/atoms/AvatarImage.js
import React from "react";
import Image from "next/image";

const AvatarImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default AvatarImage;
