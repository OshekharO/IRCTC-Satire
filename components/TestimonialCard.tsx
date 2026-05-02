interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  stars?: number;
}

export default function TestimonialCard({
  name,
  location,
  quote,
  stars = 5,
}: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">
            ⭐
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
            Verified Victim
          </span>
        </div>
      </div>
    </article>
  );
}
