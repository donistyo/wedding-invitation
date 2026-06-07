import useInView from "../hooks/useInView";

export default function Thanks() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      id="thanks"
      className="relative py-20 px-5 text-white text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#1f4f43]/90" />

      <img
        src="/daun.png"
        alt=""
        className="absolute top-0 left-0 w-32 opacity-20 z-10"
      />
      <img
        src="/daun2.png"
        alt=""
        className="absolute bottom-0 right-0 w-32 opacity-20 z-10"
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <h2
          className={`text-5xl text-[#d4af37] mb-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ucapan Terima Kasih
        </h2>

        <div
          className={`w-16 h-px bg-[#d4af37] mx-auto mb-6 transition-all duration-700 delay-150 ${
            inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <p
          className={`text-white/80 leading-relaxed mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.3s" : "0s" }}
        >
          Kami sekeluarga mengucapkan terima kasih sebesar-besarnya atas doa,
          restu, dan kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan kami.
          Tanpa kehadiran dan dukungan Anda, hari bahagia ini tidak akan
          terasa sempurna.
        </p>

        <p
          className={`text-[#d4af37] font-serif text-xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.45s" : "0s" }}
        >
          Hormat Kami,
        </p>

        <p
          className={`text-white font-serif text-2xl mt-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.6s" : "0s" }}
        >
          Keluarga Besar Mempelai
        </p>
      </div>
    </section>
  );
}
