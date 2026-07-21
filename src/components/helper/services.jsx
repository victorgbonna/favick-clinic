"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const PREVIEW_LIMIT = 4;

function extractPriceValues(priceText) {
  const matches = String(priceText).match(/\d+(?:\.\d+)?/g);
  if (!matches) return [];
  return matches.map((value) => Number(value));
}

function formatPriceWithSymbol(priceText) {
  const source = String(priceText).trim();
  const values = extractPriceValues(source);
  if (!values.length) return source;

  const first = values[0];
  if (/^from/i.test(source)) return `from \u00A3${first}`;
  return `\u00A3${first}`;
}

function getCategoryPriceRange(category) {
  const allPrices = category.treatments.flatMap((treatment) => extractPriceValues(treatment.price));
  if (!allPrices.length) return "-";

  const min = Math.min(...allPrices);
  const max = Math.max(...allPrices);
  return `\u00A3${min} - \u00A3${max}`;
}

function ProductCard({ treatment }) {
  return (
    <article className="rounded-2xl border border-[#efefef] bg-[#fcfcfc] p-5">
      <h4 className="playfair text-2xl font-semibold text-[#0d1b34]">{treatment.name}</h4>
      <p className="mt-2 monte text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {treatment.duration}  |  {formatPriceWithSymbol(treatment.price)}
      </p>
      <p className="mt-3 text-sm leading-7 text-stone-700">{treatment.description}</p>
      <button
        type="button"
        className="mt-5 monte text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34] underline underline-offset-4"
      >
        Book Me Now
      </button>
    </article>
  );
}

