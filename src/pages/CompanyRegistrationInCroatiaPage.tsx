import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { CroatiaCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-croatia
const PAGE_DATA = {
  title: `Company Registration in Croatia`,
  description: `Doing business in Croatia has several advantages for entrepreneurs. Company registration in Croatia is attractive due to tax incentives, political stability, developed infrastructure, and favorable business lending options available in local banks.`,
  sections: [
    {
      heading: `Why Company Registration in Croatia is Popular`,
      body: `Doing business in Croatia has several advantages for entrepreneurs:\n\nAccess to tax incentives established at the legislative level; Stability in the country's social and political spheres; Developed infrastructure; High economic growth rates.\n\nCompany registration in Croatia is also attractive due to favorable business lending options available in local banks.`,
    },
    {
      heading: `Company Registration in Croatia: What Entrepreneurs Should Know`,
      body: `Entrepreneurs interested in business registration in Croatia typically prefer opening an LLC (limited liability company). Other options are also available, such as joint-stock companies and others.\n\nRegistering a company in Croatia requires meeting several conditions. One of them is having at least one director and one shareholder. Before officially starting the company, the entrepreneur must pay the share capital. Its amount depends on the legal form of the company — for an LLC it is 20,000 HRK.\n\nNote that there are no requirements for a company secretary. The shareholder register is public.`,
    },
    {
      heading: `Company Registration in Croatia: Taxation`,
      body: `All companies must pay corporate income tax at a rate of 20%. However, preferential rates apply to some types of activities. For detailed consultations on this and any other issues, contact our specialists.\n\nCompany registration in Croatia also requires entrepreneurs to pay value-added tax (VAT) at 25%. Some categories of goods and services are subject to a reduced rate of 5%.\n\nThe dividend tax is 12%. No preferential rates are provided.\n\nIf you are considering company registration in Croatia, keep in mind the reporting obligations. However, audits are not required by law.`,
    },
    {
      heading: `How Company Registration in Croatia Works`,
      body: `In most cases, establishing a Croatian company involves several stages. For example, a typical registration process includes three steps:\n\nPreparation and submission of documents. These include: a copy of the passport, a short business description, a founding agreement, and several other documents. Payment of state fees and share capital. Registration with Croatia's social, insurance, and tax authorities.\n\nPlease note this is only an example of how company registration in Croatia may proceed. In practice, the process may involve many additional steps, making it difficult to get everything right on the first try without professional assistance. Moreover, the procedure can take many months, resulting in additional expenses and challenges for entrepreneurs.\n\nIf you need assistance at any stage of business registration in Croatia, our specialists will provide full legal support, handle document preparation, and register your company for you.`,
    },
  ],
  requirements: [
    `At least one director and one shareholder`,
    `Share capital payment (HRK 20,000 for an LLC)`,
    `Copy of passport and short business description`,
    `Founding agreement`,
    `Corporate income tax at 20%`,
    `VAT at 25% (reduced rate of 5% for some goods)`,
    `Dividend tax at 12%`,
    `No company secretary required`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Croatia?`, answer: `The final cost of starting a business in Croatia depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Croatia by contacting our specialists.` },
    { question: `Can a company in Croatia be registered online?`, answer: `A company in Croatia can be registered remotely via power of attorney or by visiting Croatia.` },
    { question: `Can a non-resident open a business in Croatia?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can open a business in Croatia.` },
    { question: `What documents are required to register a company in Croatia?`, answer: `To register a company in Croatia, you must submit copies of passports and proof of address of the company's participants.` },
  ],
};

const CompanyRegistrationInCroatiaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-croatia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default CompanyRegistrationInCroatiaPage;
export { CompanyRegistrationInCroatiaPage };
