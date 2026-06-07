import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navigation } from "@/components/Navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "@/data/blogArticles";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article || !article.content) {
    return <Navigate to="/blog" replace />;
  }

  const canonical = `https://miguelradioweb1.lovable.app/blog/${article.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={article.coverImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription || article.excerpt,
          image: article.coverImage,
          datePublished: article.date,
          author: { "@type": "Organization", name: "Asociación Cántabra de Radioaficionados" },
        })}</script>
      </Helmet>

      <Navigation currentPage="blog" />

      <main className="pt-24 md:pt-32 pb-16 px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <img
              src={article.coverImage}
              alt={article.coverAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
            {article.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-foreground/90 prose-p:text-justify prose-p:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary hover:prose-a:underline
            prose-li:text-foreground/90 prose-li:marker:text-primary
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-table:text-foreground/90
            prose-th:bg-primary/20 prose-th:text-foreground prose-th:p-3
            prose-td:border-border prose-td:p-3
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
