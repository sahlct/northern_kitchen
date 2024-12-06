import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const navOptions = [
        {
            name: 'Home',
            path: '/home',
            svg: (
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
                    className="icon icon-tabler icon-tabler-home"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            ),
        },
        {
            name: 'About Us',
            path: '/about',
            svg: (
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
                    className="icon icon-tabler icon-tabler-question-mark"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 8a3.5 3.5 0 0 1 3.5 -3h1a3.5 3.5 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                    <path d="M12 19l0 .01" />
                </svg>
            ),
        },
        {
            name: 'Projects',
            path: '/projects',
            svg: (
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
                    className="icon icon-tabler icon-tabler-components"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12l3 3l3 -3l-3 -3z" />
                    <path d="M15 12l3 3l3 -3l-3 -3z" />
                    <path d="M9 6l3 3l3 -3l-3 -3z" />
                    <path d="M9 18l3 3l3 -3l-3 -3z" />
                </svg>
            ),
        },
        {
            name: 'Services',
            path: '/services',
            svg: (
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
                    className="icon icon-tabler icon-tabler-device-gamepad"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2z" />
                    <path d="M15 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2z" />
                    <path d="M12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2z" />
                    <path d="M12 9l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2z" />
                </svg>
            ),
        },
        {
            name: 'Contact Us',
            path: '/contactus',
            svg: (
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
                    className="icon icon-tabler icon-tabler-address-book"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                    <path d="M10 16h6" />
                    <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M4 8h3" />
                    <path d="M4 12h3" />
                    <path d="M4 16h3" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Navbar */}
            <div className="bg-gray-300 fixed z-50 top-0 w-full text-black h-16 flex items-center justify-between px-5 sm:px-20">
                <button
                    className="sm:hidden text-black mr-4"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    {/* SVG Menu Icon */}
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
                        className="icon icon-tabler icon-tabler-menu-2"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </button>

                <div className="brand flex gap-1 items-center sm:mx-0">
                    <div className="logo md:w-10 md:h-10 w-8 h-8">
                        <img
                            src="https://i.pinimg.com/originals/71/f1/b4/71f1b48e456e173f305facb9e8d99b47.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="b_name md:text-2xl text-[#152868] text-lg font-semibold">Northern Pro</div>
                </div>

                {/* Desktop Navigation Options */}
                <div className="options hidden sm:flex gap-8 text-black ml-auto">
                    {navOptions.map((option) => (
                        <Link
                            to={option.path}
                            key={option.name}
                            className={`${location.pathname === option.path ? 'text-orange-500' : ''}`}
                        >
                            {option.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex transition-all duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsSidebarOpen(false)}
            >
                <div
                    className={`bg-white w-[60%] max-w-sm h-full p-5 flex flex-col gap-5 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex w-full justify-end">
                        <button
                            className="text-black"
                            onClick={() => setIsSidebarOpen(false)}
                        >
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
                                className="icon icon-tabler icon-tabler-x"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {navOptions.map((option) => (
                            <Link
                                to={option.path}
                                key={option.name}
                                className={`px-6 py-2 rounded-md flex gap-2 items-center ${location.pathname === option.path
                                    ? 'text-white bg-[#2947A9]'
                                    : 'text-black'
                                    }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {option.svg} {option.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}