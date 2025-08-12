import { Code, Layers, Rocket } from 'lucide-react';
import { StaticImageData } from 'next/image';

import vbc4t from '@/assets/imgs/4t.png';
import vbc_landing from '@/assets/imgs/vbc_landing.png';

export interface Technology {
  name: string;
  color: string;
  icon?: React.ReactNode;
}

export type ProjectCategory = 'Web App' | 'Mobile App' | 'Website';

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string | StaticImageData;
  category: ProjectCategory[];
  technologies: Technology[];
  features: string[];
  challenges: string;
  liveLink?: string;
  githubLink?: string;
  startDate: string;
  duration: string;
  status: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'React',
    color: 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200',
    icon: <Code className="w-3 h-3 mr-1" />,
  },
  {
    name: 'Next.js',
    color: 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200',
    icon: <Rocket className="w-3 h-3 mr-1" />,
  },
  {
    name: 'GraphQL',
    color: 'bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-200',
    icon: <Code className="w-3 h-3 mr-1" />,
  },
  {
    name: 'Tailwind CSS',
    color: 'bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-200',
    icon: <Layers className="w-3 h-3 mr-1" />,
  },
  {
    name: 'Redux',
    color:
      'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200',
    icon: <Layers className="w-3 h-3 mr-1" />,
  },
  {
    name: 'Node.js',
    color: 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200',
    icon: <Code className="w-3 h-3 mr-1" />,
  },
  {
    name: 'Express',
    color: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200',
    icon: <Code className="w-3 h-3 mr-1" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Vietnam Blockchain Corporation Landing',
    shortDescription: 'Official landing page of Vietnam Blockchain Corporation',
    fullDescription:
      'This is the official landing page of Vietnam Blockchain Corporation, designed to showcase the company’s services and expertise in blockchain technology. The website was built using Next.js and Tailwind CSS, ensuring high performance and SEO optimization. My role in this project was as a Frontend Developer, collaborating with a DevOps team member to ensure smooth deployment and infrastructure management.',
    image: vbc_landing,
    category: ['Website'],
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[4],
      TECHNOLOGIES[3],
    ],
    features: [
      'Company introduction and services',
      'Responsive and SEO-optimized design',
      'Blog and news updates',
      'Contact and inquiry forms',
      'Fast and lightweight UI',
    ],
    challenges:
      'Ensuring optimal SEO performance while maintaining a highly dynamic and interactive user experience was a key challenge. We addressed this by leveraging Next.js’s static generation and server-side rendering features.',
    liveLink: 'https://vietnamblockchain.asia/',
    startDate: '2024-09-19',
    duration: '4 months',
    status: 'Completed',
  },
  {
    id: 2,
    title:
      'Electronic Public Opinion Collection System - Hau Giang & Ho Chi Minh City',
    shortDescription:
      'A digital system for gathering public opinions in Hau Giang and Ho Chi Minh City.',
    fullDescription:
      'This project aimed to modernize the way government agencies collect public opinions. The platform allows citizens to submit feedback, vote on policies, and track the status of their submissions. Built with Next.js and React, it provides a seamless user experience with role-based access for different government officials.',
    image: vbc4t,
    category: ['Web App', 'Mobile App'],
    technologies: [
      TECHNOLOGIES[0],
      TECHNOLOGIES[1],
      TECHNOLOGIES[3],
      TECHNOLOGIES[5],
    ],
    features: [
      'Secure citizen authentication',
      'Opinion submission and voting system',
      'Real-time tracking of policy discussions',
      'Admin panel for managing submissions',
      'Data visualization for government analysis',
    ],
    challenges:
      'Ensuring security and scalability was crucial due to the sensitive nature of the data. We implemented robust authentication (SSO) and optimized database queries to handle high traffic.',
    startDate: '2024-06-01',
    duration: '9 months',
    status: 'Completed',
  },
];

export const CATEGORIES: Array<'All' | ProjectCategory> = [
  'All',
  'Web App',
  'Mobile App',
  'Website',
];
