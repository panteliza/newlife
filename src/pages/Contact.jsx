import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ivfLocation from '../assets/ivfLocation.png'; // Replace with actual map image path

const mapImageUrl =
  'https://www.google.com/maps/dir/27.705344,84.410368/newlife+ivf+kathmandu/@27.6376209,84.5416232,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39eb190008124681:0x1dd4ad79158758e3!2m2!1d85.3324163!2d27.689199?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'; // Replace with the New Life IVF location link

const Contact = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-600 to-blue-700 text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Your Journey to Parenthood Begins Here
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-teal-700 opacity-0"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            At New Life IVF, we value your trust and are committed to guiding you on your journey
            toward parenthood. Contact us for expert care, personalized solutions, and compassionate
            support. Your dreams are our mission.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={ivfLocation}
              alt="New Life IVF Location"
              className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </div>

      <ContactForm />
      <Footer />

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Media queries for better performance on smaller screens */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem; /* Adjust heading size */
            animation-duration: 0.8s; /* Faster animations */
          }
          p {
            font-size: 1rem; /* Adjust text size */
            animation-duration: 0.8s; /* Faster animations */
          }
          img {
            animation-duration: 0.8s; /* Faster animations */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
