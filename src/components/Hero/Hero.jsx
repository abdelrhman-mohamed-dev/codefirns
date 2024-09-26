import Lottie from 'react-lottie'
import Trinagle from '../../icons/Trinagle'
import Header from '../header'
import animationData from '../../lotties/labtop.json';


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
        <div className="hero">
            <Header />
            <div className="flex justify-between">
                <div className="pr-20 mt-20">
                    <img src="/stars.svg" alt="" />
                    <div className="flex gap-1 items-center">
                        <h1 className="text-[48px] font-[700]">شركه كوديفرنس</h1>
                        <Trinagle />
                    </div>
                    <h2 className="text-[32px]">حيث تتحول الأفكار إلى <span className="text-grad">حلول برمجية متكاملة</span></h2>
                    <p className="text-[24px] font-normal mt-12 text-gray-300 w-[380px]">مرحبا بك في كوديفرنس! نحن نؤمن بأن البرمجة هي مفتاح المستقبل</p>
                    <div className="w-full flex items-center gap-5 mt-8">
                        <a className="btn-bg py-[10px] font-bold px-[15px] w-[198px] h-[68px] rounded-[12px] text-[32px] flex items-center justify-center" href="">
                            تواصل معانا
                        </a>
                        <div className='relative flex items-center'>
                            <img className="absolute top-0 right-0" src="/btn-border.svg" alt="" />
                            <a className=" bg-transparent font-bold py-[10px] px-[15px] w-[198px] h-[68px] rounded-[12px] text-[28px] flex items-center justify-center" href="">
                                شاهد اعمالنا
                            </a>
                        </div>
                    </div>
                </div>
                <div className="transform scale-x-[-1]">
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero