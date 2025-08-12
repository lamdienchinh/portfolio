import { Bike, Book, Coffee, Cpu, Footprints, Music } from 'lucide-react';

export const INTERESTS = [
  {
    name: 'Technology',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Latest gadgets and software',
  },
  {
    name: 'Reading',
    icon: <Book className="w-6 h-6" />,
    description: 'Fiction and non-fiction books',
  },
  {
    name: 'Travel',
    icon: <Bike className="w-6 h-6" />,
    description: 'Exploring new places',
  },
  {
    name: 'Music',
    icon: <Music className="w-6 h-6" />,
    description: 'Creating and listening',
  },
  {
    name: 'Cooking',
    icon: <Coffee className="w-6 h-6" />,
    description: 'Experimenting with flavors',
  },
  {
    name: 'Running',
    icon: <Footprints className="w-6 h-6" />,
    description: 'Staying fit and active',
  },
];
