import AboutMe from './components/about-me';
import ContactSection from './components/contact';
import Hero from './components/hero';
import Projects from './components/projects';
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* <Timeline /> */}
      <Projects />
      <ContactSection />
    </>
  );
}
