import { Link } from "react-router-dom";

/* ── Types ── */
export interface RelatedItem {
  href: string;
  reg: string;
  name: string;
  desc: string;
}

interface RelatedJurisdictionsProps {
  tag?: string;
  title?: string;
  items: RelatedItem[];
  /** Override section background. Default #111111 */
  bg?: string;
}

/* ── Sub-components (private) ── */
const CornerAccent = () => (
  <div className="absolute top-0 right-0 pointer-events-none">
    <div className="w-[24px] h-[1px] bg-[#444CE7]/40" />
    <div className="w-[1px] h-[24px] bg-[#444CE7]/40 ml-auto" />
  </div>
);

const ScanSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#444CE7]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </div>
);

/* ── Component ── */
const RelatedJurisdictions = ({
  tag = "— Related Licenses",
  title = "Other Jurisdictions",
  items,
  bg = "#111111",
}: RelatedJurisdictionsProps) => (
  <section style={{ background: bg, padding: "72px 48px" }}>
    <div className="max-w-screen-xl mx-auto">
      <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
        {tag}
      </span>
      <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">
        {title}
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {items.map((r) => (
          <Link
            key={r.name}
            to={r.href}
            className="block p-7 group relative overflow-hidden no-underline transition-colors hover:bg-[#0f0f0f]"
            style={{ background: bg }}
          >
            <CornerAccent />
            <ScanSweep />
            {/* bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />
            {/* reg badge */}
            <span className="text-[10px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-2">
              {r.reg}
            </span>
            {/* name */}
            <h3 className="text-[18px] font-light text-[#F0EBE0] mb-3">
              {r.name}
            </h3>
            {/* description */}
            <p className="text-[13px] text-[#9A9590] leading-[1.7]">{r.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedJurisdictions;
