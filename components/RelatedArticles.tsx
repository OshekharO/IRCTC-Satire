import Link from "next/link";

interface RelatedArticle {
  href: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

interface RelatedArticlesProps {
  heading?: string;
  articles: RelatedArticle[];
}

export default function RelatedArticles({
  heading = "Also Read",
  articles,
}: RelatedArticlesProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t border-blue-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-extrabold text-primary mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-accent rounded-full inline-block" aria-hidden="true" />
          {heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-white rounded-xl border border-blue-100 hover:border-primary/40 hover:shadow-md p-4 transition-all flex flex-col gap-2"
            >
              {article.badge && (
                <span
                  className={`self-start text-xs font-bold px-2 py-0.5 rounded-full ${
                    article.badgeColor ?? "bg-accent/10 text-accent"
                  }`}
                >
                  {article.badge}
                </span>
              )}
              <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </span>
              <span className="text-gray-500 text-sm leading-relaxed">
                {article.description}
              </span>
              <span className="text-primary text-xs font-semibold mt-auto group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
