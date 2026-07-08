import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Nav } from "@/components";

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
        <Footer/>
      </div>
    );
  }

