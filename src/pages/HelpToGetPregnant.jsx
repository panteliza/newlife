import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Import images
import pregnantWomanImage from "../assets/abcd.jpg"; // Replace with correct image paths
import heterosexualCouplesImage from "../assets/cd1.png";
import sameSexCouplesImage from "../assets/cd2.png";
import singleParentImage from "../assets/cd3.png";


const HelpToGetPregnant = () => {
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
    <div className="w-full flex-shrink-0">
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(50px);
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

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-3xl font-bold text-teal-700 mb-4 animate-on-scroll">
          Help to Get Pregnant
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
          Newlife IVF provides a range of assisted reproductive technologies
          tailored to your specific needs. Whether you're a heterosexual couple,
          same-sex couple, or single parent, we're here to guide and support
          you.
        </p>
        <div className="flex justify-center mt-6">
          <img
            src={pregnantWomanImage}
            alt="Pregnant woman"
            className="rounded-lg shadow-lg w-full max-w-md animate-on-scroll"
          />
        </div>
      </section>

      {/* Sections */}
      <Section
        title="Heterosexual Couples"
        description="If you’re concerned about your fertility, it’s best to consult a fertility specialist sooner rather than later. This doesn’t necessarily mean you’ll require IVF – there may be other options, depending on your specific situation. Our expertise across all aspects of fertility care ensures we can tailor a treatment plan that’s right for you and your partner."
        image={heterosexualCouplesImage}
        reverse={false}
      />
      <Section
        title="Same-Sex Couples"
        description="Modern fertility treatment can help same-sex couples start or grow their family. Although you do need to overcome some unique challenges, it’s now very common for same-sex couples to use assisted reproductive techniques. Our specialist expertise in this area ensures you have access to the best options available."
        image={sameSexCouplesImage}
        reverse={true}
      />
      <Section
        title="Single Parents"
        description="For single women and men looking to become parents, donor sperm or eggs can be used to help you achieve your dream. Our dedicated fertility specialists provide personalized guidance and support throughout your journey to parenthood."
        image={singleParentImage}
        reverse={false}
      />
      

      <Footer />
    </div>
  );
};

const Section = ({ title, description, image, reverse }) => {
  return (
    <section
      className={`py-12 px-6 md:px-16 lg:px-24 ${
        reverse ? "bg-gray-100" : "bg-white"
      } animate-on-scroll`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div>
          <h2 className="text-2xl font-bold text-teal-700 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg animate-on-scroll"
          />
        </div>
      </div>
    </section>
  );
};

export default HelpToGetPregnant;
