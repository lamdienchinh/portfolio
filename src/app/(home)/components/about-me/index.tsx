'use client';
import { motion } from 'motion/react';
import AboutMeTabs from './about-me-tabs';
import BackgroundElements from './background-elements';
import AboutMeHeader from './header';
import InfoCard from './info-card';

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 container relative">
      <BackgroundElements />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="space-y-16 mx-auto"
      >
        <AboutMeHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <InfoCard />
          <AboutMeTabs />
        </div>
      </motion.div>
    </section>
  );
}
