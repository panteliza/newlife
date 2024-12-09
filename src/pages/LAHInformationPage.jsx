import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import lahImage from "../assets/d.jpg"; // Replace with your banner image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LAHInformationPage = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sections = [
    {
      title: "What is Laser Assisted Hatching (LAH)?",
      content: `Laser Assisted Hatching (LAH) is a technique used in in vitro fertilization (IVF) to aid in implanting embryos and achieving pregnancy. This procedure involves using a laser to create a small opening in the embryo's outer shell before transferring it to the uterus. This process loosens the blastocyst within its outer shell, allowing it to implant into the uterine lining.`,
    },
    {
      title: "Why Choose Laser Assisted Hatching?",
      content: `
        - Helps weaken the outer shell of eggs, especially for older women, to facilitate hatching.
        - Enhances implantation rates for women with multiple failed IVF cycles.
        - Recommended when using frozen or donated eggs to improve implantation.
        - Addresses sperm defects, such as thickened zona pellucida.
        - Useful for unexplained infertility cases to improve hatching efficiency.`,
    },
    {
      title: "Who is Laser Assisted Hatching Recommended For?",
      content: `
        - Women over 38 years.
        - Patients with high FSH levels indicating low ovarian reserve.
        - Couples with multiple failed IVF attempts.
        - Patients using frozen embryo transfers.
        - Couples with unexplained infertility.
        - Women with poor embryo morphology or a thickened zona pellucida.`,
    },
    {
      title: "What Are The Benefits of Laser Assisted Hatching?",
      content: `
        - Allows embryos to hatch earlier.
        - Improves pregnancy rates in older women.
        - Helps with frozen embryo transfers.
        - Minimizes embryo injuries by creating precise openings.
        - Aids embryos with irregular or dysfunctional cells to hatch better.`,
    },
    {
      title: "What Are The Risks of Laser Assisted Hatching?",
      content: `
        - Possible damage to the embryo if the laser is not precisely targeted.
        - Increased risk of monozygotic twins.
        - Concerns about excessive embryo manipulation.
        - Added costs due to the procedure.
        - Requires experienced embryologists to minimize risks.`,
    },
    {
      title: "What Are The Steps for Laser Assisted Hatching?",
      content: `
        1. Embryo Development: Embryos are cultured in the lab up to the third day.
        2. Microscope Setup: The embryo is secured, and lasers are prepared.
        3. Drilling the Hole: A 5-10 micron opening is created in the zona pellucida.
        4. Removal and Culture: Embryos are placed back into the incubator for development.
        5. Confirmation: Embryos are inspected to ensure no damage.
        6. Further Development: Embryos continue developing until day 5 (blastocyst stage).`,
    },
    {
      title: "FAQs About Laser Assisted Hatching",
      content: `
        - **What is the success rate of laser hatching IVF?** Success rates range from 30% to 50%.
        - **What is the process of laser assisted hatching?** A laser creates a small opening in the zona pellucida to help embryos hatch and implant.
        - **Does assisted hatching increase pregnancy chances?** Yes, especially for older women and frozen embryo transfers.
        - **What are the risks?** Risks include embryo damage, increased costs, and monozygotic twins.
        - **When is laser assisted hatching done?** Typically on day 3 after fertilization, at the 6-8 cell stage.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      <div className="bg-gray-50 px-6">
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            .fade-in {
              animation: fadeIn 1s ease-out forwards;
              opacity: 0;
            }

            .fade-delay-1 {
              animation-delay: 0.3s;
            }
          `}
        </style>

        {/* Hero Section */}
        <div className="relative w-full mb-12">
          <img
            src={lahImage}
            alt="Baby"
            className="w-full h-72 object-cover rounded-lg shadow-md fade-in fade-delay-1"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center fade-in fade-delay-1">
              Laser Assisted Hatching (LAH) Treatment
            </h1>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 fade-in fade-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
            Laser Assisted Hatching (LAH)
          </h2>
          <p className="text-gray-700 mt-4">
            Explore everything about LAH, its process, benefits, and risks.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`max-w-6xl mx-auto mb-12 fade-in`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LAHInformationPage;
