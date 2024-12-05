import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="relative flex px-10 flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Image Section */}
          <div className="lg:w-2/3 h-[500px]">
            <img
              src="https://images.marketpath.com/e4c6b5ab-5930-4635-a2f2-9d7bbd7d2e89/image/3ad9ac46-a2b5-407f-aee9-b15916ee2370/boombozz-restaurant-project-carmel.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="absolute bottom-14 right-36 bg-[#2947A9] text-white flex justify-start gap-3 flex-col items-start p-6 lg:ml-10 lg:mt-0 mt-6 shadow-lg lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-6">About us</h2>
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
        </div>
      </div>
    </div>
  );
}