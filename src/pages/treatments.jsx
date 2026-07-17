import { useMemo, useState } from "react";

import { API_ENDPOINTS } from "@/configs";

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

function TreatmentCard({ treatment }) {
  return (
    <article className="rounded-2xl border border-[#ece8df] bg-white p-5">
      <h3 className="playfair text-2xl font-semibold text-[#0d1b34]">{treatment.name}</h3>
      <p className="mt-2 monte text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {treatment.duration} | {formatPriceWithSymbol(treatment.price)}
      </p>
      <p className="mt-3 text-sm leading-7 text-stone-700">{treatment.description}</p>
    </article>
  );
}

function CategorySection({ id, label, title, intro, treatments }) {
  return (
    <section id={id} className="mt-14 scroll-mt-32 rounded-3xl border border-[#ece8df] bg-[#fbfaf8] p-6 md:p-10">
      <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
      <h2 className="mt-2 playfair text-4xl font-bold text-[#0d1b34] tablet:text-3xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-4xl text-sm leading-7 text-stone-700">{intro}</p> : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </section>
  );
}

export default function TreatmentsPage() {
  const servicesData = API_ENDPOINTS.SERVICES;
  const coreCategories = servicesData.CORE_CATEGORIES || [];
  const consultationCategories = servicesData.CONSULTATION_CATEGORIES || [];
  const consultations = consultationCategories.find((item) => item.id === "skin-consultations");
  const virtualServices = consultationCategories.find((item) => item.id === "virtual-services");
  const comingSoon = servicesData.COMING_SOON;

  const [selectedCategoryId, setSelectedCategoryId] = useState(coreCategories[0]?.id || "");

  const selectedCategory = useMemo(
    () => coreCategories.find((item) => item.id === selectedCategoryId) || coreCategories[0],
    [coreCategories, selectedCategoryId],
  );

  return (
    <div className="bg-surface mt-14 tablet:mt-10">
      <header className="py-24 px-[80px] tablet:px-5 text-center bg-[#f8f8f6]">
        <p className="monte text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Tailored Excellence</p>
        <h1 className="mt-4 playfair text-5xl font-bold text-[#0d1b34] tablet:text-4xl">Treatments and Services</h1>
        <p className="mt-6 max-w-3xl mx-auto text-sm leading-7 text-on-surface-variant">
          {servicesData.INTRO}
        </p>
      </header>

      <nav className="sticky top-[88px] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 py-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-8 px-6 tablet:px-4">
          <a href="#treatments" className="monte cursor-pointer uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">Treatments</a>
          <a href="#consultations" className="monte cursor-pointer uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">Consultations</a>
          <a href="#virtual-services" className="monte cursor-pointer uppercase text-[11px] tracking-[0.22em] text-on-surface-variant hover:text-gold">Virtual Services</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 tablet:px-4">
        <section id="treatments" className="scroll-mt-32">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Treatments</p>
          <h2 className="mt-2 playfair text-4xl font-bold text-[#0d1b34] tablet:text-3xl">Choose a Category</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {coreCategories.map((category) => {
              const isActive = category.id === selectedCategory?.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`rounded-full border px-4 py-2 monte text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "border-[#0d1b34] bg-[#0d1b34] text-white"
                      : "border-[#d8d2c3] bg-white text-[#0d1b34] hover:border-[#0d1b34]"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {selectedCategory ? (
            <div className="mt-8 rounded-3xl border border-[#ece8df] bg-[#fbfaf8] p-6 md:p-10">
              <h3 className="playfair text-3xl font-bold text-[#0d1b34]">{selectedCategory.name}</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-stone-700">{selectedCategory.intro}</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {selectedCategory.treatments.map((treatment) => (
                  <TreatmentCard key={treatment.slug} treatment={treatment} />
                ))}
              </div>
            </div>
          ) : null}
        </section>

        {consultations ? (
          <CategorySection
            id="consultations"
            label="Consultations"
            title={consultations.name}
            intro={consultations.intro}
            treatments={consultations.treatments}
          />
        ) : null}

        {virtualServices ? (
          <CategorySection
            id="virtual-services"
            label="Virtual Services"
            title={virtualServices.name}
            intro={virtualServices.intro}
            treatments={virtualServices.treatments}
          />
        ) : null}

        {comingSoon ? (
          <CategorySection
            id="coming-soon"
            label="Coming Soon"
            title={comingSoon.name}
            intro={null}
            treatments={comingSoon.treatments}
          />
        ) : null}
      </main>
    </div>
  );
}
