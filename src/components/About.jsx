import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component

// Import images from assets
import image1 from "../assets/office1.jpeg";
import image2 from "../assets/office2.jpeg";
import image3 from "../assets/office3.jpeg";
import image4 from "../assets/office4.jpeg";
import image5 from "../assets/mother3.jpg";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" className="w-full flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <motion.section
        className="bg-gray-50 py-12 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
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
          </motion.div>

          {/* Image Slider Section */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Swiper
              pagination={{ dynamicBullets: true }}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="rounded-lg shadow-lg"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {[image1, image2, image3, image4, image5].map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover"
                    variants={imageFadeIn}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default About;
