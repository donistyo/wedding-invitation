import useInView from "../hooks/useInView";

export default function Couple() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="couple" className="relative py-20 px-5 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/20" />

      <div
        className={`relative z-10 text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="tracking-[5px] text-[#d4af37] text-sm">
          THE COUPLE
        </p>
        <h2 className="text-[56px] text-[#1f4f43] mb-14">
          Bride & Groom
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-0">

        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-8">

          {/* Bride */}
          <div
            className={`flex-1 bg-white/90 backdrop-blur-sm rounded-[40px] shadow-xl p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "0.2s" : "0s" }}
          >
            <div className="w-48 h-64 mx-auto rounded-[100px] overflow-hidden shadow-lg">
              <img
                src="/wedding.jpg"
                className="w-full h-full object-cover"
                alt="Putri Amanda"
              />
            </div>

            <h3 className="mt-6 text-center text-3xl text-[#d4af37] font-serif">
              Putri Amanda
            </h3>

            <p className="text-center text-gray-500 text-xs tracking-[4px] mt-2 uppercase">
              Sang Mempelai Wanita
            </p>

            <div className="w-12 h-px bg-[#d4af37] mx-auto mt-4" />

            <p className="text-center text-gray-600 mt-4 leading-relaxed">
              Putri dari Bapak Lorem Ipsum
              <br />
              & Ibu Ipsum Dolor
            </p>
          </div>

          {/* & symbol mobile */}
          <div
            className={`flex md:hidden items-center justify-center text-4xl text-[#d4af37] font-serif select-none transition-all duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: inView ? "0.35s" : "0s" }}
          >
            &
          </div>

          {/* Groom */}
          <div
            className={`flex-1 bg-white/90 backdrop-blur-sm rounded-[40px] shadow-xl p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "0.5s" : "0s" }}
          >
            <div className="w-48 h-64 mx-auto rounded-[100px] overflow-hidden shadow-lg">
              <img
                src="/groom.jpg"
                className="w-full h-full object-cover"
                alt="Rizki Pratama"
              />
            </div>

            <h3 className="mt-6 text-center text-3xl text-[#d4af37] font-serif">
              Rizki Pratama
            </h3>

            <p className="text-center text-gray-500 text-xs tracking-[4px] mt-2 uppercase">
              Sang Mempelai Pria
            </p>

            <div className="w-12 h-px bg-[#d4af37] mx-auto mt-4" />

            <p className="text-center text-gray-600 mt-4 leading-relaxed">
              Putra dari Bapak Dolor Sit
              <br />
              & Ibu Amet Consectetur
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}