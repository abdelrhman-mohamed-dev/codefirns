import ScrollReveal from "../ScrollRevial"

const Info = () => {
    return (
        <div className="mt-36 px-8 md:px-20 overflow-hidden">
            <ScrollReveal direction="right">

                <div>
                    <img src="/starts-2.svg" alt="" />
                    <h3 className="text-[30px] md:text-[60px] font-[700] flex gap-5 mt-2">
                        <span className="flex items-center">

                            <span className="block">{"قيم"}</span>
                            <span className="text-color-grad inline">{'نا'}</span>
                        </span>
                        {"   "}
                        <span className="flex items-center">

                            <span className="block">{"ورؤيت"}</span>
                            <span className="text-color-grad inline">{'نا'}</span>
                        </span>
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-[#999999] font-[400]" >في كوديفرنس، نحن ملتزمون بقيم راسخة تُشكل أساس كل ما نقوم به. هذه القيم ليست مجرد كلمات، بل هي المبادئ التي تقودنا وتساعدنا على تقديم أفضل ما لدينا لعملائنا وشركائنا:</p>
                </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
                <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                    <div className="card-border md:h-[256px] p-5 md:p-[50px]">
                        <div className="flex items-center gap-5 md:gap-[50px] ">

                            <img src="/icon-1.svg" alt="" />
                            <h3 className="font-[700] text-lg md:text-[24px]">الابتكار الدائم</h3>
                        </div>
                        <p className="text-[#999999] text-[18px] test mt-[30px] ">نجاح عملائنا هو دافعنا، ونسعى لتقديم حلول تفوق توقعاتهم.</p>
                    </div>
                    <div className="card-border md:h-[256px] p-5 md:p-[50px]">
                        <div className="flex items-center gap-5 md:gap-[50px] ">

                            <img src="/icon-2.svg" alt="" />
                            <h3 className="font-[700] text-lg md:text-[22px]">{"التعاون والشراكة"}</h3>
                        </div>
                        <p className="text-[#999999] text-[18px] test mt-[30px] ">{"نؤمن ببناء علاقات قوية مع عملائنا وشركائنا لتحقيق نجاح مشترك."}</p>
                    </div>
                    <div className="card-border md:h-[256px] p-5 md:p-[50px]">
                        <div className="flex items-center gap-5 md:gap-[50px] ">

                            <img src="/icon-3.svg" alt="" />
                            <h3 className="font-[700] text-lg md:text-[24px]">{"التميز والجودة"}</h3>
                        </div>
                        <p className="text-[#999999] text-[18px] test mt-[30px] ">{"نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا وخدماتنا."}</p>
                    </div>
                    <div className="md:col-span-3 flex flex-col md:flex-row items-center gap-5">
                        <div className="card-border md:h-[256px] p-5 md:p-[50px] ">
                            <div className="flex items-center gap-5 md:gap-[50px] ">

                                <img src="/icon-4.svg" alt="" />
                                <h3 className="font-[700] text-lg md:text-[24px]">{"التركيز على العميل"}</h3>
                            </div>
                            <p className="text-[#999999] text-[18px]  md:text-[22px] test mt-[30px] ">{"نجاح عملائنا هو دافعنا، ونسعى لتقديم حلول تفوق توقعاتهم."}</p>
                        </div>
                        <div className="relative card-border p-5 md:p-[50px] md:h-[256px] bg-[#1A1A1A] md:w-[78%]">
                            <img className="absolute top-0 left-0 w-full h-full" src="/card-hover-bg.svg" alt="" />
                            <div className="relative">

                                <h1 className="text-[30px] font-[700]">{"رؤيتنا"}</h1>
                                <p className="pt-[30px] text-[16px] md:text-[18px] text-[#999999] test">{"نطمح إلى أن نكون روادًا عالميين في تقديم حلول برمجية مبتكرة، مع تعزيز الاستدامة والابتكار. رؤيتنا هي صناعة المستقبل، وتقديم تأثير إيجابي يحقق النجاح لعملائنا وشركائنا."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default Info