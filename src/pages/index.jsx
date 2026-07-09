import { ImageContainer } from "@/components";
import { API_ENDPOINTS } from "@/configs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
        <HeroSection/>
      {/* </main> */}
    </div>
  );
}

function HeroSection() {
  const links=[{label:'Gallery', icon:'play', href:'/'}, {label:'Consultation', href:'/', icon:'arrow-right-up'}]
  return (
    <section style={{ gridTemplateColumns: "40% 60%" }}className="justify-center relative w-full grid overflow-hidden pt-0 pb-0 h-[90vh] mt-20  items-center px-[120px]">
      {/* Texture Overlay */}
      <div className=" absolute inset-0 water-overlay pointer-events-none z-0" />
      <div className="">
        <p className=" mb-7  text-gold monte uppercase text-[10px] font-semibold tracking-[0.25em] ">{API_ENDPOINTS.BRAND_NAME_LONG+' . UNITED KINGDOM'} </p>
        <div className="playfair text-7xl">
          <p className="capitalize font-bold">advanced</p>
          <p className="capitalize ls0 italic ml-20">aesthetics,</p>
          <p className="capitalize font-bold">expertly</p>
          <p className="capitalize font-bold">delivered.</p>    
        </div>
        <div className="">
          <p className="mt-6 mb-8 monte text-sm text-stone-700">A synthesis of clinical excellence and editorial beauty.<br/>Where medical precision meets the art of transformation.</p>
          <div className="flex items-center gap-x-8">
            {links.map(({label,icon, href},ind)=>
              <Link href={href} key={ind} className="flex items-center gap-x-2 hover:underline">
                <p className="monte text-sm font-medium uppercase">{label}</p>
                <img src={'/svg/'+icon+'.svg'} alt={icon} className="w-5 h-5"/>
              </Link>
            )}

          </div>
        </div>
      </div>
      <div className="h-full py-5 justify-self-end  rounded-md">
        <HeroImage/>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="hero-image-container h-full">
      <ImageContainer
        className="h-full w-[400px]"
        src="/images/hero-favik2.jpg"
        imgClass="hero-image shadow-lg "
      />
    </div>
  );
}