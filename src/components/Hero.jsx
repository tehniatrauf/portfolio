import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  // Predefined email subject & body (URL-encoded)
  const emailSubject = encodeURIComponent("Project Inquiry");
  const emailBody = encodeURIComponent("Hi Tehniat, I'd like to discuss a project with you.");

  const socials = [
    { icon: FaGithub, link: "https://github.com/tehniatrauf" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/tehniat-rauf-9055a6411" },
    { icon: FaInstagram, link: "#" },
    {
      icon: FaEnvelope,
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=tehniatrauf55@gmail.com&su=${emailSubject}&body=${emailBody}`,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-gray-300">👋 Available for freelance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Tehniat Rauf</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-display">
            Full-Stack Developer & <span className="gradient-text">Designer</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            CS student passionate about building beautiful, functional digital experiences.
            I code, design, and grow brands — a complete digital partner for your project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="gradient-bg px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </a>
            {/* ✅ Added Download CV Button Here */}
            <a
              href="/Tehniat-Rauf-CV.pdf"
              download="Tehniat-Rauf-CV.pdf"
              className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2"
            >
              <FaDownload size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full gradient-bg p-1 animate-float">
              <img
                src="/images/profile.jpg"
                alt="Tehniat Rauf"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://ui-avatars.com/api/?name=Tehniat+Rauf&size=400&background=3b82f6&color=fff&bold=true';
                }}
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 -left-6 glass px-4 py-2 rounded-full text-sm font-semibold"
            >
              💻 Developer
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 -right-6 glass px-4 py-2 rounded-full text-sm font-semibold"
            >
              🎨 Designer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;