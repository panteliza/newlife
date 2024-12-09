import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import icsiImage from "../assets/b.jpg";; // Replace with your ICSI image path
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ICSIInformationPage = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sections = [
    {
      title: "What is Intracytoplasmic Sperm Injection (ICSI)?",
      content: `
        Intracytoplasmic Sperm Injection or ICSI is a form of Assisted Reproductive Technologies (ART) 
        used alongside in vitro fertilization. This process involves selecting the best sperm with the 
        highest motility and injecting it directly into a fertile ovum using a microneedle. The embryo 
        is then cultured in a lab until it reaches the blastocyst phase.`,
    },
    {
      title: "ICSI IVF Treatment",
      content: `
        This treatment involves using fertility medicines to aid in the production of high-quality eggs 
        and stimulate the ovaries. The retrieved eggs and sperm are fertilized in the lab, and the 
        resulting embryo is transferred into the uterus.`,
    },
    {
      title: "ICSI IUI Treatment",
      content: `
        In this form of treatment, the sperm is inserted into the uterus during ovulation to 
        fertilize the egg for pregnancy.`,
    },
    {
      title: "Who Uses Intracytoplasmic Sperm Injection?",
      content: `
        - Males with low sperm count or poor sperm quality.
        - Blockage in the male reproductive system.
        - If traditional IVF has not resulted in embryo creation.
        - When the female is over 35 years of age.`,
    },
    {
      title: "Steps of the ICSI Procedure",
      content: `
        - Ovulation Induction: Medications are given to stimulate the ovaries.
        - Egg Retrieval: Eggs are collected using ultrasound-guided technology.
        - Sperm Injection: The best sperm is injected into the egg using a microneedle.`,
    },
    {
      title: "How Long Does ICSI Take?",
      content: `
        The procedure itself takes about 30 minutes to an hour, with additional time for preparation 
        and post-procedure monitoring.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <div className="bg-gray-50 px-6">
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
            src={icsiImage}
            alt="ICSI Procedure"
            className="w-full h-72 object-cover rounded-lg shadow-md fade-in fade-delay-1"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center fade-in fade-delay-1">
              Understanding Intracytoplasmic Sperm Injection (ICSI)
            </h1>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 fade-in fade-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
            Intracytoplasmic Sperm Injection (ICSI)
          </h2>
          <p className="text-gray-700 mt-4">
            Comprehensive guide to ICSI, its process, and its benefits.
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ICSIInformationPage;
