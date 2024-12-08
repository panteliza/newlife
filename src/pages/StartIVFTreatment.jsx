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
        `}
      </style>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Start IVF Treatment
            </h1>
            <p className="text-gray-600 leading-relaxed">
              If you have arrived on this page, it means that you and your
              fertility specialist have decided that IVF treatment is right for
              you.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step1Image}
              alt="Start IVF Treatment"
              className="rounded-lg shadow-lg"
            />
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
              before progressing with IVF treatment, including counseling
              sessions, finance meetings, and nurse meetings.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step2Image}
              alt="Attend Meetings"
              className="rounded-lg shadow-lg"
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
              dispensed. Medications will be ready for pickup at designated
              pharmacies or treatment centers.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step3Image}
              alt="Collect Medications"
              className="rounded-lg shadow-lg"
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
              Begin your medication as instructed by your fertility nurse. If
              you encounter any issues, our friendly team is here to help.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={step3Image}
              alt="Start Treatment"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartIVFTreatment;
