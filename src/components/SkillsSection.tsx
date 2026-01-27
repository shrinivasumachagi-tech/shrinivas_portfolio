import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code2, Cpu, Wrench, BookOpen } from 'lucide-react';

const categories = [
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'hardware', label: 'Hardware', icon: Cpu },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'coursework', label: 'Coursework', icon: BookOpen },
];

const skills = {
  programming: [
    { name: 'Embedded C', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Verilog HDL', level: 80 },
    { name: 'HTML/CSS', level: 70 },
  ],
  hardware: [
    { name: 'Arduino', level: 90 },
    { name: 'Raspberry Pi', level: 85 },
    { name: 'ESP32/ESP8266', level: 88 },
    { name: 'ARM Microcontrollers', level: 75 },
    { name: 'PIC Microcontrollers', level: 70 },
  ],
  tools: [
    { name: 'Linux/Ubuntu', level: 82 },
    { name: 'VS Code', level: 90 },
    { name: 'Arduino IDE', level: 92 },
    { name: 'Cadence EDA', level: 75 },
    { name: 'Git/GitHub', level: 78 },
  ],
  coursework: [
    { name: 'Digital Electronics', level: 88 },
    { name: 'System Architecture', level: 82 },
    { name: 'DSP', level: 78 },
    { name: 'Analog Electronics', level: 80 },
    { name: 'Network Theory', level: 75 },
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="section-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Proficient in embedded systems development, from low-level hardware to high-level protocols
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm font-mono text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['C', 'C++', 'Python', 'Verilog', 'Linux', 'Arduino', 'ESP32', 'ARM'].map((tech, i) => (
              <motion.div
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 font-mono text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
