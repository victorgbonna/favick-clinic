import React, { useContext, useEffect, useState } from 'react';
import ImageContainer from './../ImageContainer';
import Link from 'next/link';
import Image from 'next/image';
import { API_ENDPOINTS, PAGE_ROUTES } from '@/configs';
import { useRouter } from 'next/navigation'

export default function Nav({scrolledPast,scrolledPastMobile, activeNav}) {

    const nav_list = [
  {
    label: "About Us",
        to: PAGE_ROUTES.ABOUT,
  },
  {
    label: "Treatments",
        to: PAGE_ROUTES.TREATMENTS,
  },
//   {
//     label: "Gallery",
//         to: "/#studio",
//   },
  {
    label: "Contact",
        to: PAGE_ROUTES.CONTACT,
  },
];
    const router = useRouter()


    return (    
        <nav className='text-black phone:fixed phone:top-0 phone:left-0 phone:right-0 phone:w-full z-[70]'>
            <PcNav activeNav={activeNav} nav_list={nav_list} scrolledPast={scrolledPast}/>
            <PhoneNav activeNav={activeNav} nav_list={nav_list} scrolledPast={scrolledPast}/>
        </nav>
    )
}
function PhoneNav({nav_list, scrolledPast, activeNav}){
    const [showNav, setShowNav]= useState(false)
    return(
        <div className='pc:hidden bigpc:hidden text-black tablet:hidden phone:block' 
            style={scrolledPast?{background:" #F8F8F6"}:{background:"transparent"}}
        >
        <div className='flex justify-between tablet:block tablet:p-4 items-center px-6 py-0'>
           <div className="flex justify-between items-center">
            <Link href={PAGE_ROUTES.HOME} className='inline-flex items-center'>
                <Image
                    src="/images/favick-logo.png"
                    alt="Favick Clinic"
                    width={60}
                    height={60}
                    className="h-auto"
                    priority
                />
            </Link>
            <button onClick={() => setShowNav(!showNav)} aria-label="Toggle navigation menu" className="p-1">
                <Image
                    src="/svg/barcode.svg"
                    alt="Menu"
                    width={30}
                    height={30}
                />
            </button>
            </div>
        </div>
        {showNav && (
            <div className="absolute top-full left-0 w-full bg-surface backdrop-blur-xl border-b border-outline-variant/10 py-8 px-5 space-y-8">
                {nav_list.map(({ label, to }, index) => (
                <Link
                    key={index}
                    href={to}
                    onClick={() => setShowNav(false)}
                    className="block uppercase monte text-[11px] tracking-[0.25em] text-on-surface-variant hover:text-gold transition-colors"
                >
                    {label}
                </Link>
                ))}

                <button className="w-full bg-[#0d1b34] text-white py-4 uppercase tracking-[0.15em] text-[13px] hover:bg-gold hover:text-primary transition-all">
                BOOKING
                </button>
            </div>
            )}
        </div>
    )
}
function PcNav({nav_list, scrolledPast, activeNav}){
    const [showNav, setShowNav]= useState(false)
    
    return(
     <div
        className="phone:hidden fixed top-0 left-0 right-0 z-50 w-full bg-surface backdrop-blur-xl  border-outline-variant/5"
        >
        <div className="max-w-[1280px] mx-auto px-[80px] py-5 flex items-center justify-between">
            <Link href={PAGE_ROUTES.HOME} className='inline-flex items-center'>
                <Image
                    src="/images/favick-logo.png"
                    alt="Favick Clinic"
                    width={60}
                    height={60}
                    className="h-auto"
                    priority
                />
            </Link>

            <div className="favick-nav flex items-center gap-12">
            {nav_list.map(({ label, to }, index) => (
                <Link
                key={index}
                href={to}
                className="monte uppercase text-[11px] font-semibold tracking-[0.25em] text-on-surface-variant hover:text-gold transition-colors"
                >
                {label}
                </Link>
            ))}

            <button className="bg-[#0d1b34] text-white text-[13px] uppercase tracking-[0.1em] px-8 py-3 monte hover:bg-gold hover:text-primary transition-all duration-500">
                BOOK US
            </button>
            </div>
        </div>
    </div>
    )
}