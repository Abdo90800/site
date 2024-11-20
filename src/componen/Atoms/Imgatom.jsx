import Image from "next/image";

const Imgatom = ({
  src,
  alt = "Image",
  width = 300,
  height = 300,
  style = {},
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
    />
  );
};

export default Imgatom;
