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
      <div className="max-w-lg md:max-w-2xl text-center md:text-left animate-containerFadeIn flex-grow">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight animate-headingFadeIn">
          Embark on the Path to Parenthood,{" "}
          <span className="text-yellow-300">the Natural Way</span>
        </h1>
        <p className="mt-3 text-gray-200 text-sm md:text-lg drop-shadow-lg leading-relaxed animate-paragraphFadeIn">
          Discover a natural approach to parenthood with compassionate and personalized IVF care.
        </p>
        <div className="mt-4 flex justify-center md:justify-start animate-buttonFadeIn">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
          About Us
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mb-4 md:mb-0 animate-imageFadeIn">
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
          /* Container Animation */
          @keyframes containerFadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Heading Animation */
          @keyframes headingFadeIn {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Paragraph Animation */
          @keyframes paragraphFadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Button Animation */
          @keyframes buttonFadeIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Image Animation */
          @keyframes imageFadeIn {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-15deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          /* Apply Animations */
          .animate-containerFadeIn {
            animation: containerFadeIn 1s ease-out forwards;
          }
          .animate-headingFadeIn {
            animation: headingFadeIn 1.2s ease-out forwards;
          }
          .animate-paragraphFadeIn {
            animation: paragraphFadeIn 1.4s ease-out forwards;
          }
          .animate-buttonFadeIn {
            animation: buttonFadeIn 1.6s ease-out forwards;
          }
          .animate-imageFadeIn {
            animation: imageFadeIn 1.8s ease-out forwards;
          }

          /* Heartbeat Animation for Image */
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            30% {
              transform: scale(1.1);
            }
            60% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
