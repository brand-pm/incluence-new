import React from "react";

const GridPattern = ({ id = "grid" }: { id?: string }) => (
  <defs>
    <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </pattern>
  </defs>
);

const CornerMarks = () => (
  <>
    <path d="M 20 20 L 20 35 M 20 20 L 35 20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <path d="M 380 20 L 380 35 M 380 20 L 365 20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <path d="M 20 280 L 20 265 M 20 280 L 35 280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <path d="M 380 280 L 380 265 M 380 280 L 365 280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
  </>
);

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px] opacity-100">
    {children}
  </svg>
);

/* ── Curaçao ── */
export const CuracaoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="cw-grid" />
    <rect width="400" height="300" fill="url(#cw-grid)" />
    <path d="M 60 160 C 80 140 120 130 160 135 C 200 140 240 128 280 132 C 310 135 330 145 340 155 C 350 165 345 178 330 182 C 310 187 280 180 250 178 C 220 176 190 182 160 180 C 130 178 100 175 80 172 C 65 170 55 168 60 160 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="198" cy="155" r="4" fill="#444CE7" />
    <circle cx="198" cy="155" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="198" cy="155" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="212" y="150" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">WILLEMSTAD</text>
    <rect x="148" y="195" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">CGA</text>
    <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.08em">CURAÇAO GAMING AUTHORITY</text>
    <line x1="40" y1="155" x2="148" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="360" y1="155" x2="252" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">12°N · 69°W · DUTCH CARIBBEAN</text>
  </Wrapper>
);

/* ── Malta ── */
export const MaltaHeroVisual = () => (
  <Wrapper>
    <GridPattern id="mt-grid" />
    <rect width="400" height="300" fill="url(#mt-grid)" />
    {/* Malta island */}
    <path d="M 160 120 C 175 108 210 100 240 105 C 265 110 280 122 285 138 C 290 155 278 170 260 175 C 240 180 215 178 195 172 C 175 166 158 155 155 140 C 153 130 155 125 160 120 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    {/* Gozo */}
    <path d="M 145 95 C 155 88 175 86 185 92 C 192 96 190 106 182 110 C 172 114 152 112 148 105 C 145 100 143 98 145 95 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    {/* Valletta */}
    <circle cx="230" cy="135" r="4" fill="#444CE7" />
    <circle cx="230" cy="135" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="230" cy="135" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="244" y="130" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">VALLETTA</text>
    {/* MGA badge */}
    <rect x="148" y="200" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">MGA</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.08em">MALTA GAMING AUTHORITY</text>
    <line x1="60" y1="135" x2="148" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="135" x2="252" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">35°N · 14°E · EUROPEAN UNION</text>
  </Wrapper>
);

/* ── Isle of Man ── */
export const IsleOfManHeroVisual = () => (
  <Wrapper>
    <GridPattern id="im-grid" />
    <rect width="400" height="300" fill="url(#im-grid)" />
    {/* Isle of Man */}
    <path d="M 175 80 C 190 70 215 68 230 78 C 245 88 252 110 250 135 C 248 160 238 185 225 195 C 210 205 195 200 185 188 C 175 175 168 155 165 130 C 162 108 165 90 175 80 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    {/* Douglas */}
    <circle cx="235" cy="140" r="4" fill="#444CE7" />
    <circle cx="235" cy="140" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="235" cy="140" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="250" y="135" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">DOUGLAS</text>
    {/* GSC badge */}
    <rect x="128" y="215" width="144" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="230" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">GSC</text>
    <text x="200" y="244" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">GAMBLING SUPERVISION COMMISSION</text>
    <line x1="60" y1="140" x2="128" y2="233" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="140" x2="272" y2="233" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">54°N · 4°W · BRITISH CROWN DEPENDENCY</text>
  </Wrapper>
);

/* ── Costa Rica ── */
export const CostaRicaHeroVisual = () => (
  <Wrapper>
    <GridPattern id="cr-grid" />
    <rect width="400" height="300" fill="url(#cr-grid)" />
    <path d="M 100 110 C 120 95 155 88 190 92 C 225 96 260 105 280 120 C 295 130 305 145 300 160 C 295 175 275 180 260 172 C 245 165 235 175 220 180 C 200 186 180 178 165 168 C 145 155 125 148 112 138 C 100 128 95 118 100 110 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="195" cy="140" r="4" fill="#444CE7" />
    <circle cx="195" cy="140" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="195" cy="140" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="210" y="135" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">SAN JOSÉ</text>
    <rect x="130" y="205" width="140" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="220" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">MUNICIPAL</text>
    <text x="200" y="234" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.08em">DATA PROCESSING LICENSE</text>
    <line x1="60" y1="140" x2="130" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="140" x2="270" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">10°N · 84°W · CENTRAL AMERICA</text>
  </Wrapper>
);

