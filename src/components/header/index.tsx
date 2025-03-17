'use client';

import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Menu,
  Sparkles,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// Routes with consistent styling
const routes = [
  {
    href: '/#about-me',
    label: 'About Me',
    icon: <Sparkles className="h-4 w-4" />,
    color: 'from-primary to-primary/70',
  },
  {
    href: '/#projects',
    label: 'Projects',
    icon: <Briefcase className="h-4 w-4" />,
    color: 'from-primary to-primary/70',
  },
];

// Simplified 3D tilt effect
const Tilt3D = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Simplified glowing border
const GlowingBorder = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300" />
      <div className="relative bg-background rounded-lg">{children}</div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoverLink, setHoverLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = routes.map(route =>
        route.href.replace('/', '').replace('#', ''),
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`/#${section}`);
            return;
          }
        }
      }

      setActiveLink('/');
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        height: scrolled ? '4.5rem' : '5.5rem',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed top-0 z-40 w-full"
      style={{
        backgroundColor: scrolled ? 'var(--background-80)' : 'transparent',
      }}
    >
      <div className="container flex h-full items-center justify-between">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Chinh
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/50"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: -10 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                  <Sparkles className="h-5 w-5 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route, i) => (
            <motion.div
              key={route.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <Tilt3D>
                <Link
                  href={route.href}
                  className="group relative flex items-center space-x-1 px-4 py-2 rounded-lg"
                  onMouseEnter={() => setHoverLink(route.href)}
                  onMouseLeave={() => setHoverLink('')}
                >
                  <motion.span
                    className={`text-lg font-medium ${
                      activeLink === route.href
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {route.label}
                  </motion.span>

                  <motion.div
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r ${route.color} rounded-full`}
                    initial={{
                      width: activeLink === route.href ? '100%' : '0%',
                    }}
                    animate={{
                      width:
                        activeLink === route.href
                          ? '100%'
                          : hoverLink === route.href
                          ? '100%'
                          : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Tilt3D>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <ModeToggle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GlowingBorder>
              <Link href="#contact">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <span>Contact</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.span>
                </Button>
              </Link>
            </GlowingBorder>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
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
                  className={`relative overflow-hidden ${
                    isOpen ? 'bg-primary/10' : ''
                  }`}
                >
                  <Menu
                    className={`h-5 w-5 ${
                      scrolled ? 'text-primary' : 'text-foreground'
                    }`}
                  />

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
                    <GlowingBorder>
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
                        <motion.div
                          className="ml-auto"
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </Link>
                    </GlowingBorder>
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
      </div>
    </motion.header>
  );
}
