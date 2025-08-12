import { Book, Code, Cpu, Globe, Layout, Users, Zap } from "lucide-react";

export const INTRO_TEXTS = {
  greeting: "Hello! I'm a ",
  role: 'Frontend Developer',
  experience:
    ' with nearly 2 years of experience building modern and user-friendly web applications.',
  skillsPrefix: 'With a solid foundation in ',
  skillsHighlight1: 'JavaScript',
  skillsFramework1: 'React',
  skillsFramework2: 'Next.js',
  skillsSuffix:
    ", I'm always ready to tackle new challenges in web development.",
  passion:
    "I'm passionate about creating intuitive user interfaces, smooth user experiences, and powerful technical solutions that solve real-world problems.",
  quote:
    '"I believe that great code not only works well but is also maintainable, scalable, and a joy to work with. My goal is to create digital experiences that make a positive impact."',
};

export const WHATIDO_ITEMS  = [
  {
    icon: Cpu,
    title: 'Web Development',
    description:
      'Building responsive, accessible, and performant web applications with modern tools and technologies.',
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.3, duration: 0.5 },
  },
  {
    icon: Book,
    title: 'UI/UX Design',
    description:
      'Creating intuitive interfaces and user experiences that balance aesthetics and functionality.',
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.4, duration: 0.5 },
  },
  {
    icon: Code,
    title: 'Frontend Architecture',
    description:
      'Designing scalable component systems and implementing best practices for maintainable codebases.',
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.5, duration: 0.5 },
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improving load times, rendering performance, and overall user experience through technical optimizations.',
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.6, duration: 0.5 },
  },
];

export const APPROACH_ITEMS = [
  {
    icon: Users,
    iconBgClass: 'bg-blue-500/10',
    iconColorClass: 'text-blue-500',
    title: 'User-Centered',
    description: 'Prioritizing user needs and experiences in every decision',
  },
  {
    icon: Layout,
    iconBgClass: 'bg-purple-500/10',
    iconColorClass: 'text-purple-500',
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code',
  },
  {
    icon: Globe,
    iconBgClass: 'bg-green-500/10',
    iconColorClass: 'text-green-500',
    title: 'Collaborative',
    description: 'Working effectively with teams to achieve shared goals',
  },
];