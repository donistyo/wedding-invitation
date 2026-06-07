import { FaGift, FaCopy } from "react-icons/fa";
import { useState } from "react";
import useInView from "../hooks/useInView";

const banks = [
  {
    name: "Bank BCA",
    logo: "BCA",
    account: "1234567890",
    holder: "Putri Amanda",
  },
  {
    name: "Bank Mandiri",
    logo: "Mandiri",
    account: "9876543210",
    holder: "Rizki Pratama",
  },
];

export default function Gift() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(null);

  const handleCopy = (account) => {
    navigator.clipboard.writeText(account);
    setCopied(account);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section ref={ref} id="gift" className="relative py-20 px-5 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative z-10 max-w-md mx-auto text-center">
        <div
          className={`w-16 h-16 rounded-full bg-[#1f4f43] flex items-center justify-center mx-auto mb-4 transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <FaGift className="text-white text-2xl" />
        </div>

        <p
          className={`tracking-[5px] text-[#d4af37] text-sm transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.1s" : "0s" }}
        >
          WEDDING GIFT
        </p>

        <h2
          className={`text-[56px] text-[#1f4f43] mt-3 mb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.2s" : "0s" }}
        >
          Kirim Kado
        </h2>

        <p
          className={`text-gray-500 text-sm mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.3s" : "0s" }}
        >
          Doa restu Anda adalah kado terindah bagi kami. Jika ingin
          memberikan kado dalam bentuk lain, silakan melalui:
        </p>

        <div className="space-y-4">
          {banks.map((bank, i) => (
            <div
              key={bank.account}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5 text-left transition-all duration-700 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: inView ? `${0.4 + 0.15 * i}s` : "0s" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-[#1f4f43] text-sm tracking-wide">
                  {bank.name}
                </span>
                <button
                  onClick={() => handleCopy(bank.account)}
                  className="text-[#d4af37] hover:scale-110 transition text-sm flex items-center gap-1"
                >
                  <FaCopy />
                  {copied === bank.account ? "Tersalin!" : "Salin"}
                </button>
              </div>

              <p className="text-2xl font-mono tracking-wider text-gray-800">
                {bank.account}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                a.n. {bank.holder}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.7s" : "0s" }}
        >
          <p className="text-gray-500 text-sm mb-3">Atau scan QR di bawah:</p>
          <img
            src="/qrcode.jpg"
            alt="QR Code"
            className="w-40 h-40 mx-auto rounded-xl object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <p className="hidden text-gray-400 text-xs mt-2">
            (QR Code belum tersedia)
          </p>
        </div>
      </div>
    </section>
  );
}
