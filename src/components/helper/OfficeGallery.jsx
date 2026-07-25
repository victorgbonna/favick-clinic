import Image from "next/image";

const galleryImages = [
  { src: "/images/office/clinic-interior-01.jpeg", alt: "Favick Skin Clinic treatment space", className: "md:row-span-2" },
  { src: "/images/office/clinic-interior-02.jpeg", alt: "Favick Skin Clinic interior", className: "col-span-2" },
  { src: "/images/office/clinic-interior-03.jpeg", alt: "Favick Skin Clinic treatment room", className: "" },
  { src: "/images/office/clinic-interior-04.jpeg", alt: "Favick Skin Clinic consultation setting", className: "" },
  { src: "/images/office/clinic-interior-05.jpeg", alt: "Favick Skin Clinic welcoming interior", className: "col-span-2" },
];

export default function OfficeGallery() {
  return (
    <section className="bg-[#f8f8f6] px-6 py-20 tablet:px-5 tablet:py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="monte text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Our Clinic</p>
          <h2 className="mt-3 playfair text-4xl font-bold text-[#0d1b34] tablet:text-3xl">A Calm Space for Your Skin Journey</h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            Step into a welcoming, private setting designed for thoughtful care, expert treatments and a little time for yourself.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 tablet:auto-rows-[150px] md:grid-cols-4 md:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className={`group relative overflow-hidden rounded-2xl ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b34]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
