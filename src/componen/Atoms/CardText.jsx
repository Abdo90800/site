const CardText = ({ style, className, children }) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default CardText;
