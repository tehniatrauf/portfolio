import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaDownload } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side */}
          <p className="text-gray-400 text-sm flex items-center gap-1 flex-wrap justify-center md:justify-start">
            Made with <FaHeart className="text-red-500" /> by Tehniat Rauf
            <span className="text-gray-600 mx-1">•</span>
            <a 
              href="/Tehniat-Rauf-CV.pdf" 
              download="Tehniat-Rauf-CV.pdf" 
              className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
            >
              <FaDownload size={12} /> Download CV
            </a>
          </p>

          {/* Center */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Right Side (Social Icons) */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, link: "https://github.com/tehniatrauf" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/tehniat-rauf-9055a6411" }, // ✅ Added your LinkedIn
              { icon: FaInstagram, link: "#" }, // Apna Instagram link yahan dalein
              { icon: FaEnvelope, link: "mailto:tehniatrauf55@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-500 transition-all"
              >
                <s.icon className="text-sm" />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;