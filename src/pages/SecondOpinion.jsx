import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import secondOpinionImage1 from "../assets/baby (5).jpg";
import secondOpinionImage2 from "../assets/gh.jpg";


const SecondOpinion = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex-shrink-0">
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-on-scroll {
            opacity: 0;
          }
        `}
      </style>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Get a Second Opinion
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Like many things in life, IVF treatment offers no guarantees.
              While it holds the potential to fulfill dreams of parenthood,
              unsuccessful IVF cycles can occur, leaving you searching for
              answers. Our specialist team is here to identify the options
              still available to you, given your fertility journey so far.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={secondOpinionImage1}
              alt="Get a Second Opinion"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Approach to IVF 'Veterans'
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Firstly, we listen. We dedicate the time to hear about what you
              have tried to date and diligently apply ourselves to find any
              medical or other factors that may have prevented success. We also
              strive to understand your current circumstances from every angle.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We then use this knowledge to guide your care, addressing these
              factors before initiating further treatment.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={secondOpinionImage2}
              alt="Our Approach"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We established Newlife IVF with the aim of providing the highest
              standard of fertility care, as well as a genuinely caring and
              supportive environment for patients. With this in mind, our
              practice differs from others by offering tools and techniques as
              part of our standard practice.
            </p>
          </div>
          <div className="flex justify-center">
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondOpinion;
