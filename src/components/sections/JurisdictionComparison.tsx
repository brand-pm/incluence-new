import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTag from "@/components/SectionTag";
import FlagEmoji from "@/components/FlagEmoji";

interface JurisdictionData {
  name: string;
  reg: string;
  flag: string;
  region: string;
  cost: string;
  timeline: string;
  capital: string;
  licenseType: string;
  market: string;
  validity: string;
  presence: string;
  renewal: string;
  banking: string;
  reputation: string;
  remote: boolean;
}

const JURISDICTIONS: Record<string, JurisdictionData> = {
  malta: { name: 'Malta', reg: 'MGA', flag: '🇲🇹', region: 'EU', cost: 'On request', timeline: '~6 months', capital: '€100,000', licenseType: 'B2C / B2B', market: 'EU passporting', validity: '5 years', presence: 'Required', renewal: '—', banking: 'Excellent', reputation: 'Tier 1', remote: false },
  curacao: { name: 'Curaçao', reg: 'CGA', flag: '🇨🇼', region: 'Caribbean', cost: 'From €15,000', timeline: '3–4 months', capital: 'None', licenseType: 'Master / Sub', market: 'Global', validity: '—', presence: 'Not required', renewal: 'Annual', banking: 'Good', reputation: 'Tier 2', remote: true },
  iom: { name: 'Isle of Man', reg: 'GSC', flag: '🇮🇲', region: 'Crown Dependency', cost: 'On request', timeline: '6–12 months', capital: 'On request', licenseType: 'All verticals', market: 'Crown Dependency', validity: '5 years', presence: 'Required', renewal: 'Annual', banking: 'Excellent', reputation: 'Tier 1', remote: false },
  costarica: { name: 'Costa Rica', reg: 'Municipality', flag: '🇨🇷', region: 'Americas', cost: '$15,000', timeline: '2–5 weeks', capital: '25% of share capital', licenseType: 'Data Processing', market: 'International', validity: 'Annual', presence: 'Office required', renewal: '$1,500/quarter', banking: 'Limited', reputation: 'Tier 3', remote: true },
};

const ROWS: { key: keyof JurisdictionData; label: string; type: string }[] = [
  { key: 'cost', label: 'License Cost', type: 'value' },
  { key: 'timeline', label: 'Timeline', type: 'value' },
  { key: 'capital', label: 'Capital Requirement', type: 'value' },
  { key: 'licenseType', label: 'License Type', type: 'value' },
  { key: 'market', label: 'Target Market', type: 'value' },
  { key: 'validity', label: 'Validity', type: 'value' },
  { key: 'presence', label: 'Physical Presence', type: 'value' },
  { key: 'renewal', label: 'Renewal', type: 'value' },
  { key: 'banking', label: 'Banking Access', type: 'rating' },
  { key: 'reputation', label: 'Reputation Tier', type: 'tier' },
  { key: 'remote', label: 'Remote Application', type: 'bool' },
];

const TierDisplay = ({ tier }: { tier: string }) => {
  const n = tier === 'Tier 1' ? 3 : tier === 'Tier 2' ? 2 : 1;
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map(i => (
        <div key={i} className="w-2 h-2" style={{ background: i < n ? '#444CE7' : 'rgba(255,255,255,0.08)' }} />
      ))}
      <span style={{ fontSize: 12, color: '#444CE7' }}>{tier}</span>
    </div>
  );
};

const CellValue = ({ row, j }: { row: typeof ROWS[number]; j: JurisdictionData }) => {
  const val = j[row.key];

  if (row.type === 'rating') {
    const color = val === 'Excellent' ? '#22c55e' : val === 'Limited' ? '#f59e0b' : '#F0EBE0';
    return <span style={{ fontSize: 13, fontWeight: 500, color }}>{val as string}</span>;
  }

  if (row.type === 'tier') return <TierDisplay tier={val as string} />;

  if (row.type === 'bool') {
    return <span style={{ fontSize: 13, color: val ? '#444CE7' : '#5A5550' }}>{val ? 'Yes' : 'No'}</span>;
  }

  return <span style={{ fontSize: 13, fontWeight: 500, color: '#F0EBE0' }}>{val as string}</span>;
};

