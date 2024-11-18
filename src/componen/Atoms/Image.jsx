const Image = ({ style, children, src, alt }) => {
  return (
    <Image className={style} src={src} alt={alt}>
      {children}
    </Image>
  );
};

export default Image;
