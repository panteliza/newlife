import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import babyImage from "../assets/e.jpg"; // Replace with your banner image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EggFreezingPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sections = [
    {
      title: "What is Egg Freezing?",
      content: `Egg freezing, at its core, is one of the ways of preserving a woman's fertility to ensure she can try to have a family in the future. This process involves collecting a woman's eggs and freezing them. The frozen eggs are thawed at a later date so that the egg can be used in fertility treatment.`,
    },
    {
      title: "Is Egg Freezing Right for Me?",
      content: `Egg freezing might be the right choice if:
      - You need a medical treatment like chemotherapy that can lower fertility.
      - You want to preserve your eggs for future use due to personal reasons.
      - You are at risk of injury or death.
      - You want to avoid leaving embryos unused after IVF treatment.`,
    },
    {
      title: "What Does Egg Freezing Treatment Process Involve?",
      content: `The egg freezing process includes:
      - **Ovarian Stimulation:** Fertility medications stimulate the ovaries to produce multiple eggs in one cycle.
      - **Egg Retrieval:** Eggs are collected under anesthesia through a minor procedure.
      - **Egg Freezing:** Retrieved eggs are rapidly frozen to prevent damage.`,
    },
    {
      title: "How Much Does Egg Freezing Treatment Cost in Nepal?",
      content: `The cost varies based on individual circumstances, ranging from NPR 50,000 to NPR 60,000 at Hardik IVF and Fertility Center.`,
    },
    {
      title: "How Safe is Egg Freezing Treatment in Nepal?",
      content: `Egg freezing is generally safe. Some potential side effects include:
      - Ovarian hyperstimulation syndrome (OHSS)
      - Infection
      - Bleeding
      - Hormonal side effects
      - Blood clots`,
    },
    {
      title: "How Successful is Egg Freezing?",
      content: `The success rates of egg freezing are:
      - 80-90% for eggs surviving the warming process.
      - 50-80% fertilization success rate for warmed eggs.
      - 20-35% chance of a single embryo developing into a pregnancy (under age 35).`,
    },
    {
      title: "What Decisions Do I Need to Make While Egg Freezing?",
      content: `Considerations include:
      - The duration of egg storage.
      - What happens to the eggs if no decision is made.
      - Whether eggs will be used for personal treatment or donation.`,
    },
    {
      title: "FAQs About Egg Freezing Treatment in Nepal",
      content: `
      - **How much does egg freezing treatment cost in Nepal?** NPR 50,000 to NPR 60,000.
      - **How risky is egg freezing treatment?** Minimal risks, but some women experience side effects from fertility drugs.
      - **What is the purpose of freezing a woman's eggs?** To preserve fertility for future use.`,
    },
    {
      title: "What Are Egg Freezing Advantages and Disadvantages?",
      content: `
      **Advantages:**
      - Preserves fertility and delays childbearing.
      - Provides a higher chance of successful conception later in life.
      **Disadvantages:**
      - Does not guarantee pregnancy.
      - Requires medical intervention and costs.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-50 px-6">
        <div className="relative w-full mb-12">
          <img
            src={babyImage}
            alt="Egg Freezing"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
              Learn About Egg Freezing Treatment
            </h1>
          </div>
        </div>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
            Egg Freezing
          </h2>
          <p className="text-gray-700 mt-4">
            Understand the process, benefits, and success rates of egg freezing.
          </p>
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            className="max-w-6xl mx-auto mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EggFreezingPage;
