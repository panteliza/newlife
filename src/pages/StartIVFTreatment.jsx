import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import step1Image from "../assets/ef1.jpg"; // Replace with actual image paths
import step2Image from "../assets/ef2.jpg";
import step3Image from "../assets/ef3.jpg";


const StartIVFTreatment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0">
      <Navbar />
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-on-scroll {
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
          }

          .image-animate {
            opacity: 0;
            animation: fadeIn 1.5s ease-in-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Start Your IVF Journey with Confidence
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Embarking on the journey of IVF treatment is a significant step
              towards building the family of your dreams. This page is your
              guide to understanding the process and making the most of this
              life-changing experience.
            </p>
          </div>
          <div className="flex justify-center">
            
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-last lg:order-first">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Step 1: Attend Required Meetings
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You and your partner are required to attend several meetings
              before progressing with IVF treatment. These include counseling
              sessions to understand the process, finance meetings to plan for
              costs, and nurse consultations to discuss medical preparations.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step1Image}
              alt="Attend Meetings"
              className="rounded-lg shadow-lg image-animate"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Step 2: Collect Your Medications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your fertility nurse will arrange for your medications to be
              dispensed. These medications will be vital for preparing your
              body for the IVF cycle. Ensure you understand the dosage and
              schedule as instructed by your nurse.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step2Image}
              alt="Collect Medications"
              className="rounded-lg shadow-lg image-animate"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-last lg:order-first">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Step 3: Start Treatment
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Begin your medication as instructed by your fertility nurse.
              During this phase, regular monitoring will be conducted to track
              your response to the medications and make necessary adjustments.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step3Image}
              alt="Start Treatment"
              className="rounded-lg shadow-lg image-animate"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartIVFTreatment;
