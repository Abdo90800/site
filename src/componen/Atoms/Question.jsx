"use client";
import { useState } from "react";

const Question = ({ children, className ,Answer}) => {
  const [open, setOpen] = useState(false);

  const handleAddQustion = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4 pr-8 pl-2 ">
        <h1 className="font-semibold text-xl text-[#121212]">{children}</h1>
        <button className="text-4xl" onClick={handleAddQustion}>
          {open ? "-" : "+"}
        </button>
      </div>
      {open && <p className=" mt-4 pr-8 pl-2 font-normal text-base">{Answer}</p>}
    </div>
  );
};

export default Question;
