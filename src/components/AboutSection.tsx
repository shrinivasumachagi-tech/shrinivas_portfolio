import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Cpu, Zap, Code2, Layers } from 'lucide-react';

const highlights = [
  { icon: Cpu, label: 'Embedded Systems', description: 'Firmware & Microcontrollers' },
  { icon: Zap, label: 'IoT Solutions', description: 'Connected Devices' },
  { icon: Code2, label: 'Low-Level Code', description: 'C/C++ & Assembly' },
  { icon: Layers, label: 'VLSI Design', description: 'Verilog HDL' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-container bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate Electronics & Communication Engineer with a focus on Embedded Systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              I'm <span className="text-foreground font-semibold">Shrinivas Raju Umachagi</span>, 
              a Bachelor of Engineering graduate in Electronics and Communication Engineering 2025 
              from Bapuji Institute of Engineering and Technology, Davanagere.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              My journey in Embedded systems began with a curiosity about how hardware and software 
              work together. Today, I specialize in <span className="text-primary font-medium">embedded systems developer</span> focused on <span className="text-primary font-medium">firmware development</span>, 
              <span className="text-primary font-medium"> IoT Developer</span>.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Currently training at <span className="text-foreground font-semibold">Emertxe Information Technologies</span>, 
              I'm honing my skills in Linux systems, data structures, and advanced microcontroller programming.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: '4+', label: 'Projects' },
                { value: '2', label: 'Internships' },
                { value: '7.0', label: 'CGPA' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-card p-6 hover-lift neon-border"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-primary pulse-icon" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
