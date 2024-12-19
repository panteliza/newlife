import React, { useEffect, useRef } from 'react';
import aawazLogo from '../assets/new.png';
import facebookImg from '../assets/communication_15047435.png';
import googleImg from '../assets/google-maps_355980.png';
import whatsappImg from '../assets/whatsapp.png';

import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  const navItems1 = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const contactItems = [
    { icon: <BsTelephoneFill />, link: "tel:+98", label: "977 9851344422" },
    { icon: <HiOutlineMail />, link: "mailto:newlifeivfnepal@gmail.com", label: "newlifeivfnepal@gmail.com" },
    { icon: <MdLocationOn />, label: "New Baneshwor, Kathmandu, Nepal" },
  ];

  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-blue-50">
      <div
        ref={footerRef}
        className="flex flex-col gap-4 py-6 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-8 lg:gap-12 xl:gap-16"
        style={{
          animation: 'fadeIn 1s ease forwards',
          animationPlayState: 'paused',
        }}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-5">
          <Link to="/">
            <img
              src={aawazLogo}
              alt="Aawaz Logo"
              className="h-[300px] w-[300px] rounded-full transition-transform duration-700 ease-in-out hover:scale-110 object-contain"
            />
          </Link>
          <div className="flex gap-2 sm:gap-3">
            <a
              href="https://www.facebook.com/share/19eDsZBZR5/?mibextid=wwXIfr"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={facebookImg} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.google.com/maps/dir//Madan+Bhandari+Road,+Kathmandu+44600/@27.6891746,85.2500149,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb190008124681:0x1dd4ad79158758e3!2m2!1d85.3324163!2d27.689199?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={googleImg} alt="Google" className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/9851344422"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={whatsappImg} alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <NavSection title="Quick Links" items={navItems1} />

        <div className="flex flex-col items-center font-semibold text-[16px] sm:text-[18px] text-[#019586] gap-2 sm:gap-3">
          <div className="font-bold text-[18px] sm:text-[20px] text-[#019586] text-center">
           NewLife IVF Nepal
          </div>
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} link={item.link} label={item.label} />
          ))}
        </div>
      </div>
      <div className="text-center py-3 font-semibold text-[#019586]">
        &copy; 2024 NewLife IVF Nepal, Developed & Designed by{' '}
        <a
          href="https://www.cloudsnepalweb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Clouds Nepal Web Pvt. Ltd.
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const NavSection = ({ title, items }) => (
  <div className="flex flex-col items-center font-semibold text-[16px] sm:text-[18px] text-[#019586] gap-2 sm:gap-5">
    {items.map((item, index) => (
      <NavItem key={index} link={item.link} label={item.label} />
    ))}
  </div>
);

const NavItem = ({ link, label }) => (
  <div className="flex gap-2 items-center">
    <Link to={link} className="hover:text-gray-300 transition-colors duration-300">
      {label}
    </Link>
  </div>
);

const ContactItem = ({ icon, link, label }) => (
  <div className="flex gap-2 items-center text-[#019586] hover:text-gray-500 transition-colors duration-300">
    {icon}
    {link ? <a href={link}>{label}</a> : <span>{label}</span>}
  </div>
);

export default Footer;
