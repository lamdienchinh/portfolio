import { Card, CardContent } from '@/components/ui/card';
import { ACHIEVEMENTS } from '@/consts/achievements';
import { Award } from 'lucide-react';

export default function AchievementTab() {
  return (
    <div>
      <div className="mx-auto">
        <div className="space-y-6">
          {ACHIEVEMENTS.map(achievement => (
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
