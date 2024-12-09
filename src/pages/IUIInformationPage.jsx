import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import babyImage from "../assets/c.jpg"; // Replace with your banner image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const IUIInformationPage = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sections = [
    {
      title: "What is IUI Treatment?",
      content: `Intrauterine insemination (IUI) is a form of artificial insemination where sperm is directly placed into the uterus around the time of ovulation. It bypasses common fertility challenges such as low sperm motility or cervical mucus problems, increasing the chances of conception.`,
    },
    {
      title: "Why is IUI Performed?",
      content: `IUI is performed for several reasons, including:
      - **Cervical Issues**: Thick cervical mucus or other abnormalities that hinder sperm movement.
      - **Low Sperm Count**: Helps deliver concentrated and high-quality sperm to the uterus.
      - **Donor Sperm**: Often used for single mothers or same-sex couples.
      - **Unexplained Infertility**: IUI is often one of the first treatments for unexplained infertility.
      - **Ejaculation or Erection Issues**: Helps in cases where sperm cannot be ejaculated naturally.`,
    },
    {
      title: "How Long Does the IUI Process Take?",
      content: `
        The IUI process timeline includes:
        - **Preparation**: 1-2 weeks for fertility medications and ovulation monitoring.
        - **Procedure**: The actual IUI takes only a few minutes.
        - **Result Waiting**: 10-14 days to confirm pregnancy via blood or urine tests.`,
    },
    {
      title: "How to Prepare for IUI?",
      content: `Before undergoing IUI treatment, patients and their partners are advised to:
      - **Complete Medical Tests**: Uterine examination, semen analysis, and hormonal tests.
      - **Lifestyle Changes**: Maintain a healthy diet, avoid smoking and alcohol, and reduce stress.
      - **Timed Intercourse**: In some cases, timed intercourse is recommended alongside IUI for better results.`,
    },
    {
      title: "What to Expect During IUI?",
      content: `The IUI procedure is minimally invasive:
      - **Semen Sample Preparation**: Sperm is washed and concentrated for better quality.
      - **Sperm Insertion**: Using a catheter, sperm is inserted directly into the uterus.
      - **Post-Procedure**: Patients can resume normal activities immediately after the procedure.`,
    },
    {
      title: "What Happens After the IUI Procedure?",
      content: `After the procedure:
      - Rest is recommended for a few minutes in the clinic.
      - You may experience mild cramping or spotting, which is normal.
      - A pregnancy test is typically performed 10-14 days later to confirm results.`,
    },
    {
      title: "How Many Cycles of IUI are Recommended?",
      content: `On average, 3-6 IUI cycles are recommended before exploring other options like IVF. The exact number depends on the patient's age, fertility diagnosis, and response to treatment.`,
    },
    {
      title: "Benefits and Risks of IUI",
      content: `
        **Benefits**:
        - Non-invasive compared to other fertility treatments.
        - Can be combined with fertility medications for better success rates.
        - Relatively cost-effective and quick.

        **Risks**:
        - Mild risk of ovarian hyperstimulation syndrome (OHSS).
        - Small chance of infection.
        - Increased risk of multiple pregnancies if multiple eggs are released.`,
    },
    {
      title: "How Much Does IUI Cost in Nepal?",
      content: `The cost of IUI treatment in Nepal varies between NPR 15,000 to NPR 30,000, depending on the clinic and the medications required.`,
    },
    {
      title: "FAQs About IUI",
      content: `
        - **What to do after the IUI procedure?** Rest for a day and avoid intense physical activities.
        - **Is IUI painful?** The procedure is generally painless, with mild discomfort at most.
        - **How successful is IUI?** Success rates range from 10-20% per cycle, depending on factors like age and fertility issues.`,
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
            src={babyImage}
            alt="Mother and Baby"
            className="w-full h-72 object-cover rounded-lg shadow-md fade-in fade-delay-1"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center fade-in fade-delay-1">
              Intrauterine Insemination (IUI) Treatment
            </h1>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 fade-in fade-delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#019586]">
            Intrauterine Insemination (IUI)
          </h2>
          <p className="text-gray-700 mt-4">
            Comprehensive information about IUI treatment, its process, and FAQs.
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

export default IUIInformationPage;
