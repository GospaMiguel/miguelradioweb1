import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { getSortedArticles } from "@/data/blogArticles";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  const articles = getSortedArticles();

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="blog" />

      <main className="pt-24 md:pt-32 pb-12 md:pb-16 px-2 md:px-4">
        <Section id="blog" title="Blog">
          {articles.length === 0 ? (
            <p className="text-center text-white/80 py-12">
              Próximamente publicaremos nuevos artículos. ¡Vuelve pronto!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/50"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                    </div>

                    <h2 className="font-display text-lg md:text-xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 text-justify">
                      {article.excerpt}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Leer artículo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Section>
      </main>
    </div>
  );
};

export default Blog;