function ConsultationCategory({ category }) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
      <div className="border-b border-[#ebebeb] pb-6">
        <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Consultation Services</p>
        <h3 className="mt-2 playfair text-3xl font-bold text-[#0d1b34]">{category.name}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-700">{category.intro}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {category.treatments.map((treatment) => (
          <ProductCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  const servicesData = API_ENDPOINTS.SERVICES;
  const coreCategories = servicesData.CORE_CATEGORIES;
  const consultationCategories = servicesData.CONSULTATION_CATEGORIES;
  const comingSoon = servicesData.COMING_SOON;

  const [selectedCategoryId, setSelectedCategoryId] = useState(coreCategories[1]?.id || "");
  const [showAll, setShowAll] = useState(false);

  const selectedCategory = useMemo(
    () => coreCategories.find((item) => item.id === selectedCategoryId) || coreCategories[1],
    [coreCategories, selectedCategoryId],
  );

  const visibleTreatments = showAll
    ? selectedCategory.treatments
    : selectedCategory.treatments.slice(0, PREVIEW_LIMIT);

  const initialSlide = coreCategories.findIndex((item) => item.id === selectedCategoryId);

  return (
    <section id="studio" className="bg-surface-container-low py-20 px-24 tablet:px-4 tablet:py-14">
      <div className="mx-auto max-w-7xl tablet:max-w-full">
        <div className="mb-10 text-center">
          <p className="monte text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{API_ENDPOINTS.BRAND_NAME_LONG}</p>
          <h2 className="mt-3 playfair text-4xl font-bold text-[#0d1b34] md:text-5xl">{servicesData.TITLE}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-stone-700">{servicesData.INTRO}</p>
        </div>

       <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          rewind
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          initialSlide={initialSlide < 0 ? 1 : initialSlide}
          watchSlidesProgress
          onRealIndexChange={(swiper) => {
            const selected = coreCategories[swiper.realIndex];
            if (selected) {
              setSelectedCategoryId(selected.id);
              setShowAll(false);
            }
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -80,
            depth: 220,
            modifier: 2,
            scale: 0.82,
            slideShadows: false,
          }}
        >
          {coreCategories.map((category) => (
            <SwiperSlide
              key={category.id}
              className="!w-[280px] tablet:!w-[90%] md:!w-[340px] lg:!w-[420px]"
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryId(category.id);
                  setShowAll(false);
                }}
                className="block w-full overflow-hidden rounded-3xl bg-white text-left shadow-xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={350}
                  style={category.id=='six-in-one-facial'?{objectPosition:"left"}:{}}
                  className="h-[320px] w-full object-cover tablet:w-full 
                  "
                />
                {/* phone:w-[calc(1lik */}

                <div className="p-5 phone:px-4 phone:py-4">
                      <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Category</p>
                        <p className="mt-2 playfair text-2xl font-semibold text-[#0d1b34] phone:text-[1.35rem]">{category.name}</p>
                        <p className="mt-2 text-xs leading-6 text-stone-600 phone:text-[11px] phone:leading-5">{category.intro}</p>
                  <div className="flex items-center justify-between gap-x-2 border-t border-[#efefef] pt-3 phone:gap-x-1 phone:pt-2">
                    <div>

                        <p className=" monte text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34] phone:text-[9px]">
                          {category.treatments.length} treatment{category.treatments.length > 1 ? "s" : ""}
                        </p>
                        <p className="mt-1 text-[11px] leading-6 text-stone-600 phone:text-[10px] phone:leading-5">
                          {category.treatments[0].name}
                          {category.treatments.length > 1 ? ` • +${category.treatments.length - 1} more` : ""}
                        </p>
                        <p className="mt-1 monte text-[10px] font-semibold uppercase tracking-[0.2em] text-gold phone:text-[9px]">
                          {getCategoryPriceRange(category)}
                        </p>
                        
                        
                    </div>
                    <div>
                      <div className="hidden">
                        <p className="monte text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34]">Products</p>
                        <p className="mt-1 text-[11px] leading-6 text-stone-600">
                          {category.treatments[0].name}
                          {category.treatments.length > 1 ? ` • +${category.treatments.length - 1} more` : ""}
                        </p>
                       
                      </div>
                    </div>
                    
                  </div>
                  
                    <div className='flex w-full items-center justify-end'>
                      <div className='flex w-fit mt-3 p-1 items-center phone:mt-2 phone:p-0'>
                          <Link href={PAGE_ROUTES.TREATMENTS+'?t='+category.id} className=" inline-block monte text-[13px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34] phone:text-[11px] phone:tracking-[0.16em] ">
                            View Treatments
                          </Link>
                      <img src='/svg/arrow-f.svg' alt='Arrow Right' className='w-8 h-8 phone:w-7 phone:h-7'/>
                          </div>
                          
                      </div>
                  
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div id="treatments-list" className="mt-12 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 border-b border-[#ebebeb] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Selected Category</p>
              <h3 className="mt-2 playfair text-3xl font-bold text-[#0d1b34]">{selectedCategory.name}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-700">{selectedCategory.intro}</p>
            </div>
            {selectedCategory.treatments.length > PREVIEW_LIMIT && !showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="monte text-xs font-semibold uppercase tracking-[0.2em] text-[#0d1b34] underline underline-offset-4"
              >
                See all in this category
              </button>
            ) : null}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visibleTreatments.map((treatment) => (
              <ProductCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>

          {showAll ? (
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="mt-8 monte text-xs font-semibold uppercase tracking-[0.2em] text-[#0d1b34] underline underline-offset-4"
            >
              Show less
            </button>
          ) : null}
        </div> */}

     

        <div className="mt-10 rounded-2xl border border-[#e9e9e9] bg-white/70 p-4 md:p-5">
          <p className="text-sm italic text-stone-600">
            For clients who prefer guidance-first support, start with consultations before committing to full treatment plans.
          </p>
        </div>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {consultationCategories.map((category) => (
            <article key={category.id} className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Consultation Services</p>
              <h3 className="mt-2 playfair text-3xl font-bold text-[#0d1b34]">{category.name}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{category.intro}</p>

              <p className="mt-4 monte text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34]">
                Price Range: {getCategoryPriceRange(category)}
              </p>

              <div className="mt-4 my-6 border-t border-[#efefef] pt-4">
                <p className="monte text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34]">Available Services</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                  {category.treatments.map((treatment) => (
                    <li key={treatment.slug}>{treatment.name}</li>
                  ))}
                </ul>
              </div>

              <Link href={PAGE_ROUTES.TREATMENTS+'#'+category.id} className="bg-transparent monte text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d1b34]! underline! underline-offset-4!">
                View More
              </Link>
            </article>
          ))}
        </section>

        {/*
        <div className="mt-10 grid gap-8">
          {consultationCategories.map((category) => (
            <ConsultationCategory key={category.id} category={category} />
          ))}
        </div>
        */}

        {/* <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <div className="border-b border-[#ebebeb] pb-6">
            <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Coming Soon</p>
            <h3 className="mt-2 playfair text-3xl font-bold text-[#0d1b34]">{comingSoon.name}</h3>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {comingSoon.treatments.map((treatment) => (
              <ProductCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </section> */}
      </div>
    </section>
  );
}
