import React from "react";
import FamilyImage from "../assets/baby (2).jpg"; // Ensure the image exists in the assets folder

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-4 min-h-[25vh] sm:min-h-[35vh] md:min-h-[50vh] lg:min-h-[70vh]"
      style={{
        background: "linear-gradient(to right, #029072, #18A0B0, #48B1CE,  #F47426, #F9990E, #FAED05)",
      }}
    >
      {/* Text Container */}
      <div className="max-w-lg md:max-w-2xl text-center md:text-left animate-fadeIn flex-grow">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight">
          Embark on the Path to Parenthood,{" "}
          <span className="text-yellow-300">the Natural Way</span>
        </h1>
        <p className="mt-3 text-gray-200 text-sm md:text-lg drop-shadow-lg leading-relaxed">
          Discover a natural approach to parenthood with compassionate and personalized IVF care.
        </p>
        <div className="mt-4 flex justify-center md:justify-start">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            style={{
              marginBottom: 0, // Explicitly remove bottom margin
            }}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <img
          src={FamilyImage}
          alt="Family"
          className="w-44 md:w-64 lg:w-72 rounded-full shadow-lg"
          style={{
            animation: "heartbeat 2s infinite ease-in-out",
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
              transform: translateY(-10px);
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
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            30% {
              transform: scale(1.1); /* Slightly larger */
            }
            60% {
              transform: scale(0.95); /* Slightly smaller */
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
