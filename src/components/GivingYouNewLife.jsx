import React from "react";
import clinicianIcon from "../assets/bc (1).jpg"; // Replace with the correct path to your icons
import microscopeIcon from "../assets/bc (2).jpg";
import supportIcon from "../assets/bc (3).jpg";

const GivingYouNewLife = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleUp {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out both;
          }

          .animate-scaleUp {
            animation: scaleUp 1s ease-out both;
          }

          .delay-200 {
            animation-delay: 0.2s;
          }

          .delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>

      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-12 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-[#019586] mb-4">
          Giving you Newlife in a different way
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-scaleUp">
          <img
            src={clinicianIcon}
            alt="Clinician-Owned and Led"
            className="w-24 h-24 mb-4 rounded-full"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Clinician-Owned and Led
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Our clinics are fully owned and operated by fertility specialists –
            so we can put patients first.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-scaleUp delay-200">
          <img
            src={microscopeIcon}
            alt="Best Scientific Practice for All"
            className="w-24 h-24 mb-4 rounded-full"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Best Scientific Practice for All
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Access to the latest, evidence-based tools and techniques – as our
            standard of care.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-medium py-2 px-6 rounded-lg hover:opacity-90 transition duration-300 hover:scale-105">
            About us
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-scaleUp delay-400">
          <img
            src={supportIcon}
            alt="Genuine Care and Support"
            className="w-24 h-24 mb-4 rounded-full"
          />
          <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
            Genuine Care and Support
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            A team committed to supporting you throughout your entire fertility
            journey – from our family to yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GivingYouNewLife;
