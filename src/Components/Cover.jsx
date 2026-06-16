import { useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

export default function Cover({ onOpen, guestName, }) {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(onOpen, 800);
  };

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/cover-depan.jpg')",
        transition: "all 0.8s ease",
        transform: closing ? "scale(1.05)" : "scale(1)",
        opacity: closing ? 0 : 1,
      }}
    >
      <img
        src="/daun.png"
        className="absolute top-0 left-0 w-40 opacity-70 animate-float"
        alt=""
      />

      <img
        src="/daun2.png"
        className="absolute bottom-0 right-0 w-40 opacity-70 animate-float-delayed"
        alt=""
      />

      <div className="relative z-10 text-center px-6">
        <p
          className="mt-8 tracking-[5px] text-[#d4af37] text-sm animate-slide-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          THE WEDDING OF
        </p>

        <h1
          className="text-5xl text-white font-serif mt-4 drop-shadow-lg animate-slide-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          Putri <span className="text-[#d4af37]">&</span> Rizki
        </h1>

        <p
          className="mt-6 text-white/80 animate-slide-up"
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          Kepada Bapak/Ibu/Saudara/i
        </p>

        <h3
          className="font-semibold text-white animate-slide-up"
          style={{ animationDelay: "0.7s", animationFillMode: "both" }}
        >
          {guestName}
        </h3>

        <button
          onClick={handleOpen}
          className="mt-8 px-8 py-3 bg-white text-[#1f4f43] rounded-full flex items-center gap-2 mx-auto hover:bg-[#d4af37] hover:text-white transition-all duration-300 animate-slide-up shadow-lg"
          style={{ animationDelay: "0.9s", animationFillMode: "both" }}
        >
          <FaEnvelopeOpen className="text-sm" />
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
