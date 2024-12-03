import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

// Import images from assets
import image1 from "../assets/office1.jpeg";
import image2 from "../assets/office2.jpeg";
import image3 from "../assets/office3.jpeg";
import image4 from "../assets/office4.jpeg";
import image5 from "../assets/mother3.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About New Life IVF, Kathmandu
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At New Life IVF in Kathmandu, we are proud to provide world-class
            fertility treatments, enabling families to realize their dream of
            parenthood. Located in New Baneshwor, Kathmandu, we bring to Nepal
            state-of-the-art facilities and cutting-edge technology that ensure
            the safest and most effective outcomes for our patients.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            New Life IVF boasts the highest success rates in Nepal, thanks to
            our holistic approach and an exceptional team of highly skilled
            doctors and specialists. With years of experience and dedication,
            we have helped countless families achieve healthy births, cementing
            our position as the best IVF center in the country.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Discover hope, happiness, and the joy of starting your family with
            New Life IVF—your trusted partner in reproductive health.
          </p>
        </div>

        {/* Image Slider Section */}
        <div className="md:w-1/2">
          <Swiper
            pagination={{ dynamicBullets: true }}
            navigation={true}
            autoplay={{
              delay: 2000, // Set autoplay delay to 2 seconds
              disableOnInteraction: false, // Keep autoplay active after user interaction
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src={image1}
                alt="IVF Lab 1"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="IVF Lab 2"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                alt="IVF Lab 3"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image4}
                alt="IVF Lab 4"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image5}
                alt="Mother with Child"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;