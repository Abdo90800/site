const CardText = ({ style = {}, className = "", children, ...props }) => {
  return (
    <div style={style} className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default CardText;
