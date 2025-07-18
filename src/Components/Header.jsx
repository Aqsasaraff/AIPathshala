import React, { useState } from "react";
import { FaLock, FaBolt } from "react-icons/fa";
import logo from "../assets/logo.png";
import imageBg from "../assets/image.png";
import laptopImg from "../assets/laptop.png";
import { Link, useNavigate } from "react-router-dom";

// 3D style for icons
const icon3DStyle =
  "transition-transform duration-200 hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl drop-shadow-lg cursor-pointer animate-float";
const floatKeyframes = `
@keyframes float {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-8px);}
  100% { transform: translateY(0px);}
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Video", href: "#video" },
  { name: "FAQs", href: "#faqs" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll to section or navigate
  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionId = link.href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <style>{floatKeyframes}</style>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-b border-gray-700 shadow-lg rounded-b-3xl font-sans">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="AI Pathshala Logo"
              className="h-14 w-auto md:h-20 mr-3 drop-shadow-lg"
            />
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-yellow-400 rounded my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-wrap gap-4 md:gap-8 items-center justify-center w-full md:w-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`
                  group relative text-white text-base md:text-lg font-medium px-2 md:px-3 py-1 rounded transition
                  hover:text-yellow-400
                  ${link.name === "Home" ? "border-b-2 border-yellow-400" : ""}
                `}
                style={{ background: "none", border: "none", outline: "none" }}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
        {/* Mobile Nav Links */}
        <div
          className={`md:hidden flex flex-col items-center bg-black/90 w-full transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
          style={{ transitionProperty: "max-height, padding" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="group w-full text-center text-white text-lg font-medium px-3 py-3 rounded transition hover:text-yellow-400 relative"
              style={{ background: "none", border: "none", outline: "none" }}
            >
              {link.name}
              <span className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
            </button>
          ))}
        </div>
      </nav>
      {/* HERO SECTION */}
      <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden pt-32 md:pt-45 font-sans">
        {/* Background image and overlay */}
        <div className="absolute inset-0 z-0 ">
          <img
            src={imageBg}
            alt="Professional woman with laptop"
            className="w-full h-full object-cover object-center brightness-200 scale-x-[1]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between w-full px-2 md:px-4 py-10 md:py-16">
          {/* Left: Text */}
          <div className="flex-1 text-left text-white max-w-xl w-full mb-8 md:mb-0">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-2 text-white">
              Learn &amp; Apply AI Tools
              <br />
              Without the&nbsp;
              <span className="text-yellow-400 font-extrabold whitespace-nowrap">
                Overwhelm
              </span>
            </h1>
            {/* Subheading */}
            <div className="text-lg sm:text-xl md:text-2xl mb-2 text-white">
              Short reels,{" "}
              <span className="text-yellow-400 font-bold">Automate</span> Grow.
            </div>
            {/* Description */}
            <div className="text-gray-200 mb-6 max-w-lg text-sm sm:text-base">
              Short reels, hands-on demos, and ready-to-use workflows. No fluff.
              Just results.
            </div>
            {/* Laptop Image (Mobile Only) */}
            <div className="flex justify-center items-center mb-6 md:hidden">
              <img
                src={laptopImg}
                alt="3D Laptop"
                className="max-w-[220px] sm:max-w-xs w-full h-auto rounded-2xl shadow-2xl object-contain bg-transparent"
                style={{ background: "transparent" }}
              />
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 flex-wrap">
              <button className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base rounded font-bold shadow hover:bg-yellow-300 transition">
                <FaLock color="black" /> Watch a 60-Second Demo
              </button>
              <button className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base rounded font-bold shadow hover:bg-gray-700 transition border border-gray-600">
                <FaBolt /> Try a Tool Now
              </button>
            </div>
            {/* Features */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white">
                <span className="text-green-400 text-lg">●</span>{" "}
                <span className="font-bold">Used by 10K+ </span>Creators
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-green-400 text-lg">✔</span>{" "}
                <span className="font-bold">100+ </span>Workflows
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-green-400 text-lg">✔</span> Rated{" "}
                <span className="font-bold">4.9/5</span> on Discord
              </div>
            </div>
            <br /><br />
          </div>
          {/* Right: 3D Laptop Image (Desktop Only) */}
          <div className="flex-1 hidden md:flex justify-end items-end mt-8 md:mt-0 w-full">
            <img
              src={laptopImg}
              alt="3D Laptop"
              className="max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md w-full h-auto rounded-2xl shadow-2xl object-contain bg-transparent"
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
