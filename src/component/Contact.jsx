import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactCard = ({ icon, title, items }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 flex items-center justify-center bg-violet-100 rounded-lg">
            <i className={`${icon} text-xl text-violet-600`}></i>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
          <div className="space-y-1">
            {items.map((item, index) => (
              <p key={index} className="text-slate-600">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contact-card", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top center",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top center",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
  });

  const contactInfo = [
    {
      icon: "fa-solid fa-address-card",
      title: "CONTACT",
      items: ["dineshdakhare22@gmail.com", "(+91)-7020901905"]
    },
    {
      icon: "fa-solid fa-hashtag",
      title: "SOCIAL",
      items: ["LinkedIn", "Instagram"]
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "ADDRESS",
      items: ["442902", "Bhadrawati, Maharashtra"]
    }
  ];

  return (
    <section className="contact-section py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <ContactCard {...info} />
            </div>
          ))}
        </div>

        <div className="contact-form max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">
            Send me a message
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-violet-600 transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-violet-600 transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-violet-600 transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;