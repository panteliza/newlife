import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const locationRef = useRef(null);
  const contactRef = useRef(null);
  const mailRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1'; // Ensure the element is visible
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (locationRef.current) observer.observe(locationRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (mailRef.current) observer.observe(mailRef.current);

    return () => {
      if (locationRef.current) observer.unobserve(locationRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (mailRef.current) observer.unobserve(mailRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <h2 className="font-bold sm:text-[45px] text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[#019586] mb-8">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Box */}
        <div
          ref={locationRef}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInLeft 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaMapMarkerAlt className="text-[#019586] text-4xl mb-4 shiver-icon transition duration-300 hover:text-red-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Our Location
          </h3>
          <p className="text-center text-gray-700">New Baneshwor, Kathmandu, Nepal</p>
        </div>

        {/* Contact Box */}
        <div
          ref={contactRef}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInBottom 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaPhoneAlt className="text-[#019586] text-4xl mb-4 shiver-icon transition duration-300 hover:text-red-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Our Contact
          </h3>
          <p className="text-center text-gray-700">977 9851344422</p>
        </div>

        {/* Mail Box */}
        <div
          ref={mailRef}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInRight 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaEnvelope className="text-[#019586] text-4xl mb-4 shiver-icon transition duration-300 hover:text-red-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Mail Us
          </h3>
          <p className="text-center text-gray-700">newlifeivfnepal@gmail.com</p>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInBottom {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Stronger Shiver effect for icons */
        @keyframes shiver {
          0% { transform: translate(0, 0) rotate(0); }
          25% { transform: translate(-3px, 3px) rotate(-1deg); }
          50% { transform: translate(3px, -3px) rotate(1deg); }
          75% { transform: translate(-3px, -3px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0); }
        }

        .shiver-icon {
          animation: shiver 1s infinite ease-in-out; /* Faster and more noticeable shiver effect */
        }

        /* Media queries for responsive adjustments */
        @media (max-width: 768px) {
          .transform {
            animation-duration: 0.8s; /* Faster animations on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
