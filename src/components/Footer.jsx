import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> by Tehniat Rauf
          </p>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>

          <div className="flex gap-3">
            {[
              { icon: FaGithub, link: "https://github.com/tehniatrauf" },
              { icon: FaLinkedin, link: "#" },
              { icon: FaInstagram, link: "#" },
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