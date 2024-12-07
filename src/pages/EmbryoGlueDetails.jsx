import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import embryoGlueImage from "../assets/embryoglue.jpeg"; // Replace with the correct image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EmbryoGlueDetails = () => {
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
              EmbryoGlue
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Once an embryo has grown, the last step in the IVF process is to
              implant the embryo in your womb (your uterus). To increase the
              likelihood of success during this step, we use EmbryoGlue.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              EmbryoGlue is a medium specifically designed to promote successful
              embryo transfer. It acts like its name suggests – as a glue,
              helping the embryo to ‘stick’ to the wall of the uterus.
              EmbryoGlue consists of a compound called hyaluronan, which is
              usually present at high concentrations in the uterus during the
              natural beginnings of a pregnancy. It also contains the protein,
              albumin, which helps in the implantation process as well.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By placing the embryo in EmbryoGlue before transferring it to the
              uterus, we mimic the natural conditions of the uterus, improving
              the chance of a successful transfer. Importantly, there’s evidence
              to back this up. A large review study found that the use of
              hyaluronan, the main component of EmbryoGlue, increased the rates
              of IVF pregnancy and birth.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-on-scroll">
            <div className="relative">
              <img
                src={embryoGlueImage}
                alt="EmbryoGlue"
                className="rounded-lg shadow-lg border border-gray-200"
              />
              <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-400 via-blue-500 to-green-500 w-24 h-24 rounded-full -z-10 transform translate-x-8 -translate-y-8"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmbryoGlueDetails;
