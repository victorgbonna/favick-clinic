import Image from "next/image";
import Link from "next/link";

import { Services } from "@/components";
import { PAGE_ROUTES } from "@/configs";

export default function TreatmentsPage() {
  return (
    <div className="bg-surface">
      {/* Editorial Hero */}
      <header className="py-24 px-[80px] tablet:px-5 text-center bg-[#f8f8f6]">
        <p className="monte text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Tailored Excellence</p>
        <h1 className="mt-4 playfair text-5xl font-bold text-[#0d1b34] tablet:text-4xl">Treatment & Investment</h1>
        <p className="mt-6 max-w-3xl mx-auto text-sm leading-7 text-on-surface-variant">
          Every treatment is crafted with clinical rigour and an editorial eye — designed for results that feel natural, dignified and reliably effective.
        </p>
      </header>

      {/* Sticky Category Nav */}
      <nav className="sticky top-[88px] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 py-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-8 px-6 tablet:px-4">
          <a href="#studio" className="monte uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">All Services</a>
          <a href="#consultations" className="monte uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">Consultations</a>
          <a href="/#contact" className="monte uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">Contact</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-16 tablet:px-4">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-4 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-[#e8e4da]">
            <Image
              src="/images/treatments/skin-rejuvenation.jpg"
              alt="Treatment suite"
              width={800}
              height={1000}
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div className="p-6 border border-outline-variant/10 bg-surface-container-low rounded-xl">
            <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">Patient Care</h3>
            <p className="mt-3 text-sm text-on-surface-variant">Our clinical approach prioritises safety and subtle enhancement. Every treatment includes a follow-up to ensure recovery and results.</p>
          </div>
        </aside>

        {/* Services content */}
        <section className="lg:col-span-8">
          <Services />

          {/* Consultation ribbon */}
          <section id="consultations" className="mt-12 rounded-2xl border border-[#0d2246] bg-[#0D1B34] p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6">
              <div>
                <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">The Starting Point</p>
                <h3 className="mt-3 playfair text-3xl font-bold">Bespoke Consultation</h3>
                <p className="mt-2 text-sm text-white/85">Begin with a careful assessment and a treatment pathway tailored to your skin and goals.</p>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <div className="text-right">
                  <p className="text-2xl font-semibold">£50</p>
                  <p className="text-xs text-white/70">Redeemable against treatments</p>
                </div>

                <Link href={PAGE_ROUTES.CONTACT} className="inline-flex items-center justify-center bg-gold px-6 py-3 monte text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a1f45]">
                  Secure Consultation
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
