import ScrollReveal from "../ScrollRevial"

const Contact = () => {
    return (
        <div className='relative mt-20 md:mt-40 md:h-[400px] overflow-hidden'>
            <ScrollReveal direction="top">

                <div className='flex items-center justify-center md:pt-20 mx-auto'>
                    <h2 className='font-family text-[30px] md:text-[64px] font-[700] text-center md:w-[869px] leading-[30px] '>{" ممكن تسيب بريدك و هنتواصل معاك عن طريق"}{" "}
                        <span className='text-color-grad !text-[39px] md:!text-[64px] !font-[700]'>{"البريد الاكتروني "}</span>
                    </h2>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className='flex items-center justify-center mt-10 p-3 md:p-0'>

                    <div className='contact'>
                        <div className='contact-email-icon'>
                            <img className='' src="/email.svg" alt="" />
                        </div>
                        <input className=' w-full h-full bg-transparent focus:outline-none p-5 md:p-10' type="email" placeholder="البريد الاكتروني" />
                        <button className='contact-send-btn'>
                            {"أرسال"}
                        </button>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Contact