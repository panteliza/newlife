import React from "react";
import bgImage from "../assets/bg1.jpg"; // Background image for larger screens
import bgImageSmall from "../assets/bg2.png"; // Background image for smaller screens
import fertilityImg1 from "../assets/mother1.jpg";
import fertilityImg2 from "../assets/mother2.jpg";
import fertilityImg3 from "../assets/mother3.jpg";
import fertilityImg4 from "../assets/mother4.jpg";
import fertilityImg5 from "../assets/mother5.jpg";

const FertilityOptions = () => {
  const options = [
    {
      image: fertilityImg1,
      title: "Understand your fertility",
      description:
        "Learn about infertility, how you can improve fertility, and understand when it’s time to seek help.",
      button: "Begin here",
    },
    {
      image: fertilityImg2,
      title: "Help to get pregnant",
      description:
        "Learn about the different treatment options available to single women, heterosexual, and same-sex couples.",
      button: "Begin here",
    },
    {
      image: fertilityImg3,
      title: "Start IVF treatment",
      description:
        "Find everything you need to get started in one place if you and your specialist have agreed that IVF is right for you.",
      button: "Begin here",
    },
    {
      image: fertilityImg4,
      title: "Get a second opinion",
      description:
        "If you’ve already had IVF and would like a second opinion, we’re here to help.",
      button: "Begin here",
    },
    {
      image: fertilityImg5,
      title: "Preserve my fertility",
      description:
        "Learn about freezing your eggs, sperm, or ovarian tissue to preserve fertility for the future.",
      button: "Begin here",
    },
  ];

  return (
    <div>
      <style>
        {`
          @keyframes fadeInZoom {
            0% {
              opacity: 0;
              transform: translateY(-20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes slideFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideFromRight {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-heading {
            animation: fadeInZoom 1s ease-out forwards;
          }

          .animate-left {
            animation: slideFromLeft 1s ease-out forwards;
          }

          .animate-right {
            animation: slideFromRight 1s ease-out forwards;
          }

          .animation-delay-1 {
            animation-delay: 0.2s;
          }

          .animation-delay-2 {
            animation-delay: 0.4s;
          }

          .animation-delay-3 {
            animation-delay: 0.6s;
          }

          .animation-delay-4 {
            animation-delay: 0.8s;
          }
        `}
      </style>

      {/* Large screen background */}
      <div
        className="hidden sm:block relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Content options={options} />
      </div>

      {/* Small screen background */}
      <div
        className="block sm:hidden relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${bgImageSmall})`,
        }}
      >
        <Content options={options} />
      </div>
    </div>
  );
};

const Content = ({ options }) => (
  <div className="p-8 mx-4">
    <h1 className="text-center text-3xl font-bold text-white md:text-[#019586] mb-6 animate-heading">
      Start your journey with Newlife IVF
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {options.map((option, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center ${
            index % 2 === 0 ? "animate-left" : "animate-right"
          } animation-delay-${index}`}
        >
          <img
            src={option.image}
            alt={option.title}
            className="h-32 w-32 sm:object-cover object-contain mb-4 rounded-full"
          />
          <h2 className="text-lg font-semibold mb-2">{option.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{option.description}</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            {option.button}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default FertilityOptions;
