import { Briefcase, Sparkles } from 'lucide-react';

export const routes = [
  {
    href: '/#about-me',
    label: 'About Me',
    icon: <Sparkles className="h-4 w-4" />,
    color: 'from-primary to-primary/70',
  },
  {
    href: '/#projects',
    label: 'Projects',
    icon: <Briefcase className="h-4 w-4" />,
    color: 'from-primary to-primary/70',
  },
];
