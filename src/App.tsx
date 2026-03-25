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
import SwitzerlandCryptoPage from "./pages/SwitzerlandCryptoPage";
import PolandCryptoPage from "./pages/PolandCryptoPage";
import USACryptoPage from "./pages/USACryptoPage";
import EmiHubPage from "./pages/EmiHubPage";
import LithuaniaEmiPage from "./pages/LithuaniaEmiPage";
import UKEmiPage from "./pages/UKEmiPage";
import MaltaEmiPage from "./pages/MaltaEmiPage";
import EstoniaEmiPage from "./pages/EstoniaEmiPage";
import AffiliatePage from "./pages/AffiliatePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PaymentSystemsPage from "./pages/PaymentSystemsPage";
import MerchantAccountPage from "./pages/MerchantAccountPage";
import LegalBusinessPage from "./pages/LegalBusinessPage";
import TaxReportingPage from "./pages/TaxReportingPage";
import LegalSupportPage from "./pages/LegalSupportPage";
import ContractsPage from "./pages/ContractsPage";
import OffshoreFormationPage from "./pages/OffshoreFormationPage";
import BuyBusinessAbroadPage from "./pages/BuyBusinessAbroadPage";
import BankAccountsHubPage from "./pages/BankAccountsHubPage";
import ForeignBankAccountPage from "./pages/ForeignBankAccountPage";
import OffshoreBankAccountPage from "./pages/OffshoreBankAccountPage";
import InvestmentFundsPage from "./pages/InvestmentFundsPage";
import HedgeFundPage from "./pages/HedgeFundPage";
import ResidencePermitPage from "./pages/ResidencePermitPage";
import PaymentSystemAccountPage from "./pages/PaymentSystemAccountPage";
import CyprusPaymentLicensePage from "./pages/CyprusPaymentLicensePage";
import LithuaniaPaymentLicensePage from "./pages/LithuaniaPaymentLicensePage";
import UKPSPPage from "./pages/UKPSPPage";
import DenmarkPaymentPage from "./pages/DenmarkPaymentPage";
import CzechPaymentPage from "./pages/CzechPaymentPage";
import HongKongPaymentPage from "./pages/HongKongPaymentPage";
import BVIPage from "./pages/BVIPage";
import CaymanPage from "./pages/CaymanPage";
import SeychellesOffPage from "./pages/SeychellesOffPage";
import CuracaoOffPage from "./pages/CuracaoOffPage";
import CostaRicaOffPage from "./pages/CostaRicaOffPage";
import PanamaOffPage from "./pages/PanamaOffPage";
import IOMOffPage from "./pages/IOMOffPage";
import StVincentOffPage from "./pages/StVincentOffPage";
import CyprusOffPage from "./pages/CyprusOffPage";
import { BuyCompanyInEstoniaPage } from "./pages/BuyCompanyInEstoniaPage";
import { BuyReadyMadeCompanyInHongKongPage } from "./pages/BuyReadyMadeCompanyInHongKongPage";
import { BuyReadyMadeCompanyInLithuaniaPage } from "./pages/BuyReadyMadeCompanyInLithuaniaPage";
import { BuyingACompanyInBulgariaPage } from "./pages/BuyingACompanyInBulgariaPage";
import { BuyingACompanyInCanadaPage } from "./pages/BuyingACompanyInCanadaPage";
import { BuyingACompanyInGermanyPage } from "./pages/BuyingACompanyInGermanyPage";
import { BuyingACompanyInMaltaPage } from "./pages/BuyingACompanyInMaltaPage";
import { BuyingACompanyInPolandPage } from "./pages/BuyingACompanyInPolandPage";
import { BuyingACompanyInSwitzerlandPage } from "./pages/BuyingACompanyInSwitzerlandPage";
import { CompanyPurchaseInTheNetherlandsPage } from "./pages/CompanyPurchaseInTheNetherlandsPage";
import { CompanyRegistrationInCanadaPage } from "./pages/CompanyRegistrationInCanadaPage";
import { CompanyRegistrationInChinaPage } from "./pages/CompanyRegistrationInChinaPage";
import { CompanyRegistrationInCroatiaPage } from "./pages/CompanyRegistrationInCroatiaPage";
import { CompanyRegistrationInCyprusPage } from "./pages/CompanyRegistrationInCyprusPage";
import { CompanyRegistrationInCzechiaPage } from "./pages/CompanyRegistrationInCzechiaPage";
import { CompanyRegistrationInEuropePage } from "./pages/CompanyRegistrationInEuropePage";
import { CompanyRegistrationInGermanyPage } from "./pages/CompanyRegistrationInGermanyPage";
import { CompanyRegistrationInGibraltarPage } from "./pages/CompanyRegistrationInGibraltarPage";
import { CompanyRegistrationInIrelandPage } from "./pages/CompanyRegistrationInIrelandPage";
import { CompanyRegistrationInLuxembourgPage } from "./pages/CompanyRegistrationInLuxembourgPage";
import { CompanyRegistrationInMalaysiaPage } from "./pages/CompanyRegistrationInMalaysiaPage";
import { CompanyRegistrationInMaltaPage } from "./pages/CompanyRegistrationInMaltaPage";
import { CompanyRegistrationInPolandPage } from "./pages/CompanyRegistrationInPolandPage";
import { CompanyRegistrationInTheNetherlandsPage } from "./pages/CompanyRegistrationInTheNetherlandsPage";
import { CompanyRegistrationNetherlandsPage } from "./pages/CompanyRegistrationNetherlandsPage";
import { CompanyRegistrationPortugalPage } from "./pages/CompanyRegistrationPortugalPage";
import { MalaysiaCompanyRegistrationPage } from "./pages/MalaysiaCompanyRegistrationPage";
import { OffshoreCompanyFormationInCuracaoPage } from "./pages/OffshoreCompanyFormationInCuracaoPage";
import { OpenABankAccountInAndorraPage } from "./pages/OpenABankAccountInAndorraPage";
import { OpenABankAccountInBulgariaPage } from "./pages/OpenABankAccountInBulgariaPage";
import { OpenABankAccountInGibraltarPage } from "./pages/OpenABankAccountInGibraltarPage";
import { OpenABankAccountInLuxembourgPage } from "./pages/OpenABankAccountInLuxembourgPage";
import { OpenABankAccountInPolandPage } from "./pages/OpenABankAccountInPolandPage";
import { OpenABankAccountInSaintLuciaPage } from "./pages/OpenABankAccountInSaintLuciaPage";
import { OpenABankAccountInTurkeyPage } from "./pages/OpenABankAccountInTurkeyPage";
import { OpenACompanyInEstoniaPage } from "./pages/OpenACompanyInEstoniaPage";
import { OpenACompanyInThailandPage } from "./pages/OpenACompanyInThailandPage";
import { OpenAnAccountInLiechtensteinPage } from "./pages/OpenAnAccountInLiechtensteinPage";
import { OpenCompanyInUsaPage } from "./pages/OpenCompanyInUsaPage";
import { OpeningAnAccountAtBanqueDeLuxembourgPage } from "./pages/OpeningAnAccountAtBanqueDeLuxembourgPage";
import { OpeningAnAccountAtMkbBankHungaryPage } from "./pages/OpeningAnAccountAtMkbBankHungaryPage";
import { OpeningAnAccountInBarclaysBankPage } from "./pages/OpeningAnAccountInBarclaysBankPage";
import { OpeningAnAccountInHsbcBankPage } from "./pages/OpeningAnAccountInHsbcBankPage";
import { OpeningAnAccountInRevolutPage } from "./pages/OpeningAnAccountInRevolutPage";
import { OpeningAnAccountInThePayPalPaymentSystemPage } from "./pages/OpeningAnAccountInThePayPalPaymentSystemPage";
import { OpeningAnAccountInThePayoneerPaymentSystemPage } from "./pages/OpeningAnAccountInThePayoneerPaymentSystemPage";
import { OpeningAnAccountInTheWisePaymentSystemPage } from "./pages/OpeningAnAccountInTheWisePaymentSystemPage";
import { PurchaseACompanyInChinaPage } from "./pages/PurchaseACompanyInChinaPage";
import { PurchaseACompanyInEnglandPage } from "./pages/PurchaseACompanyInEnglandPage";
import { PurchaseOfACompanyInCyprusPage } from "./pages/PurchaseOfACompanyInCyprusPage";
import { PurchaseOfACompanyInLuxembourgPage } from "./pages/PurchaseOfACompanyInLuxembourgPage";
import { PurchaseOfACompanyInTheCzechRepublicPage } from "./pages/PurchaseOfACompanyInTheCzechRepublicPage";
import { PurchaseOfACompanyInTheUaePage } from "./pages/PurchaseOfACompanyInTheUaePage";
import { PurchaseOfACompanyInTheUsaPage } from "./pages/PurchaseOfACompanyInTheUsaPage";
import { ReadyMadeCompaniesInHungaryPage } from "./pages/ReadyMadeCompaniesInHungaryPage";
import { ReadyMadeOffshoreCompaniesPage } from "./pages/ReadyMadeOffshoreCompaniesPage";
import { RegisterCompanyInBulgariaPage } from "./pages/RegisterCompanyInBulgariaPage";
import { RegisterCompanyInHongKongPage } from "./pages/RegisterCompanyInHongKongPage";
import { RegisterCompanyInLithuaniaPage } from "./pages/RegisterCompanyInLithuaniaPage";
import { RegisterCompanyInSingaporePage } from "./pages/RegisterCompanyInSingaporePage";
import { RegisterCompanyInSwitzerlandPage } from "./pages/RegisterCompanyInSwitzerlandPage";
import { RegisterCompanyInUaePage } from "./pages/RegisterCompanyInUaePage";
import { RegisterCompanyInUkPage } from "./pages/RegisterCompanyInUkPage";
import { RegistrationOfCompaniesAbroadPage } from "./pages/RegistrationOfCompaniesAbroadPage";
import { ResidencePermitInCyprusPage } from "./pages/ResidencePermitInCyprusPage";
import { ResidencePermitInDubaiPage } from "./pages/ResidencePermitInDubaiPage";
import { ResidencePermitInHungaryPage } from "./pages/ResidencePermitInHungaryPage";
import { ResidencePermitInLithuaniaPage } from "./pages/ResidencePermitInLithuaniaPage";
import { ResidencePermitInPortugalPage } from "./pages/ResidencePermitInPortugalPage";
import { ResidencePermitInSlovakiaPage } from "./pages/ResidencePermitInSlovakiaPage";
import { StartingABusinessInHungaryPage } from "./pages/StartingABusinessInHungaryPage";
import { StartingABusinessInMontenegroPage } from "./pages/StartingABusinessInMontenegroPage";

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
        <Navbar />
        <main>
          <Routes>
            {/* Global */}
            <Route path="/" element={<Index />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/licenses" element={<PlaceholderPage title="All Licenses" />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/affiliate-program" element={<AffiliatePage />} />

            {/* License category hubs */}
            <Route path="/gamble-license" element={<GamblingHubPage />} />
            <Route path="/forex-license" element={<ForexHubPage />} />
            <Route path="/cryptocurrency-exchange-license" element={<CryptoHubPage />} />
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
            <Route path="/gambling-license-gibraltar" element={<PlaceholderPage title="Gibraltar Gambling License" />} />
            <Route path="/gambling-license-cyprus" element={<PlaceholderPage title="Cyprus Gambling License" />} />

            {/* Forex detail */}
            <Route path="/cyprus-forex-license" element={<CyprusForexPage />} />
            <Route path="/forex-broker-licence-in-malta" element={<MaltaForexPage />} />
            <Route path="/forex-broker-licence-in-vanuatu" element={<VanuatuForexPage />} />
            <Route path="/forex-broker-licence-in-mauritius" element={<MauritiusForexPage />} />
            <Route path="/forex-broker-licence-in-montenegro" element={<MontenegroForexPage />} />
            <Route path="/forex-license-seychelles" element={<PlaceholderPage title="Seychelles Financial License" />} />

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
            <Route path="/company-registration-in-malaysia" element={<CompanyRegistrationInMalaysiaPage />} />
            <Route path="/company-registration-in-the-netherlands" element={<CompanyRegistrationInTheNetherlandsPage />} />
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
            <Route path="/open-a-bank-account-in-cyprus" element={<PlaceholderPage title="Cyprus Bank Account" />} />
            <Route path="/open-a-bank-account-in-germany" element={<PlaceholderPage title="Germany Bank Account" />} />
            <Route path="/open-a-bank-account-in-luxembourg" element={<OpenABankAccountInLuxembourgPage />} />
            <Route path="/open-bank-account-as-foreigner-in-switzerland" element={<PlaceholderPage title="Switzerland Bank Account" />} />
            <Route path="/open-bank-account-as-foreigner-in-usa" element={<PlaceholderPage title="USA Bank Account" />} />
            <Route path="/opening-a-bank-account-in-the-united-kingdom" element={<PlaceholderPage title="UK Bank Account" />} />
            <Route path="/open-a-bank-account-in-hungary" element={<PlaceholderPage title="Hungary Bank Account" />} />
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
            <Route path="/open-an-investment-fund-in-luxembourg" element={<PlaceholderPage title="Luxembourg Fund" />} />
            <Route path="/open-an-investment-fund-in-estonia" element={<PlaceholderPage title="Estonia Fund" />} />
            <Route path="/registration-of-investment-funds-in-malta" element={<PlaceholderPage title="Malta Fund" />} />
            <Route path="/registration-of-investment-funds-in-czech" element={<PlaceholderPage title="Czech Fund" />} />
            <Route path="/registration-of-investment-funds-in-switzerland" element={<PlaceholderPage title="Switzerland Fund" />} />

            {/* Residence permits */}
            <Route path="/residence-permit-in-portugal" element={<ResidencePermitInPortugalPage />} />
            <Route path="/residence-permit-in-dubai" element={<ResidencePermitInDubaiPage />} />
            <Route path="/residence-permit-in-lithuania" element={<ResidencePermitInLithuaniaPage />} />
            <Route path="/residence-permit-in-cyprus" element={<ResidencePermitInCyprusPage />} />
            <Route path="/residence-permit-in-hungary" element={<ResidencePermitInHungaryPage />} />
            <Route path="/residence-permit-in-slovakia" element={<ResidencePermitInSlovakiaPage />} />

            {/* Catch-all */}
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
