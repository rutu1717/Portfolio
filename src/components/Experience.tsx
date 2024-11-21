import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import CwImg from "../assets/cw.png"

const experiences = [
  {
    company: 'Connectwise LLP',
    role: 'SDE Intern',
    period: 'May 2024 - July 2024',
    description: 'It was a 2 month summer internship where i worked on tech stack like ReactJS,.Net Core,MySQL,Docker,Gitlab.',
    logo: CwImg,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.a
                key={experience.company}
                href='#experience'
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="p-6 bg-white/5 rounded-xl backdrop-blur-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <p className="text-purple-400">{experience.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{experience.description}</p>
                    <p className="text-sm text-gray-500">{experience.period}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}