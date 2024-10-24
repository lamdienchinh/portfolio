'use client';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Hiện tại',
    company: 'Công ty cổ phần Vietnam Blockchain',
    role: 'Frontend Developer',
    description:
      'Tham gia vào team Frontend của công ty góp phần duy trì và phát triển các dự án.',
    highlights: [
      'React',
      'Next.js',
      'GraphQL',
      'Performance Optimization',
      'Tailwind CSS',
      'Bootstrap',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-[70px]" id="timeline">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 pb-4 text-center text-gray-800 dark:text-gray-100">
          Kinh nghiệm làm việc
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              variants={itemVariants}
              className={`mb-12 relative transition-transform hover:-translate-y-2 duration-300 ease-in-out ${
                index % 2 === 0 ? 'left-timeline' : 'right-timeline'
              }`}
            >
              <div className="absolute left-[50%] transform -translate-x-1/2 mt-6 w-6 h-6 rounded-full bg-primary shadow-lg" />
              <div
                className={`ml-10 ${
                  index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'
                } relative`}
              >
                <Card className="border bg-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-gray-600 dark:text-gray-400">
                          {exp.role}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-sm border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-300"
                      >
                        {exp.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 transition-transform hover:scale-105"
                        >
                          {highlight}
                        </Badge>
                      ))}
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
};

export default Timeline;
