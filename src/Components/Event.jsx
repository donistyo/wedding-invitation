import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import useInView from "../hooks/useInView";

export default function Event() {
  const [ref, inView] = useInView();
  const targetDate = new Date("2027-05-20");
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="event" className="relative py-20 px-5 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/85" />

      <img
        src="/daun.png"
        alt=""
        className="absolute top-0 left-0 w-32 opacity-30 z-10"
      />

      <img
        src="/daun2.png"
        alt=""
        className="absolute bottom-0 right-0 w-32 opacity-30 z-10"
      />

      <div
        className={`text-center mb-12 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="tracking-[5px] text-[#d4af37] text-sm">
          SAVE THE DATE
        </p>

        <h2 className="text-[56px] text-[#1f4f43] mt-3">
          Wedding Event
        </h2>
      </div>

      {/* COUNTDOWN */}
      <div
        className={`max-w-md mx-auto bg-[#1f4f43] rounded-[40px] shadow-xl p-8 mb-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: inView ? "0.15s" : "0s" }}
      >
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(time).map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-2xl py-3 px-1 flex flex-col items-center"
            >
              <h3 className="font-bold text-lg leading-none">{value}</h3>
              <p className="capitalize text-[10px] text-gray-500 mt-1 whitespace-nowrap">{key}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AKAD */}
      <div
        className={`max-w-md mx-auto bg-white rounded-[40px] shadow-xl p-8 mb-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: inView ? "0.3s" : "0s" }}
      >

        <h3 className="text-center text-4xl text-[#d4af37] mb-6">
          Akad Nikah
        </h3>

        <div className="space-y-4 text-center">

          <div className="flex items-center justify-center gap-3">
            <FaCalendarAlt />
            <span>Minggu, 20 Mei 2027</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaClock />
            <span>09.00 WIB</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt />
            <span>Gedung Serbaguna Bahagia</span>
          </div>

        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="block mt-8"
        >
          <button className="w-full bg-[#1f4f43] text-white py-3 rounded-full">
            Lihat Lokasi
          </button>
        </a>

      </div>

      {/* RESEPSI */}
      <div
        className={`max-w-md mx-auto bg-[#1f4f43] text-white rounded-[40px] shadow-xl p-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: inView ? "0.45s" : "0s" }}
      >

        <h3 className="text-center text-4xl text-[#d4af37] mb-6">
          Resepsi
        </h3>

        <div className="space-y-4 text-center">

          <div className="flex items-center justify-center gap-3">
            <FaCalendarAlt />
            <span>Minggu, 20 Mei 2027</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaClock />
            <span>11.00 WIB - Selesai</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt />
            <span>Gedung Serbaguna Bahagia</span>
          </div>

        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="block mt-8"
        >
          <button className="w-full bg-white text-[#1f4f43] py-3 rounded-full font-semibold">
            Lihat Lokasi
          </button>
        </a>

      </div>

    </section>
  );
}
