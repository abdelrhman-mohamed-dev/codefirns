
const Contact = () => {
    return (
        <div className='relative mt-40 h-[400px]'>
            <div className='flex items-center justify-center pt-20 mx-auto'>
                <h2 className='font-family text-[64px] font-[700] text-center w-[869px] leading-[30px] '>{" ممكن تسيب بريدك و هنتواصل معاك عن طريق"}{" "}
                    <span className='text-color-grad !text-[64px] !font-[700]'>{"البريد الاكتروني "}</span>
                </h2>
            </div>
            <div className='flex items-center justify-center mt-10'>

                <div className='contact'>
                    <div className='contact-email-icon'>
                        <img className='' src="/email.svg" alt="" />
                    </div>
                    <input className=' w-full h-full bg-transparent focus:outline-none p-10' type="email" placeholder="البريد الاكتروني" />
                    <button className='contact-send-btn'>
                        {"أرسال"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact