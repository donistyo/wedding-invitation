import useInView from "../hooks/useInView";

const stories = [
  {
    year: "2021",
    title: "Awal Bertemu",
    desc: "Kami dipertemukan secara sederhana."
  },
  {
    year: "2023",
    title: "Lamaran",
    desc: "Memutuskan melangkah ke jenjang serius."
  },
  {
    year: "2027",
    title: "Menikah",
    desc: "Mengikat janji suci pernikahan."
  }
];

export default function Story() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="story" className="relative text-white py-20 px-6 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#1f4f43]/90" />

      <h2
        className={`text-center text-[#d4af37] text-[56px] mb-12 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Love Story
      </h2>

      <div className="max-w-md mx-auto">

        {stories.map((item, i) => (
          <div
            key={item.year}
            className={`border-l-2 border-[#d4af37] pl-6 pb-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: inView ? `${0.15 + 0.15 * i}s` : "0s" }}
          >
            <span className="text-[#d4af37]">
              {item.year}
            </span>

            <h3 className="text-xl mt-2">
              {item.title}
            </h3>

            <p className="text-white/80 mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}