'use client';

import { ArrowRight, Menu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { routes } from '@/config/route';
import { cn } from '@/lib/utils';
import { GlowingBorder } from './glowing-border';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center md:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mr-2"
      >
        <ModeToggle />
      </motion.div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'relative overflow-hidde',
                isOpen ? 'bg-primary/10' : '',
              )}
            >
              <Menu className={'h-5 w-5 text-primary'} />

              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-md"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Button>
          </motion.div>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="border-r-primary/20 bg-background/95 backdrop-blur-md"
        >
          <SheetHeader className="mb-6">
            <SheetTitle className="text-left text-xl font-bold flex items-center">
              <motion.div
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primary mr-2"
              >
                <Sparkles className="h-6 w-6" />
              </motion.div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              >
                Chinh's Portfolio
              </motion.span>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col space-y-4">
            {routes.map((route, i) => (
              <motion.div
                key={route.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={route.href}
                  className="group flex items-center space-x-3 text-base font-medium p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {route.icon}
                  </motion.div>
                  <span className="font-medium relative">
                    {route.label}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${route.color} rounded-full`}
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="pt-6 mt-6 border-t border-border/50"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <GlowingBorder>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md">
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span className="font-medium">Contact Me</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </GlowingBorder>
            </motion.div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
