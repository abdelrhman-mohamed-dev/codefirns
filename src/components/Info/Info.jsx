
const Info = () => {
    return (
        <div className="mt-36 px-20">
            <div>
                <img src="/starts-2.svg" alt="" />
                <h3 className="text-[60px] font-[700] flex gap-5 mt-2">
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
                <p className="text-[18px] text-[#999999] font-[400]" >في كوديفرنس، نحن ملتزمون بقيم راسخة تُشكل أساس كل ما نقوم به. هذه القيم ليست مجرد كلمات، بل هي المبادئ التي تقودنا وتساعدنا على تقديم أفضل ما لدينا لعملائنا وشركائنا:</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="card-border h-[256px] p-[50px]">
                    <div className="flex items-center gap-[50px] ">

                        <img src="/icon-1.svg" alt="" />
                        <h3 className="font-[700] text-[24px]">الابتكار الدائم</h3>
                    </div>
                    <p className="text-[#999999] text-[18px] test mt-[30px] ">نجاح عملائنا هو دافعنا، ونسعى لتقديم حلول تفوق توقعاتهم.</p>
                </div>
                <div className="card-border h-[256px] p-[50px]">
                    <div className="flex items-center gap-[50px] ">

                        <img src="/icon-2.svg" alt="" />
                        <h3 className="font-[700] text-[22px]">{"التعاون والشراكة"}</h3>
                    </div>
                    <p className="text-[#999999] text-[18px] test mt-[30px] ">{"نؤمن ببناء علاقات قوية مع عملائنا وشركائنا لتحقيق نجاح مشترك."}</p>
                </div>
                <div className="card-border h-[256px] p-[50px]">
                    <div className="flex items-center gap-[50px] ">

                        <img src="/icon-3.svg" alt="" />
                        <h3 className="font-[700] text-[24px]">{"التميز والجودة"}</h3>
                    </div>
                    <p className="text-[#999999] text-[18px] test mt-[30px] ">{"نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا وخدماتنا."}</p>
                </div>
                <div className="card-border h-[256px] p-[50px] w-[483px]">
                    <div className="flex items-center gap-[50px] ">

                        <img src="/icon-4.svg" alt="" />
                        <h3 className="font-[700] text-[24px]">{"التركيز على العميل"}</h3>
                    </div>
                    <p className="text-[#999999] text-[22px] test mt-[30px] ">{"نجاح عملائنا هو دافعنا، ونسعى لتقديم حلول تفوق توقعاتهم."}</p>
                </div>
                <div className="relative col-span-2 card-border mr-20 p-[50px] h-[256px] bg-[#1A1A1A]">
                    <img className="absolute top-0 left-0 w-full h-full" src="/card-hover-bg.svg" alt="" />
                    <div className="relative">

                        <h1 className="text-[30px] font-[700]">{"رؤيتنا"}</h1>
                        <p className="pt-[30px] text-[18px] text-[#999999] test">{"نطمح إلى أن نكون روادًا عالميين في تقديم حلول برمجية مبتكرة، مع تعزيز الاستدامة والابتكار. رؤيتنا هي صناعة المستقبل، وتقديم تأثير إيجابي يحقق النجاح لعملائنا وشركائنا."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info