import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer({ audio }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audio]);

  const toggle = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 left-5 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#1f4f43] hover:scale-105 transition-transform"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      <div className={`relative ${playing ? "animate-spin" : ""}`}>
        <FaMusic className={playing ? "text-base" : "text-base opacity-60"} />
      </div>
      {playing && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full" />
      )}
    </button>
  );
}
