import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profileImg from '../assets/myprofile.jpg'
import AnimatedText from './AnimatedText';
import { useParallax } from '../hooks/useParallax';

export default function Hero() {
  const [ref, y] = useParallax(100);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/rutu1717", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/ruturaj-kadam-47a4a5229/", label: "LinkedIn" },
    { Icon: Mail, href: "#contact", label: "Contact" }
  ];

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg animate-pulse" />
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
            />
          </div>
        </motion.div>

        <AnimatedText
        
          text="Hi, I'm  Ruturaj"
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          delay={0.5}
        />

        <AnimatedText
          text="Full Stack Developer & GenAI Enthusiast"
          className="text-xl md:text-2xl text-gray-300 mb-8"
          delay={0.8}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-lg hover:bg-white/20 transition-colors"
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          className="inline-block text-white/50 hover:text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </div>
    </section>
  );
}