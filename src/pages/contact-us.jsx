import Link from "next/link";

import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";

const contactCards = [
//   {
//     title: "WhatsApp",
//     value: API_ENDPOINTS.CONTACT.PHONE,
//     href: API_ENDPOINTS.CONTACT.WHATSAPP_LINK,
//     external: true,
//   },
//   {
//     title: "Email",
//     value: API_ENDPOINTS.CONTACT.EMAIL,
//     href: `mailto:${API_ENDPOINTS.CONTACT.EMAIL}`,
//     external: true,
//   },
{
    title: "About Us",
    value: "Get to know about us",
    href: PAGE_ROUTES.ABOUT,
    external: false,
  },
  {
    title: "Treatments",
    value: "Explore the full treatment guide",
    href: PAGE_ROUTES.TREATMENTS,
    external: false,
  },
];

export default function ContactUsPage() {
  return (
    <div className="bg-surface pt-24 tablet:pt-20">
      <section className="bg-[#f8f8f6] px-6 py-20 text-center tablet:px-5 tablet:py-14 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <p className="monte text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</p>
          <h1 className="mt-4 playfair text-5xl font-bold text-[#0d1b34] tablet:text-4xl">Speak With Favick Skin Clinic</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-on-surface-variant">
            Whether you are ready to book, need guidance on the right treatment, or want support before committing,
            we are happy to help.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={API_ENDPOINTS.CONTACT.WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:scale-[1.02] hover:bg-[#20ba58]"
            >
              WhatsApp Us
            </Link>
            <Link
              href={`tel:${API_ENDPOINTS.CONTACT.PHONE.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-[#0d1b34] px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d1b34] transition hover:bg-[#0d1b34] hover:text-white"
            >
              Call the Clinic
            </Link>
            <Link
              href={`mailto:${API_ENDPOINTS.CONTACT.EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-[#d8d2c3] px-8 py-4 monte text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0d1b34] transition hover:border-[#0d1b34] hover:bg-[#0d1b34] hover:text-white"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 tablet:px-5 tablet:py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <article className="rounded-3xl border border-[#ece8df] bg-white p-8 shadow-sm tablet:p-6">
            <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Get in Touch</p>
            <h2 className="mt-3 playfair text-4xl font-bold text-[#0d1b34] tablet:text-3xl">Let us point you in the right direction</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              Message us on WhatsApp for quick guidance, availability, or help choosing the most suitable treatment for
              your skin concerns. If you prefer email, send over your question and we will respond as soon as possible.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contactCards.map((card) => {
                const content = (
                  <>
                    <p className="monte text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">{card.title}</p>
                    <p className="mt-3 text-sm leading-7 text-[#0d1b34]">{card.value}</p>
                  </>
                );

                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    className="rounded-2xl border border-[#ece8df] bg-[#fbfaf8] p-5 transition hover:border-[#0d1b34]"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </article>

          <aside className="rounded-3xl border border-[#ece8df] bg-[#0d1b34] p-8 text-white shadow-sm tablet:p-6">
            {/* <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Clinic Details</p> */}
            {/* <h2 className="mt-3 playfair text-4xl font-bold tablet:text-3xl">Quick contact details</h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/85">
              <p>
                Call: <Link href={API_ENDPOINTS.CONTACT.CALL_LINK} target="_blank" rel="noreferrer" className="text-white underline underline-offset-4">{API_ENDPOINTS.CONTACT.PHONE}</Link>
              </p>
              <p>
                Email: <Link href={`mailto:${API_ENDPOINTS.CONTACT.EMAIL}`} className="text-white underline underline-offset-4">{API_ENDPOINTS.CONTACT.EMAIL}</Link>
              </p>
              <p>Opening hours: Monday-Friday, 9:30am-5:00pm (By appointments only)</p>
            </div> */}

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="monte text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Best First Step</p>
              <p className="mt-3 text-sm leading-7 text-white/85">
                If you are unsure which treatment to choose, start with a consultation or send a WhatsApp message with
                your main skin concern and we will guide you from there.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}