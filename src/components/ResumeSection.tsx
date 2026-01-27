import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="resume" ref={ref} className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Download my resume to learn more about my qualifications
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 sm:p-12 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          {/* Resume Icon */}
          <motion.div
            className="inline-flex p-6 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FileText className="w-16 h-16 text-primary" />
          </motion.div>

          <h3 className="font-display font-bold text-2xl mb-2">
            Shrinivas Raju Umachagi
          </h3>
          <p className="text-muted-foreground mb-8">
            Embedded Systems Engineer | IoT & Firmware Developer
          </p>

          {/* Resume Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Experience', value: '2 Internships' },
              { label: 'Projects', value: '4+ Completed' },
              { label: 'Education', value: 'B.E. ECE' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="text-lg font-bold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/public/resume/shrinivas_res.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold btn-ripple"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
              <motion.span
                className="ml-1"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.a>
            <motion.a
              href="/public/resume/shrinivas_res.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-5 h-5" />
              Preview Resume
            </motion.a>
          </div>

          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/shrinivas-umachagi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
          >
            View full profile on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
