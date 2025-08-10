'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { routes } from '@/config/route';
import { GlowingBorder } from './glowing-border';
import Logo from './logo';
import MobileNav from './mobile-nav';
import { Tilt3D } from './titl-3d';

export default function Header() {
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
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route, i) => (
            <motion.div
              key={route.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tilt3D>
                <Link
                  href={route.href}
                  className="group relative flex items-center space-x-1 px-4 py-2 rounded-lg"
                  onMouseEnter={() => setHoverLink(route.href)}
                  onMouseLeave={() => setHoverLink('')}
                >
                  <span
                    className={`text-lg font-medium ${
                      activeLink === route.href
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}
                  >
                    {route.label}
                  </span>

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
        <MobileNav />
      </div>
    </motion.header>
  );
}
