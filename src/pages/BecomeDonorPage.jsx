import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import spermDonorImage from '../assets/aaa.jpg';
import eggDonorImage from '../assets/bbb.jpg';

const BecomeDonorPage = () => {
  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-100 text-center py-12">
          <h1 className="text-4xl font-bold text-blue-700">Becoming a Donor</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Give hope to individuals and couples by becoming a sperm, egg, or embryo donor. Your contribution can help families
            struggling with fertility challenges. Learn how you can make a lasting impact today.
          </p>
        </section>

        {/* Sperm Donor Section */}
        <section className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={spermDonorImage} alt="Sperm Donor" className="rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Becoming a Sperm Donor</h2>
            <p className="mb-4">
              Sperm donation provides a chance for couples or individuals to conceive a child when natural conception is not possible.
              There are two types of sperm donations:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Identity-Release (IR):</strong> Donors remain anonymous until the child turns 18 and requests identifying information.
              </li>
              <li>
                <strong>Known Donors:</strong> Donors whose identity is known to the recipient at the time of donation, such as family or friends.
              </li>
            </ul>
            <p className="font-semibold">Benefits of Becoming a Sperm Donor:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Free medical screenings and fertility checks</li>
              <li>Contribution to scientific research and fertility solutions</li>
              <li>The satisfaction of helping individuals and families in need</li>
            </ul>
            <p className="mt-4">
              Donors undergo a detailed medical and genetic screening process to ensure the health and quality of the donation.
            </p>
          </div>
        </section>

        {/* Egg Donor Section */}
        <section className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Becoming an Egg Donor</h2>
            <p className="mb-4">
              Egg donation is a precious opportunity to help couples or individuals achieve their dream of parenthood. Many recipients 
              face challenges such as:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Premature ovarian failure or early menopause</li>
              <li>Genetic disorders that affect egg quality</li>
              <li>Age-related infertility</li>
            </ul>
            <p className="font-semibold">What’s Involved in Egg Donation?</p>
            <p className="mt-2">
              Egg donation involves ovarian stimulation to produce multiple eggs, followed by a minor procedure to retrieve them. 
              The process is safe, monitored closely by medical professionals, and designed to minimize discomfort.
            </p>
            <p className="mt-4">
              <strong>Eligibility Criteria:</strong> Egg donors should be between 21–40 years, in good health, and ideally have had children.
            </p>
          </div>
          <img src={eggDonorImage} alt="Egg Donor" className="rounded-lg shadow-md" />
        </section>

        {/* Embryo Donor Section */}
        <section className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Becoming an Embryo Donor</h2>
            <p className="mb-4">
              Embryo donation allows individuals or couples with surplus embryos to help others facing infertility challenges. These embryos
              are often created during IVF treatment and stored for future use.
            </p>
            <p className="font-semibold">Who Can Donate Embryos?</p>
            <ul className="list-disc list-inside mb-4">
              <li>Couples who have completed their family but have stored embryos</li>
              <li>Families seeking to help others in similar situations</li>
              <li>Individuals committed to sharing their IVF success with others</li>
            </ul>
            <p>
              The embryos are carefully screened, ensuring they are suitable for donation, and legal and emotional support is provided 
              throughout the process.
            </p>
          </div>
        </section>

        {/* Counseling Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Counseling and Emotional Readiness</h2>
            <p className="max-w-3xl mx-auto mb-6">
              The decision to become a donor is significant. To ensure you are fully prepared, all donors are provided with professional 
              counseling. This includes:
            </p>
            <ul className="list-disc list-inside mb-4 max-w-xl mx-auto">
              <li>Two individual counseling sessions</li>
              <li>One group session with other potential donors</li>
              <li>Detailed explanation of the emotional and legal implications</li>
            </ul>
            <p>
              Counseling helps donors make an informed and confident decision while understanding the long-term impact of their generosity.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Become a Donor?</h2>
            <p className="mb-4">
              Take the first step today! Our team will guide you through the process and answer all your questions.
            </p>
            <p className="text-lg">
              📞 Call us at{' '}
              <a href="tel:(03)80808933" className="text-blue-600 font-semibold">
                (03) 8080 8933
              </a>{' '}
              or email{' '}
              <a href="mailto:hello@newlifeivf.com.au" className="text-blue-600 font-semibold">
                hello@newlifeivf.com.au
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BecomeDonorPage;
