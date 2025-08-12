'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Briefcase, GraduationCap, Trophy, User } from 'lucide-react';
import { motion } from 'motion/react';
import AboutTab from './about-tab';
import AchievementTab from './achievement-tab';
import EducationTab from './education-tab';
import InterestTab from './interest-tab';
import SkillTab from './skill-tab';

export default function AboutMeTabs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="lg:col-span-2"
    >
      <Card className="border-none shadow-xl h-full overflow-hidden bg-card/95 backdrop-blur-sm">
        <Tabs defaultValue="about" className="h-full">
          <CardHeader className="border-b bg-gradient-to-r from-background to-secondary/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <div className="w-1.5 h-8 bg-primary rounded-full mr-2"></div>
                PROFILE
              </CardTitle>
              <TabsList className="bg-background/80 backdrop-blur-sm p-1 rounded-xl flex-wrap">
                <TabsTrigger
                  value="about"
                  className="gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <User className="w-4 h-4" /> About
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Briefcase className="w-4 h-4" /> Skills
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <GraduationCap className="w-4 h-4" /> Education
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Award className="w-4 h-4" /> Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="gap-2 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <Trophy className="w-4 h-4" /> Interests
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>

          <TabsContent value="about" className="m-0 h-full">
            <CardContent className="p-6 space-y-6">
              <AboutTab />
            </CardContent>
          </TabsContent>

          <TabsContent value="skills" className="m-0 h-full">
            <CardContent className="p-6">
              <SkillTab />
            </CardContent>
          </TabsContent>

          <TabsContent value="education" className="m-0 h-full">
            <CardContent className="p-6">
              <EducationTab />
            </CardContent>
          </TabsContent>
          <TabsContent value="achievements" className="m-0 h-full">
            <CardContent className="p-6">
              <AchievementTab />
            </CardContent>
          </TabsContent>
          <TabsContent value="interests" className="m-0 h-full">
            <CardContent className="p-6">
              <InterestTab />
            </CardContent>
          </TabsContent>
        </Tabs>

        <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/5" />
      </Card>
    </motion.div>
  );
}
