import ScrollReveal from "../ScrollRevial"


const About = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <img className="absolute z-0" src="/about-bg.png" alt="" />

                <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pb-24 md:pb-0 pt-24 z-20 relative">
                    <ScrollReveal direction="right">

                        <div className="">
                            <img src="/starts-2.svg" alt="" />
                            <h2 className="font-[700] text-[30px] md:text-[48px] md:w-[495px]"> البرامج ولغات<br />
                                البرمجة في <span className="text-[#FFA84B]">كود</span>يفرنس</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="left">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 md:mt-0 md:mr-28">
                            <div className="flex items-center justify-center">
                                <img src="/nodejs-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/html-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/react-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/tailwind-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/figma-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/WordPress-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/php-logo.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/flutter-logo.png" alt="" />
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </div>
    )
}

export default About