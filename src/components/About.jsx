import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Palette, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, title: "Developer", desc: "Building web apps" },
    { icon: Palette, title: "Designer", desc: "Creating visuals" },
    { icon: Sparkles, title: "Marketer", desc: "Growing brands" },
    { icon: GraduationCap, title: "CS Student", desc: "5th Semester" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 font-display">
              Turning ideas into <span className="gradient-text">digital reality</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate Computer Science student in my 5th semester, blending technical
              skills with creative design. My journey started with HTML and CSS, and has grown
              into full-stack development, graphic design, and social media management.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              What makes me different? I don't just write code — I design beautiful interfaces,
              develop robust applications, and grow brands on social media. I'm a complete
              digital solution provider.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me designing logos, editing reels, or planning
              social media strategies. I believe in continuous learning and delivering quality
              work that exceeds expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;