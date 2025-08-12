'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  containerVariants,
  EXPERIENCES,
  lineVariants,
} from '@/consts/experiences';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id='experience' className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-bg-foreground max-w-2xl mx-auto">
            A journey through my professional development and key achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="max-sm:hidden absolute left-8 top-0 w-0.5 bg-slate-200 h-full">
            <motion.div
              variants={lineVariants}
              className="w-full bg-secondary"
            />
          </div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="max-sm:hidden absolute top-4 left-6 w-4 h-4 bg-primary rounded-full border-4 border-primary shadow-lg z-10" />

              {/* Experience card */}
              <div className="sm:ml-12 md:ml-20">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-secondary backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        src={experience.logo.src}
                        alt={`${experience.company} logo`}
                        className="w-16 h-16 rounded-lg object-contain shadow-md bg-background"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-primary">
                            {experience.role}
                          </h3>
                          {experience.website && (
                            <motion.a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-blue-500 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {experience.company}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="text-primary" size={14} />
                            <span>{experience.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="text-primary" size={14} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-primary">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.8 + index * 0.3 + idx * 0.1,
                            }}
                            className="text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-primary">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.highlights.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 1 + index * 0.3 + idx * 0.05,
                              duration: 0.3,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="border-primary text-background-foreground bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
