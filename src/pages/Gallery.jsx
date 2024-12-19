import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import img1 from "../assets/1.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

import img7 from "../assets/7.jpeg";

import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpeg";

import img17 from "../assets/7777.jpeg";
import img18 from "../assets/5555.jpeg";
import img19 from "../assets/8888.jpeg";
import img20 from "../assets/1111.jpeg";


const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    img7,
    img1,
    img3,
    img4,
    img5,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-container">
        <h1 className="gallery-title">New Life IVF Gallery</h1>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item fade-in">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                loading="lazy" // Add lazy loading for better performance
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .gallery-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .gallery-container {
          flex: 1;
          padding: 20px;
          text-align: center;
          background-color: #f9f9f9;
        }

        .gallery-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #019586;
          font-weight: bold;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          padding: 20px;
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .fade-in {
          animation: fadeInTop 1s ease-out;
        }

        @keyframes fadeInTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
