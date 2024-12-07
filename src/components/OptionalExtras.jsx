import React from "react";
import { motion } from "framer-motion";
import embryoScopeImage from "../assets/embryoscope.png";
import eggSpindleImage from "../assets/eggspindle.png";
import embryoGlueImage from "../assets/embryoglue.jpeg";
import bgImage from "../assets/bg3.jpg"; // Background image on the left

const OptionalExtras = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-r from-green-300 via-yellow-100 to-white py-12 px-4 md:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title and Description */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-[#019586] mb-4">
          What others call ‘optional extras’, we call our standard of care
        </h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 via-green-500 to-red-500 text-sm md:text-base">
          Our standard IVF treatment process incorporates advanced scientific
          tools and techniques that other IVF providers do not offer or only
          offer for an additional cost.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          variants={cardVariants}
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
          <motion.button
            className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          variants={cardVariants}
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
          <motion.button
            className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          variants={cardVariants}
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
          <motion.button
            className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OptionalExtras;
