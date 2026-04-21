import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Clock, User, Calendar, Link2, Twitter, Linkedin } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { BLOG_POSTS, type BlogCategoryId, type BlogPost } from "@/data/blogPosts";

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

// Match BlogPage palette
const CATEGORY_STYLES: Record<BlogCategoryId, { accent: string; soft: string; bg: string; label: string }> = {
  "licensing": {
    accent: "#444CE7",
    soft: "rgba(68,76,231,0.10)",
    bg: "linear-gradient(135deg, #0f1535 0%, #1a1f4a 50%, #0d0d0d 100%)",
    label: "Licensing",
  },
  "company-offshore": {
    accent: "#D4A95A",
    soft: "rgba(212,169,90,0.10)",
    bg: "linear-gradient(135deg, #2a1f0f 0%, #3a2c14 50%, #0d0d0d 100%)",
    label: "Company & Offshore",
  },
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

// Decorative hero visual — same family as BlogPage thumbnails, larger
const HeroVisual = ({ category }: { category: BlogCategoryId }) => {
  const s = CATEGORY_STYLES[category];
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", background: s.bg }}>
      <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`hero-dots-${category}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill={s.accent} opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hero-dots-${category})`} />
      </svg>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 343" preserveAspectRatio="xMidYMid slice">
        <circle cx="640" cy="120" r="90" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.6" />
        <circle cx="640" cy="120" r="55" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.85" />
        <circle cx="640" cy="120" r="10" fill={s.accent} />
        <line x1="0" y1="280" x2="800" y2="180" stroke={s.accent} strokeWidth="1" opacity="0.35" />
        <line x1="0" y1="310" x2="800" y2="210" stroke={s.accent} strokeWidth="1" opacity="0.2" />
        <rect x="80" y="80" width="120" height="120" fill="none" stroke={s.accent} strokeWidth="1" opacity="0.5" />
        <rect x="110" y="110" width="120" height="120" fill={s.accent} opacity="0.10" />
      </svg>
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-1/2"
           style={{ background: "linear-gradient(180deg, transparent 0%, #080808 100%)" }} />
    </div>
  );
};

const BlogPostPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const fallback = BLOG_POSTS.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const { data } = useQuery<BlogPost | undefined>({
    queryKey: ["sanity", "blogPost", slug],
    queryFn: () => sanityClient.fetch(BLOG_DETAIL_QUERY, { slug }),
    enabled: isSanityConfigured() && !!slug,
    placeholderData: fallback,
    staleTime: 1000 * 60 * 5,
    select: (d) => (d && (d as BlogPost).title ? (d as BlogPost) : fallback),
  });

  const post = data ?? fallback;

  // SEO
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

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  // TOC entries derived from "## " headings
  const toc = useMemo(() => {
    if (!post) return [];
    return post.body
      .filter((b): b is string => typeof b === "string" && b.startsWith("## "))
      .map((h) => {
        const text = h.slice(3);
        return { id: slugify(text), text };
      });
  }, [post]);

  // Active heading via IntersectionObserver
  useEffect(() => {
    if (!toc.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc, post]);

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

  const cat = CATEGORY_STYLES[post.category];
  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  // Highlight one paragraph as a pull-quote per section (the longest paragraph between headings)
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Find the first non-heading paragraph index (drop-cap target)
  const firstParaIdx = post.body.findIndex((b) => typeof b === "string" && !b.startsWith("## "));

  // Designate one paragraph per document as a pull-quote (the longest)
  const pullQuoteIdx = (() => {
    let idx = -1;
    let max = 0;
    post.body.forEach((b, i) => {
      if (typeof b === "string" && !b.startsWith("## ") && b.length > max && b.length > 180) {
        max = b.length;
        idx = i;
      }
    });
    return idx;
  })();

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div style={{ background: "#080808", minHeight: "100vh", fontFamily: "Manrope, sans-serif" }}>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[2px]"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, background: cat.accent }}
        />
      </div>

      {/* HERO */}
      <section className="px-5 md:px-12 pt-[110px] md:pt-[140px] pb-0" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[1100px]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-[#9A9590] hover:text-[#F0EBE0] no-underline mb-8 transition-colors"
            style={{ fontSize: 12 }}
          >
            <ChevronLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.14em] px-2.5 py-1 border"
              style={{ color: cat.accent, background: cat.soft, borderColor: `${cat.accent}55` }}
            >
              {cat.label}
            </span>
            <span className="text-[10px] text-[#5A5550] inline-flex items-center gap-1.5">
              <Calendar size={11} /> {formatDate(post.publishedAt)}
            </span>
            <span className="text-[10px] text-[#5A5550] inline-flex items-center gap-1.5">
              <Clock size={11} /> {post.readingTime} min read
            </span>
            <span className="text-[10px] text-[#5A5550] inline-flex items-center gap-1.5">
              <User size={11} /> {post.author}
            </span>
          </div>

          <h1
            className="text-[#F0EBE0] font-light tracking-tight"
            style={{ fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: 1.08, marginBottom: 22 }}
          >
            {post.title}
          </h1>
          <p className="text-[#9A9590] max-w-[760px]" style={{ fontSize: 17, lineHeight: 1.65 }}>
            {post.excerpt}
          </p>
        </div>

        {/* Hero visual */}
        <div className="mx-auto max-w-[1280px] mt-10 md:mt-14" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <HeroVisual category={post.category} />
        </div>
      </section>

      {/* BODY + TOC */}
      <article className="px-5 md:px-12 pb-16 md:pb-24" style={{ background: "#080808" }}>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-16 pt-12 md:pt-16">
          {/* Body column */}
          <div className="min-w-0">
            {post.body.map((block, i) => {
              if (typeof block !== "string") return null;

              if (block.startsWith("## ")) {
                const text = block.slice(3);
                const id = slugify(text);
                return (
                  <h2
                    key={i}
                    id={id}
                    className="text-[#F0EBE0] font-light tracking-tight relative scroll-mt-32"
                    style={{ fontSize: 26, lineHeight: 1.22, marginTop: 48, marginBottom: 18 }}
                  >
                    <span
                      className="absolute -left-5 top-1/2 -translate-y-1/2 hidden md:block"
                      style={{ width: 3, height: 22, background: cat.accent }}
                    />
                    {text}
                  </h2>
                );
              }

              // Pull-quote treatment
              if (i === pullQuoteIdx) {
                return (
                  <blockquote
                    key={i}
                    className="my-8 px-6 md:px-8 py-6 md:py-7 relative"
                    style={{
                      background: cat.soft,
                      borderLeft: `3px solid ${cat.accent}`,
                    }}
                  >
                    <div
                      className="absolute -top-2 left-4 text-[60px] leading-none font-serif select-none"
                      style={{ color: cat.accent, opacity: 0.35 }}
                      aria-hidden
                    >
                      “
                    </div>
                    <p
                      className="text-[#F0EBE0] font-light italic relative"
                      style={{ fontSize: 18, lineHeight: 1.6 }}
                    >
                      {block}
                    </p>
                  </blockquote>
                );
              }

              // First paragraph drop-cap
              if (i === firstParaIdx) {
                const first = block.charAt(0);
                const rest = block.slice(1);
                return (
                  <p
                    key={i}
                    className="text-[#C8C3BC]"
                    style={{ fontSize: 16.5, lineHeight: 1.85, marginBottom: 22 }}
                  >
                    <span
                      className="float-left mr-3 mt-1 font-light leading-none"
                      style={{
                        fontSize: 56,
                        color: cat.accent,
                        lineHeight: 0.9,
                      }}
                    >
                      {first}
                    </span>
                    {rest}
                  </p>
                );
              }

              return (
                <p
                  key={i}
                  className="text-[#C8C3BC]"
                  style={{ fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}
                >
                  {block}
                </p>
              );
            })}

            {/* Author / share footer */}
            <div
              className="mt-14 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{ borderTop: `1px solid rgba(255,255,255,0.08)` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center text-[#F0EBE0] text-[14px] font-light"
                  style={{ background: cat.soft, border: `1px solid ${cat.accent}55` }}
                >
                  {post.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-[#F0EBE0] text-[13px]">{post.author}</div>
                  <div className="text-[#5A5550] text-[11px] uppercase tracking-[0.12em] mt-0.5">
                    {cat.label} · {formatDate(post.publishedAt)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em] mr-2">Share</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-[#9A9590] hover:text-[#F0EBE0] transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  aria-label="Share on Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-[#9A9590] hover:text-[#F0EBE0] transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <button
                  onClick={handleCopy}
                  className="w-9 h-9 flex items-center justify-center text-[#9A9590] hover:text-[#F0EBE0] transition-colors cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "transparent" }}
                  aria-label="Copy link"
                >
                  <Link2 size={14} />
                </button>
                {copied && <span className="text-[10px] text-[#5A5550] ml-1">Copied!</span>}
              </div>
            </div>
          </div>

          {/* TOC column (sticky) */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <div
                  className="px-5 py-5"
                  style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ width: 6, height: 6, background: cat.accent }} />
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#9A9590]">
                      In this article
                    </span>
                  </div>
                  <nav className="flex flex-col">
                    {toc.map((t, idx) => {
                      const isActive = activeId === t.id;
                      return (
                        <a
                          key={t.id}
                          href={`#${t.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(t.id);
                            if (el) {
                              const top = el.getBoundingClientRect().top + window.scrollY - 100;
                              window.scrollTo({ top, behavior: "smooth" });
                            }
                          }}
                          className="block py-2 no-underline transition-colors group relative pl-4"
                          style={{
                            color: isActive ? "#F0EBE0" : "#9A9590",
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            borderLeft: `1px solid ${isActive ? cat.accent : "rgba(255,255,255,0.06)"}`,
                          }}
                        >
                          <span className="text-[10px] text-[#5A5550] mr-2">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {t.text}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Mini CTA under TOC */}
                <Link
                  to="/contact"
                  className="block mt-4 px-5 py-5 no-underline group"
                  style={{
                    background: cat.soft,
                    border: `1px solid ${cat.accent}55`,
                  }}
                >
                  <span className="block text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: cat.accent }}>
                    Need help?
                  </span>
                  <span className="block text-[#F0EBE0] text-[13px] font-light leading-snug mb-3">
                    Talk to our legal desk about this topic.
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: cat.accent }}>
                    Start a project →
                  </span>
                </Link>
              </div>
            </aside>
          )}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-5 md:px-12 py-12 md:py-16"
                 style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="mx-auto max-w-[1100px]">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: cat.accent }}>
                — Continue reading
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}>
              {related.map((p) => {
                const ps = CATEGORY_STYLES[p.category];
                return (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="block no-underline relative overflow-hidden group p-7"
                    style={{ background: "#080808" }}
                  >
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                         style={{ background: ps.accent }} />
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em]" style={{ color: ps.accent }}>
                      {ps.label}
                    </span>
                    <h3 className="text-[#F0EBE0] font-light mt-4 group-hover:translate-x-1 transition-transform"
                        style={{ fontSize: 19, lineHeight: 1.3 }}>
                      {p.title}
                    </h3>
                    <p className="text-[#9A9590] mt-3" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{p.excerpt}</p>
                    <div className="mt-5 pt-4 flex items-center justify-between"
                         style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-[11px] text-[#5A5550]">{p.readingTime} min read</span>
                      <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: ps.accent }}>
                        Read →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