/* ═══════════════════════════════════════════════════════════
   FOREX CATEGORY
   ═══════════════════════════════════════════════════════════ */

/* ── Cyprus (Forex) ── */
export const CyprusForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="cy-fx-grid" />
    <rect width="400" height="300" fill="url(#cy-fx-grid)" />
    <path d="M 120 125 C 135 115 160 108 190 110 C 220 112 255 118 280 128 C 295 134 305 142 300 152 C 295 162 275 168 255 166 C 235 164 215 158 195 155 C 175 152 155 156 140 152 C 128 149 118 142 115 135 C 113 128 115 125 120 125 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="225" cy="135" r="4" fill="#444CE7" />
    <circle cx="225" cy="135" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="225" cy="135" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="240" y="130" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">NICOSIA</text>
    <rect x="138" y="195" width="124" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">CySEC</text>
    <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">SECURITIES & EXCHANGE COMMISSION</text>
    <line x1="50" y1="135" x2="138" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="135" x2="262" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">35°N · 33°E · EUROPEAN UNION</text>
  </Wrapper>
);

/* ── Malta (Forex) ── */
export const MaltaForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="mt-fx-grid" />
    <rect width="400" height="300" fill="url(#mt-fx-grid)" />
    <path d="M 160 120 C 175 108 210 100 240 105 C 265 110 280 122 285 138 C 290 155 278 170 260 175 C 240 180 215 178 195 172 C 175 166 158 155 155 140 C 153 130 155 125 160 120 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <path d="M 145 95 C 155 88 175 86 185 92 C 192 96 190 106 182 110 C 172 114 152 112 148 105 C 145 100 143 98 145 95 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <circle cx="230" cy="135" r="4" fill="#444CE7" />
    <circle cx="230" cy="135" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="230" cy="135" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="244" y="130" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">VALLETTA</text>
    <rect x="148" y="200" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">MFSA</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL SERVICES AUTHORITY</text>
    <line x1="60" y1="135" x2="148" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="135" x2="252" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">35°N · 14°E · EUROPEAN UNION</text>
  </Wrapper>
);

/* ── Vanuatu (Forex) ── */
export const VanuatuForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="vu-grid" />
    <rect width="400" height="300" fill="url(#vu-grid)" />
    {/* Vanuatu island chain — vertical */}
    <path d="M 185 60 C 192 55 198 58 200 65 C 202 72 198 82 195 88 C 192 92 188 90 186 84 C 184 78 182 68 185 60 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <path d="M 195 100 C 202 95 210 98 212 108 C 214 118 208 132 202 138 C 196 142 190 138 188 128 C 186 118 190 105 195 100 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <path d="M 200 148 C 208 142 216 146 218 156 C 220 168 214 182 208 190 C 202 196 195 192 192 182 C 190 172 194 155 200 148 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <path d="M 205 198 C 210 194 215 196 216 204 C 217 212 213 222 209 226 C 205 228 202 224 201 216 C 200 208 202 200 205 198 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <circle cx="202" cy="120" r="4" fill="#444CE7" />
    <circle cx="202" cy="120" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="202" cy="120" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="218" y="115" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">PORT VILA</text>
    <rect x="250" y="140" width="110" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="305" y="155" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">VFSC</text>
    <text x="305" y="169" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL SERVICES COMMISSION</text>
    <line x1="216" y1="120" x2="250" y2="158" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">17°S · 168°E · SOUTH PACIFIC</text>
  </Wrapper>
);

