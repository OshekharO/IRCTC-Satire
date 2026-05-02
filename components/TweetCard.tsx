interface TweetCardProps {
  handle: string;
  username: string;
  avatar: string;
  text: string;
  time: string;
  likes: string;
  retweets: string;
  replies: string;
  verified?: boolean;
}

export default function TweetCard({
  handle,
  username,
  avatar,
  text,
  time,
  likes,
  retweets,
  replies,
  verified = false,
}: TweetCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base flex-shrink-0">
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-gray-900 text-sm truncate">
              {username}
            </span>
            {verified && (
              <span className="text-blue-500 text-xs" title="Verified">
                ✓
              </span>
            )}
            <span className="text-gray-400 text-sm truncate">@{handle}</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-400 text-sm flex-shrink-0">{time}</span>
          </div>
        </div>
        {/* X logo */}
        <div className="flex-shrink-0 text-gray-800 font-black text-base leading-none">
          𝕏
        </div>
      </div>

      {/* Tweet text */}
      <p className="text-gray-900 text-sm leading-relaxed mb-3 whitespace-pre-line">
        {text}
      </p>

      {/* Footer actions */}
      <div className="flex items-center gap-5 pt-2 border-t border-gray-100 text-gray-500 text-xs">
        <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {replies}
        </span>
        <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
          {retweets}
        </span>
        <span className="flex items-center gap-1 hover:text-red-500 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          {likes}
        </span>
      </div>
    </article>
  );
}
