'use client';

import vbc_landing from '@/assets/imgs/vbc_landing.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, Github, X } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string | StaticImageData;
  category: ProjectCategory;
  technologies: Technology[];
  features: string[];
  challenges: string;
  liveLink: string;
  githubLink: string;
  startDate: string;
  duration: string;
  status: string;
}

type ProjectCategory = 'Web App' | 'Mobile App' | 'Website';

const technologies: Technology[] = [
  {
    name: 'React',
    color: 'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200',
  },
  {
    name: 'Next.js',
    color: 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200',
  },
  {
    name: 'GraphQL',
    color: 'bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-200',
  },
  {
    name: 'Tailwind CSS',
    color: 'bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-200',
  },
  {
    name: 'Redux',
    color:
      'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200',
  },
  {
    name: 'Node.js',
    color: 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200',
  },
  {
    name: 'Express',
    color: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200',
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'Vietnam Blockchain Corporation Landing',
    shortDescription: 'Trang landing của công ty Cổ phần Vietnam Blockchain',
    fullDescription:
      'Đây là dự án đầu tiên tôi tham gia sau quá trình training tại công ty. Trang web sử dụng Next.js kết hợp với Tailwind CSS để tăng khả năng SEO. Dự án có sự tham giá chủ yếu của tôi là Frontend Developer và 1 thành viên khác là devops của công ty.',
    image: vbc_landing,
    category: 'Website',
    technologies: [
      technologies[0],
      technologies[1],
      technologies[4],
      technologies[3],
    ],
    features: [
      'User authentication and profiles',
      'Product search and filtering',
      'Shopping cart and checkout process',
      'Order tracking and history',
      'Admin dashboard for inventory management',
    ],
    challenges:
      'Implementing real-time inventory updates across multiple concurrent users was a significant challenge. We solved this using GraphQL subscriptions and optimistic UI updates.',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/project1',
    startDate: '2024-09-19',
    duration: '4 tháng',
    status: 'Hoàn thành',
  },
];

const categories: Array<'All' | ProjectCategory> = [
  'All',
  'Web App',
  'Mobile App',
  'Website',
];

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

export default function Projects(): JSX.Element {
  const [filter] = useState<'All' | ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(project => project.category === filter);

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Dự án
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dưới đây là một số dự án tôi tham gia phát triển
          </p>
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="h-full cursor-pointer hover:shadow-md transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className={getStatusColor(project.status)}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
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
                    <p className="text-muted-foreground mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className={`${tech.color} font-normal`}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-card rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge
                      variant="outline"
                      className={getStatusColor(selectedProject.status)}
                    >
                      {selectedProject.status}
                    </Badge>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(selectedProject.startDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedProject.duration}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="relative h-[400px] mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className={`${tech.color} font-normal`}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Challenges & Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.challenges}
                  </p>
                </div>

                <Separator />

                <div className="flex justify-between items-center pt-4">
                  <Button asChild className="gap-2">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="gap-2">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