/* ── Mauritius (Forex) ── */
export const MauritiusForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="mu-grid" />
    <rect width="400" height="300" fill="url(#mu-grid)" />
    <path d="M 160 105 C 180 88 220 82 250 90 C 275 96 290 115 288 138 C 286 160 268 178 245 185 C 220 192 190 188 170 175 C 152 162 145 142 148 125 C 150 112 155 108 160 105 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="228" cy="130" r="4" fill="#444CE7" />
    <circle cx="228" cy="130" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="228" cy="130" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="243" y="125" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">PORT LOUIS</text>
    <rect x="148" y="205" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="220" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FSC</text>
    <text x="200" y="234" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL SERVICES COMMISSION</text>
    <line x1="60" y1="130" x2="148" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="130" x2="252" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">20°S · 57°E · INDIAN OCEAN</text>
  </Wrapper>
);

/* ── Montenegro (Forex) ── */
export const MontenegroForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="me-grid" />
    <rect width="400" height="300" fill="url(#me-grid)" />
    <path d="M 130 100 C 150 85 180 80 210 85 C 240 90 265 100 280 115 C 290 125 285 140 270 148 C 255 155 240 165 220 170 C 195 176 170 172 150 162 C 135 154 125 142 122 130 C 120 118 122 108 130 100 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="215" cy="132" r="4" fill="#444CE7" />
    <circle cx="215" cy="132" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="215" cy="132" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="230" y="127" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">PODGORICA</text>
    <rect x="148" y="200" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">SEC</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">SECURITIES EXCHANGE COMMISSION</text>
    <line x1="60" y1="132" x2="148" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="132" x2="252" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">42°N · 19°E · EU CANDIDATE</text>
  </Wrapper>
);

/* ── Seychelles (Forex) ── */
export const SeychellesForexHeroVisual = () => (
  <Wrapper>
    <GridPattern id="sc-grid" />
    <rect width="400" height="300" fill="url(#sc-grid)" />
    {/* Mahé island */}
    <path d="M 180 110 C 195 95 220 90 235 100 C 248 108 252 128 248 148 C 244 168 230 182 215 185 C 198 188 185 178 180 162 C 175 146 170 125 180 110 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    {/* Praslin */}
    <path d="M 255 85 C 262 80 272 82 275 90 C 278 98 274 108 268 112 C 262 114 255 110 253 102 C 251 94 252 88 255 85 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    {/* La Digue */}
    <path d="M 285 95 C 290 92 295 94 296 100 C 297 106 294 110 290 111 C 286 112 283 108 283 102 C 283 98 284 96 285 95 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <circle cx="210" cy="130" r="4" fill="#444CE7" />
    <circle cx="210" cy="130" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="210" cy="130" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="224" y="125" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">VICTORIA</text>
    <rect x="148" y="205" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="220" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FSA</text>
    <text x="200" y="234" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL SERVICES AUTHORITY</text>
    <line x1="60" y1="130" x2="148" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="130" x2="252" y2="223" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">4°S · 55°E · INDIAN OCEAN</text>
  </Wrapper>
);

/* ═══════════════════════════════════════════════════════════
   CRYPTO CATEGORY
   ═══════════════════════════════════════════════════════════ */

/* ── Estonia (Crypto) ── */
export const EstoniaCryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="ee-cr-grid" />
    <rect width="400" height="300" fill="url(#ee-cr-grid)" />
    <path d="M 80 115 C 100 100 140 92 180 95 C 220 98 260 105 300 110 C 325 113 340 120 338 130 C 336 140 318 148 295 150 C 270 152 240 148 210 145 C 180 142 150 148 120 145 C 95 142 78 135 76 128 C 74 122 76 118 80 115 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="260" cy="125" r="4" fill="#444CE7" />
    <circle cx="260" cy="125" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="260" cy="125" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="275" y="120" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">TALLINN</text>
    <rect x="148" y="195" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FIU</text>
    <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL INTELLIGENCE UNIT</text>
    <line x1="50" y1="125" x2="148" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="125" x2="252" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">59°N · 24°E · EUROPEAN UNION</text>
  </Wrapper>
);

/* ── USA (Crypto) ── */
export const USACryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="us-cr-grid" />
    <rect width="400" height="300" fill="url(#us-cr-grid)" />
    <path d="M 40 90 C 60 80 100 75 150 78 C 200 81 250 82 300 88 C 340 92 370 100 375 112 C 378 124 365 135 340 142 C 315 148 280 155 245 160 C 210 165 175 162 140 158 C 105 154 70 148 50 138 C 35 130 30 118 35 108 C 38 98 40 92 40 90 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="295" cy="118" r="4" fill="#444CE7" />
    <circle cx="295" cy="118" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="295" cy="118" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="310" y="113" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">WASHINGTON</text>
    <rect x="138" y="195" width="124" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FinCEN</text>
    <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL CRIMES ENFORCEMENT</text>
    <line x1="50" y1="118" x2="138" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="118" x2="262" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">38°N · 77°W · NORTH AMERICA</text>
  </Wrapper>
);

