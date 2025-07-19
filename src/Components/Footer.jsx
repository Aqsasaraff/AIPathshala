import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { HiOutlineSquares2X2, HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineMailOutline, MdOutlineFileDownload, MdOutlineGavel, MdOutlineContactMail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-gray-400 py-8 md:py-10 px-6 sm:px-8 md:px-12 lg:px-16 text-xs sm:text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10">
      {/* Brand */}
      <div className="mb-6 md:mb-0 md:mr-12 min-w-[160px] sm:min-w-[180px]">
        <div className="mb-3">
          <span className="block text-white text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">AI</span>
          <span className="block text-white text-xl sm:text-2xl font-bold leading-none tracking-tight mb-2">Pathशाला</span>
        </div>
        <p className="mb-2 text-xs sm:text-sm">Learn. Build. Automate. Grow.</p>
        <p className="text-xs sm:text-sm">We help you master AI tools practically – no fluff, just results.</p>
      </div>
      {/* Quick Links */}
      <div className="mb-6 md:mb-0 md:mr-12">
        <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Quick Links</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <li className="flex items-center gap-2"><AiOutlineHome /> Home</li>
          <li className="flex items-center gap-2"><BiMoviePlay /> Reels</li>
          <li className="flex items-center gap-2"><PiBookOpenTextLight /> Tutorials</li>
          <li className="flex items-center gap-2"><HiOutlineSquares2X2 /> Workflows</li>
          <li className="flex items-center gap-2"><HiOutlineUsers /> Community</li>
        </ul>
      </div>
      {/* Resources */}
      <div className="mb-6 md:mb-0 md:mr-12">
        <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Resources</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <li className="flex items-center gap-2"><MdOutlineFileDownload /> Downloads</li>
          <li className="flex items-center gap-2"><MdOutlineGavel /> Terms</li>
          <li className="flex items-center gap-2"><MdOutlineContactMail /> Contact</li>
          <li className="flex items-center gap-2"><MdOutlineMailOutline /> Newsletter</li>
        </ul>
      </div>
      {/* Social Links */}
      <div className="mb-6 md:mb-0">
        <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Follow Us</h4>
        <div className="flex gap-3 sm:gap-4">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <FaDiscord size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-xs sm:text-sm">
      <p>&copy; 2024 AI Pathshala. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 