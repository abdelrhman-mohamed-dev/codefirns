
const Team = () => {
    return (
        <div className='relative p-28'>
            <div className=' h-[606px] rounded-[50px] relative'>
                <img className='absolute top-0 right-0 w-full h-full rounded-[50px] ' src="/team-bg.png" alt="" />
                <div className='relative flex flex-col items-center justify-center pt-6'>
                    <img src="/starts-2.svg" alt="" />
                    <h2 className='text-[38px] font-bold mt-1'>{"فريق"}
                        <span className='inline-flex text-color-grad'>{"نا"}</span>
                    </h2>
                    <p className='text-[18px] text-[#999999] w-[790px] text-center mt-3'>{"فريقنا هو قلب كوديفرنس. نحن مجموعة متنوعة من المحترفين المبدعين الذين يجمعون بين المهارات التقنية العالية والابتكار في التفكير"}</p>
                    <div className='relative flex mt-4 gap-20'>
                        <div className='border border-[#C4C4C4] rounded-[20px] w-[295px] h-[370px] flex items-center justify-center flex-col'>
                            <img className='w-[254px] h-[254px] object-cover rounded-[20px]' src="/team-3.jfif" alt="" />
                            <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                            <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                        </div>
                        <div className='border border-[#C4C4C4] rounded-[20px] w-[295px] h-[370px] flex items-center justify-center flex-col'>
                            <img className='w-[254px] h-[254px] object-cover rounded-[20px]' src="/team-2.jfif" alt="" />
                            <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                            <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                        </div>
                        <div className='border border-[#C4C4C4] rounded-[20px] w-[295px] h-[370px] flex items-center justify-center flex-col'>
                            <img className='w-[254px] h-[254px] object-cover rounded-[20px]' src="/team-1.jfif" alt="" />
                            <span className='text-[16px] mt-4'>{"مصطفي الحسيني"}</span>
                            <span className='text-[16px] text-[#FF5E69]'>{"Ui Ux Design"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team