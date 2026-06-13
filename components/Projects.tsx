import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI 代码助手',
    description: '基于 GPT-4 的智能代码补全工具，支持多种编程语言，提升开发效率 50%。',
    tags: ['React', 'TypeScript', 'OpenAI API', 'Next.js'],
    icon: Code,
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'accent',
  },
  {
    id: 2,
    title: '云端文档协作平台',
    description: '多人实时协作的在线文档编辑器，支持富文本编辑和版本控制。',
    tags: ['Vue', 'WebSocket', 'MongoDB', 'Node.js'],
    icon: Layers,
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'cyan',
  },
  {
    id: 3,
    title: '数据分析仪表盘',
    description: '企业级数据可视化平台，支持实时数据监控和智能报表生成。',
    tags: ['React', 'D3.js', 'PostgreSQL', 'Python'],
    icon: Database,
    github: 'https://github.com',
    demo: 'https://demo.com',
    color: 'accent',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            精选作品
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            每一个项目都是对技术的热爱与追求，从创意到实现，见证成长的足迹。
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-dark-800 border border-dark-700 rounded-xl overflow-hidden hover:border-accent-500/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${project.color === 'accent' ? 'from-accent-500/20 to-accent-500/5' : 'from-cyan-500/20 to-cyan-500/5'} flex items-center justify-center`}>
                <project.icon className={`w-12 h-12 ${project.color === 'accent' ? 'text-accent-400' : 'text-cyan-400'}`} />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 text-gray-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="p-2 bg-dark-700 hover:bg-accent-500/20 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    className="p-2 bg-dark-700 hover:bg-accent-500/20 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
