import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/logo.png'; // Main logo
import logo2 from '../assets/logo2.png'; // Sidebar logo
import img1 from '../assets/communication_15047435.png'; // Replace with actual path
import img2 from '../assets/google-maps_355980.png'; // Replace with actual path
import img3 from '../assets/whatsapp.png'; // Replace with actual path

const services = [
  { path: '/ivf', label: 'In Vitro Fertilization (IVF)' },
  { path: '/icsi', label: 'Intracytoplasmic Sperm Injection (ICSI)' },
  { path: '/iui', label: 'Intrauterine Insemination (IUI)' },
  { path: '/lah', label: 'Laser Assisted Hatching (LAH)' },
  { path: '/egg-freezing', label: 'Egg Freezing' },
  { path: '/semen-freezing', label: 'Semen Freezing' },
];


const navLinks = [
  { path: '/about', label: 'About' },
  
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact us' },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSpinning, setIsSpinning] = useState(true); // Track spinning state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false); // Stop spinning after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const renderServicesDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {services.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => {
            setShowDropdown(false);
            setShowSidebar(false);
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }
      `}</style>

      <nav className="w-full bg-white shadow-md px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Shubhashree IVF Clinic"
            className={`h-[120px] w-[180px] object-contain transition-transform duration-300 hover:scale-110 ${
              isSpinning ? 'animate-spin-slow' : ''
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <Link to="/" className="text-[#099BA4] font-medium hover:text-[#038A58]">
            Home
          </Link>
          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-1">
              <span>Services</span>
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 z-[1] shadow-lg rounded-lg w-[250px]">
                {services.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
                    onClick={() => setShowDropdown(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="text-gray-700 hover:text-[#07A2BB] transition-all"
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4">
            <img src={img1} alt="Icon 1" className="h-[40px] w-[40px] object-contain" />
            <img src={img2} alt="Icon 2" className="h-[40px] w-[40px] object-contain" />
            <img src={img3} alt="Icon 3" className="h-[40px] w-[40px] object-contain" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <HiOutlineMenuAlt2 className="text-3xl lg:hidden cursor-pointer" onClick={toggleSidebar} />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[2] flex flex-col">
            {/* Close Button at Top-Right */}
            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer hover:text-gray-900"
              onClick={toggleSidebar}
            />
            <div className="flex justify-center items-center py-6">
              {/* Different logo for the sidebar */}
              <img
                src={logo2}
                alt="Shubhashree IVF Clinic Sidebar Logo"
                className="h-[100px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <Link
              to="/"
              className="text-[#099BA4] font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <div className="border-b border-gray-200 px-6">
              <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full py-3 text-gray-700 "
              >
                <span>Services</span>
                {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown && (
                <div className="mt-2">
                  {renderServicesDropdown()}
                </div>
              )}
            </div>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 px-6 border-b border-gray-200 hover:bg-[#07A2BB]"
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}
            <div className="flex justify-center gap-4 mt-4 px-6">
              <img src={img1} alt="Icon 1" className="h-[40px] w-[40px] object-contain" />
              <img src={img2} alt="Icon 2" className="h-[40px] w-[40px] object-contain" />
              <img src={img3} alt="Icon 3" className="h-[40px] w-[40px] object-contain" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
