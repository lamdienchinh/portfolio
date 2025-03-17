import { Card, CardContent } from '@/components/ui/card';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'City-level 5-Star Student Award',
    year: '2024',
    description:
      'Recognition for excellence in academics, ethics, volunteer work, social activities, and physical fitness.',
    icon: Star,
  },
  {
    title: 'University 5-Star Student Award',
    year: '2022',
    description:
      'Awarded for outstanding performance across multiple university assessment criteria.',
    icon: Trophy,
  },
  {
    title: 'Merit-based Scholarship',
    year: '2020-2024',
    count: '4',
    description:
      'Received four consecutive scholarships for academic excellence during university studies.',
  },
];

export default function AchievementTab() {
  return (
    <div>
      <div className="mx-auto">
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="overflow-hidden border-l-4 border-l-primary shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary/10 p-6 flex items-center justify-center md:w-32">
                    {achievement.count ? (
                      <span className="text-3xl font-bold text-primary">
                        {achievement.count}×
                      </span>
                    ) : achievement.icon ? (
                      <achievement.icon className="w-10 h-10 text-primary" />
                    ) : (
                      <Award className="w-10 h-10 text-primary" />
                    )}
                  </div>

                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between mb-3 w-full">
                      <h3 className="text-xl font-bold text-primary">
                        {achievement.title}
                      </h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-slate-600">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
