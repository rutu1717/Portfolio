import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  const email = 'kruturaj96@gmail.com'; // Replace with your Gmail address
  const subject = 'Hello!'; // Optional: preset subject
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a question or want to work together?
          </p>
          
          <motion.a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Email me on Gmail</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}