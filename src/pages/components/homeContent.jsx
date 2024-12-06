import React, { useState, useEffect } from "react";

const images = [
    "https://www.fcmlindia.com/blog/wp-content/uploads/2020/04/one-collection-1200x675.jpg",
    "https://roundhousedesign.com/wp-content/uploads/2023/12/1_luxury-kitchens-.jpg",
    "https://img.pikbest.com/wp/202405/wooden-cabinet-sleek-and-moody-interior-in-modern-kitchen-3d-rendering_9795198.jpg!w700wp",
];

export default function HomeContent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-change carousel every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white w-full overflow-hidden mt-16 md:py-20 py-0 md:pb-24 pb-10">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-0">
                {/* Header Content */}
                <div className="flex flex-col items-center justify-center px-4 md:px-16 py-8 gap-5 text-black z-10">
                    <div className="flex flex-col items-start w-full">
                        <p className="text-sm font-semibold uppercase text-gray-500">
                            Turnkey Design
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl text-start font-extrabold leading-tight mt-2">
                            Kitchen Things <br /> is our Mission
                        </h1>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <p className="mt-4 text-start text-base md:text-lg text-gray-700 max-w-lg">
                            Our creative landscape solutions create an aesthetically stunning
                            garden or lawn design and inspire you to create magical moments that
                            you will cherish!
                        </p>
                        <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-700">
                            Order a project
                        </button>
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="relative w-full flex items-center justify-center">
                    <div className="relative w-full h-64 md:h-full flex items-center justify-center">
                        {images.map((src, index) => {
                            const isCurrent = index === currentIndex;
                            const zIndex = images.length - Math.abs(index - currentIndex);
                            const offset = (index - currentIndex + images.length) % images.length;

                            const offsetMultiplier = offset;
                            const bottomOffset = -20 * offsetMultiplier;
                            const rightOffset = -20 * offsetMultiplier;

                            return (
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    key={index}
                                    className={`absolute transition-all duration-500 ease-in-out ${
                                        isCurrent ? "opacity-100 scale-100" : "opacity-50 scale-90"
                                    }`}
                                    style={{
                                        zIndex,
                                        transform: `translateX(${offset * 20}%)`,
                                        bottom: `${isCurrent ? 0 : bottomOffset}px`,
                                        right: `${isCurrent ? 0 : rightOffset}px`,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
