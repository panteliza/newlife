import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Pagination and Autoplay modules
import "swiper/css";
import "swiper/css/pagination";

// Import doctor images
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

const DoctorsSlider = () => {
  const doctors = [
    {
      name: "Dr. Asmita Pandey",
      description:
        "MBBS, Dhaka University, Bangladesh MD, Obs/Gyn, Kathmandu Medical College, 1 Year Fellowship in Lilavati Hospital Diploma in Reproductive Medicine, Germany",
      image: doctor1,
    },
    {
      name: "Dr. Dipti Das",
      description:
        "MBBS, BPKIHS, Dharan MD, Obs/Gyn, AIIMS, India 2 years fellowship in Bangalore Assisted Conception Centre, Bangalore, India",
      image: doctor2,
    },
    {
      name: "Dr. John Doe",
      description:
        "MBBS, XYZ University, Specialist in Fertility Treatments and Reproductive Medicine. Experience with global clinics in IVF practices.",
      image: doctor3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#019586] mb-12">
        Our Experienced and Most Trusted Doctors
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]} // Add Autoplay module
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Set autoplay delay to 2 seconds
          disableOnInteraction: false, // Keep autoplay running even after interaction
        }}
        className="mySwiper"
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              {/* Doctor Image */}
              <div
                className="flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-105"
                style={{ animation: "fadeIn 0.5s ease-in-out" }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-72 h-72 md:w-80 md:h-80 rounded-lg object-cover shadow-lg"
                />
              </div>
              {/* Doctor Details */}
              <div className="text-center md:text-left max-w-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {doctor.description}
                </p>
                <div className="mt-6 h-[2px] bg-blue-500 w-16 mx-auto md:mx-0"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorsSlider;
