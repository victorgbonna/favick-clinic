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
        <AfterHeroCTA/>
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
  return (
    <section className="tablet:mt-[120px] tablet:gap-y-10 justify-center relative w-full grid grid-cols-[40%_60%] overflow-hidden h-[90vh] mt-[130px] pb-10 items-center px-[120px] tablet:grid-cols-1 tablet:h-auto tablet:mt-14 tablet:px-6 tablet:pt-8 tablet:pb-10">
      {/* Texture Overlay */}
      <div className=" absolute inset-0 water-overlay pointer-events-none z-0 w-[300px] h-[300px] tablet:w-[180px] tablet:h-[180px]" />
      <div className="tablet:order-2 relative z-10 tablet:text-center">
        <p className=" mb-7 text-gold monte uppercase text-[10px] font-semibold tracking-[0.25em] tablet:mb-4 tablet:text-[9px] ">{API_ENDPOINTS.BRAND_NAME_LONG+' . UNITED KINGDOM'} </p>

        <div className="playfair text-5xl text-[#0D1A34] tablet:text-4xl">
          <p className="font-bold">Hi 👋🏽, I'm Faith Aminaho, <span className="italic text-lg hidden">the founder of Favick Skin Clinic.</span></p>
        </div>

        <div className="">
          <p style={{ lineHeight: "25px" }} className="mt-6 mb-8 monte text-sm text-stone-700 tablet:text-[13px] tablet:leading-6 tablet:mb-6">
            {`Favick Skin Clinic was born from my own skin journey.`}
            <br />
            {`After relocating to the UK, living with PCOS and going through back-to-back pregnancies, my skin changed in ways I wasn't prepared for. I started battling acne, rough texture, melasma and stubborn hyperpigmentation. Like a lot of people, I spent hours researching, trying products and hoping something would finally work.`}
            <br />
            <br />
            {`As a woman of colour, one of my biggest frustrations was how little of the advice out there actually understood skin like mine. Most of it simply wasn't built with melanin-rich skin in mind, and that made an already frustrating process feel even more isolating.`}
          </p>
        </div>
      </div>
      <div className="hero   tablet:h-[350px] h-[88%] tablet:w-[350px] w-[400px] p-0 mt-0 justify-self-end tablet:justify-self-center tablet:w-full tablet:p-0 tablet:flex justify-center flex tablet:p-0 p-0">
        <HeroImage/>
      </div>
    </section>
  );
}
const small_text=' text-gold monte uppercase text-[11px] font-semibold tracking-[0.25em] '
function HeroImage() {
  return (
    <div className=" hero-image-container w-full h-full">
      <ImageContainer
        className=" h-full w-full rounded-sm overflow-hidden"
        src="/images/faithaminaho.jpg"
        imgClass="hero-image shadow-lg rounded-none!"
      />
    </div>
  );
}

function AfterHeroSection() {
  return (
    <main className="w-full grid grid-cols-2 items-center bg-surface-container-low px-[120px] py-[100px] tablet:grid-cols-1 tablet:gap-10 tablet:px-4 tablet:py-16">
      <div className="w-[90%] tablet:w-full">
        <p className={`${small_text} tablet:text-[10px] tablet:tracking-[0.2em]`}>EXPERT SKINCARE FOR EVERY SKIN TONE</p>

        <div className="border-[#d4af3764] border-r-[0.5px] pt-6 tablet:border-r-0 tablet:border-b-[0.5px] tablet:pb-6 tablet:pt-5">
          <p className="italic text-4xl playfair font-bold tablet:text-3xl">
            {`"I created what I wish I'd found during my own skin journey."`}
          </p>
        </div>
      </div>

      <div className="tablet:w-full">
       <p
        style={{ lineHeight: "25px" }}
        className="text-sm text-stone-700 tablet:text-[13px] tablet:leading-7"
      >
        {`What began as frustration soon became a purpose. I immersed myself in learning about skin health, the science behind common skin concerns and trained professionally in facials, chemical peels, microneedling and mesotherapy.`}
        <br /><br />
        {`Alongside my aesthetics training, I also work within the NHS as a Senior Healthcare Support Worker. That experience shaped how I care for every client, with clinical safety, professionalism and genuine empathy.`}
        <br /><br />
        {`While melanin-rich skin remains a particular focus of mine, Favick Skin Clinic welcomes every skin tone, because everyone deserves care that truly understands their skin.`}
      </p>

        <hr className="border-[#d4af3764] mt-4 tablet:mt-5" />

        
      </div>
    </main>
  );
}

function AfterHeroCTA() {
  return (
    <section className="bg-[#0D1A34] px-[120px] py-14 tablet:px-5 tablet:py-10">
      <div className="mx-auto max-w-5xl text-center">
        {/* <p className="monte text-[11px] font-semibold tracking-[0.25em] uppercase text-gold">
          EXPERT SKINCARE FOR EVERY SKIN TONE
        </p> */}

        <h3 className="mt-5 playfair text-4xl font-semibold text-white tablet:text-3xl">
          {'You don’t have to go through what I went through.'}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/75 tablet:text-sm">
          Whether you're looking for expert advice or you're ready to begin
          treatment, we're here to help you choose the right path for your skin.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/consultation"
            className="rounded-md bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#0D1A34] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          >
            Book a Consultation
          </Link>

          <Link
            href="/treatments"
            className="rounded-md border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-white/5"
          >
            View Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}