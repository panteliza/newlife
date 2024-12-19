import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import semenImage from "../assets/f.jpg"; // Replace with your banner image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SemenFreezingPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInText = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sections = [
    {
      title: "What is Semen Freezing?",
      content: `Semen freezing is a method of preserving male fertility by storing sperm for future use. This process involves collecting a semen sample, which is then analyzed, treated, and frozen for long-term storage.`,
    },
    {
      title: "Is Semen Freezing Right for Me?",
      content: `Semen freezing might be the right choice if:
      - You are undergoing medical treatments like chemotherapy or surgery that may affect fertility.
      - You want to preserve your sperm for personal reasons, such as delayed family planning.
      - You are at risk of injury or death due to your profession or health condition.
      - You are undergoing fertility treatments, such as IVF, and want to ensure sperm availability.`,
    },
    {
      title: "What Does the Semen Freezing Process Involve?",
      content: `The semen freezing process includes:
      - **Sample Collection:** A semen sample is collected either at the clinic or at home (in specific cases).
      - **Semen Analysis:** The sample is analyzed for quality, motility, and concentration.
      - **Freezing and Storage:** The sample is mixed with a cryoprotectant and frozen in liquid nitrogen for long-term storage.`,
    },
    {
      title: "How Much Does Semen Freezing Cost in Nepal?",
      content: `The cost of semen freezing in Nepal ranges from NPR 15,000 to NPR 20,000 per year for storage, with an additional one-time processing fee.`,
    },
    {
      title: "How Safe is Semen Freezing?",
      content: `Semen freezing is a safe and widely used procedure. The freezing and thawing process may slightly reduce sperm motility, but advanced techniques minimize any potential damage.`,
    },
    {
      title: "How Successful is Semen Freezing?",
      content: `The success rates for semen freezing depend on the initial quality of the sperm. Most frozen samples remain viable for many years and can be successfully used in assisted reproductive technologies like IUI and IVF.`,
    },
    {
      title: "What Decisions Do I Need to Make While Freezing Semen?",
      content: `Considerations include:
      - The duration of sperm storage.
      - How the sample will be used (personal treatment or donation).
      - Whether multiple samples are needed for future fertility treatments.`,
    },
    {
      title: "FAQs About Semen Freezing Treatment in Nepal",
      content: `
      - **How much does semen freezing cost in Nepal?** NPR 15,000 to NPR 20,000 per year.
      - **How long can semen be stored?** Sperm can be stored for many years with minimal degradation.
      - **What are the risks of semen freezing?** The process is safe, with minor risks of reduced motility after thawing.`,
    },
    {
      title: "What Are the Advantages and Disadvantages of Semen Freezing?",
      content: `
      **Advantages:**
      - Preserves fertility for future use.
      - Allows flexibility in family planning.
      - Provides peace of mind before medical treatments or high-risk activities.
      **Disadvantages:**
      - Slight reduction in sperm quality after thawing.
      - Requires ongoing storage fees.`,
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 px-6">
        <motion.div
          className="relative w-full mb-12"
          variants={fadeIn}
        >
          <motion.img
            src={semenImage}
            alt="Semen Freezing"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
            <motion.h1
              className="text-white text-3xl md:text-4xl font-bold text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Learn About Semen Freezing Treatment
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
            Semen Freezing
          </h2>
          <p className="text-gray-700 mt-4">
            Understand the process, benefits, and success rates of semen freezing.
          </p>
        </motion.div>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="max-w-6xl mx-auto mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeInText}
            >
              {section.title}
            </motion.h3>
            <motion.p
              className="text-gray-600 text-base leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={fadeInText}
            >
              {section.content}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default SemenFreezingPage;
