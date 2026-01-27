import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Embedded Systems Trainee',
    organization: 'Emertxe Information Technologies',
    location: 'Bangalore, India',
    period: 'Current',
    description: 'Hands-on training in Linux systems, Embedded C/C++ programming, Data Structures and Algorithms, PIC microcontroller programming, and sensor interfacing. Building firmware-level understanding and hardware–software integration.',
    skills: ['Linux', 'Embedded C/C++', 'DSA', 'PIC MCU', 'Sensor Interfacing'],
    current: true,
  },
  {
    id: 2,
    type: 'work',
    title: 'Embedded Systems Intern',
    organization: 'AiROBOSOFT',
    location: 'India',
    period: '2024',
    description: 'Gained hands-on experience in Embedded C and IoT technologies by working on real-time embedded projects, involving microcontroller programming, hardware interfacing, and system-level implementation.',
    skills: ['Embedded C', 'IoT', 'MCU Programming', 'Hardware Interfacing'],
    current: false,
  },
  {
    id: 3,
    type: 'education',
    title: 'B.E. Electronics & Communication',
    organization: 'Bapuji Institute of Engineering and Technology',
    location: 'Davanagere, India',
    period: '2021 - 2025',
    description: 'Pursuing Bachelor of Engineering with specialization in Electronics and Communication. Focus areas include Digital Electronics, VLSI Design, and Embedded Systems.',
    skills: ['Digital Electronics', 'VLSI', 'Signal Processing', 'Embedded Systems'],
    current: false,
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="section-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary/30"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background -translate-x-1/2 z-10"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  }}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, type: 'spring' }}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass-card p-6 hover-lift"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        exp.type === 'work' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5" />
                        ) : (
                          <GraduationCap className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.organization}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-success/10 text-success border border-success/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
