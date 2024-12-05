import React from "react";

export default function ConnectUs() {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto rounded-lg md:p-8">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What can we do for you?
          </h2>
          <p className="text-gray-600 mt-2">
            We are ready to work on a project of any complexity, whether it's
            commercial or residential.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Input Fields (Responsive Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Reason for Contacting*"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Note */}
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> indicates a required field
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-20 py-2 bg-[#2947A9] text-white hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

