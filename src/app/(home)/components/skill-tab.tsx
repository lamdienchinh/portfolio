import {
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Palette,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  // Frontend Skills
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: <Code className="w-5 h-5 text-yellow-500" />,
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: <Code className="w-5 h-5 text-blue-500" />,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: <Code className="w-5 h-5 text-blue-600" />,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: <Layers className="w-5 h-5 text-black dark:text-white" />,
  },
  {
    name: 'HTML/CSS',
    category: 'Frontend',
    icon: <Layout className="w-5 h-5 text-orange-500" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: <Palette className="w-5 h-5 text-sky-500" />,
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    icon: <Code className="w-5 h-5 text-green-500" />,
  },
  {
    name: 'Responsive Design',
    category: 'Frontend',
    icon: <Smartphone className="w-5 h-5 text-gray-600" />,
  },

  // Backend Skills
  {
    name: 'Node.js',
    category: 'Backend',
    icon: <Server className="w-5 h-5 text-green-600" />,
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: <Server className="w-5 h-5 text-gray-600" />,
  },
  {
    name: 'RESTful APIs',
    category: 'Backend',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    icon: <Database className="w-5 h-5 text-pink-500" />,
  },

  // Database Skills
  {
    name: 'MongoDB',
    category: 'Database',
    icon: <Database className="w-5 h-5 text-green-500" />,
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: <Database className="w-5 h-5 text-blue-400" />,
  },

  // DevOps & Tools
  {
    name: 'Git',
    category: 'DevOps',
    icon: <GitBranch className="w-5 h-5 text-orange-600" />,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: <Cloud className="w-5 h-5 text-blue-500" />,
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
  },
  {
    name: 'Command Line',
    category: 'DevOps',
    icon: <Terminal className="w-5 h-5 text-white" />,
  },

  // Design Skills
  {
    name: 'UI/UX Design',
    category: 'Design',
    icon: <Palette className="w-5 h-5 text-purple-500" />,
  },
  {
    name: 'Figma',
    category: 'Design',
    icon: <Palette className="w-5 h-5 text-purple-400" />,
  },

  // State Management
  {
    name: 'Redux',
    category: 'State Management',
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
  },
  {
    name: 'Context API',
    category: 'State Management',
    icon: <Cpu className="w-5 h-5 text-blue-500" />,
  },

  // Security
  {
    name: 'Web Security',
    category: 'Security',
    icon: <Shield className="w-5 h-5 text-green-600" />,
  },
];
export default function SkillTab() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.5 }}
            className="group"
          >
            <div className="h-full bg-background border border-border hover:border-primary/30 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-blue-500/20 transition-all duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-medium">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
