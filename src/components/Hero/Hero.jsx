import Lottie from 'react-lottie'
import Trinagle from '../../icons/Trinagle'
import Header from '../header'
import animationData from '../../lotties/labtop.json';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollRevial';
// import Earth from '../earth/Earth';


const Hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="hero overflow-hidden">
            <img className=' absolute max-sm:h-[500px] bottom-0 w-full h-[300px] z-0 pointer-events-none' src="/bg-pattern.png" alt="" />
            {/* <Earth /> */}
            <img className='hidden md:block absolute bottom-[-9%] right-0 z-0' src="/earth.png" alt="" />
            <img className='hidden md:block absolute bottom-0 left-[47%]' src="/arrow-bg.svg" alt="" />
            <motion.img
                className="hidden md:block absolute bottom-24 left-[49.4%]"
                src="/arrow.png"
                alt=""
                animate={{
                    y: [0, -20, 0],  // Move up 5px and back down
                }}
                transition={{
                    duration: 1,     // Time for one cycle
                    repeat: Infinity, // Repeat forever
                    ease: "easeInOut" // Smooth animation
                }}
            />
            <Header />
            <div className="relative flex flex-col md:flex-row justify-between px-8 md:px-0 pb-20 md:pb-0 overflow-hidden">
                <ScrollReveal direction='right'>

                    <div className="max-sm:text-center md:pr-20 mt-8 md:mt-20">
                        <img className='mb-4 max-sm:mx-auto' src="/stars.svg" alt="" />
                        <div className="flex gap-1 items-center justify-center md:justify-start">
                            <h1 className=" text-[30px] md:text-[48px] font-[700]">شركه كوديفرنس</h1>
                            <Trinagle />
                        </div>
                        <h2 className="text-[20px] md:text-[32px]">حيث تتحول الأفكار إلى <span className="text-grad text-[20px] md:text-[32px]">حلول برمجية متكاملة</span></h2>
                        <p className="relative text-[16px] md:text-[24px] mt-8 md:mt-0 font-normal md:mt-12 text-gray-300 md:w-[490px]">مرحبا بك في كوديفرنس! نحن نؤمن بأن البرمجة هي مفتاح المستقبل</p>
                        <div className="w-full flex items-center md:justify-start justify-center gap-5 mt-8">
                            <a className="btn-bg w-[150px] py-[14px] md:py-[10px]  font-bold px-[15px] md:w-[198px] md:h-[68px] rounded-[12px] md:text-[32px] flex items-center justify-center" href="">
                                تواصل معانا
                            </a>
                            <div className='relative flex items-center'>
                                <img className="absolute bottom-0 left-0 top-[-3px] md:top-0 right-0" src="/btn-border.svg" alt="" />
                                <a className=" bg-transparent font-bold w-[150px] py-[10px] px-[15px] md:w-[198px] md:h-[68px] rounded-[12px] md:text-[28px] flex items-center justify-center" href="">
                                    شاهد اعمالنا
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden transform scale-x-[-1] ml-[-3.5rem] mt-8">
                            <Lottie
                                options={defaultOptions}
                                height={300}
                                width={400}
                            />
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction='left'>

                    <div className="hidden md:block transform scale-x-[-1]">
                        <Lottie
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default Hero