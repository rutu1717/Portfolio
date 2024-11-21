import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Pimg from "../assets/image.png"
import myss from "../assets/myss.png"
import myss1 from "../assets/myss1.png"

const projects = [
  {
    title: 'MockMinds-AI interview Coach',
    description: 'An AI based Platform to practice Mock Interviews',
    image: Pimg,
    tags: ['NextJS', 'Groq', 'MongoDB'],
    github: 'https://github.com/pratham7512/mockminds',
    demo: 'https://mockminds.vercel.app/',
  },
  {
    title: 'FocusFlow',
    description: 'Lets you organize your tasks with pomodoro technique and keeps you focused',
    image: myss1,
    tags: ['ReactJS', 'Go', 'CSS','PostgreSQL'],
    github: 'https://github.com/rutu1717/FocusFlow',
    demo: 'https://focus-flow-seven.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: 'My Personal Portfolio',
    image: myss,
    tags: ['ReactJS', 'Tailwind', 'Framer-Motion'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}