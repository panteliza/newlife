import React from "react";
import embryoScopeImage from "../assets/embryoscope.png";
import eggSpindleImage from "../assets/eggspindle.png";
import embryoGlueImage from "../assets/embryoglue.jpeg";
import bgImage from "../assets/bg3.jpg"; // Background image on the left

const OptionalExtras = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-green-300 via-yellow-100 to-white py-12 px-4 md:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <style>
        {`
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

          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-slide-up {
            animation: slideUp 1s ease-out forwards;
          }

          .animate-scale {
            animation: scaleIn 1s ease-out forwards;
          }

          .delay-1 {
            animation-delay: 0.2s;
          }

          .delay-2 {
            animation-delay: 0.4s;
          }

          .delay-3 {
            animation-delay: 0.6s;
          }
        `}
      </style>

      {/* Title and Description */}
      <div className="text-center max-w-4xl mx-auto mb-12 animate-fade">
        <h2 className="text-3xl font-bold text-[#019586] mb-4">
          What others call ‘optional extras’, we call our standard of care
        </h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 via-green-500 to-red-500 text-sm md:text-base">
          Our standard IVF treatment process incorporates advanced scientific
          tools and techniques that other IVF providers do not offer or only
          offer for an additional cost.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 animate-scale delay-1"
        >
          <img
            src={embryoScopeImage}
            alt="EmbryoScope"
            className="w-24 h-24 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            EmbryoScope
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            An incubator that facilitates undisturbed embryo growth and
            continual embryo assessment.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300">
            Learn more
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 animate-scale delay-2"
        >
          <img
            src={eggSpindleImage}
            alt="Egg Spindle Visualisation"
            className="w-24 h-24 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Egg Spindle Visualisation
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            A microscopic imaging system for assessing if an egg is in optimal
            condition for fertilisation via ICSI.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300">
            Learn more
          </button>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300 animate-scale delay-3"
        >
          <img
            src={embryoGlueImage}
            alt="EmbryoGlue"
            className="w-24 h-24 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            EmbryoGlue
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            A nutrient-rich substance designed to promote successful embryo
            transfer into the womb.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptionalExtras;
