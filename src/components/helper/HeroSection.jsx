import { API_ENDPOINTS } from "@/configs";
import { ImageContainer } from "..";

export default function HeroSection() {
  return (
    <section className="tablet:mt-[120px] tablet:gap-y-10 justify-center relative w-full grid grid-cols-[40%_60%] overflow-hidden h-[90vh] mt-[130px] pb-10 items-center px-[120px] tablet:grid-cols-1 tablet:h-auto tablet:mt-14 tablet:px-6 tablet:pt-8 tablet:pb-10">
      {/* Texture Overlay */}
      <div className=" absolute inset-0 water-overlay pointer-events-none z-0 w-[300px] h-[300px] tablet:w-[180px] tablet:h-[180px]" />
      <div className="tablet:order-2 relative z-10 tablet:text-center">
        <p className=" mb-7 text-gold monte uppercase text-[10px] font-semibold tracking-[0.25em] tablet:mb-4 tablet:text-[9px] ">{'MEET OUR FOUNDER . THE STORY' ?? API_ENDPOINTS.BRAND_NAME_LONG+' . UNITED KINGDOM'} </p>

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

// export default function HeroSection() {
//   return (
//     <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-transparent px-[80px] pt-28 pb-20 tablet:px-5 tablet:pt-24 tablet:pb-14">
//       <div className="relative z-10 mx-auto flex w-full max-w-[1280px] justify-center">
//         <div className="max-w-3xl border border-white/20 bg-[#f8f8f6]/78 p-10 text-center backdrop-blur-sm md:p-14 tablet:p-6">
//           <p className="monte text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
//             Favick Skin Clinic
//           </p>

//           <h1 className="mt-5 playfair text-6xl font-bold leading-[1.03] text-[#0d1b34] tablet:text-4xl">
//             Our Story
//             <br />
//             <span className="font-medium italic">Rooted in Experience</span>
//           </h1>

//           <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

//           <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#0d1b34]/90 tablet:text-[13px] tablet:leading-6">
//             Favick was built from a personal skin journey through acne, melasma and
//             hyperpigmentation. What started as a search for clarity became a clinic
//             where women receive structured and clinically responsible care.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
