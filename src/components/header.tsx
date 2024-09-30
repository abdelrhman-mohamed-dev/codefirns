import React from 'react'

const Header = () => {
    return (
        <header className='!bg-transparent'>
            <div className='flex items-center justify-between px-8 md:px-16 py-[30px]'>
                <div>
                    <img className='max-sm:w-[120px]' src="/logo.png" alt="" />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center justify-center gap-6 pb-3 ml-14'>
                        <li className='cursor-pointer'>الرئيسية</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>
                        <li className='cursor-pointer'>من نحن</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li className='cursor-pointer'>الخدمات</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li className='cursor-pointer'>اراء العملاء</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li className='cursor-pointer'>المدونة</li>
                    </ul>
                </div>
                <div>
                    <a href='/' className='md:w-[114px] md:h-[44px] p-2 md:py-[10px] md:px-[15px] rounded-[12px] btn-bg flex items-center justify-center font-bold'>
                        تواصل معانا
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header