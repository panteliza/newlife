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
      {/* Title and Description */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What others call ‘optional extras’, we call our standard of care
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Our standard IVF treatment process incorporates advanced scientific
          tools and techniques that other IVF providers do not offer or only
          offer for an additional cost.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <img
            src={embryoScopeImage}
            alt="EmbryoScope"
            className="w-20 h-20 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            EmbryoScope
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            An incubator that facilitates undisturbed embryo growth and
            continual embryo assessment.
          </p>
          <button className="mt-4 bg-yellow-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-yellow-600">
            Learn more
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <img
            src={eggSpindleImage}
            alt="Egg Spindle Visualisation"
            className="w-20 h-20 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Egg Spindle Visualisation
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            A microscopic imaging system for assessing if an egg is in optimal
            condition for fertilisation via ICSI.
          </p>
          <button className="mt-4 bg-yellow-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-yellow-600">
            Learn more
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300">
          <img
            src={embryoGlueImage}
            alt="EmbryoGlue"
            className="w-20 h-20 mb-4 rounded-full border border-gray-300 object-cover"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            EmbryoGlue
          </h3>
          <p className="text-gray-600 text-center mt-2 text-sm">
            A nutrient-rich substance designed to promote successful embryo
            transfer into the womb.
          </p>
          <button className="mt-4 bg-yellow-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-yellow-600">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptionalExtras;
