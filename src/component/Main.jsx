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
    <main className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-violet-600 text-lg font-medium">My Self,</h2>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800">
                Dinesh Dakhare
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                I'm a web developer with a knack for crafting visually stunning and
                highly functional websites. Combining creativity and technical expertise.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors duration-200 font-medium">
                Download CV
              </button>
              <button className="border border-slate-300 px-6 py-3 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-colors duration-200 font-medium">
                Contact Me
              </button>
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-medium mb-2">
                I am a{" "}
                <span className="text-violet-600 font-bold">
                  Full Stack Developer
                </span>
              </h3>
            </div>
          </div>
          
          <div className="lg:order-1" onMouseMove={mouseMoving}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent rounded-2xl transform -rotate-6"></div>
              <img
                ref={tiltRef}
                src={hero}
                alt="Profile"
                className="relative rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;