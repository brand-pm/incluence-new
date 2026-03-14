import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import GamblingHubPage from "./pages/GamblingHubPage";
import MaltaLicensePage from "./pages/gambling/MaltaLicensePage";
import CuracaoGamingPage from "./pages/CuracaoGamingPage";
import IsleOfManGamingPage from "./pages/IsleOfManGamingPage";
import CostaRicaGamingPage from "./pages/CostaRicaGamingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MarketplacePage from "./pages/MarketplacePage";
import AIConsultant from "./components/ui/AIConsultant";
import SitemapPage from "./pages/SitemapPage";
import ForexHubPage from "./pages/ForexHubPage";
import CyprusForexPage from "./pages/CyprusForexPage";
import VanuatuForexPage from "./pages/VanuatuForexPage";
import MontenegroForexPage from "./pages/MontenegroForexPage";
import MaltaForexPage from "./pages/MaltaForexPage";
import MauritiusForexPage from "./pages/MauritiusForexPage";
import CryptoHubPage from "./pages/CryptoHubPage";
import EstoniaCryptoPage from "./pages/EstoniaCryptoPage";
import LithuaniaCryptoPage from "./pages/LithuaniaCryptoPage";
import MaltaCryptoPage from "./pages/MaltaCryptoPage";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#080808] flex items-center justify-center">
    <div className="text-center px-6">
      <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— In Progress</span>
      <h1 className="text-[clamp(28px,4vw,48px)] font-light text-[#F0EBE0] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>{title}</h1>
      <p className="text-[14px] text-[#9A9590] mb-10">This page is currently being built.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            {/* ── Global ── */}
            <Route path="/" element={<Index />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/licenses" element={<PlaceholderPage title="All Licenses" />} />
            <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/cookie-policy" element={<PlaceholderPage title="Cookie Policy" />} />
            <Route path="/affiliate-program" element={<PlaceholderPage title="Affiliate Program" />} />

            {/* ── License category hubs ── */}
            <Route path="/gamble-license" element={<GamblingHubPage />} />
            <Route path="/forex-license" element={<ForexHubPage />} />
            <Route path="/cryptocurrency-exchange-license" element={<CryptoHubPage />} />
            <Route path="/emi-license" element={<PlaceholderPage title="EMI License" />} />

            {/* ── Service pages ── */}
            <Route path="/provider-payment-systems" element={<PlaceholderPage title="Payment Systems" />} />
            <Route path="/legal-business" element={<PlaceholderPage title="Business Legitimization" />} />
            <Route path="/finance-reporting" element={<PlaceholderPage title="Tax & Financial Reporting" />} />
            <Route path="/support-legal" element={<PlaceholderPage title="Legal Support" />} />
            <Route path="/offshore-company-formation" element={<PlaceholderPage title="Offshore Company" />} />
            <Route path="/registration-of-companies-abroad" element={<PlaceholderPage title="Company Registration Abroad" />} />
            <Route path="/offshore-investment-funds" element={<PlaceholderPage title="Investment Funds" />} />
            <Route path="/residence-permit-abroad" element={<PlaceholderPage title="Residence Permit" />} />
            <Route path="/buy-a-business-abroad" element={<PlaceholderPage title="Buy a Business Abroad" />} />
            <Route path="/drafting-international-contracts" element={<PlaceholderPage title="International Contracts" />} />
            <Route path="/opening-a-merchant-account" element={<PlaceholderPage title="Merchant Account" />} />
            <Route path="/open-an-account-in-a-payment-system" element={<PlaceholderPage title="Payment System Account" />} />

            {/* ── Gambling license detail ── */}
            <Route path="/malta-gaming-license" element={<MaltaLicensePage />} />
            <Route path="/curacao-gaming-license" element={<CuracaoGamingPage />} />
            <Route path="/gambling-license-of-the-isle-of-man" element={<IsleOfManGamingPage />} />
            <Route path="/gambling-license-in-costa-rica" element={<CostaRicaGamingPage />} />
            <Route path="/gambling-license-gibraltar" element={<PlaceholderPage title="Gibraltar Gambling License" />} />
            <Route path="/gambling-license-cyprus" element={<PlaceholderPage title="Cyprus Gambling License" />} />

            {/* ── Forex detail ── */}
            <Route path="/cyprus-forex-license" element={<CyprusForexPage />} />
            <Route path="/forex-broker-licence-in-malta" element={<MaltaForexPage />} />
            <Route path="/forex-broker-licence-in-vanuatu" element={<VanuatuForexPage />} />
            <Route path="/forex-broker-licence-in-mauritius" element={<PlaceholderPage title="Mauritius Forex License" />} />
            <Route path="/forex-broker-licence-in-montenegro" element={<MontenegroForexPage />} />
            <Route path="/forex-license-seychelles" element={<PlaceholderPage title="Seychelles Financial License" />} />

            {/* ── Crypto detail ── */}
            <Route path="/cryptocurrency-exchange-license-in-estonia" element={<EstoniaCryptoPage />} />
            <Route path="/cryptocurrency-exchange-license-in-the-usa" element={<PlaceholderPage title="USA Crypto License" />} />
            <Route path="/cryptocurrency-exchange-license-in-switzerland" element={<PlaceholderPage title="Switzerland Crypto License" />} />
            <Route path="/cryptocurrency-license-in-malta" element={<MaltaCryptoPage />} />
            <Route path="/lithuania-crypto-license" element={<LithuaniaCryptoPage />} />
            <Route path="/poland-crypto-license" element={<PlaceholderPage title="Poland Crypto License" />} />

            {/* ── EMI detail ── */}
            <Route path="/emi-license-in-estonia" element={<PlaceholderPage title="Estonia EMI License" />} />
            <Route path="/e-money-license-malta" element={<PlaceholderPage title="Malta EMI License" />} />
            <Route path="/e-money-license-uk" element={<PlaceholderPage title="UK EMI License" />} />
            <Route path="/e-money-license-lithuania" element={<PlaceholderPage title="Lithuania EMI License" />} />

            {/* ── Payment systems detail ── */}
            <Route path="/payment-system-license-in-cyprus" element={<PlaceholderPage title="Cyprus Payment License" />} />
            <Route path="/payment-system-license-in-lithuania" element={<PlaceholderPage title="Lithuania Payment License" />} />
            <Route path="/psp-system-uk" element={<PlaceholderPage title="UK PSP License" />} />
            <Route path="/payment-system-license-in-denmark" element={<PlaceholderPage title="Denmark Payment License" />} />
            <Route path="/czech-payment-system-license" element={<PlaceholderPage title="Czech Payment License" />} />
            <Route path="/hong-kong-payment-system-license" element={<PlaceholderPage title="Hong Kong Payment License" />} />

            {/* ── Offshore detail ── */}
            <Route path="/offshore-in-the-british-virgin-islands" element={<PlaceholderPage title="BVI Offshore" />} />
            <Route path="/offshore-in-the-cayman-islands" element={<PlaceholderPage title="Cayman Islands Offshore" />} />
            <Route path="/offshore-in-the-isle-of-man" element={<PlaceholderPage title="Isle of Man Offshore" />} />
            <Route path="/offshore-costa-rica" element={<PlaceholderPage title="Costa Rica Offshore" />} />
            <Route path="/offshore-company-formation-in-curacao" element={<PlaceholderPage title="Curaçao Offshore" />} />
            <Route path="/offshore-company-formation-in-seychelles" element={<PlaceholderPage title="Seychelles Offshore" />} />
            <Route path="/panama-company-formation" element={<PlaceholderPage title="Panama Offshore" />} />
            <Route path="/offshore-company-formation-in-st-vincent-and-the-grenadines" element={<PlaceholderPage title="St Vincent Offshore" />} />
            <Route path="/cyprus-offshore-company-formation" element={<PlaceholderPage title="Cyprus Offshore" />} />

            {/* ── Company registration detail ── */}
            <Route path="/open-a-company-in-estonia" element={<PlaceholderPage title="Estonia Company" />} />
            <Route path="/company-registration-in-malta" element={<PlaceholderPage title="Malta Company" />} />
            <Route path="/register-company-in-switzerland" element={<PlaceholderPage title="Switzerland Company" />} />
            <Route path="/company-registration-in-ireland" element={<PlaceholderPage title="Ireland Company" />} />
            <Route path="/company-registration-in-cyprus" element={<PlaceholderPage title="Cyprus Company" />} />
            <Route path="/company-registration-in-germany" element={<PlaceholderPage title="Germany Company" />} />
            <Route path="/company-registration-in-poland" element={<PlaceholderPage title="Poland Company" />} />
            <Route path="/company-registration-in-europe" element={<PlaceholderPage title="EU Company Registration" />} />
            <Route path="/register-company-in-uk" element={<PlaceholderPage title="UK Company" />} />
            <Route path="/open-company-in-usa" element={<PlaceholderPage title="USA Company" />} />
            <Route path="/register-company-in-singapore" element={<PlaceholderPage title="Singapore Company" />} />
            <Route path="/register-company-in-hong-kong" element={<PlaceholderPage title="Hong Kong Company" />} />
            <Route path="/register-company-in-lithuania" element={<PlaceholderPage title="Lithuania Company" />} />
            <Route path="/register-company-in-uae" element={<PlaceholderPage title="UAE Company" />} />
            <Route path="/starting-a-business-in-hungary" element={<PlaceholderPage title="Hungary Company" />} />
            <Route path="/register-company-in-bulgaria" element={<PlaceholderPage title="Bulgaria Company" />} />
            <Route path="/company-registration-in-china" element={<PlaceholderPage title="China Company" />} />
            <Route path="/company-registration-in-canada" element={<PlaceholderPage title="Canada Company" />} />
            <Route path="/company-registration-portugal" element={<PlaceholderPage title="Portugal Company" />} />
            <Route path="/company-registration-in-croatia" element={<PlaceholderPage title="Croatia Company" />} />
            <Route path="/company-registration-in-czechia" element={<PlaceholderPage title="Czechia Company" />} />
            <Route path="/company-registration-netherlands" element={<PlaceholderPage title="Netherlands Company" />} />
            <Route path="/company-registration-in-luxembourg" element={<PlaceholderPage title="Luxembourg Company" />} />
            <Route path="/company-registration-in-gibraltar" element={<PlaceholderPage title="Gibraltar Company" />} />
            <Route path="/open-a-company-in-thailand" element={<PlaceholderPage title="Thailand Company" />} />
            <Route path="/malaysia-company-registration" element={<PlaceholderPage title="Malaysia Company" />} />
            <Route path="/starting-a-business-in-montenegro" element={<PlaceholderPage title="Montenegro Company" />} />

            {/* ── Ready-made companies ── */}
            <Route path="/ready-made-companies-in-hungary" element={<PlaceholderPage title="Hungary Ready-Made" />} />
            <Route path="/buy-company-in-estonia" element={<PlaceholderPage title="Estonia Ready-Made" />} />
            <Route path="/buy-ready-made-company-in-hong-kong" element={<PlaceholderPage title="Hong Kong Ready-Made" />} />
            <Route path="/buy-ready-made-company-in-lithuania" element={<PlaceholderPage title="Lithuania Ready-Made" />} />
            <Route path="/buying-a-company-in-malta" element={<PlaceholderPage title="Malta Ready-Made" />} />
            <Route path="/buying-a-company-in-bulgaria" element={<PlaceholderPage title="Bulgaria Ready-Made" />} />
            <Route path="/buying-a-company-in-switzerland" element={<PlaceholderPage title="Switzerland Ready-Made" />} />
            <Route path="/ready-made-offshore-companies" element={<PlaceholderPage title="Offshore Ready-Made" />} />

            {/* ── Bank accounts ── */}
            <Route path="/accounts-bank" element={<PlaceholderPage title="Foreign Bank Account" />} />
            <Route path="/opening-a-foreign-bank-account" element={<PlaceholderPage title="Foreign Bank Account" />} />
            <Route path="/opening-an-offshore-bank-account" element={<PlaceholderPage title="Offshore Bank Account" />} />
            <Route path="/open-a-bank-account-in-cyprus" element={<PlaceholderPage title="Cyprus Bank Account" />} />
            <Route path="/open-a-bank-account-in-germany" element={<PlaceholderPage title="Germany Bank Account" />} />
            <Route path="/open-a-bank-account-in-luxembourg" element={<PlaceholderPage title="Luxembourg Bank Account" />} />
            <Route path="/open-bank-account-as-foreigner-in-switzerland" element={<PlaceholderPage title="Switzerland Bank Account" />} />
            <Route path="/open-bank-account-as-foreigner-in-usa" element={<PlaceholderPage title="USA Bank Account" />} />
            <Route path="/opening-a-bank-account-in-the-united-kingdom" element={<PlaceholderPage title="UK Bank Account" />} />
            <Route path="/open-a-bank-account-in-hungary" element={<PlaceholderPage title="Hungary Bank Account" />} />
            <Route path="/open-a-bank-account-in-bulgaria" element={<PlaceholderPage title="Bulgaria Bank Account" />} />
            <Route path="/open-a-bank-account-in-gibraltar" element={<PlaceholderPage title="Gibraltar Bank Account" />} />
            <Route path="/open-a-bank-account-in-turkey" element={<PlaceholderPage title="Turkey Bank Account" />} />
            <Route path="/open-a-bank-account-in-poland" element={<PlaceholderPage title="Poland Bank Account" />} />
            <Route path="/open-a-bank-account-in-andorra" element={<PlaceholderPage title="Andorra Bank Account" />} />
            <Route path="/open-a-bank-account-in-saint-lucia" element={<PlaceholderPage title="Saint Lucia Bank Account" />} />
            <Route path="/open-an-account-in-liechtenstein" element={<PlaceholderPage title="Liechtenstein Bank Account" />} />

            {/* ── Investment funds ── */}
            <Route path="/open-a-hedge-fund" element={<PlaceholderPage title="Hedge Fund" />} />
            <Route path="/open-an-investment-fund-in-luxembourg" element={<PlaceholderPage title="Luxembourg Fund" />} />
            <Route path="/open-an-investment-fund-in-estonia" element={<PlaceholderPage title="Estonia Fund" />} />
            <Route path="/registration-of-investment-funds-in-malta" element={<PlaceholderPage title="Malta Fund" />} />
            <Route path="/registration-of-investment-funds-in-czech" element={<PlaceholderPage title="Czech Fund" />} />
            <Route path="/registration-of-investment-funds-in-switzerland" element={<PlaceholderPage title="Switzerland Fund" />} />

            {/* ── Residence permits ── */}
            <Route path="/residence-permit-in-portugal" element={<PlaceholderPage title="Portugal Residence" />} />
            <Route path="/residence-permit-in-dubai" element={<PlaceholderPage title="Dubai Residence" />} />
            <Route path="/residence-permit-in-lithuania" element={<PlaceholderPage title="Lithuania Residence" />} />
            <Route path="/residence-permit-in-cyprus" element={<PlaceholderPage title="Cyprus Residence" />} />
            <Route path="/residence-permit-in-hungary" element={<PlaceholderPage title="Hungary Residence" />} />
            <Route path="/residence-permit-in-slovakia" element={<PlaceholderPage title="Slovakia Residence" />} />

            {/* ── Catch-all ── */}
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </main>
        <Footer />
        <AIConsultant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
