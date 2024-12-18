import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // AOS styles

import bgImage from "../assets/bg1.jpg"; // Background image for larger screens
import bgImageSmall from "../assets/bg2.png"; // Background image for smaller screens
import fertilityImg1 from "../assets/111.jpg";
import fertilityImg2 from "../assets/222.jpg";
import fertilityImg3 from "../assets/333.jpg";
import fertilityImg4 from "../assets/mother4.jpg";
import fertilityImg5 from "../assets/555.jpg";
import fertilityImg6 from "../assets/666.jpg";

const FertilityOptions = () => {
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only occurs once per scroll
    });
  }, []);

  const options = [
    {
      image: fertilityImg1,
      title: "Understand your fertility",
      description:
        "Learn about infertility, how you can improve fertility, and understand when it’s time to seek help.",
      button: "Begin here",
      link: "/understand-fertility",
    },
    {
      image: fertilityImg2,
      title: "Help to get pregnant",
      description:
        "Learn about the different treatment options available to single women, heterosexual, and same-sex couples.",
      button: "Begin here",
      link: "/help-to-get-pregnant",
    },
    {
      image: fertilityImg3,
      title: "Start IVF treatment",
      description:
        "Find everything you need to get started in one place if you and your specialist have agreed that IVF is right for you.",
      button: "Begin here",
      link: "/start-ivf-treatment",
    },
    {
      image: fertilityImg4,
      title: "Get a second opinion",
      description:
        "If you’ve already had IVF and would like a second opinion, we’re here to help.",
      button: "Begin here",
      link: "/get-second-opinion",
    },
    {
      image: fertilityImg5,
      title: "Preserve my fertility",
      description:
        "Learn about freezing your eggs, sperm, or ovarian tissue to preserve fertility for the future.",
      button: "Begin here",
      link: "/preserve-fertility",
    },
    {
      image: fertilityImg6,
      title: "Become a donor",
      description:
        "Learn about donating your eggs, sperm or embryos.",
      button: "Begin here",
      link: "/become-donor",
    },
  ];

  return (
    <div>
      {/* Large screen background */}
      <div
        className="hidden sm:block relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Content options={options} navigate={navigate} />
      </div>

      {/* Small screen background */}
      <div
        className="block sm:hidden relative bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${bgImageSmall})`,
        }}
      >
        <Content options={options} navigate={navigate} />
      </div>
    </div>
  );
};

const Content = ({ options, navigate }) => (
  <div className="p-8 mx-4">
    {/* Animated Heading */}
    <h1
      className="text-center text-3xl font-bold text-white md:text-[#019586] mb-6"
      data-aos="fade-up"
    >
      Start your journey with Newlife IVF
    </h1>

    {/* Animated Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {options.map((option, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Staggered animation
        >
          <img
            src={option.image}
            alt={option.title}
            className="h-32 w-32 object-cover mb-4 rounded-full"
          />
          <h2 className="text-lg font-semibold mb-2">{option.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{option.description}</p>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
            onClick={() => navigate(option.link)} // Navigate to the specified link
          >
            {option.button}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default FertilityOptions;
