import Link from "next/link";
import Image from "next/image";
export default function JourneyCta() {
  return (
    <section className="px-6 pb-20 pt-8 tablet:px-4 tablet:pb-14 tablet:pt-6 md:px-12 lg:px-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-sm border border-[#0d2246] bg-[#0D1B34] px-8 py-14 tablet:px-5 tablet:py-10 md:px-14 md:py-16">
        <div className="tablet:hidden pointer-events-none absolute -bottom-14 left-[10%] z-0 hidden md:block">
          <Image
            src="/images/model-journey-t.png"
            alt="Journey Cta"
            width={420}
            height={420}
            className="h-[500px] w-[500px] tablet:hidden object-contain opacity-25"
          />
        </div>

        <div className="tablet:hidden pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center md:hidden">
          <Image
            src="/images/model-journey-t.png"
            alt="Journey Cta"
            width={280}
            height={280}
            className="h-[240px] w-[240px] object-contain opacity-22"
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[46%] bg-gradient-to-l from-[#0D1B34]/20 via-[#0D1B34]/60 to-[#0D1B34] md:block" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[28%] border-l border-[#132d5c] md:block" />

        <div className="relative z-10 grid items-center gap-8 grid-cols-[1fr_auto] tablet:grid-cols-1 tablet:gap-6">
          <div>
                <h3 className="playfair font-bold leading-tight text-white text-6xl tablet:text-4xl tablet:text-center">
                The transformation
                <br />
                <span className="font-medium italic">begins with you.</span>
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 tablet:mx-auto tablet:max-w-md tablet:text-center tablet:text-[13px] tablet:leading-6">
                Join our private client list for a tailored skincare consultation and a treatment pathway built around your exact skin goals.
                </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex w-fit items-center justify-center bg-gold px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a1f45] transition hover:bg-[#e0be55] tablet:mx-auto"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
