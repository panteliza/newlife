import React, { useEffect, useState } from "react";
import service1 from "../assets/IMSSI2.png";
import hover1 from "../assets/a.jpg";
import service2 from "../assets/LAH2.png";
import hover2 from "../assets/b.jpg";
import service3 from "../assets/BTT2.png";
import hover3 from "../assets/c.jpg";
import service4 from "../assets/IMSSI2.png";
import hover4 from "../assets/d.jpg";
import service5 from "../assets/LAH2.png";
import hover5 from "../assets/e.jpg";
import service6 from "../assets/BTT2.png";
import hover6 from "../assets/f.jpg";

const services = [
  {
    title: "In Vitro Fertilization (IVF)",
    description: "In vitro fertilization (IVF) is a medical process that is used to help people with fertility issues.",
    image: service1,
    hoverImage: hover1,
  },
  {
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    description: "Intracytoplasmic Sperm Injection or ICSI treatment is a form of assisted reproductive technology used alongside in vitro fertilization.",
    image: service2,
    hoverImage: hover2,
  },
  {
    title: "Intrauterine Insemination (IUI)",
    description: "Intrauterine insemination (IUI), or artificial insemination, involves inserting sperm through the cervix into the uterus.",
    image: service3,
    hoverImage: hover3,
  },
  {
    title: "Laser Assisted Hatching (LAH)",
    description: "Laser Assisted Hatching (LAH) is a technique used to improve implantation during IVF procedures.",
    image: service4,
    hoverImage: hover4,
  },
  {
    title: "Egg Freezing",
    description: "Egg freezing, also known as oocyte cryopreservation, is a process within in vitro fertilization to preserve eggs.",
    image: service5,
    hoverImage: hover5,
  },
  {
    title: "Semen Freezing",
    description: "Semen freezing, or sperm cryopreservation, involves preserving sperm at low temperatures for future use.",
    image: service6,
    hoverImage: hover6,
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2
        className="text-2xl font-bold text-center mb-10"
        style={{
          animation: "slideInDown 1.5s ease-out",
        }}
      >
        Our Well-Equipped Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-index={index}
            className={`service-card relative group p-5 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-3 ${
              visibleCards.includes(index.toString()) ? "animate-zoomIn" : "opacity-0"
            }`}
          >
            {/* Static Content */}
            <div className="flex flex-col items-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </div>
            {/* Hover Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-center bg-cover flex flex-col justify-center items-center text-white p-4"
              style={{
                backgroundImage: `url(${service.hoverImage})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <button className="mt-4 px-4 py-2 bg-white text-pink-500 font-semibold rounded-full shadow-md hover:bg-gray-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInDown {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.7);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Services;
