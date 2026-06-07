import { useState } from "react";
import useInView from "../hooks/useInView";

export default function Wishes() {
  const [ref, inView] = useInView();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setList([{ name: name.trim(), message: message.trim() }, ...list]);
    setName("");
    setMessage("");
  };

  return (
    <section ref={ref} id="wishes" className="relative py-20 px-5 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-white/85" />
      <div className="max-w-md mx-auto text-center">
        <p
          className={`tracking-[5px] text-[#d4af37] text-sm transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          DOA & UCAPAN
        </p>
        <h2
          className={`text-[56px] text-[#1f4f43] mt-3 mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.1s" : "0s" }}
        >
          Kirim Ucapan
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`space-y-4 mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: inView ? "0.2s" : "0s" }}
        >
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-[#d4af37] transition"
          />
          <textarea
            placeholder="Tulis ucapan & doa..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-200 rounded-3xl px-5 py-3 text-sm outline-none focus:border-[#d4af37] transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#1f4f43] text-white rounded-full py-3 text-sm hover:opacity-90 transition"
          >
            Kirim Ucapan
          </button>
        </form>

        <div className="space-y-4 text-left max-h-80 overflow-y-auto">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-[#f7f7f2] rounded-2xl p-4"
            >
              <p className="font-semibold text-[#1f4f43] text-sm">
                {item.name}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {item.message}
              </p>
            </div>
          ))}
          {list.length === 0 && (
            <p className="text-center text-gray-400 text-sm">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
