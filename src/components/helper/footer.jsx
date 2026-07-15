import Link from "next/link";
import { API_ENDPOINTS } from "@/configs";
import Image from "next/image";

const socialLinks = [
    {
        label: "Instagram",
        handle: "@favickskinclinic",
        href: "https://instagram.com/favickskinclinic",
        icon: "/svg/socials/insta.svg",
    },
    {
        label: "Facebook",
        handle: "@favickskinclinic",
        href: "https://facebook.com/favickskinclinic",
        icon: "/svg/socials/facebook.svg",
    },
    {
        label: "TikTok",
        handle: "@favickskinclinic",
        href: "https://tiktok.com/@favickskinclinic",
        icon: "/svg/socials/tiktok.svg",
    },
];

const footerLinks = {
    treatments: (API_ENDPOINTS?.SERVICES?.CORE_CATEGORIES || []).map((item) => item.name),
    company: [
        { label: "Membership Plan", href: "#membership-plan" },
        { label: "Refund and Return Policy", href: "#refund-return-policy" },
        { label: "About Us", href: "#about-us" },
        { label: "Contact Us", href: "#contact" },
    ],
};

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 tablet:mt-8 tablet:pt-0 border-t border-[#112b59] bg-[#0D1B34] px-6 pb-8 pt-16 text-[#9ab2de] md:px-12 lg:px-20">
            <div className="pointer-events-none mx-auto -mt-16 mb-12 h-20 w-full max-w-7xl bg-gradient-to-b from-[#2a4f93]/35 to-transparent blur-xl" />

            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img src="/images/favick-logo-footer.png" alt="Favick Skin Clinic" width={50} height={50}/>
                    {/* <h3 className="playfair text-4xl italic text-white">{API_ENDPOINTS.BRAND_NAME_LONG}</h3> */}
                    <p className="mt-5 max-w-xs text-sm leading-7 text-[#c4d3f0]">
                        Personalised skin treatments for melanin-rich and all skin types, delivered with clinical precision, honest guidance, and care that prioritises long-term skin health.
                    </p>

                    {/* <div className="mt-6 flex items-center gap-4">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                className="transition hover:opacity-100 opacity-80"
                                aria-label={item.label}
                            >
                                <Image src={item.icon} alt={item.label} width={16} height={16} className="brightness-0 invert sepia-[1] saturate-[6] hue-rotate-[7deg]" />
                            </Link>
                        ))}
                    </div> */}
                </div>

                <div>
                    <p className="monte text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Treatments</p>
                    <div className="mt-5 space-y-3 text-sm text-[#c4d3f0]">
                        {footerLinks.treatments.map((name) => (
                            <p key={name}>{name}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="monte text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Company</p>
                    <div className="mt-5 space-y-3 text-sm text-[#c4d3f0]">
                        {footerLinks.company.map((item) => (
                            <Link key={item.label} href={item.href} className="block w-fit hover:text-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="monte text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Connect</p>
                    <div className="mt-5 space-y-3 text-sm text-[#c4d3f0]">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((item) => (
                                <Link
                                    key={`connect-${item.label}`}
                                    href={item.href}
                                    target="_blank"
                                    className="transition hover:opacity-100 opacity-80"
                                    aria-label={item.label}
                                >
                                    <Image src={item.icon} alt={item.label} width={20} height={20} 
                                    // className="brightness-0 invert sepia-[1] saturate-[6] hue-rotate-[7deg]"
                                     />
                                </Link>
                            ))}
                        </div>
                        <p className="pt-2"><Link href="mailto:hello@favickskinclinic.co.uk" className="hover:text-white">hello@favickskinclinic.co.uk</Link></p>
                        <p>+44 795 661 3490</p>
                        <p>{'Opening hours: Monday-Friday, 9:30am-5:00pm (By appointments only)'}</p>
                    </div>

                    <Link href="#contact" className="mt-6 inline-flex w-full items-center justify-between border border-[#193768] bg-transparent px-4 py-3 monte text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9eb7e2] transition hover:border-[#315791] hover:text-white">
                        Join the Favick Community
                        <span className="text-[#d4af37]">&#8594;</span>
                    </Link>
                </div>
            </div>

            <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-[#122d5c] pt-5 text-[11px] uppercase tracking-[0.22em] text-[#5978ad] md:flex-row md:items-center">
                <p>&copy; {year} {API_ENDPOINTS.BRAND_NAME_LONG}. Expert Skincare for Every Skin Tone.</p>
                <div className="flex items-center gap-6">
                    <Link href="#refund-return-policy" className="hover:text-[#a9c0e8]">Refund & Return Policy</Link>
                    {/* <Link href="#" className="hover:text-[#a9c0e8]">Terms</Link> */}
                </div>
            </div>
                    </footer>
    );
}