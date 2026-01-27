import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shrinivasumachagi06@gmail.com',
    href: 'mailto:shrinivasumachagi06@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'shrinivas-umachagi',
    href: 'https://www.linkedin.com/in/shrinivas-umachagi/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'shrinivasumachagi-tech',
    href: 'https://github.com/shrinivasumachagi-tech',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 7411678188',
    href: 'https://wa.me/917411678188',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@shrinivas',
    href: 'https://instagram.com/',
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // EmailJS integration - user will need to add their keys
      await emailjs.send(
        'shrinivas', // Replace with actual service ID
        'shrinivasemail', // Replace with actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
          to_name: 'Shrinivas',
        },
        'KVspXfO0-72TCET6J' // Replace with actual public key
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="section-container bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to Embedded Systems, Firmware, IoT, and Trainee opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-xl mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all resize-none"
                    placeholder="Your message..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                    formStatus === 'success'
                      ? 'bg-success text-white'
                      : formStatus === 'error'
                      ? 'bg-destructive text-white'
                      : 'bg-primary text-primary-foreground'
                  }`}
                  whileHover={formStatus === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
                >
                  {formStatus === 'loading' && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Failed to Send
                    </>
                  )}
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Hubli, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-success">Open to immediate joining</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 hover-lift group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      <method.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
