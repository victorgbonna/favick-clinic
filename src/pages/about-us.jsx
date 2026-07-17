import Image from "next/image";
import Link from "next/link";

import {
  Accolades,
  AfterHeroSection,
  HeroSection,
  StoryNarrative,
  Testimonials,
} from "@/components";
import { PAGE_ROUTES } from "@/configs";

const missionValues = [
  {
    title: "Putting Your Skin First",
    description:
      "Every treatment starts with listening to your concerns and understanding your skin before recommending anything.",
  },
  {
    title: "Expert Care for Melanin-Rich Skin",
    description:
      "Every skin is different, so I take the time to choose treatments that are safe, effective and suitable for you.",
  },
  {
    title: "Honest Advice, Always",
    description:
      "I'll always be honest about what your skin needs, how long results may take and what to expect along the way.",
  },
];

// function StoryNarrative() {
//   return (
//     <section className="mx-auto grid max-w-[1280px] grid-cols-12 items-start gap-8 px-[80px] py-24 tablet:grid-cols-1 tablet:px-5 tablet:py-14">
//       <aside className="col-span-5 tablet:col-span-1 lg:sticky lg:top-[130px]">
//         <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Journey of Faith Aminaho</p>
//         <h2 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
//           From Personal
//           <br />
//           <span className="font-medium italic">Challenge to Purpose</span>
//         </h2>

//         <blockquote className="mt-10 border-l border-gold/50 pl-7 playfair text-2xl italic leading-snug text-[#775a19] tablet:mt-7 tablet:text-xl">
//           {"'I wanted to create the kind of clinic I needed when I was trying to understand my own skin.'"}
//         </blockquote>

//         <p className="mt-8 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
//           {"Faith's experience with hormonal changes, postpartum pigmentation and persistent breakouts reshaped her relationship with skin. Instead of accepting confusion, she studied advanced aesthetics to give clients what she once searched for: confidence built on expertise."}
//         </p>
//       </aside>

//       <div className="col-span-7 space-y-12 tablet:col-span-1">
//         <article className="relative overflow-hidden rounded-2xl border border-[#e8e4da] shadow-[0_30px_90px_-40px_rgba(13,27,52,0.35)]">
//           <div className="group relative overflow-hidden rounded-xl">
//             <Image
//               src="/images/models.png"
//               alt="Model's image"
//               width={1200}
//               height={1400}
//               className="h-[560px] shadow-lg w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] tablet:h-[400px]"
//             />
//             <div className="absolute bottom-4 left-4 max-w-xs border border-white/20 bg-[#0d1b34]/85 p-5 text-white backdrop-blur-sm">
//               <p className="monte text-[10px] uppercase tracking-[0.2em] text-gold">The Beginning</p>
//               <p className="mt-2 text-[13px] leading-6 text-white/90">A personal need for better answers became the foundation of a clinic built on trust.</p>
//             </div>
//           </div>
//         </article>

//         <div className="grid gap-6 tablet:gap-4 md:grid-cols-3">
//           {missionValues.map((item) => (
//             <article key={item.title} className="rounded-xl border border-[#e8e4da] bg-[#fbf9f5] p-5">
//               <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">{item.title}</h3>
//               <p className="mt-3 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">{item.description}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function LifestyleGallery() {
  return (
    <section className="mx-auto max-w-[1280px] px-[80px] py-24 tablet:px-5 tablet:py-14">
      <div className="text-center">
        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Environment</p>
        <h2 className="mt-4 playfair text-5xl font-bold italic text-[#0d1b34] tablet:text-4xl">A Sanctuary of Science</h2>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-6">
        <div className="group relative col-span-12 overflow-hidden rounded-2xl border border-[#e8e4da] lg:col-span-7">
          <Image
            src="/images/treatments/facials.png"
            alt="Treatment suite"
            width={1200}
            height={1000}
            className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105 tablet:h-[320px]"
          />
        </div>

        <div className="col-span-12 grid gap-6 lg:col-span-5 lg:grid-rows-2">
          <div className="group relative overflow-hidden rounded-2xl border border-[#e8e4da]">
            <Image
              src="/images/treatments/skin-rejuvenation.jpg"
              alt="Reception style moment"
              width={1000}
              height={700}
              className="h-[267px] w-full object-cover transition duration-700 group-hover:scale-105 tablet:h-[250px]"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-[#e8e4da]">
            <Image
              src="/images/treatments/anti-wrinkle.jpg"
              alt="Clinical detail"
              width={1000}
              height={700}
              className="h-[267px] w-full object-cover transition duration-700 group-hover:scale-105 tablet:h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCta({
  title,
  copy,
  actionLabel,
  href,
  external = false,
  dark = false,
}) {
  const baseClass = dark
    ? "bg-[#0D1B34] border-[#0d2246]"
    : "bg-transparent border-[#ddd4c3]";
  const titleClass = dark ? "text-white" : "text-[#0d1b34]";
  const copyClass = dark ? "text-white/85" : "text-on-surface-variant";

  return (
    <section className="px-6 py-6 tablet:px-4 md:px-12 lg:px-20">
      <div className={`mx-auto max-w-7xl rounded-2xl border px-7 py-8 tablet:px-5 ${baseClass}`}>
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className={`playfair text-4xl font-bold leading-[1.08] tablet:text-3xl ${titleClass}`}>{title}</h3>
            <p className={`mt-2 text-sm leading-7 tablet:text-[13px] tablet:leading-6 ${copyClass}`}>{copy}</p>
          </div>

          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-gold px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a1f45] transition hover:bg-[#e0be55]"
            >
              {actionLabel}
            </a>
          ) : (
            <Link
              href={href}
              className="inline-flex items-center justify-center bg-gold px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a1f45] transition hover:bg-[#e0be55]"
            >
              {actionLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AboutUPage() {
  return (
    <div className="bg-surface">
      {/* <EditorialHero />
      <MeetFaith /> */}
      <HeroSection/>
      <AfterHeroSection/>
      <Accolades />
      {/* <StoryNarrative /> */}
      <SectionCta
        title="Find the Right Treatment for You"
        copy="Discover thoughtful treatment options tailored to your skin, your concerns and your goals."
        actionLabel="View Our Treatments"
        href="/#studio"
      />

      <Testimonials
        sectionLabel="Kind Words From Our Clients"
        heading="Real Stories. Real Confidence."
        description="Real stories from clients who chose a thoughtful, tailored approach and saw meaningful progress in their skin confidence."
      />
      <SectionCta
        dark
        title="Let's Talk About Your Skin"
        copy="I'd love to meet you and create a treatment plan that feels right for your skin, goals and timeline."
        actionLabel="Book a Consultation"
        href={PAGE_ROUTES.CONTACT}
      />
      <SectionCta
        title="Prefer to Speak First?"
        copy="Send us a quick message and we will guide you on the best next step for your skin."
        actionLabel="Chat With Us"
        href={PAGE_ROUTES.CONTACT_LINK.WHATSAPP_LINK}
        external
      />
    </div>
  );
}
