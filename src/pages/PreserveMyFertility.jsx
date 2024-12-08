import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fertilityImage1 from "../assets/lb1.png"; // Replace with the correct image path
import fertilityImage2 from "../assets/lb2.png";
import fertilityImage3 from "../assets/lb3.png";


const PreserveMyFertility = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-on-scroll { opacity: 0; }
        `}
      </style>
      <Navbar />

      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800">Preserve My Fertility</h1>
          <p className="text-gray-600 mt-4">
            Discover ways to safeguard your future fertility with advanced freezing techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Medical Reasons for Fertility Preservation
            </h2>
            <p className="text-gray-600 mb-4">
              Certain medical conditions, such as cancer treatments, can affect fertility. Freezing eggs or sperm offers a solution to preserve reproductive options.
            </p>
            <p className="text-gray-600">
              Our team is here to provide guidance and options tailored to your needs.
            </p>
          </div>
          <img
            src={fertilityImage1}
            alt="Medical Reasons"
            className="rounded-lg shadow-lg animate-on-scroll"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <img
            src={fertilityImage2}
            alt="Freezing Process"
            className="rounded-lg shadow-lg animate-on-scroll"
          />
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              The Freezing Process
            </h2>
            <p className="text-gray-600 mb-4">
              Our freezing process uses cutting-edge technology to ensure the best possible outcomes for fertility preservation.
            </p>
            <p className="text-gray-600">
              Learn more about the steps involved and how we ensure your comfort throughout the process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Costs and Considerations
            </h2>
            <p className="text-gray-600 mb-4">
              We strive to make fertility preservation affordable and accessible. Detailed cost information is available, along with financing options.
            </p>
            <p className="text-gray-600">
              Contact us for personalized consultations regarding your options and plans.
            </p>
          </div>
          <img
            src={fertilityImage3}
            alt="Costs and Considerations"
            className="rounded-lg shadow-lg animate-on-scroll"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreserveMyFertility;
