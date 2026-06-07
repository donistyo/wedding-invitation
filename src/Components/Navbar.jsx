import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Couple", href: "#couple" },
  { label: "Story", href: "#story" },
  { label: "Event", href: "#event" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wedding Gift", href: "#gift" },
  { label: "Kirim Ucapan", href: "#wishes" },
  { label: "Ucapan Terima Kasih", href: "#thanks" },
];

const sectionIds = links.map((l) => l.href.replace("#", ""));

export default function Navbar({ autoScrolling, setAutoScrolling }) {
  const [open, setOpen] = useState(false);
  const autoTimer = useRef(null);
  const sectionIndex = useRef(0);

  const stopAutoScroll = useCallback(() => {
    clearTimeout(autoTimer.current);
    if (autoScrolling) setAutoScrolling(false);
  }, [autoScrolling, setAutoScrolling]);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (!autoScrolling) return;

    const run = () => {
      if (sectionIndex.current >= sectionIds.length) {
        sectionIndex.current = 0;
      }
      scrollToSection(sectionIds[sectionIndex.current]);
      sectionIndex.current += 1;
      autoTimer.current = setTimeout(run, 4000);
    };

    run();

    return () => clearTimeout(autoTimer.current);
  }, [autoScrolling, scrollToSection]);

  useEffect(() => {
    if (!autoScrolling) return;
    const handleUserScroll = () => stopAutoScroll();
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchstart", handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchstart", handleUserScroll);
    };
  }, [autoScrolling, stopAutoScroll]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && autoScrolling) stopAutoScroll();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [autoScrolling, stopAutoScroll]);

  const handleClick = (href) => {
    setOpen(false);
    if (autoScrolling) stopAutoScroll();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed top-5 right-5 z-50 w-14 h-14 rounded-full bg-[#1f4f43] text-white shadow-lg flex items-center justify-center text-xl hover:scale-105 transition-transform"
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center animate-fade-fast"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 w-72 text-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-[#1f4f43] font-serif text-2xl mb-6">
              Navigasi
            </h3>

            <div className="space-y-1">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-[#f7f7f2] hover:text-[#d4af37] transition text-sm animate-slide-up"
                  style={{
                    animationDelay: `${0.06 * i}s`,
                    animationFillMode: "both",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
