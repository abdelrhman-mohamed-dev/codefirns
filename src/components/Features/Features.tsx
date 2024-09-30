import React from 'react'
import ScrollReveal from '../ScrollRevial'

const Features = () => {
    return (
        <div className="relative mt-12 md:mt-0 overflow-hidden">
            <img className='absolute max-sm:h-full md:top-[-82px] md:right-[0px] z-0' src="/info-bg.png" alt="" />

            <div className='flex flex-col md:flex-row px-8 md:px-20 pt-[150px] gap-[60px] items-center'>

                <ScrollReveal direction='right'>

                    <div className='mt-[-100px]'>
                        <img src="/starts-2.svg" alt="" />
                        <h2 className='text-[29px] md:text-[38px] font-[700]'>{"ميزات حلولنا التكنولوجية"}</h2>
                        <p className='md:w-[413px] text-[#999999] text-[16px] mt-10'>{`في "أي شيفت"، نفخر بتقديم حلول برمجية متقدمة تلبي احتياجات الشركات والمؤسسات بكفاءة وفعالية. تعرف على بعض ميزات منتجاتنا`}</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction='left'>

                    <div className='background-feature-container relative p-5 md:p-[50px]'>
                        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                            <div className="md:h-[172px] md:border-l-[1px] border-b pb-8 md:border-b-0 md:pb-0 border-[#262626] md:pl-8">
                                <div className='flex gap-5 md:gap-2 items-center'>
                                    <img src="/features-icon-1.svg" alt="" />
                                    <h2 className='text-[17px] md:text-[20px] font-[700]'>{"تخصيص وفقًا لاحتياجاتك"}</h2>
                                </div>
                                <p className="text-[16px] text-[#999999] font-[400] mt-4">{"نفهم أن كل عمل يختلف، ولذلك نقدم خيارات تخصيص لتلبية احتياجات عملائنا بدقة. سواء كنت تبحث عن حلول استنادية "}</p>
                            </div>
                            <div className="md:h-[172px] md:pr-8 border-b pb-8 md:border-b-0 md:pb-0 border-[#262626]">
                                <div className='flex gap-5 md:gap-2 items-center'>
                                    <img src="/features-icon-2.svg" alt="" />
                                    <h2 className='text-[17px] md:text-[20px] font-[700]'>{"تجربة مستخدم متميزة"}</h2>
                                </div>
                                <p className="text-[16px] text-[#999999] font-[400] mt-4">{"تصميم واجهات مستخدم سهلة الاستخدام ومرنة هو جزء من تفرد منتجاتنا. نسعى دائمًا لتحسين تجربة المستخدم لضمان رضاكم وراحتكم"}</p>
                            </div>
                            <div className='hidden md:block col-span-2 border-[1px] border-[#262626] my-6' />
                            <div className="md:h-[172px] md:border-l-[1px] border-b pb-8 md:border-b-0 md:pb-0 border-[#262626] md:pl-8">
                                <div className='flex gap-5 md:gap-2 items-center'>
                                    <img src="/features-icon-3.svg" alt="" />
                                    <h2 className='text-[17px] md:text-[20px] font-[700]'>{"التكامل المثالي"}</h2>
                                </div>
                                <p className="text-[16px] text-[#999999] font-[400] mt-4">{"تمتاز منتجاتنا بالتكامل السلس مع أنظمتك الحالية لتوفير تجربة تشغيل متكاملة دون أي انقطاع في الأداء."}</p>
                            </div>
                            <div className="md:h-[172px] md:pr-8 ">
                                <div className='flex gap-5 md:gap-2 items-center'>
                                    <img src="/features-icon-4.svg" alt="" />
                                    <h2 className='text-[17px] md:text-[20px] font-[700]'>{"دعم فني ممتاز"}</h2>
                                </div>
                                <p className="text-[16px] text-[#999999] font-[400] mt-4">{"نحن هنا لدعمك في كل خطوة على الطريق. يقدم فريق الدعم الفني لدينا دعمًا فعّالًا وسريعًا لحل أي مشكلة تواجهك ولضمان استمرارية أعمالك بسلاسة"}</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    )
}

export default Features