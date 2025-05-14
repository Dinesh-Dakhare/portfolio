import React,{useRef,useEffect} from "react";
import Icon from "./Icon";
import iconReact from "../img/iconReact.png";
import iconHtml from "../img/iconHtml.png";
import iconCss from "../img/iconCss.png";
import iconJs from "../img/iconJs.png";
import iconNodejs from "../img/iconNodejs.png";
import iconExpress from "../img/iconExpress.png";
import iconMongodb from "../img/iconMongodb.png";
import iconMongoose from "../img/iconMongoose.png";
import iconGit from "../img/iconGit.png";
import iconGithub from "../img/iconGithub.png";
import iconGsap from "../img/iconGsap.png";
import iconPostman from "../img/iconPostman.png";
import iconSocketio from "../img/iconSocketio.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = ({ black }) => {
  const boxRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(".skills", {
      scrollTrigger: {
        trigger: ".skills",
        start: "top center",
        markers: true,

        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 2,
      delay: 0.2,
      marker: true,
    });
  });
    //   useEffect(() => {
    //     // Ensure the element exists before trying to animate it
    //     if (boxRef.current) {
    //         gsap.to(boxRef.current, {
    //             rotation: 360, // Rotate to 360 degrees (full rotation)
    //             duration: 2,    // Animation duration in seconds
    //             ease: 'linear',  // Smooth, constant speed
    //             repeat: -1,   // Repeat infinitely
    //             yoyo: true,    // Rotate back and forth
    //         });
    //     }
    // }, []);
  return (
    <div className="skills opacity-0 w-full md:px-[9rem] space-y-5  min-lg:pb-[10rem] min-lg:pt-[10rem] ">
      <h1 className="text-3xl min-lg:text-8xl min-lg:text-center font-bold uppercase tracking-widest min-lg:pb-16">
        Skills
      </h1>
      <div ref={boxRef} className=" flex flex-wrap space-x-1  min-lg:flex md:space-x-10 justify-center">
        <Icon id="mainId" icon={iconHtml} textIcon={"Html"} />
        <Icon icon={iconCss} textIcon={"React"} />
        <Icon icon={iconJs} textIcon={"React"} />
        <Icon icon={iconReact} textIcon={"React"} />
        <Icon icon={iconNodejs} textIcon={"Nodejs"} />
        <Icon icon={iconExpress} textIcon={"Expressjs"} />
        <Icon icon={iconMongodb} textIcon={"Mongodb"} />
      </div>
      <div className=" flex flex-wrap space-x-1 min-lg:flex md:space-x-10  justify-center">
        <Icon icon={iconMongoose} textIcon={"Mongoose"} />
        <Icon icon={iconGit} textIcon={"Git"} />
        <Icon icon={iconGithub} textIcon={"Github"} />
        <Icon icon={iconPostman} textIcon={"Postman"} />
        <Icon icon={iconGsap} textIcon={"Gsap"} />
        <Icon icon={iconSocketio} textIcon={"Socketio"} />
      </div>
    </div>
  );
};

export default Skills;
