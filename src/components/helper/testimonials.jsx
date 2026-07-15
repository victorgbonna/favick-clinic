"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Amina B.",
    role: "Postpartum Client",
    rating: 5,
    review:
      "I came in with postpartum pigmentation and low confidence. The treatment plan was clear, gentle, and realistic. My skin is brighter, calmer, and finally feels like mine again.",
  },
  {
    name: "Chioma E.",
    role: "Melanin Glow Client",
    rating: 5,
    review:
      "For the first time, I felt fully understood as a melanin-rich skin client. Every step was tailored, and my dark marks faded without irritation. The results look natural and healthy.",
  },
  {
    name: "Grace N.",
    role: "Acne Recovery Client",
    rating: 5,
    review:
      "My breakouts and texture improved within weeks of following the plan. The support, aftercare advice, and consistency made all the difference. I now leave the house makeup-free.",
  },
  {
    name: "Ruth K.",
    role: "HydroGlow Client",
    rating: 5,
    review:
      "HydroGlow gave me that fresh, polished look before my event. My skin looked smooth and hydrated in photos, and people kept asking what I used.",
  },
  {
    name: "Sarah O.",
    role: "Virtual Consultation Client",
    rating: 5,
    review:
      "Even from outside Aberdeen, I got detailed guidance that actually worked. The routine audit saved me from wasting money and helped me build products around my real skin needs.",
  },
  {
    name: "Nkechi A.",
    role: "Microneedling Client",
    rating: 5,
    review:
      "My acne scars and uneven texture softened significantly after my sessions. The process was professional and reassuring from consultation to aftercare.",
  },
];

export default function Testimonials({
  sectionLabel = "Testimonials",
  heading = "Skin stories, told honestly",
  description = "Read their full treatment experience, from interest to visible results.",
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={`py-16 px-10 tablet:px-4 ${className}`}>
      <div className=" rounded-3xl border border-[#d8e2f1] bg-white p-10 tablet:px-4">
        <div className="grid gap-8 gap-x-[4%] grid-cols-[40%_56%] tablet:grid-cols-1">
          <article className="order-2 relative overflow-hidden rounded-2xl bg-[#0D1B34] p-7 text-white md:p-9">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#113a85]/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#0b2d6c]/40 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-md bg-gold px-3 py-1 monte text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0b204a]">
                Client Journal {activeIndex + 1}/{testimonials.length}
              </p>

              <p className="mt-5 text-[#f2c956]">{"★".repeat(activeTestimonial.rating)}</p>

              <p className="mt-4 playfair text-lg italic leading-relaxed text-[#f2f6ff]">
                "{activeTestimonial.review}"
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
                <div>
                  <p className="monte text-base font-semibold">{activeTestimonial.name}</p>
                  <p className="text-sm text-[#b4c5e8]">{activeTestimonial.role}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
                    aria-label="Previous testimonial"
                  >
                    <img style={{transform:'rotate(180deg)', filter:'grayscale(100%)'}} src="/svg/arrow-f-white.svg" alt="next" className="w-8 h-8"/>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
                    aria-label="Next testimonial"
                  >
                    <img src="/svg/arrow-f-white.svg" alt="next" className="w-8 h-8"/>

                  </button>
                </div>
              </div>
            </div>
          </article>

          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-[#dce5f3] px-4 py-2 monte text-[10px] font-semibold uppercase tracking-[0.24em] text-[#173f89]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {sectionLabel}
            </p>

            <h3 className="mt-5 playfair text-4xl font-bold leading-tight ">
              {heading}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-800">
                {description}
            </p>

            {/* <div className="mt-6 space-y-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    index === activeIndex
                      ? "border-[#173f89] bg-[#eff4fb]"
                      : "border-[#dfe7f4] bg-white hover:border-[#b8c9e6]"
                  }`}
                >
                  <p className="monte text-sm font-semibold text-[#173f89]">{item.name}</p>
                  <p className="text-xs text-[#607ca7]">{item.role}</p>
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