/* ── Mobile card view ── */
const MobileComparisonCard = ({ j }: { j: JurisdictionData & { key: string } }) => (
  <div style={{ background: '#111111', padding: '20px', marginBottom: 1 }}>
    <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
      <FlagEmoji flag={j.flag} size={20} />
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#F0EBE0' }}>{j.name}</div>
        <div style={{ fontSize: 11, color: '#444CE7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{j.reg}</div>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 16px' }}>
      {ROWS.map(row => (
        <div key={row.key}>
          <div style={{ fontSize: 10, color: '#5A5550', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{row.label}</div>
          <CellValue row={row} j={j} />
        </div>
      ))}
    </div>
  </div>
);

const JurisdictionComparison = () => {
  const [selected, setSelected] = useState<string[]>(['malta', 'curacao']);

  const toggle = (key: string) => {
    setSelected(prev => {
      if (prev.includes(key)) {
        if (prev.length <= 2) return prev;
        return prev.filter(k => k !== key);
      }
      if (prev.length >= 3) return [...prev.slice(1), key];
      return [...prev, key];
    });
  };

  const selectedData = selected.map(k => ({ key: k, ...JURISDICTIONS[k] }));

  return (
    <section className="py-12 px-5 md:py-[72px] md:px-12" style={{ background: '#0d0d0d' }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionTag style={{ marginBottom: 12 }}>Jurisdiction Comparison</SectionTag>
        <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300, color: '#F0EBE0', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16, fontSize: 'clamp(26px, 5vw, 44px)' }}>
          Compare Gambling Jurisdictions{'\n'}Side by Side
        </h2>
        <p style={{ fontSize: 15, color: '#9A9590', maxWidth: 520, margin: 0 }}>
          Select up to 3 jurisdictions to compare timelines, requirements, and licensing conditions.
        </p>

        {/* Chips */}
        <div className="flex gap-2 flex-wrap" style={{ marginTop: 24, marginBottom: 32 }}>
          {Object.entries(JURISDICTIONS).map(([key, j]) => {
            const active = selected.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="flex items-center gap-2 transition-all duration-150"
                style={{
                  padding: '8px 14px',
                  fontSize: 13,
                  border: `1px solid ${active ? '#444CE7' : 'rgba(255,255,255,0.1)'}`,
                  background: active ? '#444CE7' : 'transparent',
                  color: active ? '#fff' : '#9A9590',
                  cursor: 'pointer',
                }}
              >
                <FlagEmoji flag={j.flag} size={16} />
                {j.name}
              </button>
            );
          })}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ width: 180, minWidth: 160, background: '#0d0d0d', fontSize: 10, color: '#5A5550', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'left', fontWeight: 500 }}>
                  Metric
                </th>
                {selectedData.map(j => (
                  <th key={j.key} style={{ minWidth: 160, background: '#0d0d0d', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.04)', textAlign: 'left', fontWeight: 400 }}>
                    <FlagEmoji flag={j.flag} size={20} />
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#F0EBE0', marginTop: 4 }}>{j.name}</div>
                    <div style={{ fontSize: 11, color: '#444CE7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{j.reg}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr key={row.key} style={{ background: ri % 2 === 0 ? '#080808' : '#0d0d0d' }}>
                  <td style={{ padding: '16px 20px', fontSize: 12, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.06em', width: 180, minWidth: 160, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                    {row.label}
                  </td>
                  {selectedData.map(j => (
                    <td key={j.key} style={{ padding: '16px 20px', borderLeft: '1px solid rgba(255,255,255,0.04)', minWidth: 160 }}>
                      <CellValue row={row} j={j} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {selectedData.map(j => (
            <MobileComparisonCard key={j.key} j={j} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: 13, color: '#9A9590', maxWidth: 500 }}>
            Need a detailed breakdown? Our attorneys prepare jurisdiction analysis reports tailored to your business model.
          </span>
          <Link
            to="/contact"
            className="no-underline shrink-0 transition-colors"
            style={{ padding: '10px 24px', background: '#444CE7', color: '#fff', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.07em', textDecoration: 'none' }}
          >
            Get Full Analysis →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JurisdictionComparison;
