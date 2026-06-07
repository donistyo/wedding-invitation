import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-05-20");

  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:
          Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes:
          Math.floor(diff / (1000 * 60)) % 60,
        seconds:
          Math.floor(diff / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="bg-[#1f4f43] py-20">

      <h2 className="text-center text-white text-4xl font-serif">
        Save The Date
      </h2>

      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mt-10 px-4">

        {Object.entries(time).map(([key, value]) => (
          <div
            key={key}
            className="bg-white rounded-2xl p-3 text-center"
          >
            <h3 className="font-bold text-xl">
              {value}
            </h3>

            <p className="capitalize text-sm">
              {key}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}