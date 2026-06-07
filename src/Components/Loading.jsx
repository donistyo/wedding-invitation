export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#1f4f43] flex flex-col items-center justify-center px-6">

      <p className="tracking-[5px] text-[#d4af37] text-xs">
        THE WEDDING OF
      </p>

      <h1 className="text-5xl text-white font-serif mt-3">
        Putri <span className="text-[#d4af37]">&</span> Rizki
      </h1>

      <div className="mt-10 w-32 h-0.5 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-[#d4af37] rounded-full animate-loading-bar" />
      </div>

      <p className="mt-4 text-white/40 text-xs tracking-[3px]">
        Loading Invitation
      </p>

    </div>
  );
}
