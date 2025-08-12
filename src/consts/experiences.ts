
import nexon from '@/assets/imgs/nexon_dev_vina_logo.jpg';
import vnb from '@/assets/imgs/vnb.png';

export const EXPERIENCES = [
  {
    id: 'nexon',
    year: '04/2025 - Present',
    company: 'Nexon Dev Vina',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Frontend Developer',
    description:
      'Worked on improving game-related web platforms, implementing UI components and collaborating closely with design and backend teams.',
    achievements: [
      'Refactored legacy codebase to React functional components with hooks',
      'Improved UI responsiveness and accessibility across devices',
    ],
    highlights: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
      'Unit Testing',
      'E2E Testing',
    ],
    logo: nexon,
  },
  {
    id: 'vnb',
    year: '06/2023 - 4/2025',
    company: 'Vietnam Blockchain Joint Stock Company',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Frontend Developer',
    website: 'https://vietnamblockchain.asia',
    description:
      'Developing and maintaining blockchain and web3 projects. Collaborating with cross-functional teams to address product requirements and resolve technical challenges.',
    achievements: [
      'Optimized website performance, reducing page load time by 40%',
      'Developed key features such as workflow management, app notifications, and user management',
      'Integrated interactive maps, QR code processing, SSO authentication, and GraphQL',
      'Actively contributed to internal Tech Talks, sharing insights on new technologies',
    ],
    highlights: [
      'React.js',
      'Next.js',
      'React Native',
      'GraphQL',
      'SSO Authentication',
      'QR Code Processing',
      'Tailwind CSS',
      'Firebase',
    ],
    logo: vnb,
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: '100%',
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      delay: 0.2,
    },
  },
};
