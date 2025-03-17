import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export default function EducationTab() {
  const educationDetails = [
    {
      time: '2020 - 2024',
      title: 'Bachelor of Computer Science',
      institution: 'Ho Chi Minh City University of Technology',
      description:
        'Graduated with Honors (GPA: 3.7/4.0). Focused on software engineering with emphasis on web and mobile application development. Completed coursework in data structures, algorithms, and software architecture.',
    },
  ];

  return (
    <div className="space-y-8">
      {educationDetails.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1 * index,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow"
        >
          <div className="absolute -left-5 top-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                {edu.time}
              </Badge>
              <h4 className="text-xl font-semibold">{edu.title}</h4>
            </div>
            <h5 className="text-primary mb-2 font-medium">{edu.institution}</h5>
            <p className="text-md text-gray-700 dark:text-gray-300">
              {edu.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
