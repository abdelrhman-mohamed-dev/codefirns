import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ScrollReveal from '../ScrollRevial';


// install Swiper modules

const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('all');
    // console.log(activeCategory)

    return (
        <div className='relative mt-20 overflow-hidden'>
            {/* <img className='absolute' src="/projects-bg.png" alt="" /> */}
            <div className='md:px-20 px-8'>
                <div className='relative flex flex-col md:flex-row md:items-center justify-between'>
                    <div>
                        <ScrollReveal direction='right'>

                            <img src="/starts-2.svg" alt="" />
                            <h2 className='text-[30px] md:text-[32px] font-[700]'>
                                {"مشاريع"}
                                <span className='inline-flex text-color-grad'>{"نا ال"}</span>
                                {"سابقه"}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal direction='left'>

                        <p className='md:w-[413px] text-[#999999] text-[16px] mt-14'>{`في "كوديفرنس"، نفخر بتقديم حلول برمجية متقدمة تلبي احتياجات الشركات والمؤسسات بكفاءة وفعالية. تعرف على بعض ميزات منتجاتنا`}</p>
                    </ScrollReveal>
                </div>
                <ScrollReveal>

                    <div className='flex items-center justify-center'>
                        <div className='md:w-[597px] h-[76px] bg-[#1D71B81A] rounded-[50px] flex justify-center items-center mt-20'>
                            <ul className='flex items-center justify-center gap-5 md:gap-[90px] w-full px-4'>
                                <li
                                    className={`cursor-pointer relative flex items-center gap-2 md:text-[24px] font-bold ${activeCategory === 'all' ? 'text-color-grad' : ''}`}
                                    onClick={() => setActiveCategory('all')}
                                >
                                    <img src={activeCategory === 'all' ? "/active-icon-3.svg" : "/not-active-icon-3.svg"} alt="" />
                                    {"الكل"}
                                </li>
                                <li
                                    className={`cursor-pointer relative flex items-center gap-2 md:text-[24px] font-bold ${activeCategory === 'applications' ? 'text-color-grad' : ''}`}
                                    onClick={() => setActiveCategory('applications')}
                                >
                                    <img src={activeCategory === 'applications' ? "/active-icon-2.svg" : "/not-active-icon-2.svg"} alt="" />
                                    {"التطبيقات"}
                                </li>
                                <li
                                    className={`cursor-pointer relative flex items-center gap-2 md:text-[24px] font-bold ${activeCategory === 'web' ? 'text-color-grad' : ''}`}
                                    onClick={() => setActiveCategory('web')}
                                >
                                    <img src={activeCategory === 'web' ? "/active-icon-1.svg" : "/not-active-icon-1.svg"} alt="" />
                                    {"الويب"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>

                    <div className='hidden md:block relative mt-16'>
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            spaceBetween={20}
                            grabCursor={true}
                            slidesPerView={3}
                            navigation

                        >
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp-2.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"وادي ال"}
                                            <span className='inline-flex text-color-grad'>{"كوب"}</span>
                                            {"ونات"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"جار"}
                                            <span className='inline-flex text-color-grad'>{"دي فا"}</span>
                                            {"ي"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp-3.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>

                        </Swiper>

                        {/* <div className='flex items-center gap-5 justify-center mt-8'>
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[60px] h-[15px] bg-[#8E8E8E] rounded-full' />
                    </div> */}
                    </div>
                    <div className='relative md:hidden mt-16'>
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            spaceBetween={20}
                            grabCursor={true}
                            slidesPerView={1}
                            navigation

                        >
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp-2.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"وادي ال"}
                                            <span className='inline-flex text-color-grad'>{"كوب"}</span>
                                            {"ونات"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"جار"}
                                            <span className='inline-flex text-color-grad'>{"دي فا"}</span>
                                            {"ي"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp-3.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative cursor-pointer md:w-[350px] h-[508px]'>
                                    <div className='absolute z-20 top-5 md:top-3 px-4 md:px-10'>
                                        <h2 className='text-[27px] md:text-[32px] font-[700]'>
                                            {"نينج"}
                                            <span className='inline-flex text-color-grad'>{"ا ه"}</span>
                                            {"وم"}
                                        </h2>
                                    </div>
                                    <div className='absolute right-0 left-0 top-16 z-20  h-[2px] bg-[#262626] mt-4' />
                                    <img className='absolute bottom-0 top-0 right-0 left-0' src="/div-img-temp.png" alt="" />

                                </div>
                            </SwiperSlide>

                        </Swiper>

                        {/* <div className='flex items-center gap-5 justify-center mt-8'>
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[15px] h-[15px] bg-[#E4E7EC] rounded-full' />
                        <div className='w-[60px] h-[15px] bg-[#8E8E8E] rounded-full' />
                    </div> */}
                    </div>
                </ScrollReveal>

            </div>
        </div>
    )
}

export default Projects;
