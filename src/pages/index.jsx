import { ImageContainer, Services, Accolades, Testimonials, JourneyCta } from "@/components";
import { API_ENDPOINTS } from "@/configs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
        <HeroSection/>
        <AfterHeroSection/>
        {/* <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Credentials</p>
          <h3 className="mt-2 playfair text-3xl font-bold text-[#0d1b34]">Certifications</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {API_ENDPOINTS.CERTIFICATIONS.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-[#e9e9e9] bg-[#fcfcfc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0d1b34]"
              >
                {item.label}
              </span>
            ))}
          </div>
        </section> */}
        <Accolades/> 
        <Services/>
        <Testimonials/>
        <JourneyCta/>
      {/* </main> */}
    </div>
  );
}

function HeroSection() {
  const links=[{label:'Gallery', icon:'play', href:'/'}, {label:'Consultation', href:'/', icon:'arrow-right-up'}]
  return (
    <section className="tablet:mt-25 justify-center relative w-full grid grid-cols-[40%_60%] overflow-hidden h-[90vh] mt-20 items-center px-[120px] tablet:grid-cols-1 tablet:h-auto tablet:mt-14 tablet:px-6 tablet:pt-8 tablet:pb-10">
      {/* Texture Overlay */}
      <div className=" absolute inset-0 water-overlay pointer-events-none z-0 w-[300px] h-[300px] tablet:w-[180px] tablet:h-[180px]" />
      <div className="relative z-10 tablet:text-center">
        <p className=" mb-7 text-gold monte uppercase text-[10px] font-semibold tracking-[0.25em] tablet:mb-4 tablet:text-[9px] ">{API_ENDPOINTS.BRAND_NAME_LONG+' . UNITED KINGDOM'} </p>
        <div className="playfair text-7xl text-[#0D1A34] tablet:text-5xl">
          <p className="capitalize font-bold tablet:leading-[1.05]">advanced</p>
          <p className="capitalize ls0 italic ml-20 tablet:ml-0 tablet:my-1">aesthetics,</p>
          <p className="capitalize font-bold tablet:leading-[1.05]">expertly</p>
          <p className="capitalize font-bold tablet:leading-[1.05]">delivered.</p>    
        </div>
        <div className="">
          <p className="mt-6 mb-8 monte text-sm text-stone-700 tablet:text-[13px] tablet:leading-6 tablet:mb-6">A synthesis of clinical excellence and editorial beauty.<br/>Where medical precision meets the art of transformation.</p>
          <div className="flex items-center gap-x-8 tablet:justify-center tablet:gap-x-6">
            {links.map(({label,icon, href},ind)=>
              <Link href={href} key={ind} className="flex items-center gap-x-2 hover:underline">
                <p className="monte text-sm font-medium uppercase tablet:text-[12px]">{label}</p>
                <img src={'/svg/'+icon+'.svg'} alt={icon} className="w-5 h-5 tablet:w-4 tablet:h-4"/>
              </Link>
            )}

          </div>
        </div>
      </div>
      <div className="h-full py-5 justify-self-end rounded-md tablet:justify-self-center tablet:w-full tablet:flex tablet:justify-center tablet:py-8">
        <HeroImage/>
      </div>
    </section>
  );
}
const small_text=' text-gold monte uppercase text-[11px] font-semibold tracking-[0.25em] '
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

function AfterHeroSection() {
  return (
    <main className="w-full grid grid-cols-2 items-center bg-surface-container-low px-[120px] py-[100px] tablet:grid-cols-1 tablet:gap-10 tablet:px-4 tablet:py-16">
      <div className="w-[90%] tablet:w-full">
        <p className={`${small_text} tablet:text-[10px] tablet:tracking-[0.2em]`}>THE PHILOSOPHY</p>

        <div className="border-[#d4af3764] border-r-[0.5px] pt-6 tablet:border-r-0 tablet:border-b-[0.5px] tablet:pb-6 tablet:pt-5">
          <p className="text-5xl playfair font-bold tablet:text-4xl">
            Where Personal
          </p>
          <p className="font-medium italic text-5xl mt-2 playfair tablet:text-4xl tablet:mt-1">
            Experience Meets Expertise.
          </p>
        </div>
      </div>

      <div className="tablet:w-full">
       <p
        style={{ lineHeight: "25px" }}
        className="text-sm text-stone-700 tablet:text-[13px] tablet:leading-7"
      >
        {`Favick Skin Clinic was born from the founder's own experience of struggling with acne, melasma and hyperpigmentation. After relocating to the UK, living with PCOS and going through back-to-back pregnancies, finding the right care for melanin-rich skin became a frustrating journey. Instead of accepting that, she chose to understand skin on a deeper level, training in advanced aesthetic treatments to help others avoid the same uncertainty.`}<br/>
        
        {`Today, every treatment combines professional expertise with the empathy that comes from having been through the journey herself.`}
      </p>

        <hr className="border-[#d4af3764] mt-4 tablet:mt-5" />

        <p className="mt-6 text-[12px] italic font-semibold tracking-widest tablet:mt-5 tablet:text-[11px]">
          PERSONAL EXPERIENCE. PROFESSIONAL CARE.
        </p>
      </div>
    </main>
  );
}