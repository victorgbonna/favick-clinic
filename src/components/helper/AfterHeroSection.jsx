import { PAGE_ROUTES } from "@/configs";

import { API_ENDPOINTS } from "@/configs";

const small_text=' text-gold monte uppercase text-[11px] font-semibold tracking-[0.25em] '


export default function AfterHeroSection() {
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
        {`What began as frustration soon became a purpose. I immersed myself in learning about skin health, the science behind common skin concerns and trained professionally in facials, chemical peels, microneedling and mesotherapy. My qualifications include a Diploma in Professional Facials, a diploma in Chemical Peel, Microneedling and Mesotherapy, and a Level 2 Award in Awareness of Skin of Colour Qualification.`}
        <br /><br />
        {`Today, I combine my experience working within the NHS with advanced aesthetics training to provide safe, thoughtful skincare that puts your needs first. I also graduated from Robert Gordon University with First Class Honours in Business Management, which shapes the structure, professionalism and client experience behind Favick Skin Clinic. Every treatment is carefully chosen because I believe healthy, confident skin starts with understanding it properly.`}
        <br /><br />
        {`While treating melanin-rich skin is a particular passion of mine, Favick welcomes every skin tone. My goal is simple - to help every client feel confident in their own skin.`}
      </p>

        <hr className="border-[#d4af3764] mt-4 tablet:mt-5" />

        
      </div>
    </main>
  );
}


// const socialLinks = [
//   { icon: "/svg/socials/insta.svg", href: API_ENDPOINTS.BUSINESS_SOCIALS[0].href, label: "Instagram" },
//   { icon: "/svg/socials/facebook.svg", href: API_ENDPOINTS.BUSINESS_SOCIALS[1].href, label: "Facebook" },
//   { icon: "/svg/socials/tiktok.svg", href: API_ENDPOINTS.BUSINESS_SOCIALS[2].href, label: "TikTok" },
// ];

// export default function AfterHeroSection() {
//   return (
//     <section className="bg-surface-container-low py-24 tablet:py-14">
//       <div className="mx-auto grid max-w-[1280px] grid-cols-12 items-center gap-8 px-[80px] tablet:grid-cols-1 tablet:px-5">
//         <div className="relative col-span-6 tablet:col-span-6 overflow-hidden rounded-2xl border border-[#d7d2c7]">
//           <div className="group relative overflow-hidden rounded-xl">
//             <Image
//               src="/images/faithaminaho.jpg"
//               alt="Portrait placeholder for Faith Aminaho"
//               width={1000}
//               height={1200}
//               className="h-[640px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02] tablet:h-[420px]"
//             />
//           </div>
//           <div className="absolute right-6 top-6 hidden border border-[#d8cfbf] bg-[#f8f5ef] p-5 md:block">
//             <p className="monte text-[10px] uppercase tracking-[0.2em] text-gold">Credentials</p>
//             <ul className="mt-2 space-y-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0d1b34]">
//               <li>NHS Practice</li>
//               <li>Advanced Aesthetics</li>
//               <li>Pigmentation Focus</li>
//             </ul>
//           </div>
//         </div>

//         <div className="col-span-5 col-start-8 tablet:col-start-1 w-full tablet:col-span-6">
//           <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Meet Our Founder</p>
//           <h2 className="mt-4 playfair text-6xl font-bold leading-[1.04] text-[#0d1b34] tablet:text-4xl">
//             Faith Aminaho
//           </h2>
//           <div className="mt-6 tablet:mt-0 h-px w-24 tablet:w-fit bg-gradient-to-r from-transparent via-[#775a19] to-transparent" />
//           <p className="mt-7 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
//             With an NHS background and specialist aesthetics training, Faith combines clinical discipline with gentle, person-centered care. Her philosophy prioritizes skin function, thoughtful treatment pacing and outcomes that look natural in real life.
//           </p>
//           <p className="mt-5 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
//             She is especially trusted by clients with melanin-rich skin who want a professional, safe and elevated treatment experience.
//           </p>

//           <div className="mt-6">
//             <p className="monte text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Connect With Faith</p>
//             <div className="mt-3 flex items-center gap-3">
//               {socialLinks.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={item.label}
//                   className="grid h-10 w-10 place-items-center rounded-full border border-[#d6cfbf] bg-white transition hover:-translate-y-0.5 hover:border-gold"
//                 >
//                   <img src={item.icon} alt={item.label} className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
