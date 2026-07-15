import Image from "next/image";
import Link from "next/link";

import { Accolades, Testimonials } from "@/components";
import { PAGE_ROUTES } from "@/configs";
import { useIntersectionObserver } from "@/hooks";

const founderHighlights = [
  "Senior NHS practitioner with a patient-first clinical approach",
  "Advanced training in chemical peels, microneedling and mesotherapy",
  "Special focus on acne, melasma and post-inflammatory hyperpigmentation",
  "Deep commitment to safe care for melanin-rich skin",
];

const missionValues = [
  {
    title: "Clinical Integrity",
    copy: "Every recommendation starts with skin health, not trends. Treatment plans are built around evidence, safety and consistency.",
  },
  {
    title: "Melanin Expertise",
    copy: "Care is designed with nuanced understanding of melanin-rich skin, including pigmentation triggers, barrier sensitivity and long-term resilience.",
  },
  {
    title: "Honest Partnership",
    copy: "Clients are guided with transparent expectations, realistic timelines and aftercare that supports lasting confidence.",
  },
];

function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useIntersectionObserver();
  return (
    <Tag ref={ref} className={`reveal-up ${className}`}>
      {children}
    </Tag>
  );
}

function StoryHero() {
  return (
    <section id="heritage" className="w-full bg-surface-container-low px-[120px] pt-32 pb-18 tablet:px-5 tablet:pt-24 tablet:pb-12">
      <div className="grid grid-cols-[52%_44%] items-end justify-between gap-8 tablet:grid-cols-1 tablet:gap-6">
        <Reveal>
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Founder Story</p>
          <h1 className="mt-4 playfair text-6xl font-bold leading-[1.05] text-[#0d1b34] tablet:text-4xl">
            About Favick
            <br />
            <span className="font-medium italic">A Story of Skin, Strength and Purpose</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-stone-700 tablet:mt-5 tablet:text-[13px] tablet:leading-6">
            Favick Skin Clinic was shaped by a deeply personal journey. What began as one woman's search for answers became a trusted destination for thoughtful, clinically-led care that honours the complexity and beauty of real skin.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-[#e7e2d7] bg-[#f4efe6] p-3">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/images/hero-favik1.jpg"
              alt="A refined clinical beauty portrait"
              width={700}
              height={860}
              className="h-[540px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] tablet:h-[420px]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1b34]/25 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="px-[120px] py-16 tablet:px-5 tablet:py-12">
      <div className="grid items-center gap-10 grid-cols-[48%_48%] justify-between tablet:grid-cols-1 tablet:gap-7">
        <Reveal>
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Our Story</p>
          <h2 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
            Born from Personal
            <br />
            <span className="font-medium italic">Skin Challenges</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">
            Faith Aminaho understands the emotional weight of skin concerns firsthand. Through seasons of acne, melasma and hyperpigmentation, she experienced the frustration of trial-and-error routines that ignored the unique needs of melanin-rich skin.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">
            Living with PCOS and navigating postpartum skin changes only deepened that reality. Instead of settling for uncertainty, she chose to study skin science deeply and build a pathway that others could trust.
          </p>
        </Reveal>

        <Reveal className="group overflow-hidden rounded-2xl border border-[#ece8df] bg-white p-3">
          <Image
            src="/images/treatments/chemical-peel.jpg"
            alt="Lifestyle image showing calm skincare moment"
            width={900}
            height={680}
            className="h-[420px] w-full rounded-xl object-cover transition duration-700 group-hover:scale-[1.03] tablet:h-[320px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function LifestyleBreak({ image, alt }) {
  return (
    <section className="px-[120px] py-6 tablet:px-5 tablet:py-3">
      <Reveal className="group overflow-hidden rounded-3xl border border-[#e9e5dd] p-3 bg-white/80">
        <Image
          src={image}
          alt={alt}
          width={1440}
          height={760}
          className="h-[420px] w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.02] tablet:h-[260px]"
        />
      </Reveal>
    </section>
  );
}

function BirthAndMission() {
  return (
    <section className="px-[120px] py-16 tablet:px-5 tablet:py-12">
      <div className="grid items-start gap-10 grid-cols-[48%_48%] justify-between tablet:grid-cols-1 tablet:gap-8">
        <Reveal className="order-2 tablet:order-1 group overflow-hidden rounded-2xl border border-[#ece8df] bg-white p-3">
          <Image
            src="/images/hero-favik2.jpg"
            alt="Founder-inspired beauty portrait"
            width={900}
            height={1100}
            className="h-[520px] w-full rounded-xl object-cover object-top transition duration-700 group-hover:scale-[1.03] tablet:h-[390px]"
          />
        </Reveal>

        <Reveal className="order-1 tablet:order-2">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Birth of Favick</p>
          <h2 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
            From Private Research
            <br />
            <span className="font-medium italic">to Public Impact</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">
            Favick Skin Clinic was founded to offer what Faith wished existed during her own journey: clear guidance, tailored treatment strategy and expert care without guesswork.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">
            Today, the clinic serves women who want visible improvement with dignity and professionalism, especially those navigating pigmentation, texture concerns and confidence after major life transitions.
          </p>

          <div className="mt-8 grid gap-4">
            {missionValues.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#e7e1d6] bg-[#fbf9f5] p-5">
                <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MeetFaith() {
  return (
    <section className="px-[120px] py-16 tablet:px-5 tablet:py-12">
      <div className="rounded-3xl border border-[#e4ddd0] bg-[#f8f4ec] p-8 md:p-10 tablet:p-5">
        <div className="grid items-center gap-9 grid-cols-[42%_54%] justify-between tablet:grid-cols-1">
          <Reveal className="group overflow-hidden rounded-2xl border border-white/60 bg-white p-3">
            <Image
              src="/images/hero-favik.jpg"
              alt="Portrait placeholder for Faith Aminaho"
              width={900}
              height={1100}
              className="h-[520px] w-full rounded-xl object-cover object-top transition duration-700 group-hover:scale-[1.03] tablet:h-[380px]"
            />
          </Reveal>

          <Reveal>
            <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Meet Faith Aminaho</p>
            <h2 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
              Clinical Precision,
              <br />
              <span className="font-medium italic">Human-Centred Care</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">
              Faith blends her NHS clinical discipline with modern aesthetics training to deliver a refined standard of care. Her philosophy is simple: healthy skin first, confidence second, and no promises that compromise integrity.
            </p>

            <div className="mt-7 grid gap-3">
              {founderHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-[#e8dfcf] bg-white px-4 py-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <p className="text-sm leading-7 text-stone-700 tablet:text-[13px] tablet:leading-6">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="px-6 pb-20 pt-10 tablet:px-4 tablet:pb-14 tablet:pt-8 md:px-12 lg:px-20">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#0d2246] bg-[#0D1B34] px-8 py-14 tablet:px-5 tablet:py-10 md:px-14 md:py-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#153a7f]/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-[#f0cd63]/15 blur-3xl" />

        <div className="relative z-10">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Start Your Journey</p>
          <h2 className="mt-4 playfair text-6xl font-bold leading-[1.06] text-white tablet:text-4xl">
            Your Skin Journey
            <br />
            <span className="font-medium italic">Starts Here</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 tablet:text-[13px] tablet:leading-6">
            Whether you are seeking clarity, treatment, or long-term skin confidence, your next step can be intentional. Begin with a consultation and let us build a plan around your skin, your lifestyle and your goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={PAGE_ROUTES.CONTACT}
              className="inline-flex items-center justify-center bg-gold px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a1f45] transition hover:bg-[#e0be55]"
            >
              Book a Consultation
            </Link>
            <Link
              href="/#studio"
              className="inline-flex items-center justify-center border border-white/30 bg-white/8 px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
            >
              View Our Treatments
            </Link>
            <a
              href={PAGE_ROUTES.CONTACT_LINK.WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#d3b554] bg-transparent px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f2d065] transition hover:bg-[#d3b554] hover:text-[#0a1f45]"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div>
      <StoryHero />
      <StorySection />
      <LifestyleBreak image="/images/treatments/facials.png" alt="Lifestyle image of premium treatment environment" />
      <BirthAndMission />
      <MeetFaith />
      <Accolades />
      <LifestyleBreak image="/images/treatments/skin-rejuvenation.jpg" alt="Lifestyle image reflecting visible skin confidence" />
      <Testimonials
        sectionLabel="Kind Words From Our Clients"
        heading="What Our Clients Say"
        description="Authentic reflections from women who trusted Favick with their skin and saw meaningful, confidence-restoring change."
      />
      <AboutCta />
    </div>
  );
}
