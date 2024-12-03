import React from "react";
import bgImage from "../assets/bg1.jpg"; // Replace with your actual background image
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
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="p-8 mx-4">
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Start your journey with Newlife IVF
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={option.image}
                alt={option.title}
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h2 className="text-lg font-semibold mb-2">{option.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{option.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FertilityOptions;
