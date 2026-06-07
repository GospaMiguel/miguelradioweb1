export interface BlogArticle {
  slug: string;
  title: string;
  date: string; // ISO format YYYY-MM-DD
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  content?: string; // Markdown content (added when full posts are created)
}

// Los nuevos artículos se añaden aquí. Se ordenan automáticamente por fecha (más recientes primero).
export const blogArticles: BlogArticle[] = [
  {
    slug: "bienvenida-al-blog",
    title: "Bienvenidos al Blog de la Asociación Cántabra de Radioaficionados",
    date: "2026-06-07",
    excerpt:
      "Inauguramos un nuevo espacio para compartir noticias, experiencias y conocimiento sobre el mundo de la radioafición en Cantabria.",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Equipamiento de radioaficionado en Cantabria para el blog de la Asociación Cántabra de Radioaficionados",
  },
];

export const getSortedArticles = () =>
  [...blogArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
