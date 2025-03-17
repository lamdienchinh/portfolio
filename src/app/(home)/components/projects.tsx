'use client';

import {
  Calendar,
  ChevronRight,
  Clock,
  Code,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Rocket,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

// UI Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import vbc4t from "@/assets/imgs/4t.png"
// Project Images
import vbc_landing from '@/assets/imgs/vbc_landing.png';

// Types
interface Technology {
  name: string;
  color: string;
  icon?: React.ReactNode;
}

type ProjectCategory = 'Web App' | 'Mobile App' | 'Website';

interface Project {
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

// Constants
const TECHNOLOGIES: Technology[] = [
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

const PROJECTS: Project[] = [
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
    startDate: '2024-06-1',
    duration: '9 months',
    status: 'Completed',
  },
];


const CATEGORIES: Array<'All' | ProjectCategory> = [
  'All',
  'Web App',
  'Mobile App',
  'Website',
];

// Helper Functions
const getStatusColor = (status: Project['status']): string => {
  switch (status) {
    case 'Hoàn thành':
      return 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200';
    case 'Đang phát triển':
      return 'bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-200';
    case 'Kế hoạch':
      return 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200';
    default:
      return 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200';
  }
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Components
const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: (project: Project) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-300 group"
        onClick={() => onClick(project)}
      >
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 z-10">
            <Badge
              variant="outline"
              className={`${getStatusColor(project.status)} shadow-md`}
            >
              {project.status}
            </Badge>
          </div>
          <motion.div
            className="absolute bottom-4 right-4 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
          >
            <Button
              size="sm"
              variant="secondary"
              className="bg-background/80 backdrop-blur-sm shadow-md"
            >
              <span className="flex items-center">
                View Details
                <ChevronRight className="ml-1 w-4 h-4" />
              </span>
            </Button>
          </motion.div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(project.startDate)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {project.duration}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <Badge
                key={tech.name}
                variant="outline"
                className={`${tech.color} font-normal flex items-center`}
              >
                {tech.icon}
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-card rounded-lg p-0 max-w-4xl w-full max-h-[90vh] overflow-y-auto border shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/30 backdrop-blur-md hover:bg-background/50 border-none"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex items-center gap-3 mb-2">
              <Badge
                variant="outline"
                className={`${getStatusColor(project.status)} shadow-md`}
              >
                {project.status}
              </Badge>
              <Badge
                variant="outline"
                className="bg-background/30 backdrop-blur-sm"
              >
                {project.category}
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(project.startDate)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {project.duration}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="overview" className="flex items-center gap-1">
                <Layers className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-1">
                <Rocket className="w-4 h-4" />
                Features
              </TabsTrigger>
              <TabsTrigger
                value="challenges"
                className="flex items-center gap-1"
              >
                <Lightbulb className="w-4 h-4" />
                Challenges
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge
                      key={tech.name}
                      variant="outline"
                      className={`${tech.color} font-normal flex items-center`}
                    >
                      {tech.icon}
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      <div className="mt-0.5 mr-3 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Challenges & Solutions
                </h3>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Separator className="my-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
            <Button
              asChild
              className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                View Live Demo <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="w-full sm:w-auto gap-2 border-primary/20 hover:bg-primary/5"
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                View Source <Github className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
export default function Projects(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>(
    'All',
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter(project => project.category.includes(activeCategory));

  return (
    <div id="projects" className="container pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-70" />

          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
            Projects
          </h2>
          <h1 className="text-4xl leading-relaxed md:text-5xl font-bold mb-4">
            Impressive Projects
          </h1>
          {/* Category Filters */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center rounded-full border p-1 bg-muted/30 backdrop-blur-sm">
              {CATEGORIES.map(category => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16"
              >
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
