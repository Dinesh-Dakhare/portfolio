import React from "react";
import bugattichiron from "../img/bugattichiron.jpg";
const Cards = () => {
  return (
    <div className="p-4 rounded-xl space-y-4 w-full min-md:p-4 min-md:rounded-2xl min-md:w-[22rem] min-md:h-[16rem] min-md:space-y-5 grayscale-0 min-lg:h-[29rem] min-lg:w-[54rem]   min-lg:p-8  min-lg:space-y-10 min-lg:rounded-4xl bg-white drop-shadow-xl shadow-slate-500 border-slate-400 border-1  ">
      <div className=" space-y-2 min-lg:space-y-5">
        <h1 className="text-xl font-medium min-md:text-lg  min-lg:text-3xl ">Easycab</h1>
        <p className="  min-lg:text-xl line-clamp-2 min-md:text-sm">
          I'm web developer with a knack for crafting visually stunning and
          highly functional websites. Combining creativity and technical
        </p>
      </div>
      <div className="flex gap-5 min-md:gap-5">
        <img
          className=" w-40 min-lg:size-[15rem] min-md:size-[8rem] min-md:rounded-2xl rounded-2xl"
          src={bugattichiron}
          alt=""
        />
        <div>
          <ul className="min-md:text-sm min-md:w-full  min-md:space-y-1 min-lg:space-y-4   min-md:pt-2 min-lg:text-xl min-lg:pt-4  ">
            <li><span className="font-medium">Data</span> :1 jan-2023</li>
            <li><span className="font-medium">Client</span> : Symphony</li>
            <li><span className="font-medium">Tech:</span> Angular,nodejs</li>
            <li><span className="font-medium">Type:</span> ecommerce</li>
            <li><span className="font-medium">url:</span> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
