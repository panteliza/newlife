import React from "react";
import HeroImage from "../assets/mother3.jpg"; // Update the path to your image

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-full flex flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <img
          src={HeroImage}
          alt="Parent and child"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-20 text-left z-10">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            Caring. Experienced. Specialists.
          </h1>
          <p className="mt-2 text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg">
            Supporting families every step of the way.
          </p>
        </div>

        {/* Wave Design */}
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-16 sm:h-20 md:h-40"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L30,176C60,160,120,128,180,128C240,128,300,160,360,186.7C420,213,480,235,540,224C600,213,660,171,720,154.7C780,139,840,149,900,154.7C960,160,1020,160,1080,149.3C1140,139,1200,117,1260,122.7C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
