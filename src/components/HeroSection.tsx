import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import TypewriterText from './TypewriterText';
import CircuitBackground from './CircuitBackground';

const titles = [
  'Embedded Software Engineer',
  'IoT & Firmware Developer',
  'Embedded C | C++ | Linux',
  'ARM | ROTS | Microcontrollers',
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/shrinivasumachagi-tech', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shrinivas-umachagi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shrinivasumachagi06@gmail.com', label: 'Email' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CircuitBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Shrinivas</span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-display font-semibold h-12 sm:h-14 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypewriterText texts={titles} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate about embedded systems development, building real-time projects
            using Microcontrollers and IoT technologies to create efficient and reliable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-ripple"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#resume"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-lg border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
