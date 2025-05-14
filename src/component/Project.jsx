import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = ({ title, description, image, date, client, tech, type, url }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm">
          {type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Client:</span>
            <span>{client}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Tech Stack:</span>
            <span>{tech}</span>
          </div>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors duration-200"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });
  });

  const projects = [
    {
      title: "Easycab",
      description: "A modern cab booking platform with real-time tracking and payment integration.",
      image: "/src/img/bugattichiron.jpg",
      date: "Jan 2023",
      client: "Symphony",
      tech: "Angular, Node.js",
      type: "Web App",
      url: "https://example.com/easycab"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with user authentication and payment processing.",
      image: "/src/img/bugattichiron.jpg",
      date: "Mar 2023",
      client: "RetailTech",
      tech: "React, Node.js",
      type: "E-commerce",
      url: "https://example.com/ecommerce"
    },
    {
      title: "Task Management",
      description: "Collaborative task management system with real-time updates and team features.",
      image: "/src/img/bugattichiron.jpg",
      date: "Jun 2023",
      client: "TaskFlow",
      tech: "React, Express",
      type: "SaaS",
      url: "https://example.com/taskflow"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management and content scheduling.",
      image: "/src/img/bugattichiron.jpg",
      date: "Sep 2023",
      client: "SocialPro",
      tech: "React, Node.js",
      type: "Dashboard",
      url: "https://example.com/socialpro"
    }
  ];

  return (
    <section className="projects-section py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            My Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A showcase of my best work, featuring web applications and digital solutions
            that I've created for various clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;