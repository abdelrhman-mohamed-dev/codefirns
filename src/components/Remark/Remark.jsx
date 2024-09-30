
const Remark = () => {
    return (
        <div className='relative flex flex-col gap-5 md:flex-row items-center justify-between px-4 md:px-20 py-4 bg-[#1A1A1A]'>
            <span className="text-[14px]">{"جميع الحقوق محفوظه لدي مصطفي الحسيني @2024"}</span>
            <div className='flex gap-3 items-center'>
                <img className='p-[10px] bg-[#141414] rounded-full' src="/facebook.svg" alt="" />
                <img className='p-[10px] bg-[#141414] rounded-full' src="/twitter.svg" alt="" />
                <img className='p-[10px] bg-[#141414] rounded-full' src="/linkedIn.svg" alt="" />
                <img className='p-[10px] bg-[#141414] rounded-full' src="/youtube.svg" alt="" />
            </div>
        </div>
    )
}

export default Remark