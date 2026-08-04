import PageMeta from "@/components/helper/PageMeta";

export default function RefundPolicyPage() {
  return (
    <main className="mt-14 bg-surface tablet:mt-10">
      <PageMeta
        title="Refund, Cancellation and Rescheduling Policy"
        description="Read Favick Skin Clinic's cancellation, rescheduling, deposit, refund, treatment course and membership programme policies."
        path="/refund-policy"
        ogTitle="Favick Skin Clinic Refund and Cancellation Policy"
        ogDescription="Review booking terms for cancellations, rescheduling, deposits, refunds, courses and skincare membership programmes."
      />
      <header className="bg-[#f8f8f6] px-6 py-20 text-center md:px-12">
        <p className="monte text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Favick Skin Clinic</p>
        <h1 className="mt-4 playfair text-5xl font-bold text-[#0d1b34] tablet:text-4xl">Refund, Cancellation &amp; Rescheduling Policy</h1>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 text-stone-700 md:px-10">
        <section className="border-b border-[#ece8df] pb-10">
          <h2 className="playfair text-3xl font-semibold text-[#0d1b34]">Cancellations &amp; Rescheduling</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7">
            <li>Clients may cancel or reschedule free of charge with at least 48 hours&apos; notice.</li>
            <li>Cancellations or reschedules within 48 hours of the appointment may be subject to a charge of 50% of the treatment price.</li>
            <li>No-shows will be charged the full treatment price.</li>
          </ul>
        </section>

        <section className="border-b border-[#ece8df] py-10">
          <h2 className="playfair text-3xl font-semibold text-[#0d1b34]">Deposits</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7">
            <li>A deposit may be required to secure advanced treatment bookings (chemical peels, microneedling, mesotherapy), deducted from the final treatment cost.</li>
            <li>Deposits are non-refundable in the case of late cancellation or no-show, as outlined above.</li>
          </ul>
        </section>

        <section className="border-b border-[#ece8df] py-10">
          <h2 className="playfair text-3xl font-semibold text-[#0d1b34]">Refunds</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7">
            <li>Refunds are not offered for treatments already carried out, as results vary by individual and treatments are delivered as described.</li>
            <li>If a client is unhappy with a treatment, please contact us within 48 hours so we can discuss next steps, including a possible complimentary follow-up or adjustment where appropriate.</li>
            <li>Course/package bookings (e.g. Course of 3) are non-refundable once the first session has taken place, but remaining sessions may be rescheduled with appropriate notice.</li>
          </ul>
        </section>

        <section className="pt-10">
          <h2 className="playfair text-3xl font-semibold text-[#0d1b34]">Membership Programme</h2>
          <p className="mt-5 text-sm leading-7">The Favick Skin Membership is billed upfront for the full term selected (3/6/12 months). Refunds are not offered once the programme has started, but reasonable pauses may be accommodated for genuine circumstances at Favick Skin Clinic&apos;s discretion.</p>
        </section>
      </article>
    </main>
  );
}
