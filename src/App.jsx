import './App.css'
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import LogoSection from "./components/LogoSlider/LogoSection";
import Info from "./components/Info/Info";
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';


export default function App() {
  return (
    <>
      <Hero />
      <About />
      <LogoSection />
      <Info />
      <Features />
      <Contact />
      <Team />
      <div className='mt-[80px] p-16'>
        <div className=''>
          <div>
            <div className='flex items-center gap-2'>
              <img src="/footer-logo.svg" alt="" />
              <span className='text-[14px] font-bold'>{"كودفيرنس"}</span>
            </div>
            <p className='text-[16px] w-[330px] mt-4'>{"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد."}</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
} 