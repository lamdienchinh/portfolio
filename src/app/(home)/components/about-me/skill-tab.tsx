import { SKILLS } from '@/consts/skills';
import { motion } from 'motion/react';

export default function SkillTab() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill, index) => (
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
