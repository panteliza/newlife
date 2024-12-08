import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import eggSpindleImage from "../assets/eggspindle (2).png"; // Replace with the correct image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EggSpindleDetails = () => {
  const location = useLocation();

  // Scroll to top on location change
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
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex-shrink-0 animate-pageLoad">
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-on-scroll {
            opacity: 0;
          }
        `}
      </style>

      <Navbar />
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Egg Spindle Visualisation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For all ICSI procedures, we routinely use an incredibly powerful
              microscope that utilises polarised light. By using this advanced
              microscopic imaging system, we can assess a structure inside your
              eggs called a ‘spindle’. This allows us to identify if an egg is
              in optimal condition for fertilisation – higher pregnancy rates
              have been observed in embryos derived from eggs with a
              normal-shaped spindle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Thus, by using this system, our scientists are better able to
              select the eggs with the greatest potential of producing a
              pregnancy. This leading technology also allows us to assess the
              best position to inject the sperm into the egg during ICSI.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-on-scroll">
            <div className="relative">
              <img
                src={eggSpindleImage}
                alt="Egg Spindle Visualisation"
                className="rounded-lg shadow-lg border border-gray-200"
              />
              <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-400 via-green-500 to-yellow-500 w-24 h-24 rounded-full -z-10 transform translate-x-8 -translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EggSpindleDetails;
