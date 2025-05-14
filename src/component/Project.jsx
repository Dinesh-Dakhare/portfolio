import React from "react";
import Cards from "./Cards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = ({ black }) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(".card1", {
      scrollTrigger: ".card1",

      opacity: 1,
      duration: 2,
      delay: 0.2,
    });
  });
  return (
    <section className=" card1 min-md:pb-[5rem] min-md:pt-[5rem] opacity-0 space-y-4  min-lg:pb-[10rem] min-lg:pt-[10rem] ">
      <h1 className="text-3xl min-md:text-4xl font-bold min-md:py-15 min-lg:py-30 min-lg:mx-20 min-lg:text-8xl tracking-widest uppercase text-center  ">
        Project
      </h1>
      <div className="space-y-10 p-2 min-md:space-x-5 min-lg:flex min-md:flex justify-center min-lg:space-x-10 ">
        <div className="space-y-10 min-lg:space-y-10 min-md:space-y-5">
          <Cards />
          <Cards />
        </div>
        <div className="space-y-10 min-lg:space-y-10 min-md:space-y-5">
          <Cards />
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Project;
