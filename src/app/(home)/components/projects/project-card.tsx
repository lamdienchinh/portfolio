'use client';

import { Calendar, ChevronRight, Clock } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Project } from '@/consts/projects';
import { formatDate, getStatusColor } from '@/utils';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        className="cursor-pointer h-full overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-300 group"
        onClick={() => onClick(project)}
      >
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-lg transition-transform duration-700 group-hover:scale-110"
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
