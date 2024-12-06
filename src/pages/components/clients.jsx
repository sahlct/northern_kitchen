import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    title: "Bakery",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-baguette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841z" /><path d="M9.5 7.5l1.5 3.5" /><path d="M6.5 10.5l1.5 3.5" /><path d="M12.5 4.5l1.5 3.5" /></svg>
    ),
  },
  {
    title: "Hotel/Restaurant",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" /></svg>
    ),
  },
  {
    title: "Catering",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
    ),
  },
  {
    title: "Offices/Schools",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h9" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" /><path d="M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414z" /><path d="M18 14.5v1.5" /><path d="M18 20v1.5" /><path d="M21.032 16.25l-1.299 .75" /><path d="M16.27 19l-1.3 .75" /><path d="M14.97 16.25l1.3 .75" /><path d="M19.733 19l1.3 .75" /></svg>
    ),
  },
  {
    title: "Labor Camps",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-microscope"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21h14" /><path d="M6 18h2" /><path d="M7 18v3" /><path d="M9 11l3 3l6 -6l-3 -3z" /><path d="M10.5 12.5l-1.5 1.5" /><path d="M17 3l3 3" /><path d="M12 21a6 6 0 0 0 3.715 -10.712" /></svg>
    ),
  },
  {
    title: "Places/Villas",
    icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-building-community"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><path d="M13 7l0 .01" /><path d="M17 7l0 .01" /><path d="M17 11l0 .01" /><path d="M17 15l0 .01" /></svg>
    ),
  },
];

export default function Clients() {
    const clientsRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = clientsRef.current;

            // Determine screen size
            const isLargeScreen = window.innerWidth >= 1024;

            cards.forEach((card, index) => {
                // Determine the animation properties based on screen size and card position
                let xStart = 0;
                let xEnd = 0;

                if (isLargeScreen) {
                    // For large screens (3-column grid)
                    if (index % 3 === 0) {
                        // First card in row
                        xStart = -100;
                        xEnd = 0;
                    } else if (index % 3 === 2) {
                        // Last card in row
                        xStart = 100;
                        xEnd = 0;
                    }
                } else {
                    // For small screens (2-column grid)
                    if (index % 2 === 0) {
                        // First card in row
                        xStart = -100;
                        xEnd = 0;
                    } else {
                        // Second card in row
                        xStart = 100;
                        xEnd = 0;
                    }
                }

                gsap.fromTo(
                    card,
                    {
                        x: xStart,
                        opacity: 0,
                        scale: 0.9
                    },
                    {
                        x: xEnd,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }, sectionRef);

        // Cleanup function
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-gray-100 p-6 md:pb-20 pb-16 overflow-hidden">
            <h2 className="text-center md:text-3xl text-2xl text-[#2947A9] font-semibold mb-10 mt-5 md:mt-10 md:mb-20">Clients</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:px-28 px-0">
                {clients.map((client, index) => (
                    <div
                        ref={(el) => clientsRef.current[index] = el}
                        key={index}
                        className={`rounded-lg shadow-lg flex flex-col items-center justify-center px-2 md:px-4 md:py-10 py-4 ${
                            index % 2 === 0
                            ? "bg-[#2947A9] text-white"
                            : "bg-white text-[#2947A9]"
                        }`}
                    >
                        <div className="text-4xl mb-4">{client.icon}</div>
                        <div className="h-px w-14 bg-gray-300 mb-4"></div>
                        <h3 className="text-center font-medium">{client.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}