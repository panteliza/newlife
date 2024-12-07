import React from "react";
import HeroImage from "../assets/mother3.jpg"; // Update the path to your image

const HeroPage = () => {
  return (
    <div className=" bg-gray-100  ">
      {/* Hero Section */}
     
        {/* Background Image */}
        <img
          src={HeroImage}
          alt="Parent and child"
          className=" object-contain"
        />
     
    </div>
  );
};

export default HeroPage;
