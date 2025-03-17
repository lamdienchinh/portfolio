import { Bike, Book, Coffee, Cpu, Footprints, Music } from 'lucide-react';

const interests = [
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

export default function InterestTab() {
  return (
    <div className="bg-gradient-to-br from-background via-secondary/5 to-primary/5 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">
        My Interests
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {interests.map((interest, index) => (
          <div
            key={interest.name}
            className="relative group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-square flex flex-col items-center justify-center text-center bg-background shadow-md rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary/10 hover:border-primary/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
              </div>
              <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {interest.name}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-background/90 to-background/90 rounded-2xl p-4">
                <p className="text-sm text-foreground">
                  {interest.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
