import AboutMe from './components/about-me';
import ContactSection from './components/contact-section';
import Timeline from './components/experience';
import Hero from './components/hero-section';
import Projects from './components/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* <Timeline /> */}
      <Projects />
      <ContactSection/>
    </>
  );
}
