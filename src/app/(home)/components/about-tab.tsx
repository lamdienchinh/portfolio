import { Book, Code, Cpu, Globe, Layout, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutTab() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="relative">
          <p className="leading-relaxed">
            Hello! I'm a{' '}
            <span className="text-primary font-medium">Frontend Developer</span>{' '}
            with nearly 2 years of experience building modern and user-friendly
            web applications.
          </p>
        </div>

        <p className="leading-relaxed">
          With a solid foundation in{' '}
          <span className="text-blue-500 font-medium">JavaScript</span> and
          modern frameworks like{' '}
          <span className="text-blue-400 font-medium">React</span> and{' '}
          <span className="text-blue-600 font-medium">Next.js</span>, I'm always
          ready to tackle new challenges in web development.
        </p>

        <p className="leading-relaxed">
          I'm passionate about creating intuitive user interfaces, smooth user
          experiences, and powerful technical solutions that solve real-world
          problems.
        </p>

        <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30 mt-4">
          <p className="italic text-muted-foreground">
            "I believe that great code not only works well but is also
            maintainable, scalable, and a joy to work with. My goal is to create
            digital experiences that make a positive impact."
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="pt-6"
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
          What I Do
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group"
          >
            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building responsive, accessible, and performant web
                  applications with modern tools and technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group"
          >
            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">
                  Creating intuitive interfaces and user experiences that
                  balance aesthetics and functionality.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group"
          >
            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Frontend Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Designing scalable component systems and implementing best
                  practices for maintainable codebases.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="group"
          >
            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Performance Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Improving load times, rendering performance, and overall user
                  experience through technical optimizations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="pt-8"
      >
        <h3 className="text-xl font-semibold mb-6 flex items-center">
          <div className="w-8 h-1 bg-primary rounded-full mr-3"></div>
          My Approach
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-medium mb-2">User-Centered</h4>
            <p className="text-sm text-muted-foreground">
              Prioritizing user needs and experiences in every decision
            </p>
          </div>

          <div className="bg-background p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
              <Layout className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-medium mb-2">Clean Code</h4>
            <p className="text-sm text-muted-foreground">
              Writing maintainable, readable, and efficient code
            </p>
          </div>

          <div className="bg-background p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-3">
              <Globe className="w-6 h-6 text-green-500" />
            </div>
            <h4 className="font-medium mb-2">Collaborative</h4>
            <p className="text-sm text-muted-foreground">
              Working effectively with teams to achieve shared goals
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
