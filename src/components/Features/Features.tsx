import React from 'react'

const Features = () => {
    return (
        <div className="relative ">
            <img className='absolute top-[-82px] right-[-44px] z-0' src="/info-bg.png" alt="" />


            <div className='flex px-20 pt-[150px] gap-[60px] items-center'>

                <div className='mt-[-100px]'>
                    <img src="/starts-2.svg" alt="" />
                    <h2 className='text-[38px] font-[700]'>{"ميزات حلولنا التكنولوجية"}</h2>
                    <p className='w-[413px] text-[#999999] text-[16px] mt-10'>{`في "كوديفرنس"، نفخر بتقديم حلول برمجية متقدمة تلبي احتياجات الشركات والمؤسسات بكفاءة وفعالية. تعرف على بعض ميزات منتجاتنا`}</p>
                </div>


                <div className='background-feature-container relative p-[50px]'>
                    <div className='grid grid-cols-2'>
                        <div className="h-[172px] border-l-[1px] border-[#262626] pl-8">
                            <div className='flex gap-2 items-center'>
                                <img src="/features-icon-1.svg" alt="" />
                                <h2 className='text-[20px] font-[700]'>{"تخصيص وفقًا لاحتياجاتك"}</h2>
                            </div>
                            <p className="text-[16px] text-[#999999] font-[400] mt-8">{"نفهم أن كل عمل يختلف، ولذلك نقدم خيارات تخصيص لتلبية احتياجات عملائنا بدقة. سواء كنت تبحث عن حلول استنادية "}</p>
                        </div>
                        <div className="h-[172px] pr-8 ">
                            <div className='flex gap-2 items-center'>
                                <img src="/features-icon-1.svg" alt="" />
                                <h2 className='text-[20px] font-[700]'>{"تخصيص وفقًا لاحتياجاتك"}</h2>
                            </div>
                            <p className="text-[16px] text-[#999999] font-[400] mt-8">{"نفهم أن كل عمل يختلف، ولذلك نقدم خيارات تخصيص لتلبية احتياجات عملائنا بدقة. سواء كنت تبحث عن حلول استنادية "}</p>
                        </div>
                        <div className='col-span-2 border-[1px] border-[#262626] my-4' />
                        <div className="h-[172px] border-l-[1px] border-[#262626] pl-8">
                            <div className='flex gap-2 items-center'>
                                <img src="/features-icon-1.svg" alt="" />
                                <h2 className='text-[20px] font-[700]'>{"تخصيص وفقًا لاحتياجاتك"}</h2>
                            </div>
                            <p className="text-[16px] text-[#999999] font-[400] mt-8">{"نفهم أن كل عمل يختلف، ولذلك نقدم خيارات تخصيص لتلبية احتياجات عملائنا بدقة. سواء كنت تبحث عن حلول استنادية "}</p>
                        </div>
                        <div className="h-[172px] pr-8 ">
                            <div className='flex gap-2 items-center'>
                                <img src="/features-icon-1.svg" alt="" />
                                <h2 className='text-[20px] font-[700]'>{"تخصيص وفقًا لاحتياجاتك"}</h2>
                            </div>
                            <p className="text-[16px] text-[#999999] font-[400] mt-8">{"نفهم أن كل عمل يختلف، ولذلك نقدم خيارات تخصيص لتلبية احتياجات عملائنا بدقة. سواء كنت تبحث عن حلول استنادية "}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features