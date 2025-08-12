import { Project } from '@/consts/projects';

export const getStatusColor = (status: Project['status']): string => {
  switch (status) {
    case 'Completed':
    case 'Hoàn thành':
      return 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200';
    case 'In Progress':
    case 'Đang phát triển':
      return 'bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-200';
    case 'Planned':
    case 'Kế hoạch':
      return 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200';
    default:
      return 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200';
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
