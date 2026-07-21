import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Footer, Nav } from "@/components";
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
          href={API_ENDPOINTS.CONTACT.WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Favick Skin Clinic on WhatsApp"
          className="fixed bottom-5 right-5 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition duration-200 hover:scale-110 hover:bg-[#20ba58]"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M19.11 17.23c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.45-1.7-1.62-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.49-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.04.15.19 2.06 3.14 4.99 4.4.7.3 1.24.49 1.66.63.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z" />
            <path d="M16.02 3.2c-6.98 0-12.64 5.64-12.64 12.6 0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.88-1.8a12.72 12.72 0 0 0 5.94 1.5h.01c6.97 0 12.65-5.64 12.65-12.6 0-3.37-1.31-6.54-3.7-8.92A12.56 12.56 0 0 0 16.02 3.2Zm0 23.16h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.08 1.07 1.09-3.97-.25-.41a10.44 10.44 0 0 1-1.61-5.54c0-5.77 4.72-10.46 10.53-10.46 2.81 0 5.45 1.08 7.43 3.05a10.37 10.37 0 0 1 3.09 7.41c0 5.77-4.73 10.46-10.4 10.46Z" />
          </svg>
        </Link>
        <Footer/>
      </div>
    );
  }

