import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

const BLOG_DETAIL_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  category,
  excerpt,
  author,
  publishedAt,
  readingTime,
  "body": body[].children[].text
}`;

function isSanityConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SANITY_PROJECT_ID);
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

const BlogPostPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const fallback = BLOG_POSTS.find((p) => p.slug === slug);

  const { data } = useQuery<BlogPost | undefined>({
    queryKey: ["sanity", "blogPost", slug],
    queryFn: () => sanityClient.fetch(BLOG_DETAIL_QUERY, { slug }),
    enabled: isSanityConfigured() && !!slug,
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    select: (d) => (d && (d as BlogPost).title ? (d as BlogPost) : fallback),
  });

  const post = data ?? fallback;

  useEffect(() => {
    if (!post) {
      document.title = "Article not found | Incluence";
      return;
    }
    document.title = `${post.title} | Incluence Blog`;
    const desc = post.excerpt;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = desc;
  }, [post]);

  if (!post) {
    return (
      <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }} className="px-5 md:px-12 pt-[160px] pb-20">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-[#F0EBE0] text-[32px] font-light mb-4">Article not found</h1>
          <p className="text-[#9A9590] mb-8">This article does not exist or has been removed.</p>
          <Link to="/blog" className="text-[#444CE7] no-underline text-[13px]">← Back to all articles</Link>
        </div>
      </div>
    );
  }

  const cat = BLOG_CATEGORIES.find((c) => c.id === post.category);
  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>
      {/* Hero */}
      <section className="px-5 md:px-12 pt-[120px] pb-10 md:pt-[160px]" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[760px]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-[#9A9590] hover:text-[#F0EBE0] no-underline mb-8"
            style={{ fontSize: 12 }}
          >
            <ChevronLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-medium text-[#444CE7] uppercase tracking-[0.12em]">
              {cat?.label ?? post.category}
            </span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550]">{formatDate(post.publishedAt)}</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550]">{post.readingTime} min read</span>
          </div>
          <h1
            className="text-[#F0EBE0] font-light tracking-tight"
            style={{ fontSize: "clamp(28px, 4.2vw, 48px)", lineHeight: 1.12, marginBottom: 20 }}
          >
            {post.title}
          </h1>
          <p className="text-[#9A9590]" style={{ fontSize: 16, lineHeight: 1.7 }}>{post.excerpt}</p>
          <p className="text-[#5A5550] mt-6" style={{ fontSize: 12 }}>By {post.author}</p>
        </div>
      </section>

      {/* Body */}
      <article className="px-5 md:px-12 pb-16 md:pb-24" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-[760px] pt-12 md:pt-16">
          {post.body.map((block, i) => {
            if (typeof block !== "string") return null;
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-[#F0EBE0] font-light tracking-tight"
                  style={{ fontSize: 22, lineHeight: 1.25, marginTop: 32, marginBottom: 14 }}
                >
                  {block.slice(3)}
                </h2>
              );
            }
            return (
              <p key={i} className="text-[#9A9590]" style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>
                {block}
              </p>
            );
          })}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-5 md:px-12 py-12 md:py-16" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-[1280px]">
            <span className="block text-[11px] font-medium text-[#444CE7] uppercase tracking-[0.12em] mb-6">
              — Related articles
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block no-underline relative overflow-hidden group"
                  style={{ background: "#0d0d0d", padding: 28 }}
                >
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                  <span className="text-[10px] font-medium text-[#444CE7] uppercase tracking-[0.12em]">
                    {BLOG_CATEGORIES.find((c) => c.id === p.category)?.label}
                  </span>
                  <h3 className="text-[#F0EBE0] font-light mt-4" style={{ fontSize: 18, lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p className="text-[#9A9590] mt-3" style={{ fontSize: 13, lineHeight: 1.6 }}>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
