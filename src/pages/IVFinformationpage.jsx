
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import babyImage from  "../assets/a.jpg"; // Replace with your image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const IVFInformationPage = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const sections = [
    {
      title: "What is In Vitro Fertilization (IVF)?",
      content: `
        IVF or in vitro fertilization is a medical process used to help people with fertility issues. 
        It involves fertilizing eggs with sperm in a lab and transferring the embryos to the uterus. 
        This process is often used for those who have difficulty conceiving naturally.`,
    },
    {
      title: "Why is In Vitro Fertilization Done?",
      content: `
        IVF is performed to treat infertility or genetic issues. It is often the primary treatment for women 
        over the age of 40 or those with health conditions such as fallopian tube damage, ovulation disorders, 
        or endometriosis.`,
    },
    {
      title: "How to Prepare for IVF?",
      content: `
        Preparation involves consulting a fertility specialist, undergoing necessary tests like ovarian reserve testing, 
        semen analysis, and ensuring physical and emotional readiness. A healthy lifestyle and prenatal vitamins 
        are recommended.`,
    },
    {
      title: "Steps of the IVF Process",
      content: `
        - Initial Consultation: Meet with a fertility specialist and discuss your medical history.
        - Ovarian Stimulation: Hormonal medications stimulate the production of eggs.
        - Egg Retrieval: A minor surgical procedure retrieves the eggs for fertilization.`,
    },
    {
      title: "Risks Associated with IVF",
      content: `
        - Stress: Emotional and financial strain can occur.
        - Ovarian Hyperstimulation Syndrome (OHSS): Rare but possible.
        - Multiple Pregnancies: A higher risk with IVF.`,
    },
    {
      title: "FAQs About IVF",
      content: `
        - Are IVF babies normal? Yes, IVF babies are as healthy as naturally conceived babies.
        - When should I start IVF? After consultation with a specialist based on your condition.
        - Is IVF safe for mothers? Yes, but it carries some risks, like any medical procedure.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
    {/* Navbar */}
    <Navbar/>
    <div className="bg-gray-50  px-6">
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .fade-in {
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
          }

          .fade-delay-1 {
            animation-delay: 0.3s;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="relative w-full mb-12">
        <img
          src={babyImage}
          alt="Mother and Baby"
          className="w-full h-72 object-cover rounded-lg shadow-md fade-in fade-delay-1"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center fade-in fade-delay-1">
            Welcome to In Vitro Fertilization (IVF) Journey
          </h1>
        </div>
      </div>

      {/* Page Title */}
      <div className="text-center max-w-4xl mx-auto mb-12 fade-in fade-delay-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
          In Vitro Fertilization (IVF)
        </h2>
        <p className="text-gray-700 mt-4">
          Comprehensive information about IVF, its process, and its benefits.
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto mb-12 fade-in`}
          style={{ animationDelay: `${index * 0.4}s` }}
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
    <Footer/>
    </div>
  );
};

export default IVFInformationPage;
