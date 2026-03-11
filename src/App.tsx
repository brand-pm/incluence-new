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

const queryClient = new QueryClient();

const ComingSoon = ({ title }: { title: string }) => (
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
            {/* ── LEVEL 1: Global ── */}
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<ComingSoon title="Marketplace" />} />
            <Route path="/about" element={<ComingSoon title="About Incluence" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />

            {/* ── LEVEL 2: All licenses catalog ── */}
            <Route path="/licenses" element={<ComingSoon title="All Licenses" />} />

            {/* ── LEVEL 3: License category hubs ── */}
            <Route path="/licenses/gambling" element={<GamblingHubPage />} />
            <Route path="/licenses/forex" element={<ComingSoon title="Forex Licenses" />} />
            <Route path="/licenses/crypto" element={<ComingSoon title="Crypto & VASP Licenses" />} />
            <Route path="/licenses/emi" element={<ComingSoon title="EMI Licenses" />} />

            {/* ── LEVEL 4: License detail pages ── */}
            <Route path="/licenses/gambling/malta" element={<ComingSoon title="Malta / MGA License" />} />
            <Route path="/licenses/gambling/curacao" element={<ComingSoon title="Curaçao Gaming License" />} />
            <Route path="/licenses/gambling/isle-of-man" element={<ComingSoon title="Isle of Man License" />} />
            <Route path="/licenses/gambling/costa-rica" element={<ComingSoon title="Costa Rica License" />} />

            {/* ── LEVEL 3: Service pages (no license) ── */}
            <Route path="/services/payment" element={<ComingSoon title="Payment Systems" />} />
            <Route path="/services/bank-accounts" element={<ComingSoon title="Bank Account Opening" />} />
            <Route path="/services/merchant" element={<ComingSoon title="Merchant Account" />} />
            <Route path="/services/legal" element={<ComingSoon title="Business Legitimization" />} />
            <Route path="/services/tax" element={<ComingSoon title="Tax & Reporting" />} />
            <Route path="/services/legal-support" element={<ComingSoon title="Legal Support" />} />
            <Route path="/services/offshore" element={<ComingSoon title="Offshore Company" />} />
            <Route path="/services/company-abroad" element={<ComingSoon title="Company Registration Abroad" />} />
            <Route path="/services/funds" element={<ComingSoon title="Investment Funds" />} />
            <Route path="/services/residence" element={<ComingSoon title="Residence Permit" />} />
            <Route path="/services/buy-business" element={<ComingSoon title="Buy a Business" />} />
            <Route path="/services/contracts" element={<ComingSoon title="International Contracts" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
