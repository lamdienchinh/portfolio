'use client';

import {
  Calendar,
  Clock,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Rocket,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import type { Project } from '@/consts/projects';
import { formatDate, getStatusColor } from '@/utils';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  onClose,
}: ProjectDetailModalProps) => {
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="brightness-[0.85] object-cover"
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
                {project.category.join(', ')}
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
            {project.liveLink && (
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
            )}
            {project.githubLink && (
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
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
