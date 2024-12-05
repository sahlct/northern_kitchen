import React, { useState } from "react";

export default function Services() {
    // Data for each service option
    const servicesData = [
        {
            title: "Project Management",
            items: [
                {
                    image: "assets/projectManagementImage1.png",
                    header: "Project Management 1",
                    content: "102 Elm St, Miami, FL",
                },
                {
                    image: "assets/projectManagementImage2.png",
                    header: "Project Management 2",
                    content: "203 Willow Dr, Boston, MA",
                },
                {
                    image: "assets/projectManagementImage3.png",
                    header: "Project Management 3",
                    content: "304 Cedar Blvd, Austin, TX",
                },
                {
                    image: "assets/projectManagementImage4.png",
                    header: "Project Management 4",
                    content: "405 Birch Ln, Denver, CO",
                },
            ],
        },
        {
            title: "Interior Designing",
            items: [
                {
                    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/LI/QM/SQ/91419038/kitchen-interior-service.jpg",
                    header: "Interior Design 1",
                    content: "123 Pine St, Atlanta, GA",
                },
                {
                    image: "https://www.designdemaison.in/wp-content/uploads/2024/03/Interior-Designer-For-Kitchen.jpeg",
                    header: "Interior Design 2",
                    content: "234 Oak Rd, Dallas, TX",
                },
                {
                    image: "https://www.d2rinteriors.com/images/modular1.jpg",
                    header: "Interior Design 3",
                    content: "345 Cedar Ln, Houston, TX",
                },
                {
                    image: "https://bonito.in/wp-content/uploads/2021/10/Blog-Detail-01-1.jpg",
                    header: "Interior Design 4",
                    content: "456 Spruce Ave, Charlotte, NC",
                },
            ],
        },
        {
            title: "Consultation",
            items: [
                {
                    image: "https://images.squarespace-cdn.com/content/v1/5358c6dbe4b090d1c9b457db/1578579636119-HFU75GFT4V4WKUSWJ992/Design+Process.jpg",
                    header: "Consultation Service 1",
                    content: "123 Main St, San Francisco, CA",
                },
                {
                    image: "https://i.pinimg.com/736x/61/a2/26/61a226401a06364968c0b35ecffe2ea3.jpg",
                    header: "Consultation Service 2",
                    content: "456 Oak Ave, New York, NY",
                },
                {
                    image: "https://www.easylifekitchens.co.za/wp-content/uploads/2022/03/Asset-11.png",
                    header: "Consultation Service 3",
                    content: "789 Pine St, Los Angeles, CA",
                },
                {
                    image: "https://www.dfdesigninteriors.com/wp-content/uploads/2019/11/Kitchen-Design-Build.jpg",
                    header: "Consultation Service 4",
                    content: "101 Maple Rd, Chicago, IL",
                },
            ],
        },
        {
            title: "Design",
            items: [
                {
                    image: "https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg",
                    header: "Design 1",
                    content: "506 Spruce Ave, Portland, OR",
                },
                {
                    image: "https://media.designcafe.com/wp-content/uploads/2022/01/08210202/contemporary-kitchen-design-for-your-kitchen.jpg",
                    header: "Design 2",
                    content: "607 Fir St, Seattle, WA",
                },
                {
                    image: "https://www.assureshift.in/sites/default/files/images/content-images/spacious-l-shaped-modular-kitchen-design.jpg",
                    header: "Design 3",
                    content: "708 Redwood Ct, Phoenix, AZ",
                },
                {
                    image: "https://ouchcart.com/cdn/shop/articles/105.jpg?v=1686338261",
                    header: "Design 4",
                    content: "809 Maple Dr, Las Vegas, NV",
                },
            ],
        },
    ];

    const [activeOption, setActiveOption] = useState(0); // Active option index
    const [currentPage, setCurrentPage] = useState(0); // Current page for pagination

    const itemsPerPage = 4;
    const currentItems =
        servicesData[activeOption].items.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
        );

    const handleNext = () => {
        const totalPages = Math.ceil(servicesData[activeOption].items.length / itemsPerPage);
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const handleBack = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleOptionChange = (index) => {
        setActiveOption(index);
        setCurrentPage(0); // Reset to first page when switching options
    };

    return (
        <div className="flex flex-col md:flex-row bg-white p-6 md:p-16 gap-8">
            {/* Left Side - Options */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
                <h2 className="text-2xl text-start font-bold text-gray-800 mb-5">Services</h2>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="flex gap-3 items-center cursor-pointer"
                        onClick={() => handleOptionChange(index)}
                    >
                        {index === activeOption && (
                            <p className="w-1 h-5 bg-[#2947A9]"></p>
                        )}
                        <p
                            className={`text-gray-800 ${index === activeOption
                                ? "text-[#2947A9] font-bold"
                                : "text-gray-500"
                                }`}
                        >
                            {service.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right Side - Image and Content */}
            <div className="flex flex-col items-end w-full md:w-3/4">
                <div className="grid grid-cols-2 gap-8 w-[80%]">
                    {currentItems.map((item, index) => (
                        <div key={index} className="border overflow-hidden">
                            <img
                                src={item.image}
                                className="w-full h-36 object-cover"
                                alt={item.header}
                            />
                            <div className="px-4 py-1 bg-[#2947A9] flex flex-col items-start">
                                <h1 className="text-base font-semibold text-white">{item.header}</h1>
                                <p className="text-xs text-gray-400">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div className="flex gap-8 w-[80%] items-center justify-between mt-3">
                    <button
                        onClick={handleBack}
                        disabled={currentPage === 0}
                        className={`px-10 py-2 border ${currentPage === 0
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Back
                    </button>

                    <div className="flex gap-2 items-center">
                            <div className=" w-2 h-2 bg-[#2947A9] rounded-md"></div>
                            <div className=" w-2 h-2 bg-gray-400 rounded-md"></div>
                            <div className=" w-2 h-2 bg-gray-400 rounded-md"></div>
                            <div className=" w-2 h-2 bg-gray-400 rounded-md"></div>
                            <div className=" w-2 h-2 bg-gray-400 rounded-md"></div>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={
                            (currentPage + 1) * itemsPerPage >=
                            servicesData[activeOption].items.length
                        }
                        className={`px-10 py-2 border ${(currentPage + 1) * itemsPerPage >=
                            servicesData[activeOption].items.length
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
