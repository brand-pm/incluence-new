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

/* ═══════════════════════════════════════════════════════════
   GENERIC JURISDICTION VISUAL (parameterized)
   ═══════════════════════════════════════════════════════════ */

interface JurisdictionVisualProps {
  gridId: string;
  territoryPath: string;
  capitalX: number;
  capitalY: number;
  capitalName: string;
  regulatorShort: string;
  regulatorFull: string;
  coordinates: string;
  secondaryPath?: string;
}

export const JurisdictionHeroVisual = ({
  gridId, territoryPath, capitalX, capitalY, capitalName,
  regulatorShort, regulatorFull, coordinates, secondaryPath,
}: JurisdictionVisualProps) => (
  <Wrapper>
    <GridPattern id={gridId} />
    <rect width="400" height="300" fill={`url(#${gridId})`} />
    <path d={territoryPath} fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1.5" />
    {secondaryPath && <path d={secondaryPath} fill="rgba(68,76,231,0.12)" stroke="rgba(68,76,231,0.4)" strokeWidth="1" />}
    <circle cx={capitalX} cy={capitalY} r={4} fill="#444CE7" />
    <circle cx={capitalX} cy={capitalY} r={8} fill="rgba(68,76,231,0.2)" />
    <circle cx={capitalX} cy={capitalY} r={14} fill="rgba(68,76,231,0.08)" />
    <text x={capitalX + 15} y={capitalY - 5} fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">{capitalName}</text>
    <rect x={148} y={200} width={104} height={36} fill="rgba(68,76,231,0.08)" stroke="rgba(68,76,231,0.25)" strokeWidth="1" />
    <text x={200} y={215} fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">{regulatorShort}</text>
    <text x={200} y={229} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.06em">{regulatorFull}</text>
    <line x1={50} y1={capitalY} x2={148} y2={218} stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1={350} y1={capitalY} x2={252} y2={218} stroke="rgba(68,76,231,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <CornerMarks />
    <text x={200} y={275} fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">{coordinates}</text>
  </Wrapper>
);

