import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Cpu } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/shrinivasumachagi-tech', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shrinivas-umachagi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shrinivasumachagi06@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display font-bold text-lg">Shrinivas R.U.</span>
              <p className="text-sm text-muted-foreground">Embedded Systems Engineer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Shrinivas Raju Umachagi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for Embedded Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
