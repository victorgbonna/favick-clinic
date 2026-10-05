import Image from "next/image";
import Link from "next/link";

import { Accolades, Testimonials } from "@/components";
import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";

const missionValues = [
  {
    title: "Clinical Integrity",
    description:
      "Every plan begins with proper assessment, skin history and long-term barrier health. We do not chase quick fixes.",
  },
  {
    title: "Melanin Expertise",
    description:
      "Protocols are tailored for melanin-rich skin with care around pigmentation triggers, downtime and safe progression.",
  },
  {
    title: "Honest Guidance",
    description:
      "Clients receive clear expectations, realistic timelines and support that protects both confidence and outcomes.",
  },
];

const socialLinks = [
  { icon: "/svg/socials/insta.svg", href: API_ENDPOINTS.PERSONAL_SOCIALS[0].href, label: "Instagram" },
  { icon: "/svg/socials/linkedin.svg", href: API_ENDPOINTS.PERSONAL_SOCIALS[1].href, label: "LinkedIn" },
  { icon: "/svg/socials/youtube.svg", href: API_ENDPOINTS.PERSONAL_SOCIALS[2].href, label: "YouTube" },
];

function EditorialHero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-transparent px-[80px] pt-28 pb-20 tablet:px-5 tablet:pt-24 tablet:pb-14">
      {/* <div className="absolute inset-0">
        <Image
          src="/images/hero-favik2.jpg"
          alt="Favick Skin Clinic interior style hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b34]/75 via-[#0d1b34]/40 to-[#0d1b34]/10" />
      </div> */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] justify-center">
        <div className="max-w-3xl border border-white/20 bg-[#f8f8f6]/78 p-10 text-center backdrop-blur-sm md:p-14 tablet:p-6">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
            Favick Skin Clinic
          </p>

          <h1 className="mt-5 playfair text-6xl font-bold leading-[1.03] text-[#0d1b34] tablet:text-4xl">
            My Story
            <br />
            <span className="font-medium italic">
              Rooted in Experience
            </span>
          </h1>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#0d1b34]/90 tablet:text-[13px] tablet:leading-6">
            I built Favick Skin Clinic from my own skin journey through acne, melasma and
            hyperpigmentation. What started as a search for clarity became a place
            where women receive structured and clinically responsible
            care.
          </p>
        </div>
      </div>
    </section>
  );
}

function StoryNarrative() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-12 items-start gap-8 px-[80px] py-24 tablet:grid-cols-1 tablet:px-5 tablet:py-14">
      <aside className="col-span-5 tablet:col-span-1 lg:sticky lg:top-[130px]">
        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Journey of Faith Aminaho</p>
        <h2 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
          From Personal
          <br />
          <span className="font-medium italic">Challenge to Purpose</span>
        </h2>

        <blockquote className="mt-10 border-l border-gold/50 pl-7 playfair text-2xl italic leading-snug text-[#775a19] tablet:mt-7 tablet:text-xl">
          {"'I wanted to create the kind of clinic I needed when I was trying to understand my own skin — so I did.'"}
        </blockquote>

        <p className="mt-8 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
          {"My experience with hormonal changes, postpartum pigmentation and persistent breakouts reshaped my relationship with skin. Instead of accepting confusion, I studied advanced aesthetics to give clients what I once searched for: confidence built on expertise."}
        </p>
      </aside>

      <div className="col-span-7 space-y-12 tablet:col-span-1">
        <article className="relative overflow-hidden rounded-2xl border border-[#e8e4da] shadow-[0_30px_90px_-40px_rgba(13,27,52,0.35)]">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/images/models.png"
              alt="Model's image"
              width={1200}
              height={1400}
              className="h-[560px] shadow-lg w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] tablet:h-[400px]"
            />
            <div className="absolute bottom-4 left-4 max-w-xs border border-white/20 bg-[#0d1b34]/85 p-5 text-white backdrop-blur-sm">
              <p className="monte text-[10px] uppercase tracking-[0.2em] text-gold">The Beginning</p>
              <p className="mt-2 text-[13px] leading-6 text-white/90">My personal need for better answers became the foundation of a clinic built on trust.</p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 tablet:gap-4 md:grid-cols-3">
          {missionValues.map((item) => (
            <article key={item.title} className="rounded-xl border border-[#e8e4da] bg-[#fbf9f5] p-5">
              <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetFaith() {
  return (
    <section className="bg-surface-container-low py-24 tablet:py-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 items-center gap-8 px-[80px] tablet:grid-cols-1 tablet:px-5">
        <div className="relative col-span-6 tablet:col-span-6 overflow-hidden rounded-2xl border border-[#d7d2c7]">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/images/faithaminaho.jpg"
              alt="Portrait placeholder for Faith Aminaho"
              width={1000}
              height={1200}
              className="h-[640px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02] tablet:h-[420px]"
            />
          </div>
          <div className="absolute right-6 top-6 hidden border border-[#d8cfbf] bg-[#f8f5ef] p-5 md:block">
            <p className="monte text-[10px] uppercase tracking-[0.2em] text-gold">Credentials</p>
            <ul className="mt-2 space-y-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0d1b34]">
              <li>NHS Practice</li>
              <li>Advanced Aesthetics</li>
              <li>Pigmentation Focus</li>
            </ul>
          </div>
        </div>

        <div className="col-span-5 col-start-8 tablet:col-start-1 w-full tablet:col-span-6">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">About Me</p>
          <h2 className="mt-4 playfair text-6xl font-bold leading-[1.04] text-[#0d1b34] tablet:text-4xl">
            Faith Aminaho
          </h2>
          <div className="mt-6 tablet:mt-0 h-px w-24 tablet:w-fit bg-gradient-to-r from-transparent via-[#775a19] to-transparent" />
          <p className="mt-7 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
            With an NHS background and specialist aesthetics training, I combine clinical discipline with gentle, person-centered care. My philosophy prioritizes skin function, thoughtful treatment pacing and outcomes that look natural in real life.
          </p>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
            I am especially trusted by clients with melanin-rich skin who want a professional, safe and elevated treatment experience.
          </p>

          <div className="mt-6">
            <p className="monte text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Connect With Me</p>
            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#d6cfbf] bg-white transition hover:-translate-y-0.5 hover:border-gold"
                >
                  <img src={item.icon} alt={item.label} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

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
      <EditorialHero />
      <MeetFaith />
      <Accolades />
      <StoryNarrative />
      <SectionCta
        title="Explore Treatments Curated for Your Skin"
        copy="Discover treatment pathways designed for real skin outcomes, not one-size-fits-all routines."
        actionLabel="View Our Treatments"
        href="/#studio"
      />

      <Testimonials
        sectionLabel="Kind Words From Our Clients"
        heading="What Our Clients Say"
        description="Real stories from clients who chose a thoughtful, tailored approach and saw meaningful progress in their skin confidence."
      />
      <SectionCta
        dark
        title="Ready for Your Consultation?"
        copy="Book your session and get a treatment plan tailored to your skin goals, concerns and timeline."
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
