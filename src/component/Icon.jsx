import React from "react";

const Icon = ({icon,textIcon}) => {
  return (
    <span className=" flex justify-center items-center px-4 py-2 rounded-lg  space-x-2 bg-black hover:scale-105 hover:drop-shadow-2xl  md:bg-black text-white border    min-lg:text-2xl font-medium w-fit">
      <img className="w-5 aspect-3/2 object-contain  min-lg:w-10 min-lg:h-10 " src={icon} alt="" />
      <h1 className="text-sm">{textIcon}</h1>
    </span>
  );
};

export default Icon;
