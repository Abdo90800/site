const Border = ({className,divStyle}) => {
  return (
    <div className={`pr-8 pl-2 flex mt-9 ${divStyle}`}>
      <span className={`w-[580px] border border-[#21212133] ${className}`}></span>
    </div>
  );
};

export default Border;
