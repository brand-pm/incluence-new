import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ServicePage from "./pages/ServicePage";
import Marketplace from "./pages/Marketplace";
import LicensesPage from "./pages/LicensesPage";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import CostaRicaPage from "./pages/CostaRicaPage";

const queryClient = new QueryClient();

const P = (title: string) => <PlaceholderPage title={title} />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/licenses/gambling" element={<CategoryPage />} />
            <Route path="/licenses" element={<LicensesPage />} />
            <Route path="/licenses/gambling/malta" element={<ServicePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/gambling/costa-rica" element={<CostaRicaPage />} />
            <Route path="/about" element={<Index />} />
            <Route path="/services/gambling" element={P("Gambling Licenses")} />
            <Route path="/services/forex" element={P("Forex Licenses")} />
            <Route path="/services/crypto" element={P("Crypto & VASP Licenses")} />
            <Route path="/services/emi" element={P("EMI Licenses")} />
            <Route path="/services/payment" element={P("Payment Systems")} />
            <Route path="/services/bank-accounts" element={P("Bank Account Opening")} />
            <Route path="/services/merchant" element={P("Merchant Account")} />
            <Route path="/services/legal" element={P("Business Legitimization")} />
            <Route path="/services/tax" element={P("Tax & Financial Reporting")} />
            <Route path="/services/legal-support" element={P("Legal Support")} />
            <Route path="/services/offshore" element={P("Offshore Company Formation")} />
            <Route path="/services/company-abroad" element={P("Company Registration Abroad")} />
            <Route path="/services/funds" element={P("Investment Funds")} />
            <Route path="/services/residence" element={P("Residence Permit")} />
            <Route path="/services/buy-business" element={P("Buy a Business Abroad")} />
            <Route path="/services/contracts" element={P("International Contracts")} />
            <Route path="/contact" element={P("Contact Us")} />
            <Route path="/affiliate" element={P("Affiliate Program")} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
