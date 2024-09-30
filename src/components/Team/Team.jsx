import ScrollReveal from "../ScrollRevial"

const Team = () => {
    return (
        <div className='relative mt-28 px-2 md:p-16 overflow-hidden'>
            <ScrollReveal>

                <div className='h-full md:h-[606px] rounded-[20px] md:rounded-[50px] w-full relative p-5 '>
                    <img className='absolute top-0 right-0  w-full h-full rounded-[20px] md:rounded-[50px] teams-border-stroke ' src="/team-bg.png" alt="" />
                    <div className='relative flex flex-col items-center justify-center pt-6'>
                        <img src="/starts-2.svg" alt="" />
                        <h2 className='text-[32px] md:text-[38px] font-bold mt-1'>{"فريق"}
                            <span className='inline-flex text-color-grad'>{"نا"}</span>
                        </h2>
                        <p className='text-[16px] md:text-[18px] text-[#999999] md:w-[790px] text-center mt-3'>{"فريقنا هو قلب أي شيفت. نحن مجموعة متنوعة من المحترفين المبدعين الذين يجمعون بين المهارات التقنية العالية والابتكار في التفكير"}</p>
                        <div className='relative flex flex-col items-center md:flex-row mt-4 gap-5 md:gap-20'>
                            <ScrollReveal>

                                <div className='border border-[#C4C4C4] rounded-[20px] w-[230px] md:w-[295px] h-[300px] md:h-[370px] flex items-center justify-center flex-col'>
                                    <img className='w-[180px] md:w-[254px] h-[210px] md:h-[254px] object-cover rounded-[20px]' src="/team-1.jfif" alt="" />
                                    <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                                    <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal>

                                <div className='border border-[#C4C4C4] rounded-[20px] w-[230px] md:w-[295px] h-[300px] md:h-[370px] flex items-center justify-center flex-col'>
                                    <img className='w-[180px] md:w-[254px] h-[210px] md:h-[254px] object-cover rounded-[20px]' src="/team-2.jfif" alt="" />
                                    <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                                    <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal>

                                <div className='border border-[#C4C4C4] rounded-[20px] w-[230px] md:w-[295px] h-[300px] md:h-[370px] flex items-center justify-center flex-col'>
                                    <img className='w-[180px] md:w-[254px] h-[210px] md:h-[254px] object-cover rounded-[20px]' src="/team-3.jfif" alt="" />
                                    <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                                    <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>
    )
}

export default Team