/* ── Jurisdiction data catalog ── */
const JURISDICTIONS: Record<string, JurisdictionVisualProps> = {
  // Company Registration
  estonia: { gridId: "ee-g", territoryPath: "M 80 115 C 100 100 140 92 180 95 C 220 98 260 105 300 110 C 325 113 340 120 338 130 C 336 140 318 148 295 150 C 270 152 240 148 210 145 C 180 142 150 148 120 145 C 95 142 78 135 76 128 C 74 122 76 118 80 115 Z", capitalX: 260, capitalY: 125, capitalName: "TALLINN", regulatorShort: "RIK", regulatorFull: "CENTRE OF REGISTERS", coordinates: "59°N · 24°E · EUROPEAN UNION" },
  malta: { gridId: "mt-g", territoryPath: "M 160 120 C 175 108 210 100 240 105 C 265 110 280 122 285 138 C 290 155 278 170 260 175 C 240 180 215 178 195 172 C 175 166 158 155 155 140 C 153 130 155 125 160 120 Z", secondaryPath: "M 145 95 C 155 88 175 86 185 92 C 192 96 190 106 182 110 C 172 114 152 112 148 105 C 145 100 143 98 145 95 Z", capitalX: 230, capitalY: 135, capitalName: "VALLETTA", regulatorShort: "MFSA", regulatorFull: "FINANCIAL SERVICES AUTHORITY", coordinates: "35°N · 14°E · EUROPEAN UNION" },
  switzerland: { gridId: "ch-g", territoryPath: "M 110 105 C 130 90 170 82 210 85 C 250 88 285 98 305 112 C 318 122 315 138 298 148 C 278 158 250 162 220 160 C 190 158 160 150 140 140 C 122 132 108 122 105 115 C 103 110 106 107 110 105 Z", capitalX: 220, capitalY: 125, capitalName: "BERN", regulatorShort: "SECO", regulatorFull: "STATE SECRETARIAT FOR ECONOMICS", coordinates: "46°N · 7°E · EFTA" },
  ireland: { gridId: "ie-g", territoryPath: "M 120 85 C 145 72 185 68 220 75 C 250 82 275 98 280 118 C 284 135 272 152 250 160 C 225 168 195 168 168 162 C 142 156 122 142 115 128 C 110 118 112 100 120 85 Z", capitalX: 225, capitalY: 118, capitalName: "DUBLIN", regulatorShort: "CRO", regulatorFull: "COMPANIES REGISTRATION OFFICE", coordinates: "53°N · 6°W · EUROPEAN UNION" },
  cyprus: { gridId: "cy-g", territoryPath: "M 120 125 C 135 115 160 108 190 110 C 220 112 255 118 280 128 C 295 134 305 142 300 152 C 295 162 275 168 255 166 C 235 164 215 158 195 155 C 175 152 155 156 140 152 C 128 149 118 142 115 135 C 113 128 115 125 120 125 Z", capitalX: 225, capitalY: 135, capitalName: "NICOSIA", regulatorShort: "DRCOR", regulatorFull: "DEPT. OF REGISTRAR OF COMPANIES", coordinates: "35°N · 33°E · EUROPEAN UNION" },
  germany: { gridId: "de-g", territoryPath: "M 130 70 C 155 58 190 52 225 55 C 258 58 285 68 298 85 C 308 98 305 115 295 130 C 282 148 262 162 238 170 C 212 178 182 178 158 170 C 138 162 122 148 115 132 C 108 118 112 98 120 82 C 124 76 127 72 130 70 Z", capitalX: 228, capitalY: 100, capitalName: "BERLIN", regulatorShort: "BaFin", regulatorFull: "FEDERAL FINANCIAL SUPERVISORY", coordinates: "52°N · 13°E · EUROPEAN UNION" },
  poland: { gridId: "pl-g", territoryPath: "M 100 85 C 130 72 175 68 220 72 C 265 76 300 88 318 105 C 330 118 325 135 308 148 C 288 162 258 170 225 172 C 192 174 158 168 132 158 C 110 148 95 135 92 120 C 90 108 94 95 100 85 Z", capitalX: 235, capitalY: 115, capitalName: "WARSAW", regulatorShort: "KRS", regulatorFull: "NATIONAL COURT REGISTER", coordinates: "52°N · 21°E · EUROPEAN UNION" },
  uk: { gridId: "gb-g", territoryPath: "M 155 65 C 175 52 210 48 235 58 C 258 68 272 88 275 112 C 278 138 268 165 250 182 C 230 198 205 205 185 198 C 165 190 150 172 142 150 C 135 128 138 105 145 88 C 148 78 152 70 155 65 Z", secondaryPath: "M 160 42 C 172 35 188 38 195 48 C 200 55 195 65 185 68 C 175 70 165 65 162 56 C 160 50 158 45 160 42 Z", capitalX: 235, capitalY: 148, capitalName: "LONDON", regulatorShort: "CH", regulatorFull: "COMPANIES HOUSE", coordinates: "51°N · 0°W · UNITED KINGDOM" },
  usa: { gridId: "us-g", territoryPath: "M 40 90 C 60 80 100 75 150 78 C 200 81 250 82 300 88 C 340 92 370 100 375 112 C 378 124 365 135 340 142 C 315 148 280 155 245 160 C 210 165 175 162 140 158 C 105 154 70 148 50 138 C 35 130 30 118 35 108 C 38 98 40 92 40 90 Z", capitalX: 295, capitalY: 118, capitalName: "WASHINGTON", regulatorShort: "SEC", regulatorFull: "SECRETARY OF STATE", coordinates: "38°N · 77°W · NORTH AMERICA" },
  singapore: { gridId: "sg-g", territoryPath: "M 155 120 C 175 108 210 102 240 108 C 265 114 282 128 278 142 C 274 155 255 162 232 165 C 208 168 182 165 165 155 C 150 146 145 135 150 128 C 153 122 155 120 155 120 Z", capitalX: 220, capitalY: 132, capitalName: "SINGAPORE", regulatorShort: "ACRA", regulatorFull: "ACCOUNTING & CORPORATE REG.", coordinates: "1°N · 103°E · SOUTHEAST ASIA" },
  hongkong: { gridId: "hk-g", territoryPath: "M 155 108 C 178 95 215 88 248 95 C 275 102 295 118 290 138 C 285 158 262 172 235 178 C 208 182 178 178 158 168 C 140 158 132 142 138 128 C 142 118 148 112 155 108 Z", capitalX: 232, capitalY: 130, capitalName: "HONG KONG", regulatorShort: "CR", regulatorFull: "COMPANIES REGISTRY", coordinates: "22°N · 114°E · EAST ASIA" },
  lithuania: { gridId: "lt-g", territoryPath: "M 110 90 C 135 78 175 72 215 78 C 255 84 285 95 300 112 C 310 125 305 142 288 155 C 268 168 240 175 210 172 C 180 169 150 160 130 148 C 115 138 105 125 103 112 C 102 100 105 94 110 90 Z", capitalX: 245, capitalY: 118, capitalName: "VILNIUS", regulatorShort: "JAR", regulatorFull: "REGISTER OF LEGAL ENTITIES", coordinates: "54°N · 25°E · EUROPEAN UNION" },
  uae: { gridId: "ae-g", territoryPath: "M 120 108 C 145 95 185 88 225 92 C 262 96 295 108 310 125 C 320 138 312 152 292 160 C 268 168 238 170 208 168 C 178 166 148 158 130 148 C 115 138 108 125 112 115 C 114 110 117 108 120 108 Z", capitalX: 240, capitalY: 125, capitalName: "ABU DHABI", regulatorShort: "DED", regulatorFull: "DEPT. OF ECONOMIC DEVELOPMENT", coordinates: "24°N · 54°E · MIDDLE EAST" },
  hungary: { gridId: "hu-g", territoryPath: "M 100 105 C 125 92 168 85 210 88 C 252 92 290 102 308 118 C 320 130 315 145 298 155 C 278 165 248 170 215 172 C 182 174 148 168 125 158 C 108 148 98 135 95 122 C 93 112 96 108 100 105 Z", capitalX: 230, capitalY: 120, capitalName: "BUDAPEST", regulatorShort: "MNB", regulatorFull: "NATIONAL BANK OF HUNGARY", coordinates: "47°N · 19°E · EUROPEAN UNION" },
  bulgaria: { gridId: "bg-g", territoryPath: "M 105 100 C 132 88 172 82 212 85 C 252 88 288 98 305 112 C 318 124 312 140 295 150 C 275 160 248 165 218 168 C 188 170 155 168 132 158 C 112 148 100 135 98 122 C 96 110 100 104 105 100 Z", capitalX: 225, capitalY: 118, capitalName: "SOFIA", regulatorShort: "AR", regulatorFull: "AGENCY OF REGISTRY", coordinates: "42°N · 23°E · EUROPEAN UNION" },
  china: { gridId: "cn-g", territoryPath: "M 50 80 C 80 65 130 58 185 62 C 240 66 290 78 325 95 C 348 108 355 125 340 140 C 322 155 290 165 250 170 C 210 175 165 172 125 165 C 88 158 58 145 42 128 C 30 115 32 100 42 88 C 45 84 48 82 50 80 Z", capitalX: 265, capitalY: 100, capitalName: "BEIJING", regulatorShort: "SAMR", regulatorFull: "STATE ADMIN. MARKET REGULATION", coordinates: "39°N · 116°E · EAST ASIA" },
  canada: { gridId: "ca-g", territoryPath: "M 35 85 C 65 68 120 58 180 60 C 240 62 300 72 340 88 C 365 98 375 115 365 130 C 352 145 325 155 290 160 C 255 165 215 165 175 162 C 135 158 95 150 65 138 C 42 128 30 115 32 102 C 33 94 34 88 35 85 Z", capitalX: 275, capitalY: 108, capitalName: "OTTAWA", regulatorShort: "IC", regulatorFull: "INNOVATION CANADA", coordinates: "45°N · 75°W · NORTH AMERICA" },
  portugal: { gridId: "pt-g", territoryPath: "M 168 65 C 185 55 205 52 218 60 C 230 68 238 88 240 112 C 242 138 235 168 225 188 C 215 205 198 212 185 205 C 172 198 162 178 158 152 C 155 128 158 100 162 82 C 164 72 166 68 168 65 Z", capitalX: 205, capitalY: 140, capitalName: "LISBON", regulatorShort: "IRN", regulatorFull: "INST. OF REGISTRIES & NOTARIAT", coordinates: "38°N · 9°W · EUROPEAN UNION" },
  croatia: { gridId: "hr-g", territoryPath: "M 120 85 C 148 72 188 68 220 78 C 248 88 268 108 272 128 C 275 148 262 165 242 172 C 218 180 188 178 162 168 C 138 158 120 142 115 125 C 110 110 114 95 120 85 Z", capitalX: 218, capitalY: 115, capitalName: "ZAGREB", regulatorShort: "FINA", regulatorFull: "FINANCIAL AGENCY", coordinates: "45°N · 15°E · EUROPEAN UNION" },
  czechia: { gridId: "cz-g", territoryPath: "M 108 95 C 135 82 175 75 218 78 C 258 82 292 95 308 112 C 318 125 312 142 295 152 C 272 162 242 168 210 168 C 178 168 145 162 122 152 C 105 142 95 128 95 115 C 95 105 100 98 108 95 Z", capitalX: 218, capitalY: 115, capitalName: "PRAGUE", regulatorShort: "CNB", regulatorFull: "CZECH NATIONAL BANK", coordinates: "50°N · 14°E · EUROPEAN UNION" },
  netherlands: { gridId: "nl-g", territoryPath: "M 148 78 C 168 65 198 58 228 62 C 255 66 275 78 280 95 C 285 112 275 132 260 148 C 242 162 218 170 195 168 C 172 166 152 155 142 140 C 132 125 130 108 135 95 C 138 85 143 80 148 78 Z", capitalX: 225, capitalY: 105, capitalName: "AMSTERDAM", regulatorShort: "KVK", regulatorFull: "CHAMBER OF COMMERCE", coordinates: "52°N · 4°E · EUROPEAN UNION" },
  luxembourg: { gridId: "lu-g", territoryPath: "M 162 82 C 180 72 205 68 228 75 C 248 82 262 98 260 118 C 258 138 242 155 222 162 C 202 168 178 165 162 155 C 148 145 140 130 142 115 C 144 100 150 88 162 82 Z", capitalX: 218, capitalY: 118, capitalName: "LUXEMBOURG", regulatorShort: "CSSF", regulatorFull: "FINANCIAL SECTOR SUPERVISION", coordinates: "49°N · 6°E · EUROPEAN UNION" },
  gibraltar: { gridId: "gi-g", territoryPath: "M 165 105 C 182 92 208 88 228 98 C 245 108 252 128 248 148 C 244 168 230 182 212 185 C 195 188 178 178 168 162 C 158 148 155 128 158 115 C 160 108 162 106 165 105 Z", capitalX: 215, capitalY: 135, capitalName: "GIBRALTAR", regulatorShort: "FSC", regulatorFull: "FINANCIAL SERVICES COMMISSION", coordinates: "36°N · 5°W · BRITISH OVERSEAS" },
  thailand: { gridId: "th-g", territoryPath: "M 165 60 C 182 52 205 50 220 58 C 235 66 242 82 240 102 C 238 122 230 145 222 165 C 215 182 205 195 195 200 C 185 205 175 198 168 185 C 162 172 158 152 158 130 C 158 108 160 85 162 72 C 163 65 164 62 165 60 Z", capitalX: 218, capitalY: 115, capitalName: "BANGKOK", regulatorShort: "DBD", regulatorFull: "DEPT. OF BUSINESS DEVELOPMENT", coordinates: "13°N · 100°E · SOUTHEAST ASIA" },
  malaysia: { gridId: "my-g", territoryPath: "M 115 105 C 145 90 190 82 235 88 C 275 94 305 108 312 128 C 318 145 302 162 278 170 C 252 178 218 180 185 175 C 152 170 122 158 108 142 C 98 128 100 115 108 108 C 110 106 112 105 115 105 Z", capitalX: 235, capitalY: 125, capitalName: "KUALA LUMPUR", regulatorShort: "SSM", regulatorFull: "COMPANIES COMMISSION", coordinates: "3°N · 101°E · SOUTHEAST ASIA" },
  montenegro: { gridId: "me-g2", territoryPath: "M 130 100 C 150 85 180 80 210 85 C 240 90 265 100 280 115 C 290 125 285 140 270 148 C 255 155 240 165 220 170 C 195 176 170 172 150 162 C 135 154 125 142 122 130 C 120 118 122 108 130 100 Z", capitalX: 215, capitalY: 132, capitalName: "PODGORICA", regulatorShort: "CRPS", regulatorFull: "CENTRAL REGISTER", coordinates: "42°N · 19°E · EU CANDIDATE" },
  // Offshore
  bvi: { gridId: "vg-g", territoryPath: "M 155 115 C 172 102 198 95 225 100 C 248 105 268 118 272 135 C 275 152 262 168 242 175 C 220 182 195 180 175 172 C 158 165 148 152 148 138 C 148 128 150 120 155 115 Z", capitalX: 228, capitalY: 132, capitalName: "ROAD TOWN", regulatorShort: "FSC", regulatorFull: "FINANCIAL SERVICES COMMISSION", coordinates: "18°N · 64°W · CARIBBEAN" },
  cayman: { gridId: "ky-g", territoryPath: "M 125 118 C 152 105 195 98 238 102 C 275 106 302 118 308 135 C 312 150 298 165 272 172 C 242 178 205 180 172 175 C 142 170 118 158 112 142 C 108 130 115 122 125 118 Z", capitalX: 228, capitalY: 132, capitalName: "GEORGE TOWN", regulatorShort: "CIMA", regulatorFull: "MONETARY AUTHORITY", coordinates: "19°N · 81°W · CARIBBEAN" },
  iom: { gridId: "im-g2", territoryPath: "M 175 80 C 190 70 215 68 230 78 C 245 88 252 110 250 135 C 248 160 238 185 225 195 C 210 205 195 200 185 188 C 175 175 168 155 165 130 C 162 108 165 90 175 80 Z", capitalX: 235, capitalY: 140, capitalName: "DOUGLAS", regulatorShort: "FSA", regulatorFull: "FINANCIAL SERVICES AUTHORITY", coordinates: "54°N · 4°W · CROWN DEPENDENCY" },
  costarica: { gridId: "cr-g2", territoryPath: "M 100 110 C 120 95 155 88 190 92 C 225 96 260 105 280 120 C 295 130 305 145 300 160 C 295 175 275 180 260 172 C 245 165 235 175 220 180 C 200 186 180 178 165 168 C 145 155 125 148 112 138 C 100 128 95 118 100 110 Z", capitalX: 195, capitalY: 140, capitalName: "SAN JOSÉ", regulatorShort: "BCCR", regulatorFull: "CENTRAL BANK OF COSTA RICA", coordinates: "10°N · 84°W · CENTRAL AMERICA" },
  curacao: { gridId: "cw-g2", territoryPath: "M 60 160 C 80 140 120 130 160 135 C 200 140 240 128 280 132 C 310 135 330 145 340 155 C 350 165 345 178 330 182 C 310 187 280 180 250 178 C 220 176 190 182 160 180 C 130 178 100 175 80 172 C 65 170 55 168 60 160 Z", capitalX: 198, capitalY: 155, capitalName: "WILLEMSTAD", regulatorShort: "CBCS", regulatorFull: "CENTRAL BANK OF CURAÇAO", coordinates: "12°N · 69°W · DUTCH CARIBBEAN" },
  seychelles: { gridId: "sc-g2", territoryPath: "M 180 110 C 195 95 220 90 235 100 C 248 108 252 128 248 148 C 244 168 230 182 215 185 C 198 188 185 178 180 162 C 175 146 170 125 180 110 Z", secondaryPath: "M 255 85 C 262 80 272 82 275 90 C 278 98 274 108 268 112 C 262 114 255 110 253 102 C 251 94 252 88 255 85 Z", capitalX: 210, capitalY: 130, capitalName: "VICTORIA", regulatorShort: "FSA", regulatorFull: "FINANCIAL SERVICES AUTHORITY", coordinates: "4°S · 55°E · INDIAN OCEAN" },
  panama: { gridId: "pa-g", territoryPath: "M 80 125 C 110 108 155 98 205 102 C 255 106 300 118 325 135 C 340 145 338 158 322 165 C 302 172 272 170 245 168 C 218 166 192 172 165 170 C 138 168 112 160 95 150 C 82 142 75 135 80 125 Z", capitalX: 228, capitalY: 132, capitalName: "PANAMA CITY", regulatorShort: "SBP", regulatorFull: "SUPERINTENDENCY OF BANKING", coordinates: "9°N · 79°W · CENTRAL AMERICA" },
  stvincent: { gridId: "vc-g", territoryPath: "M 172 80 C 188 68 212 62 228 72 C 242 82 248 102 245 128 C 242 155 232 180 218 195 C 205 208 190 205 182 192 C 175 178 170 155 168 130 C 166 108 168 90 172 80 Z", capitalX: 222, capitalY: 125, capitalName: "KINGSTOWN", regulatorShort: "FSA", regulatorFull: "FINANCIAL SERVICES AUTHORITY", coordinates: "13°N · 61°W · CARIBBEAN" },
  // Bank accounts
  andorra: { gridId: "ad-g", territoryPath: "M 158 105 C 178 92 210 85 238 92 C 260 98 275 115 272 135 C 268 155 252 168 230 175 C 208 180 182 178 165 168 C 150 158 142 142 145 128 C 148 115 152 108 158 105 Z", capitalX: 218, capitalY: 128, capitalName: "ANDORRA LA VELLA", regulatorShort: "AFA", regulatorFull: "ANDORRAN FINANCIAL AUTHORITY", coordinates: "42°N · 1°E · MICROSTATE" },
  turkey: { gridId: "tr-g", territoryPath: "M 60 100 C 95 82 150 72 210 75 C 270 78 325 88 355 105 C 372 115 370 130 355 142 C 335 155 300 162 260 165 C 220 168 175 165 135 158 C 100 152 72 140 58 128 C 48 118 50 108 60 100 Z", capitalX: 255, capitalY: 112, capitalName: "ANKARA", regulatorShort: "BDDK", regulatorFull: "BANKING REGULATION AGENCY", coordinates: "39°N · 32°E · EURASIA" },
  saintlucia: { gridId: "lc-g", territoryPath: "M 170 78 C 188 65 215 60 232 72 C 248 84 255 108 250 138 C 245 168 232 192 215 205 C 200 215 185 210 178 195 C 170 178 165 152 165 125 C 165 100 167 85 170 78 Z", capitalX: 222, capitalY: 125, capitalName: "CASTRIES", regulatorShort: "FSA", regulatorFull: "FINANCIAL SERVICES REG. AUTH.", coordinates: "14°N · 61°W · CARIBBEAN" },
  liechtenstein: { gridId: "li-g", territoryPath: "M 168 78 C 188 65 215 60 235 72 C 252 82 258 105 255 128 C 252 152 238 172 220 180 C 202 185 185 178 175 165 C 165 150 160 130 162 108 C 164 90 166 82 168 78 Z", capitalX: 218, capitalY: 122, capitalName: "VADUZ", regulatorShort: "FMA", regulatorFull: "FINANCIAL MARKET AUTHORITY", coordinates: "47°N · 9°E · EEA" },
  // Investment funds
  // Residence permits
  dubai: { gridId: "ae-rp-g", territoryPath: "M 120 108 C 145 95 185 88 225 92 C 262 96 295 108 310 125 C 320 138 312 152 292 160 C 268 168 238 170 208 168 C 178 166 148 158 130 148 C 115 138 108 125 112 115 C 114 110 117 108 120 108 Z", capitalX: 255, capitalY: 118, capitalName: "DUBAI", regulatorShort: "GDRFA", regulatorFull: "GENERAL DIR. OF RESIDENCY", coordinates: "25°N · 55°E · MIDDLE EAST" },
  slovakia: { gridId: "sk-g", territoryPath: "M 100 100 C 130 85 175 78 220 82 C 262 86 298 98 315 115 C 325 128 318 142 298 152 C 275 162 242 168 208 170 C 175 172 140 168 118 158 C 100 148 90 132 92 118 C 94 108 96 104 100 100 Z", capitalX: 228, capitalY: 118, capitalName: "BRATISLAVA", regulatorShort: "MoI", regulatorFull: "MINISTRY OF INTERIOR", coordinates: "48°N · 17°E · EUROPEAN UNION" },
  // Ready-made / buying companies
  england: { gridId: "eng-g", territoryPath: "M 155 75 C 178 62 210 55 238 65 C 262 75 278 95 280 118 C 282 142 270 165 252 178 C 232 192 208 198 188 192 C 168 185 152 168 145 148 C 138 128 140 108 148 92 C 150 84 153 78 155 75 Z", capitalX: 235, capitalY: 142, capitalName: "LONDON", regulatorShort: "CH", regulatorFull: "COMPANIES HOUSE", coordinates: "51°N · 0°W · UNITED KINGDOM" },
};

