import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-300 fixed z-50 top-0 w-full text-black h-16 flex items-center px-4 sm:px-20">
        {/* Hamburger icon for small screens */}
        <div className="sm:hidden mr-4" onClick={() => setSidebarOpen(true)}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>

        {/* Brand (Logo + Name) */}
        <div className="brand flex items-center mx-auto sm:mx-0 gap-1">
          <div className="logo w-10 h-10">
            <img
              src="https://i.pinimg.com/originals/71/f1/b4/71f1b48e456e173f305facb9e8d99b47.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="b_name text-2xl font-semibold">Northern Pro</div>
        </div>

        {/* Menu Options (Desktop) */}
        <div className="options hidden sm:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className={`${
                location.pathname === item.path ? 'text-orange-500' : ''
              } hover:text-orange-500`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar (Small Screens) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="bg-gray-200 w-64 h-full shadow-lg p-4">
            <button
              className="text-right text-xl mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`block text-left w-full p-2 rounded-md ${
                  location.pathname === item.path ? 'text-orange-500' : ''
                } hover:bg-gray-300`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Close the sidebar */}
          <div
            className="flex-1"
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}
