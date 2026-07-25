import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CookieConsent, Footer, Nav } from "@/components";
import { API_ENDPOINTS } from "@/configs";

export default function MainLayout({ children, isLoggedIn}) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [scrolledPastMobile, setScrolledPastMobile] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScrolledPast(scrolled);
      const oneVhInPixels = window.innerHeight / 100;

      const targetScrollYInVh = 50;
      const targetScrollYInPixels = targetScrollYInVh * oneVhInPixels;
      setScrolledPastMobile(window.scrollY >= targetScrollYInPixels)
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const [activeNav, setActiveNav]= useState('')
  const router= useRouter()
   
  useEffect(() => {
    setActiveNav(router?.pathname)
  }, [router?.pathname])
  return (
      <div className={"bg-surface overflow-x-hidden max-w-full text-black w-screen relative"}> 
        <Nav activeNav={activeNav} 
          scrolledPast={scrolledPast} 
          scrolledPastMobile={scrolledPastMobile}/>
        <div className="flex flex-col items-center">
        <main className={`bg-surface max-w-[1700px] w-full`}
        style={{
          overflowX:'hidden'
        }}
        >
          {children}
        </main>
        </div>
        <Link
          href={API_ENDPOINTS.BOOKING_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Favick Skin Clinic on Fresha"
          className="fixed bottom-5 right-5 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#607d8b] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-110 hover:bg-[#607d8b]/90 hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] tablet:bottom-4 tablet:right-4"
        >
          <img src="/svg/book.svg" alt="Book" className="h-8 w-8" />
        </Link>
        {/* <CookieConsent /> */}
        <Footer/>
      </div>
    );
  }

