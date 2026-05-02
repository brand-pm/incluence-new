import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIConsultant from "./components/ui/AIConsultant";
import ConsultationDialog from "./components/ConsultationDialog";
import ContactCTAInterceptor from "./components/ContactCTAInterceptor";
import { ConsultationProvider } from "./hooks/useConsultation";

// --- Lazy page imports (default exports) ---
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const Index = React.lazy(() => import("./pages/Index"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const BlogPostPage = React.lazy(() => import("./pages/BlogPostPage"));
const GamblingHubPage = React.lazy(() => import("./pages/GamblingHubPage"));
const MaltaLicensePage = React.lazy(() => import("./pages/gambling/MaltaLicensePage"));
const CuracaoGamingPage = React.lazy(() => import("./pages/CuracaoGamingPage"));
const IsleOfManGamingPage = React.lazy(() => import("./pages/IsleOfManGamingPage"));
const CostaRicaGamingPage = React.lazy(() => import("./pages/CostaRicaGamingPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const MarketplacePage = React.lazy(() => import("./pages/Marketplace"));
const SitemapPage = React.lazy(() => import("./pages/SitemapPage"));
const ForexHubPage = React.lazy(() => import("./pages/ForexHubPage"));
const CyprusForexPage = React.lazy(() => import("./pages/CyprusForexPage"));
const VanuatuForexPage = React.lazy(() => import("./pages/VanuatuForexPage"));
const MontenegroForexPage = React.lazy(() => import("./pages/MontenegroForexPage"));
const MaltaForexPage = React.lazy(() => import("./pages/MaltaForexPage"));
const MauritiusForexPage = React.lazy(() => import("./pages/MauritiusForexPage"));
const SeychellesForexPage = React.lazy(() => import("./pages/SeychellesForexPage"));
const CryptoHubPage = React.lazy(() => import("./pages/CryptoHubPage"));
const MiCALicensePage = React.lazy(() => import("./pages/MiCALicensePage"));
const EstoniaCryptoPage = React.lazy(() => import("./pages/EstoniaCryptoPage"));
const LithuaniaCryptoPage = React.lazy(() => import("./pages/LithuaniaCryptoPage"));
const MaltaCryptoPage = React.lazy(() => import("./pages/MaltaCryptoPage"));
const SwitzerlandCryptoPage = React.lazy(() => import("./pages/SwitzerlandCryptoPage"));
const PolandCryptoPage = React.lazy(() => import("./pages/PolandCryptoPage"));
const USACryptoPage = React.lazy(() => import("./pages/USACryptoPage"));
const EmiHubPage = React.lazy(() => import("./pages/EmiHubPage"));
const LithuaniaEmiPage = React.lazy(() => import("./pages/LithuaniaEmiPage"));
const UKEmiPage = React.lazy(() => import("./pages/UKEmiPage"));
const MaltaEmiPage = React.lazy(() => import("./pages/MaltaEmiPage"));
const EstoniaEmiPage = React.lazy(() => import("./pages/EstoniaEmiPage"));
const AffiliatePage = React.lazy(() => import("./pages/AffiliatePage"));
const PrivacyPolicyPage = React.lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = React.lazy(() => import("./pages/CookiePolicyPage"));
const PaymentSystemsPage = React.lazy(() => import("./pages/PaymentSystemsPage"));
const MerchantAccountPage = React.lazy(() => import("./pages/MerchantAccountPage"));
const LegalBusinessPage = React.lazy(() => import("./pages/LegalBusinessPage"));
const TaxReportingPage = React.lazy(() => import("./pages/TaxReportingPage"));
const LegalSupportPage = React.lazy(() => import("./pages/LegalSupportPage"));
const ContractsPage = React.lazy(() => import("./pages/ContractsPage"));
const OffshoreFormationPage = React.lazy(() => import("./pages/OffshoreFormationPage"));
const BuyBusinessAbroadPage = React.lazy(() => import("./pages/BuyBusinessAbroadPage"));
const BankAccountsHubPage = React.lazy(() => import("./pages/BankAccountsHubPage"));
const ForeignBankAccountPage = React.lazy(() => import("./pages/ForeignBankAccountPage"));
const OffshoreBankAccountPage = React.lazy(() => import("./pages/OffshoreBankAccountPage"));
const InvestmentFundsPage = React.lazy(() => import("./pages/InvestmentFundsPage"));
const HedgeFundPage = React.lazy(() => import("./pages/HedgeFundPage"));
const ResidencePermitPage = React.lazy(() => import("./pages/ResidencePermitPage"));
const PaymentSystemAccountPage = React.lazy(() => import("./pages/PaymentSystemAccountPage"));
const CyprusPaymentLicensePage = React.lazy(() => import("./pages/CyprusPaymentLicensePage"));
const LithuaniaPaymentLicensePage = React.lazy(() => import("./pages/LithuaniaPaymentLicensePage"));
const UKPSPPage = React.lazy(() => import("./pages/UKPSPPage"));
const DenmarkPaymentPage = React.lazy(() => import("./pages/DenmarkPaymentPage"));
const CzechPaymentPage = React.lazy(() => import("./pages/CzechPaymentPage"));
const HongKongPaymentPage = React.lazy(() => import("./pages/HongKongPaymentPage"));
const BVIPage = React.lazy(() => import("./pages/BVIPage"));
const CaymanPage = React.lazy(() => import("./pages/CaymanPage"));
const SeychellesOffPage = React.lazy(() => import("./pages/SeychellesOffPage"));
const CuracaoOffPage = React.lazy(() => import("./pages/CuracaoOffPage"));
const CostaRicaOffPage = React.lazy(() => import("./pages/CostaRicaOffPage"));
const PanamaOffPage = React.lazy(() => import("./pages/PanamaOffPage"));
const IOMOffPage = React.lazy(() => import("./pages/IOMOffPage"));
const StVincentOffPage = React.lazy(() => import("./pages/StVincentOffPage"));
const CyprusOffPage = React.lazy(() => import("./pages/CyprusOffPage"));

// --- Lazy page imports (named exports) ---
const BuyCompanyInEstoniaPage = React.lazy(() => import("./pages/BuyCompanyInEstoniaPage").then(m => ({ default: m.BuyCompanyInEstoniaPage })));
const BuyReadyMadeCompanyInHongKongPage = React.lazy(() => import("./pages/BuyReadyMadeCompanyInHongKongPage").then(m => ({ default: m.BuyReadyMadeCompanyInHongKongPage })));
const BuyReadyMadeCompanyInLithuaniaPage = React.lazy(() => import("./pages/BuyReadyMadeCompanyInLithuaniaPage").then(m => ({ default: m.BuyReadyMadeCompanyInLithuaniaPage })));
const BuyingACompanyInBulgariaPage = React.lazy(() => import("./pages/BuyingACompanyInBulgariaPage").then(m => ({ default: m.BuyingACompanyInBulgariaPage })));
const BuyingACompanyInCanadaPage = React.lazy(() => import("./pages/BuyingACompanyInCanadaPage").then(m => ({ default: m.BuyingACompanyInCanadaPage })));
const BuyingACompanyInGermanyPage = React.lazy(() => import("./pages/BuyingACompanyInGermanyPage").then(m => ({ default: m.BuyingACompanyInGermanyPage })));
const BuyingACompanyInMaltaPage = React.lazy(() => import("./pages/BuyingACompanyInMaltaPage").then(m => ({ default: m.BuyingACompanyInMaltaPage })));
const BuyingACompanyInPolandPage = React.lazy(() => import("./pages/BuyingACompanyInPolandPage").then(m => ({ default: m.BuyingACompanyInPolandPage })));
const BuyingACompanyInSwitzerlandPage = React.lazy(() => import("./pages/BuyingACompanyInSwitzerlandPage").then(m => ({ default: m.BuyingACompanyInSwitzerlandPage })));
const CompanyPurchaseInTheNetherlandsPage = React.lazy(() => import("./pages/CompanyPurchaseInTheNetherlandsPage").then(m => ({ default: m.CompanyPurchaseInTheNetherlandsPage })));
const CompanyRegistrationInCanadaPage = React.lazy(() => import("./pages/CompanyRegistrationInCanadaPage").then(m => ({ default: m.CompanyRegistrationInCanadaPage })));
const CompanyRegistrationInChinaPage = React.lazy(() => import("./pages/CompanyRegistrationInChinaPage").then(m => ({ default: m.CompanyRegistrationInChinaPage })));
const CompanyRegistrationInCroatiaPage = React.lazy(() => import("./pages/CompanyRegistrationInCroatiaPage").then(m => ({ default: m.CompanyRegistrationInCroatiaPage })));
const CompanyRegistrationInCyprusPage = React.lazy(() => import("./pages/CompanyRegistrationInCyprusPage").then(m => ({ default: m.CompanyRegistrationInCyprusPage })));
const CompanyRegistrationInCzechiaPage = React.lazy(() => import("./pages/CompanyRegistrationInCzechiaPage").then(m => ({ default: m.CompanyRegistrationInCzechiaPage })));
const CompanyRegistrationInEuropePage = React.lazy(() => import("./pages/CompanyRegistrationInEuropePage").then(m => ({ default: m.CompanyRegistrationInEuropePage })));
const CompanyRegistrationInGermanyPage = React.lazy(() => import("./pages/CompanyRegistrationInGermanyPage").then(m => ({ default: m.CompanyRegistrationInGermanyPage })));
const CompanyRegistrationInGibraltarPage = React.lazy(() => import("./pages/CompanyRegistrationInGibraltarPage").then(m => ({ default: m.CompanyRegistrationInGibraltarPage })));
const CompanyRegistrationInIrelandPage = React.lazy(() => import("./pages/CompanyRegistrationInIrelandPage").then(m => ({ default: m.CompanyRegistrationInIrelandPage })));
const CompanyRegistrationInLuxembourgPage = React.lazy(() => import("./pages/CompanyRegistrationInLuxembourgPage").then(m => ({ default: m.CompanyRegistrationInLuxembourgPage })));
const CompanyRegistrationInMaltaPage = React.lazy(() => import("./pages/CompanyRegistrationInMaltaPage").then(m => ({ default: m.CompanyRegistrationInMaltaPage })));
const CompanyRegistrationInPolandPage = React.lazy(() => import("./pages/CompanyRegistrationInPolandPage").then(m => ({ default: m.CompanyRegistrationInPolandPage })));
const CompanyRegistrationNetherlandsPage = React.lazy(() => import("./pages/CompanyRegistrationNetherlandsPage").then(m => ({ default: m.CompanyRegistrationNetherlandsPage })));
const CompanyRegistrationPortugalPage = React.lazy(() => import("./pages/CompanyRegistrationPortugalPage").then(m => ({ default: m.CompanyRegistrationPortugalPage })));
const MalaysiaCompanyRegistrationPage = React.lazy(() => import("./pages/MalaysiaCompanyRegistrationPage").then(m => ({ default: m.MalaysiaCompanyRegistrationPage })));
const OffshoreCompanyFormationInCuracaoPage = React.lazy(() => import("./pages/OffshoreCompanyFormationInCuracaoPage").then(m => ({ default: m.OffshoreCompanyFormationInCuracaoPage })));
const OpenABankAccountInAndorraPage = React.lazy(() => import("./pages/OpenABankAccountInAndorraPage").then(m => ({ default: m.OpenABankAccountInAndorraPage })));
const OpenABankAccountInBulgariaPage = React.lazy(() => import("./pages/OpenABankAccountInBulgariaPage").then(m => ({ default: m.OpenABankAccountInBulgariaPage })));
const OpenABankAccountInGibraltarPage = React.lazy(() => import("./pages/OpenABankAccountInGibraltarPage").then(m => ({ default: m.OpenABankAccountInGibraltarPage })));
const OpenABankAccountInLuxembourgPage = React.lazy(() => import("./pages/OpenABankAccountInLuxembourgPage").then(m => ({ default: m.OpenABankAccountInLuxembourgPage })));
const OpenABankAccountInPolandPage = React.lazy(() => import("./pages/OpenABankAccountInPolandPage").then(m => ({ default: m.OpenABankAccountInPolandPage })));
const OpenABankAccountInSaintLuciaPage = React.lazy(() => import("./pages/OpenABankAccountInSaintLuciaPage").then(m => ({ default: m.OpenABankAccountInSaintLuciaPage })));
const OpenABankAccountInTurkeyPage = React.lazy(() => import("./pages/OpenABankAccountInTurkeyPage").then(m => ({ default: m.OpenABankAccountInTurkeyPage })));
const OpenABankAccountInCyprusPage = React.lazy(() => import("./pages/OpenABankAccountInCyprusPage").then(m => ({ default: m.OpenABankAccountInCyprusPage })));
const OpenABankAccountInGermanyPage = React.lazy(() => import("./pages/OpenABankAccountInGermanyPage").then(m => ({ default: m.OpenABankAccountInGermanyPage })));
const OpenBankAccountInSwitzerlandPage = React.lazy(() => import("./pages/OpenBankAccountInSwitzerlandPage").then(m => ({ default: m.OpenBankAccountInSwitzerlandPage })));
const OpenBankAccountInUsaPage = React.lazy(() => import("./pages/OpenBankAccountInUsaPage").then(m => ({ default: m.OpenBankAccountInUsaPage })));
const OpenABankAccountInUkPage = React.lazy(() => import("./pages/OpenABankAccountInUkPage").then(m => ({ default: m.OpenABankAccountInUkPage })));
const OpenABankAccountInHungaryPage = React.lazy(() => import("./pages/OpenABankAccountInHungaryPage").then(m => ({ default: m.OpenABankAccountInHungaryPage })));
const OpenACompanyInEstoniaPage = React.lazy(() => import("./pages/OpenACompanyInEstoniaPage").then(m => ({ default: m.OpenACompanyInEstoniaPage })));
const OpenACompanyInThailandPage = React.lazy(() => import("./pages/OpenACompanyInThailandPage").then(m => ({ default: m.OpenACompanyInThailandPage })));
const OpenAnAccountInLiechtensteinPage = React.lazy(() => import("./pages/OpenAnAccountInLiechtensteinPage").then(m => ({ default: m.OpenAnAccountInLiechtensteinPage })));
const OpenCompanyInUsaPage = React.lazy(() => import("./pages/OpenCompanyInUsaPage").then(m => ({ default: m.OpenCompanyInUsaPage })));
const OpeningAnAccountAtBanqueDeLuxembourgPage = React.lazy(() => import("./pages/OpeningAnAccountAtBanqueDeLuxembourgPage").then(m => ({ default: m.OpeningAnAccountAtBanqueDeLuxembourgPage })));
const OpeningAnAccountAtMkbBankHungaryPage = React.lazy(() => import("./pages/OpeningAnAccountAtMkbBankHungaryPage").then(m => ({ default: m.OpeningAnAccountAtMkbBankHungaryPage })));
const OpeningAnAccountInBarclaysBankPage = React.lazy(() => import("./pages/OpeningAnAccountInBarclaysBankPage").then(m => ({ default: m.OpeningAnAccountInBarclaysBankPage })));
const OpeningAnAccountInHsbcBankPage = React.lazy(() => import("./pages/OpeningAnAccountInHsbcBankPage").then(m => ({ default: m.OpeningAnAccountInHsbcBankPage })));
const OpeningAnAccountInRevolutPage = React.lazy(() => import("./pages/OpeningAnAccountInRevolutPage").then(m => ({ default: m.OpeningAnAccountInRevolutPage })));
const OpeningAnAccountInThePayPalPaymentSystemPage = React.lazy(() => import("./pages/OpeningAnAccountInThePayPalPaymentSystemPage").then(m => ({ default: m.OpeningAnAccountInThePayPalPaymentSystemPage })));
const OpeningAnAccountInThePayoneerPaymentSystemPage = React.lazy(() => import("./pages/OpeningAnAccountInThePayoneerPaymentSystemPage").then(m => ({ default: m.OpeningAnAccountInThePayoneerPaymentSystemPage })));
const OpeningAnAccountInTheWisePaymentSystemPage = React.lazy(() => import("./pages/OpeningAnAccountInTheWisePaymentSystemPage").then(m => ({ default: m.OpeningAnAccountInTheWisePaymentSystemPage })));
const PurchaseACompanyInChinaPage = React.lazy(() => import("./pages/PurchaseACompanyInChinaPage").then(m => ({ default: m.PurchaseACompanyInChinaPage })));
const PurchaseACompanyInEnglandPage = React.lazy(() => import("./pages/PurchaseACompanyInEnglandPage").then(m => ({ default: m.PurchaseACompanyInEnglandPage })));
const PurchaseOfACompanyInCyprusPage = React.lazy(() => import("./pages/PurchaseOfACompanyInCyprusPage").then(m => ({ default: m.PurchaseOfACompanyInCyprusPage })));
const PurchaseOfACompanyInLuxembourgPage = React.lazy(() => import("./pages/PurchaseOfACompanyInLuxembourgPage").then(m => ({ default: m.PurchaseOfACompanyInLuxembourgPage })));
const PurchaseOfACompanyInTheCzechRepublicPage = React.lazy(() => import("./pages/PurchaseOfACompanyInTheCzechRepublicPage").then(m => ({ default: m.PurchaseOfACompanyInTheCzechRepublicPage })));
const PurchaseOfACompanyInTheUaePage = React.lazy(() => import("./pages/PurchaseOfACompanyInTheUaePage").then(m => ({ default: m.PurchaseOfACompanyInTheUaePage })));
const PurchaseOfACompanyInTheUsaPage = React.lazy(() => import("./pages/PurchaseOfACompanyInTheUsaPage").then(m => ({ default: m.PurchaseOfACompanyInTheUsaPage })));
const ReadyMadeCompaniesInHungaryPage = React.lazy(() => import("./pages/ReadyMadeCompaniesInHungaryPage").then(m => ({ default: m.ReadyMadeCompaniesInHungaryPage })));
const ReadyMadeOffshoreCompaniesPage = React.lazy(() => import("./pages/ReadyMadeOffshoreCompaniesPage").then(m => ({ default: m.ReadyMadeOffshoreCompaniesPage })));
const RegisterCompanyInBulgariaPage = React.lazy(() => import("./pages/RegisterCompanyInBulgariaPage").then(m => ({ default: m.RegisterCompanyInBulgariaPage })));
const RegisterCompanyInHongKongPage = React.lazy(() => import("./pages/RegisterCompanyInHongKongPage").then(m => ({ default: m.RegisterCompanyInHongKongPage })));
const RegisterCompanyInLithuaniaPage = React.lazy(() => import("./pages/RegisterCompanyInLithuaniaPage").then(m => ({ default: m.RegisterCompanyInLithuaniaPage })));
const RegisterCompanyInSingaporePage = React.lazy(() => import("./pages/RegisterCompanyInSingaporePage").then(m => ({ default: m.RegisterCompanyInSingaporePage })));
const RegisterCompanyInSwitzerlandPage = React.lazy(() => import("./pages/RegisterCompanyInSwitzerlandPage").then(m => ({ default: m.RegisterCompanyInSwitzerlandPage })));
const RegisterCompanyInUaePage = React.lazy(() => import("./pages/RegisterCompanyInUaePage").then(m => ({ default: m.RegisterCompanyInUaePage })));
const RegisterCompanyInUkPage = React.lazy(() => import("./pages/RegisterCompanyInUkPage").then(m => ({ default: m.RegisterCompanyInUkPage })));
const RegistrationOfCompaniesAbroadPage = React.lazy(() => import("./pages/RegistrationOfCompaniesAbroadPage"));
const CompanyRegistrationNonEuEuropePage = React.lazy(() => import("./pages/CompanyRegistrationNonEuEuropePage"));
const CompanyRegistrationAmericasAsiaPage = React.lazy(() => import("./pages/CompanyRegistrationAmericasAsiaPage"));
const ResidencePermitInCyprusPage = React.lazy(() => import("./pages/ResidencePermitInCyprusPage").then(m => ({ default: m.ResidencePermitInCyprusPage })));
const ResidencePermitInDubaiPage = React.lazy(() => import("./pages/ResidencePermitInDubaiPage").then(m => ({ default: m.ResidencePermitInDubaiPage })));
const ResidencePermitInHungaryPage = React.lazy(() => import("./pages/ResidencePermitInHungaryPage").then(m => ({ default: m.ResidencePermitInHungaryPage })));
const ResidencePermitInLithuaniaPage = React.lazy(() => import("./pages/ResidencePermitInLithuaniaPage").then(m => ({ default: m.ResidencePermitInLithuaniaPage })));
const ResidencePermitInPortugalPage = React.lazy(() => import("./pages/ResidencePermitInPortugalPage").then(m => ({ default: m.ResidencePermitInPortugalPage })));
const ResidencePermitInSlovakiaPage = React.lazy(() => import("./pages/ResidencePermitInSlovakiaPage").then(m => ({ default: m.ResidencePermitInSlovakiaPage })));
const StartingABusinessInHungaryPage = React.lazy(() => import("./pages/StartingABusinessInHungaryPage").then(m => ({ default: m.StartingABusinessInHungaryPage })));
const StartingABusinessInMontenegroPage = React.lazy(() => import("./pages/StartingABusinessInMontenegroPage").then(m => ({ default: m.StartingABusinessInMontenegroPage })));
const OpenInvestmentFundInLuxembourgPage = React.lazy(() => import("./pages/OpenInvestmentFundInLuxembourgPage").then(m => ({ default: m.OpenInvestmentFundInLuxembourgPage })));
const OpenInvestmentFundInEstoniaPage = React.lazy(() => import("./pages/OpenInvestmentFundInEstoniaPage").then(m => ({ default: m.OpenInvestmentFundInEstoniaPage })));
const InvestmentFundsMaltaPage = React.lazy(() => import("./pages/InvestmentFundsMaltaPage").then(m => ({ default: m.InvestmentFundsMaltaPage })));
const InvestmentFundsCzechPage = React.lazy(() => import("./pages/InvestmentFundsCzechPage").then(m => ({ default: m.InvestmentFundsCzechPage })));
const InvestmentFundsSwitzerlandPage = React.lazy(() => import("./pages/InvestmentFundsSwitzerlandPage").then(m => ({ default: m.InvestmentFundsSwitzerlandPage })));

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#080808] flex items-center justify-center">
    <div className="text-center px-6">
      <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">● In Progress</span>
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
        <ConsultationProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={
            <div className="min-h-screen bg-[#080808] flex items-center justify-center">
              <div className="flex flex-col gap-3 w-full max-w-[400px] px-12">
                <div className="h-12 bg-[#111111] animate-pulse" />
                <div className="h-4 bg-[#111111] animate-pulse w-2/3" />
                <div className="h-4 bg-[#111111] animate-pulse w-1/2" />
              </div>
            </div>
          }>
            <Routes>
              {/* Global */}
              <Route path="/" element={<Index />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/licenses" element={<PlaceholderPage title="All Licenses" />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/affiliate-program" element={<AffiliatePage />} />

              {/* License category hubs */}
              <Route path="/gamble-license" element={<GamblingHubPage />} />
              <Route path="/forex-license" element={<ForexHubPage />} />
              <Route path="/cryptocurrency-exchange-license" element={<CryptoHubPage />} />
              <Route path="/mica-license" element={<MiCALicensePage />} />
              <Route path="/emi-license" element={<EmiHubPage />} />

              {/* Service pages */}
              <Route path="/provider-payment-systems" element={<PaymentSystemsPage />} />
              <Route path="/legal-business" element={<LegalBusinessPage />} />
              <Route path="/finance-reporting" element={<TaxReportingPage />} />
              <Route path="/support-legal" element={<LegalSupportPage />} />
              <Route path="/offshore-company-formation" element={<OffshoreFormationPage />} />
              <Route path="/offshore-investment-funds" element={<InvestmentFundsPage />} />
              <Route path="/residence-permit-abroad" element={<ResidencePermitPage />} />
              <Route path="/buy-a-business-abroad" element={<BuyBusinessAbroadPage />} />
              <Route path="/drafting-international-contracts" element={<ContractsPage />} />
              <Route path="/opening-a-merchant-account" element={<MerchantAccountPage />} />
              <Route path="/open-an-account-in-a-payment-system" element={<PaymentSystemAccountPage />} />

              {/* Gambling license detail */}
              <Route path="/malta-gaming-license" element={<MaltaLicensePage />} />
              <Route path="/curacao-gaming-license" element={<CuracaoGamingPage />} />
              <Route path="/gambling-license-of-the-isle-of-man" element={<IsleOfManGamingPage />} />
              <Route path="/gambling-license-in-costa-rica" element={<CostaRicaGamingPage />} />

              {/* Forex detail */}
              <Route path="/cyprus-forex-license" element={<CyprusForexPage />} />
              <Route path="/forex-broker-licence-in-malta" element={<MaltaForexPage />} />
              <Route path="/forex-broker-licence-in-vanuatu" element={<VanuatuForexPage />} />
              <Route path="/forex-broker-licence-in-mauritius" element={<MauritiusForexPage />} />
              <Route path="/forex-broker-licence-in-montenegro" element={<MontenegroForexPage />} />
              <Route path="/forex-license-seychelles" element={<SeychellesForexPage />} />

              {/* Crypto detail */}
              <Route path="/cryptocurrency-exchange-license-in-estonia" element={<EstoniaCryptoPage />} />
              <Route path="/cryptocurrency-exchange-license-in-the-usa" element={<USACryptoPage />} />
              <Route path="/cryptocurrency-exchange-license-in-switzerland" element={<SwitzerlandCryptoPage />} />
              <Route path="/cryptocurrency-license-in-malta" element={<MaltaCryptoPage />} />
              <Route path="/lithuania-crypto-license" element={<LithuaniaCryptoPage />} />
              <Route path="/poland-crypto-license" element={<PolandCryptoPage />} />

              {/* EMI detail */}
              <Route path="/emi-license-in-estonia" element={<EstoniaEmiPage />} />
              <Route path="/e-money-license-malta" element={<MaltaEmiPage />} />
              <Route path="/e-money-license-uk" element={<UKEmiPage />} />
              <Route path="/e-money-license-lithuania" element={<LithuaniaEmiPage />} />

              {/* Payment systems detail */}
              <Route path="/payment-system-license-in-cyprus" element={<CyprusPaymentLicensePage />} />
              <Route path="/payment-system-license-in-lithuania" element={<LithuaniaPaymentLicensePage />} />
              <Route path="/psp-system-uk" element={<UKPSPPage />} />
              <Route path="/payment-system-license-in-denmark" element={<DenmarkPaymentPage />} />
              <Route path="/czech-payment-system-license" element={<CzechPaymentPage />} />
              <Route path="/hong-kong-payment-system-license" element={<HongKongPaymentPage />} />

              {/* Offshore detail */}
              <Route path="/offshore-in-the-british-virgin-islands" element={<BVIPage />} />
              <Route path="/offshore-in-the-cayman-islands" element={<CaymanPage />} />
              <Route path="/offshore-in-the-isle-of-man" element={<IOMOffPage />} />
              <Route path="/offshore-costa-rica" element={<CostaRicaOffPage />} />
              <Route path="/offshore-company-formation-in-curacao" element={<OffshoreCompanyFormationInCuracaoPage />} />
              <Route path="/offshore-company-formation-in-seychelles" element={<SeychellesOffPage />} />
              <Route path="/panama-company-formation" element={<PanamaOffPage />} />
              <Route path="/offshore-company-formation-in-st-vincent-and-the-grenadines" element={<StVincentOffPage />} />
              <Route path="/cyprus-offshore-company-formation" element={<CyprusOffPage />} />

              {/* Company registration detail */}
              <Route path="/open-a-company-in-estonia" element={<OpenACompanyInEstoniaPage />} />
              <Route path="/company-registration-in-malta" element={<CompanyRegistrationInMaltaPage />} />
              <Route path="/register-company-in-switzerland" element={<RegisterCompanyInSwitzerlandPage />} />
              <Route path="/company-registration-in-ireland" element={<CompanyRegistrationInIrelandPage />} />
              <Route path="/company-registration-in-cyprus" element={<CompanyRegistrationInCyprusPage />} />
              <Route path="/company-registration-in-germany" element={<CompanyRegistrationInGermanyPage />} />
              <Route path="/company-registration-in-poland" element={<CompanyRegistrationInPolandPage />} />
              <Route path="/company-registration-in-europe" element={<CompanyRegistrationInEuropePage />} />
              <Route path="/register-company-in-uk" element={<RegisterCompanyInUkPage />} />
              <Route path="/open-company-in-usa" element={<OpenCompanyInUsaPage />} />
              <Route path="/register-company-in-singapore" element={<RegisterCompanyInSingaporePage />} />
              <Route path="/register-company-in-hong-kong" element={<RegisterCompanyInHongKongPage />} />
              <Route path="/register-company-in-lithuania" element={<RegisterCompanyInLithuaniaPage />} />
              <Route path="/register-company-in-uae" element={<RegisterCompanyInUaePage />} />
              <Route path="/starting-a-business-in-hungary" element={<StartingABusinessInHungaryPage />} />
              <Route path="/register-company-in-bulgaria" element={<RegisterCompanyInBulgariaPage />} />
              <Route path="/company-registration-in-china" element={<CompanyRegistrationInChinaPage />} />
              <Route path="/company-registration-in-canada" element={<CompanyRegistrationInCanadaPage />} />
              <Route path="/company-registration-portugal" element={<CompanyRegistrationPortugalPage />} />
              <Route path="/company-registration-in-croatia" element={<CompanyRegistrationInCroatiaPage />} />
              <Route path="/company-registration-in-czechia" element={<CompanyRegistrationInCzechiaPage />} />
              <Route path="/company-registration-netherlands" element={<CompanyRegistrationNetherlandsPage />} />
              <Route path="/company-registration-in-luxembourg" element={<CompanyRegistrationInLuxembourgPage />} />
              <Route path="/company-registration-in-gibraltar" element={<CompanyRegistrationInGibraltarPage />} />
              <Route path="/open-a-company-in-thailand" element={<OpenACompanyInThailandPage />} />
              <Route path="/malaysia-company-registration" element={<MalaysiaCompanyRegistrationPage />} />
              <Route path="/starting-a-business-in-montenegro" element={<StartingABusinessInMontenegroPage />} />
              <Route path="/registration-of-companies-abroad" element={<RegistrationOfCompaniesAbroadPage />} />

              {/* Ready-made companies */}
              <Route path="/ready-made-companies-in-hungary" element={<ReadyMadeCompaniesInHungaryPage />} />
              <Route path="/buy-company-in-estonia" element={<BuyCompanyInEstoniaPage />} />
              <Route path="/buy-ready-made-company-in-hong-kong" element={<BuyReadyMadeCompanyInHongKongPage />} />
              <Route path="/buy-ready-made-company-in-lithuania" element={<BuyReadyMadeCompanyInLithuaniaPage />} />
              <Route path="/buying-a-company-in-malta" element={<BuyingACompanyInMaltaPage />} />
              <Route path="/buying-a-company-in-bulgaria" element={<BuyingACompanyInBulgariaPage />} />
              <Route path="/buying-a-company-in-switzerland" element={<BuyingACompanyInSwitzerlandPage />} />
              <Route path="/buying-a-company-in-canada" element={<BuyingACompanyInCanadaPage />} />
              <Route path="/buying-a-company-in-germany" element={<BuyingACompanyInGermanyPage />} />
              <Route path="/buying-a-company-in-poland" element={<BuyingACompanyInPolandPage />} />
              <Route path="/ready-made-offshore-companies" element={<ReadyMadeOffshoreCompaniesPage />} />
              <Route path="/company-purchase-in-the-netherlands" element={<CompanyPurchaseInTheNetherlandsPage />} />
              <Route path="/purchase-a-company-in-china" element={<PurchaseACompanyInChinaPage />} />
              <Route path="/purchase-a-company-in-england" element={<PurchaseACompanyInEnglandPage />} />
              <Route path="/purchase-of-a-company-in-cyprus" element={<PurchaseOfACompanyInCyprusPage />} />
              <Route path="/purchase-of-a-company-in-luxembourg" element={<PurchaseOfACompanyInLuxembourgPage />} />
              <Route path="/purchase-of-a-company-in-the-czech-republic" element={<PurchaseOfACompanyInTheCzechRepublicPage />} />
              <Route path="/purchase-of-a-company-in-the-uae" element={<PurchaseOfACompanyInTheUaePage />} />
              <Route path="/purchase-of-a-company-in-the-usa" element={<PurchaseOfACompanyInTheUsaPage />} />
              <Route path="/offshore-company-formation-in-curacao" element={<OffshoreCompanyFormationInCuracaoPage />} />

              {/* Bank accounts */}
              <Route path="/accounts-bank" element={<BankAccountsHubPage />} />
              <Route path="/opening-a-foreign-bank-account" element={<ForeignBankAccountPage />} />
              <Route path="/opening-an-offshore-bank-account" element={<OffshoreBankAccountPage />} />
              <Route path="/open-a-bank-account-in-cyprus" element={<OpenABankAccountInCyprusPage />} />
              <Route path="/open-a-bank-account-in-germany" element={<OpenABankAccountInGermanyPage />} />
              <Route path="/open-a-bank-account-in-luxembourg" element={<OpenABankAccountInLuxembourgPage />} />
              <Route path="/open-bank-account-as-foreigner-in-switzerland" element={<OpenBankAccountInSwitzerlandPage />} />
              <Route path="/open-bank-account-as-foreigner-in-usa" element={<OpenBankAccountInUsaPage />} />
              <Route path="/opening-a-bank-account-in-the-united-kingdom" element={<OpenABankAccountInUkPage />} />
              <Route path="/open-a-bank-account-in-hungary" element={<OpenABankAccountInHungaryPage />} />
              <Route path="/open-a-bank-account-in-bulgaria" element={<OpenABankAccountInBulgariaPage />} />
              <Route path="/open-a-bank-account-in-gibraltar" element={<OpenABankAccountInGibraltarPage />} />
              <Route path="/open-a-bank-account-in-turkey" element={<OpenABankAccountInTurkeyPage />} />
              <Route path="/open-a-bank-account-in-poland" element={<OpenABankAccountInPolandPage />} />
              <Route path="/open-a-bank-account-in-andorra" element={<OpenABankAccountInAndorraPage />} />
              <Route path="/open-a-bank-account-in-saint-lucia" element={<OpenABankAccountInSaintLuciaPage />} />
              <Route path="/open-an-account-in-liechtenstein" element={<OpenAnAccountInLiechtensteinPage />} />
              <Route path="/opening-an-account-at-banque-de-luxembourg" element={<OpeningAnAccountAtBanqueDeLuxembourgPage />} />
              <Route path="/opening-an-account-at-mkb-bank-hungary" element={<OpeningAnAccountAtMkbBankHungaryPage />} />
              <Route path="/opening-an-account-in-barclays-bank" element={<OpeningAnAccountInBarclaysBankPage />} />
              <Route path="/opening-an-account-in-hsbc-bank" element={<OpeningAnAccountInHsbcBankPage />} />
              <Route path="/opening-an-account-in-revolut" element={<OpeningAnAccountInRevolutPage />} />
              <Route path="/opening-an-account-in-the-pay-pal-payment-system" element={<OpeningAnAccountInThePayPalPaymentSystemPage />} />
              <Route path="/opening-an-account-in-the-payoneer-payment-system" element={<OpeningAnAccountInThePayoneerPaymentSystemPage />} />
              <Route path="/opening-an-account-in-the-wise-payment-system" element={<OpeningAnAccountInTheWisePaymentSystemPage />} />

              {/* Investment funds */}
              <Route path="/open-a-hedge-fund" element={<HedgeFundPage />} />
              <Route path="/open-an-investment-fund-in-luxembourg" element={<OpenInvestmentFundInLuxembourgPage />} />
              <Route path="/open-an-investment-fund-in-estonia" element={<OpenInvestmentFundInEstoniaPage />} />
              <Route path="/registration-of-investment-funds-in-malta" element={<InvestmentFundsMaltaPage />} />
              <Route path="/registration-of-investment-funds-in-czech" element={<InvestmentFundsCzechPage />} />
              <Route path="/registration-of-investment-funds-in-switzerland" element={<InvestmentFundsSwitzerlandPage />} />

              {/* Residence permits */}
              <Route path="/residence-permit-in-portugal" element={<ResidencePermitInPortugalPage />} />
              <Route path="/residence-permit-in-dubai" element={<ResidencePermitInDubaiPage />} />
              <Route path="/residence-permit-in-lithuania" element={<ResidencePermitInLithuaniaPage />} />
              <Route path="/residence-permit-in-cyprus" element={<ResidencePermitInCyprusPage />} />
              <Route path="/residence-permit-in-hungary" element={<ResidencePermitInHungaryPage />} />
              <Route path="/residence-permit-in-slovakia" element={<ResidencePermitInSlovakiaPage />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <AIConsultant />
        <ConsultationDialog />
        <ContactCTAInterceptor />
        </ConsultationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
