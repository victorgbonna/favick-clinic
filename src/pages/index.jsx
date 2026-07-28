import { ImageContainer, Services, Accolades, Testimonials, JourneyCta, StoryNarrative, ScrollReveal } from "@/components";
import OfficeGallery from "@/components/helper/OfficeGallery";
import PageMeta from "@/components/helper/PageMeta";
import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <PageMeta title="Expert Skincare for Every Skin Tone" description="Favick Skin Clinic offers personalised facials, chemical peels, microneedling, mesotherapy and expert skincare guidance in Aberdeen." />

      {/* <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
        {/* <HeroSection/>
        <AfterHeroSection/> */}
        <StoryNarrative/>
        {/* <OfficeGallery/> */}
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

function AfterHeroCTA() {
  return (
    <section className="bg-[#0D1A34] px-[120px] py-14 tablet:px-5 tablet:py-10">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal as="h3" variant="up" className="mt-5 playfair text-4xl font-semibold text-white tablet:text-3xl">
          Your Skin Deserves Expert Care.
        </ScrollReveal>

        <ScrollReveal as="p" variant="up" delay={100} className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/75 tablet:text-sm">
          Whether you're ready to begin your skincare journey or simply need
          expert advice, we're here to help you find the right treatment for
          your skin with personalised care every step of the way.
        </ScrollReveal>

        <ScrollReveal
          as="p"
          variant="up"
          delay={140}
          className="mx-auto mt-6 inline-flex rounded-md border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-gold"
        >
          20% off all treatments for our first 20 founding clients.
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ScrollReveal variant="scale" delay={180}><Link
            href={API_ENDPOINTS.BOOKING_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gold px-8 py-6 text-sm font-semibold uppercase tracking-wide text-[#0D1A34] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          >
            {/* <p className="py-4">Book a Consultation</p> */}
            Book a Consultation
          </Link></ScrollReveal>

          <ScrollReveal variant="scale" delay={260}><Link
            href="/treatments"
            className="rounded-md border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-white/5"
          >
            View Treatments
          </Link></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
