import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      // For cards that should come from the left
      if (index % 2 === 0) {
        gsap.fromTo(
          card,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "center center",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        // For cards that should come from the right
        gsap.fromTo(
          card,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "center center",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 sm:gap-10 sm:flex-row md:items-center md:justify-between bg-white px-6 lg:px-20 md:py-16 py-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:px-20 w-full md:w-[60%]">
        {/* Projects Completed */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="flex flex-col md:ms-28 ms-16 items-start px-10 py-5 text-start shadow-lg relative"
        >
          <img
            src="./assets/Vector.png"
            alt=""
            className="absolute md:w-20 md:h-20 w-14 h-14 -right-5 -top-5"
          />
          <p className="md:text-4xl text-2xl font-bold text-gray-800 mb-2">123</p>
          <div className="flex gap-2">
            <p className="h-5 w-1 bg-orange-500"></p>
            <p className="text-gray-500">Projects Completed</p>
          </div>
        </div>

        {/* Happy Clients */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="flex flex-col md:me-28 me-16 items-start px-10 py-5 text-start shadow-lg relative"
        >
          <img
            src="./assets/Vector1.png"
            alt=""
            className="absolute md:w-20 md:h-20 w-14 h-14 -right-5 -top-5"
          />
          <p className="md:text-4xl text-2xl font-bold text-gray-800 mb-2">84</p>
          <div className="flex gap-2">
            <p className="h-5 w-1 bg-orange-500"></p>
            <p className="text-gray-500">Happy Clients</p>
          </div>
        </div>

        {/* Awards */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="flex flex-col md:ms-28 ms-14 items-start px-10 py-5 text-start shadow-lg relative"
        >
          <img
            src="./assets/Vector2.png"
            alt=""
            className="absolute md:w-20 md:h-20 w-14 h-14 -right-5 -top-5"
          />
          <p className="md:text-4xl text-2xl font-bold text-gray-800 mb-2">37</p>
          <div className="flex gap-2">
            <p className="h-5 w-1 bg-orange-500"></p>
            <p className="text-gray-500">Awards Won</p>
          </div>
        </div>

        {/* Years in Business */}
        <div
          ref={(el) => (cardRefs.current[3] = el)}
          className="flex flex-col md:me-28 me-14 items-start px-10 py-5 text-start shadow-lg relative"
        >
          <img
            src="./assets/Vector3.png"
            alt=""
            className="absolute md:w-20 md:h-20 w-14 h-14 -right-5 -top-5"
          />
          <p className="md:text-4xl text-2xl font-bold text-gray-800 mb-2">30</p>
          <div className="flex gap-2">
            <p className="h-5 w-1 bg-orange-500"></p>
            <p className="text-gray-500">Years in Business</p>
          </div>
        </div>
      </div>

      {/* Experience Description */}
      <div className="mt-8 md:mt-0 md:ml-12 flex flex-col items-start md:items-start md:w-[40%]">
        <h2 className="md:text-4xl text-2xl font-bold text-[#2947A9] md:text-left">
          30 Years Experience
        </h2>
        <p className="text-[#152868] mt-4 text-start md:text-left">
          Our company has been the leading provider of construction services to
          clients throughout the USA since 1988.
        </p>
        <button className="mt-6 bg-[#2947A9] text-white px-6 py-3 shadow hover:bg-blue-950">
          Contact Us
        </button>
      </div>
    </div>
  );
}
