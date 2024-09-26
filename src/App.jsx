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
        <div className='flex items-start gap-20'>
          <div>
            <div className='flex items-center gap-2'>
              <img src="/footer-logo.svg" alt="" />
              <span className='text-[14px] font-bold'>{"كودفيرنس"}</span>
            </div>
            <p className='text-[16px] w-[330px] mt-4'>{"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد."}</p>
          </div>
          <div className=''>
            <span>{"روابط مهمه"}</span>
            <ul className='space-y-3 mt-2'>
              <li>{"فريق العمل"}</li>
              <li>{"المدونة"}</li>
              <li>{"تواصل معنا"}</li>
              <li>{"تقنيات نستخدمها"}</li>
              <li>{"الرئيسية"}</li>
              <li>{"عننا"}</li>
            </ul>
          </div>
          <div>
            <span>{"اشياء تهمك"}</span>
            <div>
              <div className='flex items-start gap-3 mt-2'>
                <img src="/location-icon.svg" alt="" />
                <div className='flex flex-col'>
                  <span>{"العنوان"}</span>
                  <span className='text-gray-500 w-[226px]'>{"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،"}</span>
                </div>
              </div>
              <div className='flex items-start gap-3 mt-8' >
                <img src="/phone-icon.svg" alt="" />
                <div className='flex flex-col'>
                  <span>{"رقم الهاتف"}</span>
                  <span className='text-gray-500 w-[226px]'>{"0123456789"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='footer-conatact-box'>
              <img src="/footer-contact-icon.svg" alt="" />
              <input className='bg-transparent focus:outline-none pr-4' placeholder='البريد الاكتروني' type="email" name="" id="" />
              <img src="/footer-contact-send.svg" alt="" />
            </div>
          </div>
        </div >
      </div >
    </>
  )
} 