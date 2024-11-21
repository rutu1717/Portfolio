import { motion } from 'framer-motion';
import { Code2, Palette, Server } from 'lucide-react';
import profile from '../assets/secondprofile.jpg'

export default function About() {
  const skills = [
    { category: 'Frontend', icon: Palette, items: ['React.js', 'TypeScript', 'JavaScript', 'Next.js'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Golang'] },
    { category: 'Database', icon: Code2, items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50" />
                <img
                  src={profile}
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-left">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As an emerging full-stack developer and generative AI enthusiast, I'm navigating the exciting intersection of cutting-edge technology and software development. My passion for code drives me to explore, learn, and push the boundaries of what's possible in the world of software engineering.              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
              Currently, I'm deeply immersed in expanding my skills, with a particular focus on generative AI technologies. My learning journey is fueled by curiosity and an unwavering enthusiasm for understanding how transformative technologies can reshape software development. Each line of code is an opportunity to grow, experiment, and innovate.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {skills.map(({ category, icon: Icon, items }, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 rounded-xl p-8 backdrop-blur-lg hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-white">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((item) => (
                      <motion.a
                        key={item}
                        href="#skills"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}