'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

import {
  CATEGORIES,
  Project,
  ProjectCategory,
  PROJECTS,
} from '@/consts/projects';
import { ProjectCard } from './project-card';
import { ProjectDetailModal } from './project-detail-modal';

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
    <section id="projects" className="container pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
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

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
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

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
