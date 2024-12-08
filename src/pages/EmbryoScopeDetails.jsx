import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import embryoImage from "../assets/ep1.png"; // Replace with the correct image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EmbryoScopeDetails = () => {
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
              EmbryoScope (time-lapse culture and incubation)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As your embryos grow, we need to frequently assess their
              development, so that we can select the best embryo to transfer to
              your womb. This assessment has traditionally been limited in
              frequency, as it required repeated opening of the incubator in
              which the embryos were growing. A bit like opening the oven door
              when baking a cake, this can lead to undesirable fluctuations in
              growth conditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The EmbryoScope time-lapse system solves this dilemma. This
              specially designed incubator has a built-in microscope and camera,
              allowing us to take detailed images of your growing embryos at
              short, periodic intervals. It’s near-continuous observation
              enables a more in-depth analysis of embryo quality by our
              scientists, allowing us to select the embryo that will most likely
              result in a successful pregnancy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What’s more, the EmbryoScope allows us to do this without
              physically removing the embryos from the incubator, ensuring a
              stable growth environment as they develop.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-on-scroll">
            <div className="relative">
              <img
                src={embryoImage}
                alt="EmbryoScope"
                className="rounded-lg shadow-lg border border-gray-200"
              />
              <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-400 via-blue-500 to-pink-500 w-24 h-24 rounded-full -z-10 transform translate-x-8 -translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmbryoScopeDetails;
