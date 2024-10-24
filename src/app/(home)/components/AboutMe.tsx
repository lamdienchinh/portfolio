'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Award,
  Bike,
  Book,
  Coffee,
  Cpu,
  Footprints,
  GraduationCap,
  Heart,
  Music,
  User,
} from 'lucide-react';

const achievements = [
  { title: 'Sinh viên 5 tốt cấp thành phố', year: '2024' },
  { title: 'Sinh viên 5 tốt cấp Trường', year: '2022' },
  { title: '4 lần nhận học bổng khuyến khích học tập', year: '2020-2024' },
];

const interests = [
  { name: 'Công nghệ mới', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Đọc sách', icon: <Book className="w-4 h-4" /> },
  { name: 'Du lịch', icon: <Bike className="w-4 h-4" /> },
  { name: 'Nghe nhạc', icon: <Music className="w-4 h-4" /> },
  { name: 'Nấu ăn', icon: <Coffee className="w-4 h-4" /> },
  { name: 'Chạy bộ', icon: <Footprints className="w-4 h-4" /> },
];

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="pt-[80px] container bg-gradient-to-b from-background to-secondary/10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h1 className="text-4xl font-bold text-center text-primary">Về Tôi</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <User className="w-5 h-5 mr-2" /> Giới thiệu
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-4">
                <p>
                  Xin chào! Tôi là một Frontend Developer với gần 2 năm kinh
                  nghiệm trong việc xây dựng các ứng dụng web.
                </p>
                <p>
                  Với nền tảng vững chắc về JavaScript và các framework hiện đại
                  như React và Next.js, tôi luôn sẵn sàng đối mặt với những
                  thách thức mới trong lĩnh vực phát triển web.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6 space-y-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Avatar"
                  />
                  <AvatarFallback>TN</AvatarFallback>
                </Avatar>
                <div className="text-sm space-y-2">
                  <p>
                    <strong>Tuổi:</strong> 23
                  </p>
                  <p>
                    <strong>Địa điểm:</strong> TP.HCM, Việt Nam
                  </p>
                  <p>
                    <strong>Ngôn ngữ:</strong> Tiếng Việt, Tiếng Anh
                  </p>
                  <p>
                    <strong>Bằng cấp:</strong> Cử nhân KHMT
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 mr-2" /> Học vấn
          </h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">
                Đại học Bách Khoa - ĐHQG TP.HCM
              </h3>
              <p className="text-sm text-muted-foreground">
                Cử nhân Khoa học Máy tính (2020 - 2024)
              </p>
              <p className="text-sm mt-2">Tốt nghiệp loại Giỏi với GPA 3.7/4</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <Award className="w-6 h-6 mr-2" /> Thành tựu
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {achievement.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <Heart className="w-6 h-6 mr-2" /> Sở thích
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Badge
                  variant="secondary"
                  className="w-full py-2 justify-center"
                >
                  {interest.icon}
                  <span className="ml-2 text-xs">{interest.name}</span>
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
