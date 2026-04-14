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
  tax: string;
  capital: string;
  games: string[];
  renewal: string;
  privacy: string;
  banking: string;
  reputation: string;
  remote: boolean;
}

const JURISDICTIONS: Record<string, JurisdictionData> = {
  malta: { name: 'Malta', reg: 'MGA', flag: '🇲🇹', region: 'EU', cost: '€25,000', timeline: '6–9 mo', tax: '35% (refund to 5%)', capital: '€100,000', games: ['Casino', 'Sports', 'Poker', 'Live'], renewal: 'Annual', privacy: 'Low', banking: 'Excellent', reputation: 'Tier 1', remote: true },
  curacao: { name: 'Curaçao', reg: 'CGA', flag: '🇨🇼', region: 'Caribbean', cost: '€15,000', timeline: '3–4 mo', tax: '2% offshore', capital: 'None', games: ['Casino', 'Sports', 'Poker', 'Live', 'Crypto'], renewal: 'Annual', privacy: 'Medium', banking: 'Good', reputation: 'Tier 2', remote: true },
  gibraltar: { name: 'Gibraltar', reg: 'GBGA', flag: '🇬🇮', region: 'UK Territory', cost: '£30,000', timeline: '6–12 mo', tax: '10%', capital: '£100,000', games: ['Casino', 'Sports', 'Poker'], renewal: 'Annual', privacy: 'Low', banking: 'Excellent', reputation: 'Tier 1', remote: false },
  iom: { name: 'Isle of Man', reg: 'GSC', flag: '🇮🇲', region: 'Crown Dependency', cost: '£25,000', timeline: '6–12 mo', tax: '0%', capital: '£100,000', games: ['Casino', 'Sports', 'Poker', 'Live'], renewal: 'Annual', privacy: 'Medium', banking: 'Excellent', reputation: 'Tier 1', remote: false },
  costarica: { name: 'Costa Rica', reg: 'Municipality', flag: '🇨🇷', region: 'Americas', cost: '$15,000', timeline: '2–5 wk', tax: '0% offshore', capital: 'None', games: ['Casino', 'Sports', 'Poker', 'Live', 'Crypto'], renewal: 'None', privacy: 'High', banking: 'Limited', reputation: 'Tier 3', remote: true },
  cyprus: { name: 'Cyprus', reg: 'CySEC', flag: '🇨🇾', region: 'EU', cost: '€30,000', timeline: '4–6 mo', tax: '12.5%', capital: '€200,000', games: ['Casino', 'Sports'], renewal: 'Annual', privacy: 'Low', banking: 'Good', reputation: 'Tier 1', remote: false },
};

const ROWS: { key: keyof JurisdictionData; label: string; type: string }[] = [
  { key: 'cost', label: 'License Cost', type: 'value' },
  { key: 'timeline', label: 'Timeline', type: 'value' },
  { key: 'tax', label: 'Tax Rate', type: 'value' },
  { key: 'capital', label: 'Capital Requirement', type: 'value' },
  { key: 'games', label: 'Permitted Games', type: 'tags' },
  { key: 'banking', label: 'Banking Access', type: 'rating' },
  { key: 'reputation', label: 'Reputation Tier', type: 'tier' },
  { key: 'privacy', label: 'Privacy Level', type: 'privacy' },
  { key: 'remote', label: 'Remote Application', type: 'bool' },
  { key: 'renewal', label: 'License Renewal', type: 'value' },
];

const TierDisplay = ({ tier }: { tier: string }) => {
  const n = tier === 'Tier 1' ? 3 : tier === 'Tier 2' ? 2 : 1;
  const color = tier === 'Tier 1' ? '#444CE7' : tier === 'Tier 2' ? '#9A9590' : '#5A5550';
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map(i => (
        <div key={i} className="w-2 h-2" style={{ background: i < n ? '#444CE7' : 'rgba(255,255,255,0.08)' }} />
      ))}
      <span style={{ fontSize: 12, color }}>{tier}</span>
    </div>
  );
};

const CellValue = ({ row, j }: { row: typeof ROWS[number]; j: JurisdictionData }) => {
  const val = j[row.key];

  if (row.type === 'tags' && Array.isArray(val)) {
    return (
      <div className="flex flex-wrap gap-1">
        {val.map(t => (
          <span key={t} style={{ fontSize: 10, color: '#9A9590', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 8px', textTransform: 'uppercase' }}>{t}</span>
        ))}
      </div>
    );
  }

  if (row.type === 'rating') {
    const color = val === 'Excellent' ? '#22c55e' : val === 'Limited' ? '#f59e0b' : '#F0EBE0';
    return <span style={{ fontSize: 13, fontWeight: 500, color }}>{val as string}</span>;
  }

  if (row.type === 'tier') return <TierDisplay tier={val as string} />;

  if (row.type === 'privacy') {
    const color = val === 'High' ? '#22c55e' : val === 'Medium' ? '#f59e0b' : '#9A9590';
    return <span style={{ fontSize: 13, color }}>{val as string}</span>;
  }

  if (row.type === 'bool') {
    return <span style={{ fontSize: 13, color: val ? '#444CE7' : '#5A5550' }}>{val ? 'Yes' : 'No'}</span>;
  }

  return <span style={{ fontSize: 13, fontWeight: 500, color: '#F0EBE0' }}>{val as string}</span>;
};

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
    <section style={{ background: '#111111', padding: '72px 48px' }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        <SectionTag style={{ marginBottom: 12 }}>Jurisdiction Comparison</SectionTag>
        <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 44, fontWeight: 300, color: '#F0EBE0', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Compare Licensing Jurisdictions{'\n'}Side by Side
        </h2>
        <p style={{ fontSize: 15, color: '#9A9590', maxWidth: 520, margin: 0 }}>
          Select up to 3 jurisdictions to compare costs, timelines, tax rates, and requirements in real time.
        </p>

        {/* Chips */}
        <div className="flex gap-2 flex-wrap" style={{ marginTop: 32, marginBottom: 40 }}>
          {Object.entries(JURISDICTIONS).map(([key, j]) => {
            const active = selected.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="flex items-center gap-2 transition-all duration-150"
                style={{
                  padding: '8px 16px',
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

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ width: 180, minWidth: 180, background: '#0d0d0d', fontSize: 10, color: '#5A5550', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'left', fontWeight: 500 }}>
                  Metric
                </th>
                {selectedData.map(j => (
                  <th key={j.key} style={{ minWidth: 180, background: '#0d0d0d', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', borderLeft: '1px solid rgba(255,255,255,0.04)', textAlign: 'left', fontWeight: 400 }}>
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
                  <td style={{ padding: '16px 20px', fontSize: 12, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.06em', width: 180, minWidth: 180, borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                    {row.label}
                  </td>
                  {selectedData.map(j => (
                    <td key={j.key} style={{ padding: '16px 20px', borderLeft: '1px solid rgba(255,255,255,0.04)', minWidth: 180 }}>
                      <CellValue row={row} j={j} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between" style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
