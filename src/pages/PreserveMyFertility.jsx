import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fertilityImage1 from "../assets/lb1.png";
import fertilityImage2 from "../assets/lb2.png";
import fertilityImage3 from "../assets/lb3.png";

const PreserveMyFertility = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    <div>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-on-scroll { opacity: 0; }

          /* Image hover animation */
          .image-hover {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
          .image-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <Navbar />

      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800">Preserve My Fertility</h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore options to safeguard your reproductive future with advanced fertility preservation techniques. 
            Whether medical, personal, or career-driven, we've got you covered.
          </p>
        </div>

        {/* Section 1: Medical Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Medical Reasons for Fertility Preservation
            </h2>
            <p className="text-gray-600 mb-4">
              Fertility can be impacted by medical treatments like chemotherapy, radiation therapy, or surgeries.
              Fertility preservation ensures that patients undergoing such treatments have the chance to start a family in the future.
            </p>
            <p className="text-gray-600">
              Our team offers expert guidance, personalized options, and compassionate care tailored to your medical needs.
            </p>
          </div>
          <img
            src={fertilityImage1}
            alt="Medical Reasons"
            className="rounded-lg shadow-lg image-hover animate-on-scroll"
          />
        </div>

        {/* Section 2: Freezing Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <img
            src={fertilityImage2}
            alt="Freezing Process"
            className="rounded-lg shadow-lg image-hover animate-on-scroll"
          />
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Freezing Process
            </h2>
            <p className="text-gray-600 mb-4">
              Using cutting-edge cryopreservation techniques, we freeze and store your eggs, sperm, or embryos for future use. 
              This process ensures maximum viability and success rates for fertility treatments when you're ready.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Non-invasive and painless collection process</li>
              <li>State-of-the-art laboratories and storage facilities</li>
              <li>Highly experienced fertility specialists</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Costs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Costs and Considerations
            </h2>
            <p className="text-gray-600 mb-4">
              We are committed to making fertility preservation accessible. Our plans are flexible, and we offer financing options to
              support your journey.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Transparent pricing with no hidden costs</li>
              <li>Financing plans to accommodate your budget</li>
              <li>Insurance guidance and consultation</li>
            </ul>
          </div>
          <img
            src={fertilityImage3}
            alt="Costs and Considerations"
            className="rounded-lg shadow-lg image-hover animate-on-scroll"
          />
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-12 px-8 text-center rounded-lg shadow-lg mt-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Take Control of Your Future</h2>
          <p className="text-white mb-6 max-w-3xl mx-auto">
            Ready to learn more about fertility preservation? Contact our team today for a consultation and take the first step towards 
            securing your reproductive future.
          </p>
          <a
            href="mailto:hello@newlifeivf.com.au"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreserveMyFertility;
