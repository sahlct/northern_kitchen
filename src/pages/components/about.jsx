import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const textRef = useRef(null);

    useEffect(() => {
        // Apply animation only for desktop view
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        if (isDesktop) {
            gsap.fromTo(
                textRef.current,
                { x: '-30%', opacity: 0 }, // Start position off-screen
                {
                    x: '0%', // End position in place
                    opacity: 1,
                    duration: 2.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%', // Animation starts when the text enters the viewport
                        end: 'top 30%', // Ends after reaching the target position
                        scrub: 1.5, // Smooth scrolling-based animation
                    },
                }
            );
        }

        // Cleanup ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-gray-100 md:py-20 py-10">
            <div className="container mx-auto">
                <div className="relative flex md:px-10 px-5 flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
                    {/* Text Section */}
                    <div
                        ref={textRef}
                        className="md:absolute md:bottom-14 md:right-36 bg-[#2947A9] text-white flex justify-start md:gap-3 flex-col items-start p-6 lg:ml-10 lg:mt-0 md:mt-6 shadow-lg lg:w-1/3"
                    >
                        <h2 className="text-2xl font-semibold md:mb-6 mb-3">About us</h2>
                        <p className="mb-4 text-start">
                            For more than 30 years we have been delivering world-class construction and
                            we've built many lasting relationships along the way. we've built many lasting relationships along the way.
                        </p>
                        <p className="mb-4 text-start">
                            We've matured into an industry leader and trusted resource for those seeking
                            quality, innovation and reliability when building in the U.S.
                        </p>
                        <button className="bg-white text-blue-600 px-4 py-2 mt-3 font-semibold hover:bg-gray-200">
                            More on Our History
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-2/3 md:h-[500px]">
                        <img
                            src="https://images.marketpath.com/e4c6b5ab-5930-4635-a2f2-9d7bbd7d2e89/image/3ad9ac46-a2b5-407f-aee9-b15916ee2370/boombozz-restaurant-project-carmel.jpg"
                            alt="Restaurant Interior"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
