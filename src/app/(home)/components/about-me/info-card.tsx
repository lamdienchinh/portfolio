import avatar from '@/assets/imgs/avatar.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Download, GraduationCap, Languages, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const CV_URL =
  'https://drive.google.com/uc?export=download&id=1iUbp1FDhiIiRIMH3iVOicYrhHdDzfwSL';

const languages = [
  { name: 'Vietnamese', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Upper-Intermediate', percentage: 85 },
];

export default function InfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="lg:col-span-1"
    >
      <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-background to-primary/10 h-full">
        <div className="relative h-48 bg-primary">
          <div className="absolute -bottom-16 w-full flex justify-center">
            <Avatar className="w-32 h-32 ring-4 ring-background shadow-xl">
              <AvatarImage src={avatar.src} alt="Avatar" />
              <AvatarFallback className="text-2xl bg-gradient-to-r from-primary to-blue-500 text-white">
                LDC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CardContent className="pt-20 pb-8 px-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Lam Dien Chinh</h3>
            <p className="text-primary font-medium">Frontend Developer</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <p className="text-2xl font-bold">{23}</p>
                <p className="text-xs text-muted-foreground">Age</p>
              </div>
              <div className="bg-secondary/20 p-3 rounded-lg">
                <p className="text-2xl font-bold">{2}y</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <p className="text-sm">HCMC, Vietnam</p>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-primary" />
                <p className="text-sm">BSc in Computer Science</p>
              </div>
              <div className="flex items-center gap-3">
                <Languages className="w-4 h-4 text-primary" />
                <p className="text-sm">Vietnamese, English</p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm font-semibold">Languages</p>
              {languages.map(language => (
                <div key={language.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{language.name}</span>
                    <span>{language.level}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <Link
                download
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: 'default',
                    size: 'sm',
                  }),
                  'w-full gap-2',
                )}
              >
                <Download className="w-4 h-4" /> Resume
              </Link>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                    size: 'sm',
                  }),
                  'w-full gap-2',
                )}
                href="/#contact"
              >
                <Mail className="w-4 h-4" /> Contact
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
