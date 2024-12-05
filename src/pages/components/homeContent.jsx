import React, { useState } from "react";

const images = [
    "https://www.fcmlindia.com/blog/wp-content/uploads/2020/04/one-collection-1200x675.jpg",
    "https://roundhousedesign.com/wp-content/uploads/2023/12/1_luxury-kitchens-.jpg",
    "https://www.oppoliahome.com/wp-content/uploads/2023/04/single-wall-kitchen-design-with-long-wood-island-obk23-l07-2.jpg",
];

export default function HomeContent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative bg-white w-full grid grid-cols-2 overflow-hidden mt-16 py-20 pb-24">
            {/* Header Content */}
            <div className="flex flex-col items-center justify-center px-16 py-8 gap-5 text-black z-10">
                <div className="flex flex-col items-start w-full">
                    <p className="text-sm font-semibold uppercase text-gray-500">
                        Turnkey Design
                    </p>
                    <h1 className="text-4xl text-start md:text-6xl font-extrabold leading-tight mt-2">
                        Kitchen Things <br /> is our Mission
                    </h1>
                </div>
                <div className="flex flex-col items-start w-full">
                    <p className="mt-4 text-start text-lg text-gray-700 max-w-lg">
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
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Stacked Images */}
                    {images.map((src, index) => {
                        const isCurrent = index === currentIndex;
                        const zIndex = images.length - Math.abs(index - currentIndex);
                        const offset = (index - currentIndex + images.length) % images.length;

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
                                }}
                            />
                        );
                    })}

                    {/* Navigation Arrows */}
                    <div className="absolute -bottom-14 flex gap-4 justify-center z-20">
                        <button
                            onClick={handlePrev}
                            className="bg-black text-white py-2 px-5 h-10 opacity-75 hover:opacity-100"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-black text-white h-10 py-2 px-5 opacity-75 hover:opacity-100 "
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}