import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTheme } from '@/hooks/useTheme';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CircuitBackground from '@/components/CircuitBackground';
import { 
  Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle, 
  AlertCircle, Loader2, Instagram, ArrowLeft, MessageSquare 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shrinivasumachagi06@gmail.com',
    href: 'mailto:shrinivasumachagi06@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'shrinivas-umachagi',
    href: 'https://www.linkedin.com/in/shrinivas-umachagi/',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'shrinivasumachagi-tech',
    href: 'https://github.com/shrinivasumachagi-tech',
    color: 'from-gray-700 to-gray-500',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 7411678188',
    href: 'https://wa.me/917411678188',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@shrinivas',
    href: 'https://instagram.com/',
    color: 'from-pink-500 to-purple-500',
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const { isDark, toggleTheme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam protection
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check for spam
    if (formData.honeypot) {
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    setFormStatus('loading');

    try {
      // EmailJS integration
      // User needs to add their keys in a secrets/env setup
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'shrinivas',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'shrinivasemail',
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Contact',
          message: formData.message.trim(),
          to_name: 'Shrinivas',
          timestamp: new Date().toISOString(),
          source: 'Portfolio - Contact Page',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'KVspXfO0-72TCET6J'
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
          <CircuitBackground />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Back Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's Build Something{' '}
              <span className="gradient-text">Reliable</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Open to Embedded Systems, Firmware, IoT, and Trainee opportunities. 
              Feel free to reach out — I'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section ref={ref} className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form - Takes 3 columns */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="glass-card p-8 sm:p-10">
                  <h2 className="font-display font-bold text-2xl mb-2">Send a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
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
                          maxLength={100}
                          className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
                          placeholder="Your full name"
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
                          maxLength={255}
                          className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
                          placeholder="your.email@example.com"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={200}
                        className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all"
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
                        rows={6}
                        maxLength={2000}
                        className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none input-focus transition-all resize-none"
                        placeholder="Tell me about your project or opportunity..."
                        whileFocus={{ scale: 1.01 }}
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        {formData.message.length}/2000 characters
                      </p>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                        formStatus === 'success'
                          ? 'bg-success text-white'
                          : formStatus === 'error'
                          ? 'bg-destructive text-white'
                          : 'bg-primary text-primary-foreground'
                      }`}
                      whileHover={formStatus === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' } : {}}
                      whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
                    >
                      <AnimatePresence mode="wait">
                        {formStatus === 'loading' && (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </motion.div>
                        )}
                        {formStatus === 'success' && (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Message Sent Successfully!
                          </motion.div>
                        )}
                        {formStatus === 'error' && (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <AlertCircle className="w-5 h-5" />
                            {errorMessage || 'Failed to Send'}
                          </motion.div>
                        )}
                        {formStatus === 'idle' && (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Send className="w-5 h-5" />
                            Send Message
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info - Takes 2 columns */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Location Card */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">Location</h3>
                      <p className="text-muted-foreground">Hubli, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/10 border border-success/20">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm font-medium text-success">Open to immediate joining</span>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-lg px-1">Direct Contact</h3>
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 flex items-center gap-4 hover-lift group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} flex-shrink-0`}>
                        <method.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{method.label}</p>
                        <p className="font-medium truncate group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
