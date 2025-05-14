import React, { useRef, useState } from "react";
import hero from "../img/hero.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Main = () => {
  const tiltRef = useRef(null);
  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);

  const mouseMoving = (e) => {
    setXval(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYval(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );
    console.log(yVal);

    // tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "elastic.out(1,0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    <>
      <main className=" p-6 space-y-8 lg:my-[10rem] border-b-2 min-lg:pb-30 perspective-near md:w-full">
        <div className="space-y-10 lg:flex   min-lg:justify-center min-lg:items-center min-md:mr-10 min-md:relative md:space-y-25
       min-md:flex-row md:items-center md:justify-center
        ">
          
          <div className=" space-y-2 min-lg:text-[4.5rem] md:text-4xl z-10 ">
            <div className=" text-3xl font-medium min-lg:absolute top-[-8rem] left-[28rem] ">
              <h1 className="text-violet-500">My Self ,</h1>
              <h1 className="text-slate-800">Dinesh Dakhare</h1>
            </div>
            <p className="min-lg:pr-8 min-lg:mb-[12rem] font-light md:text-xl  min-md:w-[29rem] min-lg:text-right lg:text-xl ">
              I'm web developer with a knack for crafting visually stunning and
              highly functional websites. Combining creativity and technical
            </p>
            <button className="border-slate-400 border py-[8px] px-3 hover:scale-105 cursor-pointer  rounded-lg text-sm min-md:text-xl text-black font-mono shadow-md min-md:absolute z-10  min-lg:absolute min-lg:left-[39rem] min-lg:top-[18rem]">
              Download CV
            </button>
          </div>
          <div
            onMouseMove={(e) => mouseMoving(e)}
            className="min-lg:hover:z-30 "
          >
            <div className="  w-full lg:w-[30rem] md:w-[30rem] rounded-xl h-[32rem] mx-2">
              <img
                ref={tiltRef}
                src={hero}
                alt=""
                className="  min-lg:hover:scale-105 min-lg:hover:drop-shadow-2xl min-lg:w-full lg:h-full  md:grayscale hover:grayscale-0 w-full   bg-radial-[at_25%_25%] from-white to-zinc-900 to-98% rounded-xl min-lg:right-3 max-sm:right-3 bottom-2   "
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-mono min-md:mt-[26rem] min-lg:text-3xl">
              I am a <br />
              <span className="text-violet-500 font-mono min-lg:text-3xl">
                Full Stack Developer
              </span>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
