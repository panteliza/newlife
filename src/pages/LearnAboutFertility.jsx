import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Import images
import fertilityImage1 from "../assets/ab1.jpg";
import fertilityImage2 from "../assets/ab2.jpg";
import fertilityImage3 from "../assets/ab3.jpg";
import fertilityImage4 from "../assets/ab4.jpg";

const LearnAboutFertility = () => {
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
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Learn About Fertility
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Following the decision to have a baby, couples often expect to
              fall pregnant immediately. However, this is often not the
              reality. Understanding the basics about fertility and conception
              can help you get your head around the highly complex sequence of
              events that must occur for a new life to begin – and how you can
              help in this process.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={fertilityImage1}
              alt="Couple learning about fertility"
              className="rounded-lg shadow-lg animate-on-scroll"
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section
        title="Reproduction Overview"
        description="As the old adage goes, ‘it takes two to tango’. In other words, conceiving a baby requires both the male and female reproductive systems to be functioning properly. Following sexual intercourse, the egg (from the female) must combine with the sperm (from the male) in an event called fertilisation. They travel together and embed in the uterus to grow and develop into a baby."
        image={fertilityImage2}
        reverse={false} // Image on the right
      />
      <Section
        title="Optimising Your Fertility"
        description="Unprotected vaginal intercourse every two to three days gives you the best chance of falling pregnant. Knowing when you are ovulating can help you understand when you’re most fertile and allow you to time sexual intercourse accordingly. Lifestyle changes can also improve your chances of conceiving."
        image={fertilityImage3}
        reverse={true} // Image on the left
      />
      <Section
        title="Infertility and When to Seek Help"
        description="Infertility is the inability to conceive following twelve months of frequent, unprotected sexual intercourse. If you find yourself in this category, you are not alone. Approximately one in six couples experience infertility. Women under 35 are advised to seek help after 12 months of trying. For women over 35, it is recommended to seek help after 6 months."
        image={fertilityImage4}
        reverse={false} // Image on the right
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
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

export default LearnAboutFertility;
