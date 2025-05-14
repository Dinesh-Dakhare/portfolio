import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Contact = () => {
  useGSAP(function () {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 2,
      delay: 0.3,
    });
  });
  useGSAP(function () {
    gsap.to(".box1", {
      scrollTrigger: {
        trigger: ".box1",
        start: "top center",

        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 2,
      delay: 0.3,
    });
  });
  useGSAP(function () {
    gsap.to(".box2", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top center",

        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 2,
      delay: 0.3,
    });
  });
  return (
    <section className=" p-4 min-md:px-[2rem] min-lg:p-6 space-y-10 min-lg:px-[9rem] min-lg:pt-[10rem] min-lg:pb-[10rem]">
      <h1 className=" text-3xl box min-md:text-4xl min-md:pb-13 opacity-0 font-bold min-lg:text-8xl min-lg:pb-36 text-center tracking-widest">
        Contact
      </h1>
    <div className="maindiv space-y-8">
        <div className=" flex  items-center gap-6 border-1 p-6 rounded-2xl bg-white drop-shadow-xl hover:scale-105">
        <div className="border-1 rounded-full  box-border size-16 flex items-center justify-center ">
       <i className="fa-solid fa-address-card text-2xl text-blue-600"></i>
        </div>
        <div>
          <h1 className="text-lg font-medium">CONTACT</h1>
       <div >
           <h2>dineshdakhare22@gmail.com</h2>
          <h2>(+91)-7020901905</h2>
       </div>
        </div>
      </div>
        <div className="maindiv flex  items-center gap-6 border-1 p-6 rounded-2xl bg-white drop-shadow-xl hover:scale-105">
        <div className="border-1 rounded-full  box-border size-16 flex items-center justify-center ">
       
       <i className="fa-solid fa-hashtag text-2xl text-blue-600"></i>
        </div>
        <div>
          <h1 className="text-lg font-medium">SOCIAL</h1>
       <div >
           <h2>Linkdin</h2>
           <h2>Intagram</h2>
      
       </div>
        </div>
      </div>
        <div className="maindiv flex  items-center gap-6 border-1 p-6 rounded-2xl bg-white drop-shadow-xl hover:scale-105">
        <div className="border-1 rounded-full  box-border size-16 flex items-center justify-center ">
      
       <i className="fa-solid fa-location-dot text-2xl text-blue-600"></i>
        </div>
        <div>
          <h1 className="text-lg font-medium">ADDRESS</h1>
       <div >
           <h2>442902</h2>
             <h3>Bhadrawati, maharashtra</h3>
             
       </div>
        </div>
      </div>
    </div>
   
      <form
        action=""
        className="space-y-16 min-lg:pt-[5rem] min-lg:w-[65%] min-lg:space-y-[5rem] min-lg:pb-[5rem] "
      >
        <h1 className="font-mono text-3xl min-lg:text-5xl min-lg:pb-10">
          leave a message
        </h1>

        <div className="space-y-6 min-lg:flex gap-10 min-lg:pb-20">
          <input
            type="text"
            className="w-full border-b-1 border-black py-2 focus:outline-0 text-xl"
            placeholder="NAME"
          />
          <input
            type="email"
            className="w-full border-b-1 py-2 focus:outline-0  text-xl"
            placeholder="EMAIL"
          />
        </div>

        <textarea
          name=""
          id=""
          placeholder="YOUR MESSAGE"
          className="w-full border-b-1 focus:outline-0 resize-none  text-xl "
          rows={6}
        ></textarea>
        <button className="hover:scale-105  px-10 py-2 rounded-md border-3 min-lg:text-2xl min-lg:font-semibold min-lg:px-14">
          send
        </button>
      </form>
    </section>
  );
};

export default Contact;