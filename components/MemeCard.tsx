interface MemeCardProps {
  topText: string;
  bottomText: string;
  emoji: string;
  bgColor?: string;
  variant?: "dark" | "light" | "desi";
}

export default function MemeCard({
  topText,
  bottomText,
  emoji,
  bgColor = "bg-gray-900",
  variant = "dark",
}: MemeCardProps) {
  const isLight = variant === "light";
  const isDesi = variant === "desi";

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg border-2 ${
        isDesi
          ? "border-yellow-400 bg-amber-50"
          : isLight
          ? "border-gray-200 bg-white"
          : `border-gray-700 ${bgColor}`
      } flex flex-col`}
    >
      {/* Top text */}
      <div
        className={`px-4 pt-4 pb-2 text-center text-sm font-black uppercase tracking-wide leading-snug ${
          isDesi
            ? "text-orange-700"
            : isLight
            ? "text-gray-700"
            : "text-white drop-shadow-md"
        }`}
        style={{ textShadow: isDesi || isLight ? "none" : "2px 2px 0 rgba(0,0,0,0.8)" }}
      >
        {topText}
      </div>

      {/* Emoji centre */}
      <div className="text-6xl text-center py-4 leading-none">{emoji}</div>

      {/* Bottom text */}
      <div
        className={`px-4 pb-4 pt-2 text-center text-sm font-black uppercase tracking-wide leading-snug ${
          isDesi
            ? "text-red-700"
            : isLight
            ? "text-primary"
            : "text-yellow-300 drop-shadow-md"
        }`}
        style={{ textShadow: isDesi || isLight ? "none" : "2px 2px 0 rgba(0,0,0,0.8)" }}
      >
        {bottomText}
      </div>

      {/* Desi "Forwarded many times" badge */}
      {isDesi && (
        <div className="bg-yellow-100 border-t border-yellow-300 px-4 py-1.5 text-center">
          <span className="text-[10px] text-yellow-700 font-medium italic">
            📨 Forwarded as received — WhatsApp University
          </span>
        </div>
      )}
    </div>
  );
}
