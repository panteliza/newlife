import React from "react";
import FamilyImage from "../assets/baby (2).jpg"; // Ensure the image exists in the assets folder

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-6"
      style={{
        background: "linear-gradient(to right, #029072, #18A0B0, #48B1CE,  #F47426, #F9990E, #FAED05)",
      }}
    >
      {/* Text Container */}
      <div className="max-w-lg md:max-w-2xl text-center md:text-left animate-fadeIn">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
          Embark on the Path to Parenthood,{" "}
          <span className="text-yellow-300">the Natural Way</span>
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-gray-200 text-base md:text-xl drop-shadow-lg leading-relaxed">
          Discover a natural approach to parenthood with compassionate and personalized IVF care.
        </p>
        {/* Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Read More
          </button>
        </div>
      </div>

      {/* Family Image with Enhanced Animation */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          src={FamilyImage}
          alt="Family"
          className="w-52 md:w-72 lg:w-96 rounded-full shadow-lg"
          style={{
            animation: "float 10s ease-in-out infinite, scalePulse 3s infinite ease-in-out",
          }}
        />
      </div>

      {/* Inline Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes scalePulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
