import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, Cpu, Wifi, Flame, Bot, BookUser, Image, Music } from 'lucide-react';

const projects = [
  // {
  //   id: 1,
  //   title: '64-bit Radix-16 Booth Multiplier',
  //   description: 'Designed and implemented a 64-bit Radix-16 Booth Multiplier in Verilog HDL with reduced partial product array height for improved speed, area, and power efficiency.',
  //   icon: Cpu,
  //   tags: ['Verilog', 'Cadence EDA', 'VLSI', 'DSP'],
  //   period: 'Feb - May, 2025',
  //   color: 'from-blue-500 to-cyan-500',
  //   highlights: ['High-performance DSP application', 'Synthesized using Cadence tools', 'Optimized for VLSI'],
  // },

  {
  id: 1,
  title: 'Address Book Management System',
  description: 'Designed and developed an Address Book Management System in C that allows users to store, search, update, and delete contact information efficiently using structured programming concepts.',
  icon: BookUser,
  tags: ['C Programming', 'Data Structures', 'File Handling', 'Linux'],
  period: 'Jan - Feb, 2025',
  color: 'from-green-500 to-emerald-500',
  github: 'https://github.com/shrinivasumachagi-tech/Addressbook-using-C',
  highlights: [
    'CRUD operations for contact management',
    'Efficient searching and sorting of contacts',
    'Implemented using modular and structured C programming'
    ],
  },

  {
    id: 2,
    title: 'Automatic Medicine Reminder (IoT)',
    description: 'An IoT-enabled medication reminder system using Arduino and ESP32 for real-time monitoring. Integrates GSM communication, audio output, and Blynk mobile app connectivity.',
    icon: Wifi,
    tags: ['Arduino', 'ESP32', 'IoT', 'GSM', 'Blynk'],
    period: 'May - July, 2024',
    color: 'from-emerald-500 to-teal-500',
    highlights: ['Real-time SMS alerts', 'Mobile app control', 'Remote caregiver supervision'],
  },
  {
    id: 3,
    title: 'Fire Detection with Raspberry Pi',
    description: 'A real-time fire detection system using Raspberry Pi and computer vision algorithms to identify flame patterns from live camera input.',
    icon: Flame,
    tags: ['Raspberry Pi', 'OpenCV', 'Python', 'Computer Vision'],
    period: 'Nov - Dec, 2023',
    color: 'from-orange-500 to-red-500',
    highlights: ['Real-time image analysis', 'Safety actuator integration', 'Environmental monitoring'],
  },
  {
    id: 4,
    title: 'Bluetooth Controlled Robot',
    description: 'A Bluetooth-controlled robot using Arduino microcontroller and UART-based Bluetooth module. Generates PWM and GPIO control signals for real-time motor control.',
    icon: Bot,
    tags: ['Arduino', 'Bluetooth', 'UART', 'PWM'],
    period: 'Dec - Jan, 2024',
    color: 'from-violet-500 to-purple-500',
    highlights: ['Wireless communication', 'Real-time speed control', 'Direction control system'],
  },
  {
  id: 5,
  title: 'LSB Image Steganography',
  description: 'Designed and implemented an Image Steganography system using the Least Significant Bit (LSB) technique to securely hide and extract secret messages within digital images without noticeable visual distortion.',
  icon: Image,
  tags: ['Python', 'Image Processing', 'Steganography', 'Cyber Security'],
  period: 'Dec, 2024',
  color: 'from-purple-500 to-pink-500',
  github: 'https://github.com/shrinivasumachagi-tech/Image-Steganography-using-LSB',
  highlights: [
    'Secure data hiding using LSB technique',
    'Minimal image quality degradation',
    'Message embedding and extraction implemented'
  ],
},
{
  id: 6,
  title: 'MP3 Tag Reader',
  description: 'Developed an MP3 Tag Reader application to extract and display metadata such as song title, artist, album, genre, and year from MP3 files using ID3 tag parsing.',
  icon: Music,
  tags: ['C Programming', 'File Handling', 'ID3 Tags', 'Linux'],
  period: 'Feb, 2025',
  color: 'from-indigo-500 to-blue-500',
  highlights: [
    'Reads and parses ID3v1/ID3v2 metadata',
    'Displays song information from MP3 files',
    'Implemented efficient binary file handling'
  ],
}
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="section-container bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world embedded systems and IoT solutions built from the ground up
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group glass-card overflow-hidden hover-lift neon-border"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Header with gradient */}
              <div className={`relative h-32 sm:h-40 bg-gradient-to-br ${project.color} p-6 flex items-end`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="relative">
                  <span className="text-xs font-mono text-white/80">{project.period}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </motion.button>


                  {/* <motion.button
                    className="flex items-center justify-center p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.button> */}

                  <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>



                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
