import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: 'First Place - COGNITION-2K24',
    description: 'State level project exhibition at BIET, Davangere',
    type: 'Competition',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 2,
    icon: Medal,
    title: 'Robo Race Competition',
    description: 'Participated in State Level competition at Incredia-24, NMAMIT, Mangalore',
    type: 'Competition',
    color: 'from-slate-400 to-zinc-500',
  },
];

const certifications = [
  {
    id: 1,
    title: 'Google AI Essentials',
    issuer: 'Google',
    description: 'Foundation in AI and machine learning concepts with practical exposure to Google Cloud tools',
  },
  {
    id: 2,
    title: 'Circuit Prototyping Workshop',
    issuer: 'BIET Davangere & Altilogic Technologies',
    description: 'Practical exposure to electronic circuit design and hardware implementation',
  },
  {
    id: 3,
    title: '8051 Microcontroller & Embedded C',
    issuer: 'BIET Davangere',
    description: 'Hands-on workshop on microcontroller programming and embedded system development',
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="achievements" ref={ref} className="section-container bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Recognition and continuous learning in the embedded systems domain
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-warning/10 border border-warning/20">
                <Trophy className="w-5 h-5 text-warning" />
              </div>
              <h3 className="font-display font-bold text-xl">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="glass-card p-6 hover-lift group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} flex-shrink-0`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-primary mb-1 block">
                        {achievement.type}
                      </span>
                      <h4 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="glass-card p-5 hover-lift group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary/80 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
