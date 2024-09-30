import './App.css'
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import LogoSection from "./components/LogoSlider/LogoSection";
import Info from "./components/Info/Info";
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Remark from './components/Remark/Remark';

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <LogoSection />
      <Info />
      <Features />
      <Contact />
      <Projects />
      <Team />
      <Footer />
      <Remark />
    </>
  )
}
