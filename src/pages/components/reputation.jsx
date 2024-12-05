import React from "react";

export default function Reputation() {
  // Data for the cards
  const reputationData = [
    {
      title: "Best Services",
      description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
          <path d="M12.5 15.5l2 2" />
          <path d="M15 13l2 2" />
        </svg>
      ),
    },
    {
      title: "Best Teams",
      description: "Cursus semper tellus volutpat aliquet lacus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
      ),
    },
    {
      title: "Best Designs",
      description: "Ultricies at ipsum nunc, tristique nam lectus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-filters"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <path d="M8 11a5 5 0 1 0 3.998 1.997" />
          <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-28">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Reputation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {reputationData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-left shadow-md hover:shadow-lg border-2 border-gray-200 p-6 transition-all duration-300"
            >
              <div className="flex justify-start items-center mb-4 text-orange-500">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}