const PriceCardItem = ({ className="", children, image="",imgsize="cover",imgposition="center" }) => {
  return (
    <div className={`${className}`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={`w-full h-full bg-${imgposition} bg-${imgsize} bg-white rounded-2xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default PriceCardItem;
