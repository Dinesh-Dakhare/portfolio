import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

const SkillCard = ({ icon, name, category }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-lg p-2">
          <img src={icon} alt={name} className="w-12 h-12 object-contain" />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-slate-800">{name}</h3>
          <p className="text-sm text-slate-500">{category}</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  });

  const skillsData = [
    { icon: iconHtml, name: "HTML", category: "Frontend" },
    { icon: iconCss, name: "CSS", category: "Frontend" },
    { icon: iconJs, name: "JavaScript", category: "Frontend" },
    { icon: iconReact, name: "React", category: "Frontend" },
    { icon: iconNodejs, name: "Node.js", category: "Backend" },
    { icon: iconExpress, name: "Express", category: "Backend" },
    { icon: iconMongodb, name: "MongoDB", category: "Database" },
    { icon: iconMongoose, name: "Mongoose", category: "Backend" },
    { icon: iconGit, name: "Git", category: "Tools" },
    { icon: iconGithub, name: "GitHub", category: "Tools" },
    { icon: iconPostman, name: "Postman", category: "Tools" },
    { icon: iconGsap, name: "GSAP", category: "Animation" },
    { icon: iconSocketio, name: "Socket.io", category: "Backend" },
  ];

  return (
    <section className="skills-section py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            My Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I work with to create
            modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;