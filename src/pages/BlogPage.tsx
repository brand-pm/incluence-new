import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategoryId, type BlogPost } from "@/data/blogPosts";

const BLOG_LIST_QUERY = `*[_type == "blogPost"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  category,
  excerpt,
  author,
  publishedAt,
  readingTime
}`;

function isSanityConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SANITY_PROJECT_ID);
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

const BlogPage = () => {
  const [active, setActive] = useState<"all" | BlogCategoryId>("all");

  // SEO
  useEffect(() => {
    document.title = "Blog — Insights on Licensing, Banking & Offshore | Incluence";
    const desc = "Practical articles from the Incluence team on gambling, crypto, EMI and PSP licences, EU company formation and offshore structures.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = desc;
  }, []);

  const { data } = useQuery<BlogPost[]>({
    queryKey: ["sanity", "blogPosts"],
    queryFn: () => sanityClient.fetch(BLOG_LIST_QUERY),
    enabled: isSanityConfigured(),
    placeholderData: BLOG_POSTS,
    staleTime: 1000 * 60 * 5,
    select: (d) => (Array.isArray(d) && d.length > 0 ? d : BLOG_POSTS) as BlogPost[],
  });

  const posts = data ?? BLOG_POSTS;

  const filtered = useMemo(
    () => (active === "all" ? posts : posts.filter((p) => p.category === active)),
    [posts, active]
  );

  return (
    <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>
      {/* Hero */}
      <section className="px-5 md:px-12 pt-[120px] pb-12 md:pt-[160px] md:pb-20" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[1280px]">
          <span className="block text-[11px] font-medium text-[#444CE7] uppercase tracking-[0.12em] mb-4">
            — Insights
          </span>
          <h1
            className="text-[#F0EBE0] font-light tracking-tight"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.08, marginBottom: 16 }}
          >
            Blog
          </h1>
          <p className="text-[#9A9590] max-w-[640px]" style={{ fontSize: 15, lineHeight: 1.7 }}>
            Field notes from our legal desk on licensing, company formation, banking
            and offshore structuring for FinTech, Crypto and high-risk businesses.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 md:px-12" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-[1280px] py-5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em] mr-3">
            Filter by topic:
          </span>
          {[{ id: "all", label: "All" }, ...BLOG_CATEGORIES].map((c) => {
            const isActive = active === (c.id as typeof active);
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id as typeof active)}
                className="text-[12px] px-3.5 py-1.5 transition-all duration-150 cursor-pointer border"
                style={{
                  fontFamily: "inherit",
                  background: isActive ? "rgba(68,76,231,0.12)" : "transparent",
                  borderColor: isActive ? "rgba(68,76,231,0.5)" : "rgba(255,255,255,0.08)",
                  color: isActive ? "#F0EBE0" : "#9A9590",
                }}
              >
                {c.label}
                <span className="ml-2 text-[10px] text-[#5A5550]">
                  {c.id === "all" ? posts.length : posts.filter((p) => p.category === c.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-5 md:px-12 py-12 md:py-20" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[1280px]">
          {filtered.length === 0 ? (
            <p className="text-[#5A5550] text-[14px]">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {filtered.map((post) => {
                const cat = BLOG_CATEGORIES.find((c) => c.id === post.category);
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block no-underline relative overflow-hidden group"
                    style={{ background: "#0d0d0d", padding: 28, transition: "background 0.2s" }}
                  >
                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-medium text-[#444CE7] uppercase tracking-[0.12em]">
                        {cat?.label ?? post.category}
                      </span>
                      <span className="text-[10px] text-[#5A5550]">·</span>
                      <span className="text-[10px] text-[#5A5550]">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h2 className="text-[#F0EBE0] font-light tracking-tight" style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 12 }}>
                      {post.title}
                    </h2>
                    <p className="text-[#9A9590]" style={{ fontSize: 13.5, lineHeight: 1.65, marginBottom: 24 }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
                      <span className="text-[11px] text-[#5A5550]">{post.author}</span>
                      <span className="text-[11px] text-[#5A5550]">{post.readingTime} min read</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
