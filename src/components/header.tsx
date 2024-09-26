import React from 'react'

const Header = () => {
    return (
        <header className='!bg-transparent'>
            <div className='flex items-center justify-between px-16 py-[30px]'>
                <div>
                    <img src="/logo.png" alt="" />
                </div>
                <div>
                    <ul className='flex items-center justify-center gap-6 pb-3'>
                        <li>الرئيسية</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>
                        <li>من نحن</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li>الخدمات</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li>اراء العملاء</li>
                        <li > <div className='w-[6px] h-[6px] bg-[#8E8E8E] rounded-full' /></li>

                        <li>المدونة</li>
                    </ul>
                </div>
                <div>
                    <a href='/' className='w-[114px] h-[44px] py-[10px] px-[15px] rounded-[12px] btn-bg flex items-center justify-center font-bold'>
                        تواصل معانا
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header