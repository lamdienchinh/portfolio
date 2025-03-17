'use client';
import vnb from '@/assets/imgs/vnb.png';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  {
    year: '06/2023 - Present',
    company: 'Vietnam Blockchain Joint Stock Company',
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Frontend Developer',
    logo: vnb,
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
  },
];

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">
              Work Experience
            </h2>
            <h1 className="text-4xl leading-relaxed md:text-5xl font-bold mb-4">
              My Career Journey
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A look into my professional growth in software development,
              working on diverse projects and technologies.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline center line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 rounded-full md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              variants={itemVariants}
              className={`mb-16 md:mb-24 relative ${
                index % 2 === 0
                  ? 'md:pr-12 md:ml-auto md:mr-auto md:pl-0'
                  : 'md:pl-12 md:ml-auto md:mr-auto md:pr-0'
              } ml-12 md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-30px] md:left-auto md:right-[-20px] top-10 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-500 shadow-lg flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900"></div>
              </div>

              {/* Year badge - positioned differently based on even/odd */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? 'left-[-20px] md:left-auto md:right-[-120px]'
                    : 'left-[-20px] md:left-[-120px]'
                }`}
              >
                <Badge
                  variant="outline"
                  className="text-sm py-1 px-3 border-primary/30 bg-white dark:bg-gray-800 shadow-sm text-primary dark:text-primary font-medium"
                >
                  <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                  {exp.year}
                </Badge>
              </div>

              <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <CardHeader className="pb-2 relative">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-gray-600 dark:text-gray-400">
                          {exp.role}
                        </CardDescription>
                        <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-500">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {exp.website && (
                      <Link
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                      >
                        Web <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-4 text-left">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Achivements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
