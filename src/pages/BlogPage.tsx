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

// Category visual styles — color blocking + thumbnail accents
const CATEGORY_STYLES: Record<BlogCategoryId, {
  accent: string;          // primary color
  accentSoft: string;      // soft tint for backgrounds
  cardBg: string;          // card background
  thumbBg: string;         // thumbnail background
  thumbPattern: string;    // svg pattern color
  label: string;
}> = {
  "licensing": {
    accent: "#444CE7",
    accentSoft: "rgba(68,76,231,0.10)",
    cardBg: "#0d0d0d",
    thumbBg: "linear-gradient(135deg, #0f1535 0%, #1a1f4a 50%, #0d0d0d 100%)",
    thumbPattern: "rgba(68,76,231,0.35)",
    label: "Licensing",
  },
  "company-offshore": {
    accent: "#D4A95A",
    accentSoft: "rgba(212,169,90,0.10)",
    cardBg: "#0d0d0d",
    thumbBg: "linear-gradient(135deg, #2a1f0f 0%, #3a2c14 50%, #0d0d0d 100%)",
    thumbPattern: "rgba(212,169,90,0.32)",
    label: "Company & Offshore",
  },
};

// Decorative thumbnail (no external images) — geometric scheme aligned with brand
const PostThumbnail = ({ category, title }: { category: BlogCategoryId; title: string }) => {
  const s = CATEGORY_STYLES[category];
  // Two distinct visuals per category to add variety
  const variant = title.length % 2;
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16/9", background: s.thumbBg, borderBottom: `1px solid rgba(255,255,255,0.06)` }}
    >
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`dots-${category}-${variant}`} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={s.thumbPattern} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${category}-${variant})`} />
      </svg>

      {/* Geometric mark */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
        {variant === 0 ? (
          <>
            <circle cx="320" cy="60" r="55" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.6" />
            <circle cx="320" cy="60" r="32" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.85" />
            <circle cx="320" cy="60" r="6" fill={s.accent} />
            <line x1="0" y1="180" x2="400" y2="100" stroke={s.accent} strokeWidth="1" opacity="0.45" />
            <line x1="0" y1="200" x2="400" y2="120" stroke={s.accent} strokeWidth="1" opacity="0.25" />
          </>
        ) : (
          <>
            <rect x="40" y="40" width="90" height="90" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.7" />
            <rect x="60" y="60" width="90" height="90" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.45" />
            <rect x="80" y="80" width="90" height="90" fill={s.accent} opacity="0.15" />
            <line x1="200" y1="0" x2="200" y2="225" stroke={s.accent} strokeWidth="1" opacity="0.25" strokeDasharray="3 5" />
            <circle cx="320" cy="160" r="40" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.6" />
          </>
        )}
      </svg>

      {/* Category badge on thumbnail */}
      <div
        className="absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
        style={{
          background: "rgba(8,8,8,0.78)",
          backdropFilter: "blur(6px)",
          color: s.accent,
          border: `1px solid ${s.accent}55`,
        }}
      >
        {s.label}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [active, setActive] = useState<"all" | BlogCategoryId>("all");

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

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>
      {/* HERO — distinct dark-blue color block */}
      <section
        className="px-5 md:px-12 pt-[120px] pb-14 md:pt-[160px] md:pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a0d20 0%, #080808 100%)" }}
      >
        {/* Background grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#444CE7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="mx-auto max-w-[1280px] relative">
          <span className="block text-[11px] font-medium text-[#444CE7] uppercase tracking-[0.12em] mb-4">
            — Insights & Analysis
          </span>
          <h1
            className="text-[#F0EBE0] font-light tracking-tight"
            style={{ fontSize: "clamp(36px, 5.2vw, 64px)", lineHeight: 1.05, marginBottom: 20 }}
          >
            The Incluence <span style={{ color: "#444CE7" }}>Journal</span>
          </h1>
          <p className="text-[#9A9590] max-w-[680px]" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Field notes from our legal desk on licensing, company formation, banking
            and offshore structuring for FinTech, Crypto and high-risk businesses.
          </p>

          {/* Mini-stats strip */}
          <div className="grid grid-cols-3 max-w-[560px] mt-10" style={{ gap: 1, background: "rgba(255,255,255,0.08)" }}>
            {[
              { v: posts.length.toString(), l: "Articles" },
              { v: BLOG_CATEGORIES.length.toString(), l: "Topics" },
              { v: "Weekly", l: "Updated" },
            ].map((s) => (
              <div key={s.l} className="px-5 py-4" style={{ background: "#0a0d20" }}>
                <div className="text-[#F0EBE0] font-light" style={{ fontSize: 22 }}>{s.v}</div>
                <div className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS — sticky, sharp contrast */}
      <section
        className="px-5 md:px-12 sticky top-[64px] z-20"
        style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto max-w-[1280px] py-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em] mr-3">
            Filter:
          </span>
          {[{ id: "all" as const, label: "All Articles" }, ...BLOG_CATEGORIES].map((c) => {
            const isActive = active === c.id;
            const accent = c.id === "all" ? "#F0EBE0" : CATEGORY_STYLES[c.id as BlogCategoryId]?.accent ?? "#444CE7";
            const count = c.id === "all" ? posts.length : posts.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="text-[12px] px-4 py-2 transition-all duration-150 cursor-pointer border flex items-center gap-2"
                style={{
                  fontFamily: "inherit",
                  background: isActive ? `${accent}1A` : "transparent",
                  borderColor: isActive ? `${accent}88` : "rgba(255,255,255,0.08)",
                  color: isActive ? "#F0EBE0" : "#9A9590",
                }}
              >
                <span
                  className="inline-block"
                  style={{ width: 6, height: 6, background: accent, borderRadius: 0 }}
                />
                {c.label}
                <span className="text-[10px] text-[#5A5550]">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="px-5 md:px-12 pt-12 md:pt-16" style={{ background: "#080808" }}>
          <div className="mx-auto max-w-[1280px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-medium text-[#444CE7] uppercase tracking-[0.14em]">— Featured</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            <Link
              to={`/blog/${featured.slug}`}
              className="group block no-underline"
              style={{
                background: CATEGORY_STYLES[featured.category].cardBg,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <PostThumbnail category={featured.category} title={featured.title} />
                <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                       style={{ background: CATEGORY_STYLES[featured.category].accent }} />
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[10px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: CATEGORY_STYLES[featured.category].accent }}
                    >
                      {CATEGORY_STYLES[featured.category].label}
                    </span>
                    <span className="text-[10px] text-[#5A5550]">·</span>
                    <span className="text-[10px] text-[#5A5550]">{formatDate(featured.publishedAt)}</span>
                    <span className="text-[10px] text-[#5A5550]">·</span>
                    <span className="text-[10px] text-[#5A5550]">{featured.readingTime} min</span>
                  </div>
                  <h2
                    className="text-[#F0EBE0] font-light tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.2 }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#9A9590] mb-6" style={{ fontSize: 14.5, lineHeight: 1.7 }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5"
                       style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-[11px] text-[#9A9590]">{featured.author}</span>
                    <span
                      className="text-[11px] uppercase tracking-[0.14em] flex items-center gap-2"
                      style={{ color: CATEGORY_STYLES[featured.category].accent }}
                    >
                      Read article
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="px-5 md:px-12 py-12 md:py-20" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[1280px]">
          {rest.length > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-medium text-[#444CE7] uppercase tracking-[0.14em]">— All articles</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em]">{filtered.length} total</span>
            </div>
          )}

          {filtered.length === 0 ? (
            <p className="text-[#5A5550] text-[14px]">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {rest.map((post) => {
                const s = CATEGORY_STYLES[post.category];
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block no-underline relative overflow-hidden flex flex-col"
                    style={{ background: s.cardBg, transition: "background 0.25s" }}
                  >
                    <PostThumbnail category={post.category} title={post.title} />

                    <div className="p-7 flex-1 flex flex-col relative">
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                           style={{ background: s.accent }} />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] text-[#5A5550]">{formatDate(post.publishedAt)}</span>
                        <span className="text-[10px] text-[#5A5550]">·</span>
                        <span className="text-[10px] text-[#5A5550]">{post.readingTime} min read</span>
                      </div>

                      <h3
                        className="text-[#F0EBE0] font-light tracking-tight mb-3 group-hover:text-white transition-colors"
                        style={{ fontSize: 19, lineHeight: 1.3 }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-[#9A9590] mb-6 flex-1" style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 mt-auto"
                           style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <span className="text-[11px] text-[#5A5550]">{post.author}</span>
                        <span
                          className="text-[11px] uppercase tracking-[0.14em] flex items-center gap-1.5 transition-transform group-hover:translate-x-1"
                          style={{ color: s.accent }}
                        >
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="px-5 md:px-12 py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #0a0d20 0%, #0d0d0d 100%)",
          borderTop: "1px solid rgba(68,76,231,0.18)",
        }}
      >
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="block text-[11px] font-medium text-[#444CE7] uppercase tracking-[0.12em] mb-3">
              — Need tailored advice?
            </span>
            <h2 className="text-[#F0EBE0] font-light tracking-tight" style={{ fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.2 }}>
              Discuss your project with our legal desk.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 py-3.5 text-[13px] uppercase tracking-[0.14em] no-underline"
            style={{ background: "#444CE7", color: "#F0EBE0", border: "1px solid #444CE7" }}
          >
            Get Free Consultation <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