/* ── Exported named visuals from catalog ── */
export const EstoniaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.estonia} />;
export const MaltaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.malta} />;
export const SwitzerlandCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.switzerland} />;
export const IrelandCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.ireland} />;
export const CyprusCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.cyprus} />;
export const GermanyCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.germany} />;
export const PolandCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.poland} />;
export const UKCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.uk} />;
export const USACompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.usa} />;
export const SingaporeCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.singapore} />;
export const HongKongCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.hongkong} />;
export const LithuaniaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.lithuania} />;
export const UAECompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.uae} />;
export const HungaryCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.hungary} />;
export const BulgariaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.bulgaria} />;
export const ChinaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.china} />;
export const CanadaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.canada} />;
export const PortugalCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.portugal} />;
export const CroatiaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.croatia} />;
export const CzechiaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.czechia} />;
export const NetherlandsCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.netherlands} />;
export const LuxembourgCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.luxembourg} />;
export const GibraltarCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.gibraltar} />;
export const ThailandCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.thailand} />;
export const MalaysiaCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.malaysia} />;
export const MontenegroCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.montenegro} />;
// Offshore
export const BVIOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.bvi} />;
export const CaymanOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.cayman} />;
export const IOMOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.iom} />;
export const CostaRicaOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.costarica} />;
export const CuracaoOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.curacao} />;
export const SeychellesOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.seychelles} />;
export const PanamaOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.panama} />;
export const StVincentOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.stvincent} />;
export const CyprusOffshoreVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.cyprus} />;
// Bank accounts
export const AndorraBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.andorra} />;
export const TurkeyBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.turkey} />;
export const SaintLuciaBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.saintlucia} />;
export const LiechtensteinBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.liechtenstein} />;
export const CyprusBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.cyprus} />;
export const GermanyBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.germany} />;
export const LuxembourgBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.luxembourg} />;
export const SwitzerlandBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.switzerland} />;
export const USABankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.usa} />;
export const UKBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.uk} />;
export const HungaryBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.hungary} />;
export const BulgariaBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.bulgaria} />;
export const GibraltarBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.gibraltar} />;
export const PolandBankVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.poland} />;
// Investment funds
export const LuxembourgFundVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.luxembourg} />;
export const EstoniaFundVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.estonia} />;
export const MaltaFundVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.malta} />;
export const CzechFundVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.czechia} />;
export const SwitzerlandFundVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.switzerland} />;
// Residence permits
export const PortugalResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.portugal} />;
export const DubaiResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.dubai} />;
export const LithuaniaResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.lithuania} />;
export const CyprusResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.cyprus} />;
export const HungaryResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.hungary} />;
export const SlovakiaResidenceVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.slovakia} />;
// Ready-made / buying
export const EnglandCompanyVisual = () => <JurisdictionHeroVisual {...JURISDICTIONS.england} />;