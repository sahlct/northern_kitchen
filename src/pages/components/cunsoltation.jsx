import React from "react";

export default function Consultation() {
  return (
    <div className="relative max-h-72">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/cozy-kitchen-interior-design_23-2150306974.jpg?t=st=1733309913~exp=1733313513~hmac=379a970c21d8488fbbc0686486b65e913343fd3a9f62a7892ce3137cf7d16e04&w=1060"
          alt="Cozy Kitchen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay and Content */}
      <div className="relative max-h-72 z-10 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 md:px-16 py-8 md:py-24">
        <div className="text-white space-y-4">
          {/* Heading */}
          <h2 className="text-lg md:text-5xl font-bold text-start">
            Free consultation with exceptional quality
          </h2>
          {/* Subheading */}
          <p className="text-start text-sm md:text-xl">
            Just one call away: +84 1102 2703
          </p>
        </div>
        {/* Button */}
        <button className="mt-6 px-6 py-2 md:py-3 text-sm md:text-base bg-transparent border border-white text-white hover:bg-white hover:text-black transition rounded">
          Get your consultation
        </button>
      </div>
    </div>
  );
}
