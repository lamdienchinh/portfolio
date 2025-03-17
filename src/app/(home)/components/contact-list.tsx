import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
export default function ContactList() {
  return (
    <motion.div
      className="flex gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <a
        href="https://www.facebook.com/profile.php?id=100011284771532&locale=vi_VN"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
      >
        <Facebook className="w-6 h-6" />
        <span className="sr-only">Facebook</span>
      </a>
      <a
        href="https://github.com/lamdienchinh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
      >
        <Github className="w-6 h-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/lamdienchinh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
      >
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="mailto:lamdienchinhtd9a2@example.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition duration-150 ease-in-out"
      >
        <Mail className="w-6 h-6" />
        <span className="sr-only">Email</span>
      </a>
    </motion.div>
  );
}
