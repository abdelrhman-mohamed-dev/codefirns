

const About = () => {
    return (
        <div>
            <div className="relative ">
                <img className="absolute z-0" src="/about-bg.png" alt="" />
                <div className="flex items-center justify-between px-20 pt-24 z-20 relative">
                    <div className="">
                        <img src="/starts-2.svg" alt="" />
                        <h2 className="font-[700] text-[48px] w-[495px]"> البرامج ولغات<br />
                            البرمجة في <span className="text-[#FFA84B]">كود</span>يفرنس</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-10 items-center justify-center mr-28">
                        <img src="/nodejs-logo.png" alt="" />
                        <img src="/html-logo.png" alt="" />
                        <img src="/react-logo.png" alt="" />
                        <img src="/tailwind-logo.png" alt="" />
                        <img src="/figma-logo.png" alt="" />
                        <img src="/WordPress-logo.png" alt="" />
                        <img src="/php-logo.png" alt="" />
                        <img src="/flutter-logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About