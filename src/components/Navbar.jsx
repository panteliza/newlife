import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import img1 from '../assets/communication_15047435.png'; // Replace with your actual path
import img2 from '../assets/google-maps_355980.png'; // Replace with your actual path
import img3 from '../assets/whatsapp_733585.png'; // Replace with your actual path

const services = [
  { path: '/ivf-treatment', label: 'IVF (In-Vitro Fertilization) Treatment' },
  { path: '/iui-treatment', label: 'IUI (Intra-Uterine Insemination) Treatment' },
  { path: '/male-infertility', label: 'TESA, PESA, and MESA for Male Infertility Treatment' },
  { path: '/icsi', label: 'ICSI (Intra-Cytoplasmic Sperm Injection)' },
  { path: '/hsg-testing', label: 'HSG (Hysterosalpingography) Testing' },
  { path: '/imsi-picsi', label: 'IMSI & PICSI – Advanced Sperm Selection Techniques' },
  { path: '/donation-services', label: 'Sperm and Egg Donation Services' },
  { path: '/embryo-glue', label: 'Embryo Glue for Improved IVF Success' },
];

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact us' },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const renderLinks = (style) =>
    navLinks.map(({ path, label }) => (
      <Link key={path} to={path} className={style} onClick={() => setShowSidebar(false)}>
        {label}
      </Link>
    ));

  const renderServicesDropdown = () => (
    showDropdown && (
      <div className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 z-[1] shadow-lg rounded-lg w-[250px]">
        {services.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="block bg-gray-100 hover:bg-pink-100 text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
            onClick={() => setShowDropdown(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    )
  );

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Shubhashree IVF Clinic"
          className="h-[130px] object-contain transition-transform duration-300 hover:scale-110"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 text-lg">
        <Link to="/" className="text-pink-500 font-medium hover:text-pink-400">
          Home
        </Link>
        <div
          className="relative text-gray-700 cursor-pointer hover:text-pink-400"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-1">
            <span>Services</span>
            {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {renderServicesDropdown()}
        </div>
        {renderLinks('text-gray-700 hover:text-pink-400')}
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
          <div className="flex justify-between items-center px-6 py-4">
            <img
              src={logo}
              alt="Shubhashree IVF Clinic"
              className="h-[100px] object-contain transition-transform duration-300 hover:scale-110"
            />
            <MdOutlineClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          </div>
          <Link
            to="/"
            className="text-pink-500 font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <div className="py-3 px-6 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
            <div
              className="flex justify-between items-center"
              onClick={toggleDropdown}
            >
              <span className="text-gray-700">Services</span>
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {renderServicesDropdown()}
          </div>
          {renderLinks('py-3 px-6 border-b border-gray-200 hover:bg-gray-100')}
          <div className="flex justify-center gap-4 mt-4 px-6">
            <img src={img1} alt="Icon 1" className="h-[40px] w-[40px] object-contain" />
            <img src={img2} alt="Icon 2" className="h-[40px] w-[40px] object-contain" />
            <img src={img3} alt="Icon 3" className="h-[40px] w-[40px] object-contain" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
