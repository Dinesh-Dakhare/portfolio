import React from "react";
import { useState } from "react";
function Header() {
  const [dropDown, setDropDown] = useState(false);

  const dropDownHandler = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <>
      <header className=" min-lg:sticky top-0 z-30 bg-white  sm:flex  m-5  min-md:px-6 min-md:my-6 min-lg:px-[5rem] min-lg:py-4 min-lg:">
        <div className="flex justify-between w-full ">
          <i className="ri-tent-line text-3xl min-md:text-4xl min-lg:text-5xl"></i>

          <i
            onClick={dropDownHandler}
            className="ri-bar-chart-horizontal-line text-3xl min-md:text-4xl min-lg:text-5xl  "
          ></i>
        </div>

        <div
          className={
            "overflow-hidden h-full fixed right-0 top-0 w-[50%] bg-white shadow-2xl transition delay-200 ease-in-out min-lg:absolute min-lg:right-0 min-lg:backdrop-blur-2xl z-30 cursor-pointer  min-lg:w-[20%] min-lg:flex justify-center min-lg:top-full " +
            (dropDown ? " " : " translate-x-full")
          }
        >
          {/* <div
            onClick={dropDownHandler}
            className=" w-3 h-3 mt-8 ms-40 "
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </div> */}
          <ol
            className=" text-2xl w-full mt-5 space-y-3 list-disc list-inside px-8 py-6
         min-lg:text-5xl min-lg:space-y-6 min-lg:font-mono min-lg:p-4 "
          >
            <li className="hover:opacity-100 opacity-50">Home</li>
            <li className="hover:opacity-100 opacity-50">About</li>
            <li className="hover:opacity-100 opacity-50">Skills</li>
            <li className="hover:opacity-100 opacity-50">Project</li>
            <li className="hover:opacity-100 opacity-50">Contact</li>
          </ol>
        </div>
      </header>
    </>
  );
}

export default Header;
