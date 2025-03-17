'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Award,
  Briefcase,
  ChevronRight,
  GraduationCap,
  Trophy,
  User,
} from 'lucide-react';
import { motion } from 'motion/react';
import AboutTab from './about-tab';
import AchievementTab from './achievement-tab';
import EducationTab from './education-tab';
import Info from './info';
import InterestTab from './interest-tab';
import SkillTab from './skill-tab';

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 container relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background -z-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="space-y-16 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center relative"
        >
          <div className="inline-block relative">
            <h1 className="text-6xl font-bold text-primary">About Me</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="h-1 bg-primary rounded-full mt-4"
            ></motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
          </div>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Discover my background, skills, and achievements. I'm passionate
            about creating exceptional digital experiences through innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Info />
          </motion.div>

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
                    <TabsList className="bg-background/80 backdrop-blur-sm p-1 rounded-xl">
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

              {/* Bottom decorative element */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/5"></div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
