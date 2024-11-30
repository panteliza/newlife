import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

// Importing images from assets
import image1 from "../assets/mother1.jpg"; // Replace with actual file paths for IVF mothers
import image2 from "../assets/mother2.jpg";
import image3 from "../assets/mother3.jpg";
import image4 from "../assets/mother4.jpg";

const reviews = [
  {
    image: image1,
    name: "Soniya Jha",
    review:
      "Choosing this IVF clinic was the best decision of our lives. The doctors and staff were so caring and supportive throughout the process.",
    rating: 5,
  },
  {
    image: image2,
    name: "Preeti Ale",
    review:
      "Thanks to the amazing team here, our family grew with love and care. Highly recommend their services to anyone seeking hope.",
    rating: 5,
  },
  {
    image: image3,
    name: "Samantha Adhikari",
    review:
      "From the initial consultation to the final result, the entire journey was filled with professionalism and compassion. Forever grateful!",
    rating: 4,
  },
  {
    image: image4,
    name: "Jennie Rai",
    review:
      "The facilities and expertise here are unparalleled. We felt truly valued and cared for every step of the way. Thank you for making our dream come true!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#019586] mb-4 sm:mb-6">
          What Our Patients Say
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>

        {/* Slider Section */}
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs mx-auto">
                {/* Profile Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 object-cover"
                />

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 text-center break-words">
                  {review.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center break-words">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
