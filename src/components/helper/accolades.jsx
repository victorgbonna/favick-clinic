import Image from "next/image";

export default function Accolades() {
    const clinicalItems = [
        { label: "Scottish Beauty Expert Training Academy", icon: "/svg/awards/shield.svg" },
        { label: "Diploma: Chemical Peel, Microneedling, Mesotherapy", icon: "/svg/awards/diploma.svg" },
        { label: "Level 2 Award in Awareness of Skin of Colour Qualification", icon: "/svg/awards/skin.svg" },
    ];

    // const educationItems = [ww
    //     { label: "Robert Gordon University (First Class Honours)", icon: "/svg/awards/first.svg" },
    // ];

    return (
        <section className="px-6 py-12 tablet:px-4 tablet:py-10">
            <div className="rounded-sm border border-[#ececec] bg-[#f8f8f8] px-6 py-8 md:px-10 md:py-10 tablet:px-5 tablet:py-7">
                <div className="grid gap-10 lg:grid-cols-1">
                    <div>
                        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Clinical Excellence</p>
                        <div className="mt-6 flex flex-wrap items-stretch justify-between gap-4 tablet:flex-col tablet:gap-4">
                            {clinicalItems.map((item) => (
                                <div key={item.label} className="flex min-w-[220px] flex-1 items-center gap-3 text-[#7d7d7d] tablet:min-w-0 tablet:flex-none">
                                    <Image src={item.icon} alt={item.label} width={30} height={30} className="tablet:h-7 tablet:w-7" />
                                    <p className="playfair text-[14px] font-medium tablet:text-[13px] tablet:leading-6">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div>
                        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Education</p>
                        <div className="mt-6 space-y-4">
                            {educationItems.map((item) => (
                                <div key={item.label} className="flex items-center gap-3 text-[#7d7d7d]">
                                    <Image src={item.icon} alt={item.label} width={30} height={30} />
                                    <p className="monte text-[15px] font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}