/* ── Switzerland (Crypto) ── */
export const SwitzerlandCryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="ch-cr-grid" />
    <rect width="400" height="300" fill="url(#ch-cr-grid)" />
    <path d="M 110 105 C 130 90 170 82 210 85 C 250 88 285 98 305 112 C 318 122 315 138 298 148 C 278 158 250 162 220 160 C 190 158 160 150 140 140 C 122 132 108 122 105 115 C 103 110 106 107 110 105 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="220" cy="125" r="4" fill="#444CE7" />
    <circle cx="220" cy="125" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="220" cy="125" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="235" y="120" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">BERN</text>
    <rect x="138" y="195" width="124" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FINMA</text>
    <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL MARKET SUPERVISORY AUTH.</text>
    <line x1="50" y1="125" x2="138" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="125" x2="262" y2="213" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">46°N · 7°E · CRYPTO VALLEY</text>
  </Wrapper>
);

/* ── Malta (Crypto) ── */
export const MaltaCryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="mt-cr-grid" />
    <rect width="400" height="300" fill="url(#mt-cr-grid)" />
    <path d="M 160 120 C 175 108 210 100 240 105 C 265 110 280 122 285 138 C 290 155 278 170 260 175 C 240 180 215 178 195 172 C 175 166 158 155 155 140 C 153 130 155 125 160 120 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <path d="M 145 95 C 155 88 175 86 185 92 C 192 96 190 106 182 110 C 172 114 152 112 148 105 C 145 100 143 98 145 95 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />
    <circle cx="230" cy="135" r="4" fill="#444CE7" />
    <circle cx="230" cy="135" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="230" cy="135" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="244" y="130" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">VALLETTA</text>
    <rect x="148" y="200" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">MFSA</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">VFA FRAMEWORK</text>
    <line x1="60" y1="135" x2="148" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="135" x2="252" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">35°N · 14°E · BLOCKCHAIN ISLAND</text>
  </Wrapper>
);

/* ── Lithuania (Crypto) ── */
export const LithuaniaCryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="lt-cr-grid" />
    <rect width="400" height="300" fill="url(#lt-cr-grid)" />
    <path d="M 110 90 C 135 78 175 72 215 78 C 255 84 285 95 300 112 C 310 125 305 142 288 155 C 268 168 240 175 210 172 C 180 169 150 160 130 148 C 115 138 105 125 103 112 C 102 100 105 94 110 90 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="245" cy="118" r="4" fill="#444CE7" />
    <circle cx="245" cy="118" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="245" cy="118" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="260" y="113" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">VILNIUS</text>
    <rect x="148" y="200" width="104" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">FCIS</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">FINANCIAL CRIME INVESTIGATION</text>
    <line x1="60" y1="118" x2="148" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="118" x2="252" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">54°N · 25°E · EUROPEAN UNION</text>
  </Wrapper>
);

/* ── Poland (Crypto) ── */
export const PolandCryptoHeroVisual = () => (
  <Wrapper>
    <GridPattern id="pl-cr-grid" />
    <rect width="400" height="300" fill="url(#pl-cr-grid)" />
    <path d="M 100 85 C 130 72 175 68 220 72 C 265 76 300 88 318 105 C 330 118 325 135 308 148 C 288 162 258 170 225 172 C 192 174 158 168 132 158 C 110 148 95 135 92 120 C 90 108 94 95 100 85 Z" fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    <circle cx="235" cy="115" r="4" fill="#444CE7" />
    <circle cx="235" cy="115" r="8" fill="rgba(68,76,231,0.2)" />
    <circle cx="235" cy="115" r="14" fill="rgba(68,76,231,0.08)" />
    <text x="250" y="110" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">WARSAW</text>
    <rect x="128" y="200" width="144" height="36" fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x="200" y="215" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">MIN. OF FINANCE</text>
    <text x="200" y="229" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">VASP REGISTRY</text>
    <line x1="50" y1="115" x2="128" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="350" y1="115" x2="272" y2="218" stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">52°N · 21°E · EUROPEAN UNION</text>
  </Wrapper>
);