import { APPROACH_ITEMS, INTRO_TEXTS, WHATIDO_ITEMS } from '@/consts/about-me';
import { motion, TargetAndTransition } from 'motion/react';

const Intro = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-4"
  >
    <div className="relative">
      <p className="leading-relaxed">
        {INTRO_TEXTS.greeting}
        <span className="text-primary font-medium">{INTRO_TEXTS.role}</span>
        {INTRO_TEXTS.experience}
      </p>
    </div>

    <p className="leading-relaxed">
      {INTRO_TEXTS.skillsPrefix}
      <span className="text-blue-500 font-medium">
        {INTRO_TEXTS.skillsHighlight1}
      </span>
      {' and modern frameworks like '}
      <span className="text-blue-400 font-medium">
        {INTRO_TEXTS.skillsFramework1}
      </span>
      {' and '}
      <span className="text-blue-600 font-medium">
        {INTRO_TEXTS.skillsFramework2}
      </span>
      {INTRO_TEXTS.skillsSuffix}
    </p>

    <p className="leading-relaxed">{INTRO_TEXTS.passion}</p>

    <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30 mt-4">
      <p className="italic text-muted-foreground">{INTRO_TEXTS.quote}</p>
    </div>
  </motion.div>
);

const WhatIDoItem = ({
  icon: Icon,
  title,
  description,
  initial,
  animate,
  transition,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  initial: TargetAndTransition | boolean;
  animate: TargetAndTransition | boolean;
  transition: object;
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={transition}
    className="group"
  >
    <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-medium mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

const WhatIDo = () => (
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
      {WHATIDO_ITEMS.map(
        ({ icon, title, description, initial, animate, transition }) => (
          <WhatIDoItem
            key={title}
            icon={icon}
            title={title}
            description={description}
            initial={initial}
            animate={animate}
            transition={transition}
          />
        ),
      )}
    </div>
  </motion.div>
);

const ApproachItem = ({
  icon: Icon,
  iconBgClass,
  iconColorClass,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  description: string;
}) => (
  <div className="bg-background p-4 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col items-center text-center">
    <div
      className={`${iconBgClass} rounded-full flex items-center justify-center mb-3 w-12 h-12`}
    >
      <Icon className={`w-6 h-6 ${iconColorClass}`} />
    </div>
    <h4 className="font-medium mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const MyApproach = () => (
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
      {APPROACH_ITEMS.map(
        ({ icon, iconBgClass, iconColorClass, title, description }) => (
          <ApproachItem
            key={title}
            icon={icon}
            iconBgClass={iconBgClass}
            iconColorClass={iconColorClass}
            title={title}
            description={description}
          />
        ),
      )}
    </div>
  </motion.div>
);

export default function AboutTab() {
  return (
    <>
      <Intro />
      <WhatIDo />
      <MyApproach />
    </>
  );
}
