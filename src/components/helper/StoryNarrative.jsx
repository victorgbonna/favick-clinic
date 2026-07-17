import Image from "next/image";
import { ImageContainer } from "..";

const missionValues = [
  {
    title: "Personalised Care",
    description:
      "Every treatment is tailored to your skin, your concerns and your goals because no two skin journeys are the same.",
  },
  {
    title: "Expert-Led Treatments",
    description:
      "Combining advanced skincare knowledge with specialist expertise in melanin-rich skin to deliver safe, effective results.",
  },
  {
    title: "Confidence Starts Here",
    description:
      "We're here to support you with honest guidance, thoughtful care and treatments that help you feel your best.",
  },
];

export default function StoryNarrative() {
    // const newLocal = <p className="mt-8 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
    //     Welcome to Favick Skin Clinic, where healthy, radiant skin begins with
    //     personalised care. Whether you're looking to address acne,
    //     pigmentation, signs of ageing or simply invest in your skin's health,
    //     we're here to guide you with expert treatments tailored to your unique
    //     needs.
    //     <br />
    //     <br />
    //     With specialist expertise in melanin-rich skin and a warm, welcoming
    //     approach for every skin tone, our goal is simple—to help you achieve
    //     healthy, confident skin through thoughtful care and treatments that
    //     truly put you first.
    // </p>;
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-12 items-center gap-8 px-[80px] py-24 tablet:grid-cols-1 tablet:px-5 tablet:mt-14 mt-10">
      <aside className="col-span-5 tablet:col-span-1">
        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          Welcome to Favick Skin Clinic
        </p>

        <h1 className="mt-4 playfair text-5xl font-bold leading-[1.08] text-[#0d1b34] tablet:text-4xl">
          Expert Skincare
          <br />
          <span className="font-medium italic">
            For Every Skin Tone
          </span>
        </h1>

        <blockquote className="mt-10 border-l border-gold/50 pl-7 tablet:pl-3 playfair text-2xl italic leading-snug text-[#775a19] tablet:mt-7 tablet:text-xl">
          {
            '"We believe everyone deserves to feel confident in their own skin."'
          }
        </blockquote>

        {/* {newLocal} */}
      </aside>

      <div className="col-span-7 space-y-12 tablet:col-span-1 justify-self-end">
        <article className="relative  w-fit rounded-2xl border border-[#e8e4da] shadow-[0_30px_90px_-40px_rgba(13,27,52,0.35)]">
          <div className="group relative overflow-hidden rounded-xl w-[500px] tablet:w-[350px]">
            <ImageContainer
              src="/images/models.png"
              alt="Favick Skin Clinic"
            //   width={400}
            //   height={450}
              className="h-[450px] tablet:h-[350px] w-full object-cover object-top shadow-lg transition duration-700 group-hover:scale-[1.03]"
            />
 {/* <div className=" hero-image-container w-full h-full">
      <ImageContainer
        className=" h-full w-full rounded-sm overflow-hidden"
        src="/images/faithaminaho.jpg"
        imgClass="hero-image shadow-lg rounded-none!"
      />
    </div> */}
            <div className="absolute bottom-4 left-4 max-w-xs border border-white/20 bg-[#0d1b34]/85 p-5 text-white">
              <p className="monte text-[10px] uppercase tracking-[0.2em] text-gold">
                Our Promise
              </p>

              <p className="mt-2 text-[13px] leading-6 text-white/90 ">
                Personalised treatments, honest advice and expert care designed
                around your skin.
              </p>
            </div>
          </div>
        </article>

        {/* <div className="grid gap-6 tablet:gap-4 md:grid-cols-3">
          {missionValues.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[#e8e4da] bg-[#fbf9f5] p-5"
            >
              <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-on-surface-variant tablet:text-[13px] tablet:leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}