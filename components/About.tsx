import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Award, BookOpen } from 'lucide-react';

const skills = [
  { name: '前端开发', icon: Code, level: '精通' },
  { name: '后端架构', icon: Database, level: '熟练' },
  { name: '云计算', icon: Cloud, level: '熟练' },
  { name: '安全工程', icon: Shield, level: '了解' },
];

const experiences = [
  {
    period: '2024 - 至今',
    title: '高级全栈工程师',
    company: '科技创新公司',
    description: '负责核心产品的架构设计和开发，带领团队完成多个重要项目。',
  },
  {
    period: '2022 - 2024',
    title: '全栈开发工程师',
    company: '互联网企业',
    description: '参与多个大型项目的开发，从需求分析到上线部署全程参与。',
  },
  {
    period: '2020 - 2022',
    title: '前端开发工程师',
    company: '创业公司',
    description: '从零开始构建产品，快速学习并应用新技术解决实际问题。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      
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
            关于我
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            热爱技术，追求卓越，致力于创造有价值的数字产品。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-accent-400" />
              专业技能
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-900 border border-dark-700 rounded-xl p-4 hover:border-accent-500/50 transition-all"
                >
                  <skill.icon className="w-8 h-8 text-accent-400 mb-3" />
                  <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                  <span className="text-gray-500 text-sm">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-accent-400" />
              工作经历
            </h3>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-dark-600 hover:border-accent-500/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-accent-500 rounded-full -translate-x-[7px]" />
                  <div className="mb-1">
                    <span className="text-accent-400 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-white font-medium">{exp.title}</h4>
                  <p className="text-gray-500 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
