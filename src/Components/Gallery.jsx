import { useState } from "react";
import useInView from "../hooks/useInView";

const images = [
  "/galery1.jpg",
  "/galery2.jpg",
  "/cover.jpg",
  "/wedding.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="gallery" className="relative py-20 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/85" />

      <div
        className={`relative z-10 text-center mb-10 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="tracking-[5px] text-[#d4af37] text-sm">
          MOMENTS
        </p>

        <h2 className="text-[56px] text-[#1f4f43]">
          Gallery
        </h2>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden shadow-lg cursor-pointer aspect-[3/4]"
            onClick={() => setSelected(img)}
            style={{
              transition: "all 0.7s ease",
              transitionDelay: `${0.1 * index}s`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <img
            src={selected}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
}
