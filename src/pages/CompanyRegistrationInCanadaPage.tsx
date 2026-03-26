import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { CanadaCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-canada
const CompanyRegistrationInCanadaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-canada"
    title="Company Registration in Canada"
    description="The ease of doing business and a clear taxation system attract more and more organizations to Canada. Successfully registering a company here depends directly on proper planning and understanding local laws."
    sections={[
      {
        heading: "How to Successfully Open a Business in Canada",
        body: "The ease of doing business and a clear taxation system attract more and more organizations to Canada. However, successfully registering a company here depends directly on proper planning and understanding local laws. Specialized knowledge and experience are crucial for reducing tax burdens and ensuring compliance.\n\nOur team provides full support in registering companies in Canada, ensuring fast and effective setup. Thanks to our years of expertise, we guarantee efficient results. To discuss your project, fill out the form on the Incluence website. Our specialists will answer your questions during a consultation and help you choose the most suitable solution.",
      },
      {
        heading: "Advantages of Registering a Company in Canada",
        body: "Entrepreneurs who establish companies in Canada highlight many positive aspects of doing business here:\n\nCompany registration in Canada without offshore status. No public register of beneficiaries. Possibility to work successfully with multiple currencies since there is no currency control. The right to open a bank account \u2014 you can both register a company and open an account in the same country. A Canadian company owner may qualify for citizenship. First, a startup visa is issued (if approved) for 1 year, with the option to extend it, combining the citizenship process with business operations. No requirement for a mandatory audit after company registration. Banks are not obligated to report balances on business accounts to tax authorities. Financial institutions actively work with companies in IT services, exports, and imports. No mandatory minimum share capital requirement.\n\nAdditionally, to avoid double taxation, Canada has agreements with 87 countries.\n\nRequirements for a Corporation in Canada\n\nCorporation is one of the most popular forms of business. Registering a company in Canada as a non-resident requires meeting the following conditions:\n\nThe founder of the new company must be of legal age. They must have no outstanding criminal record. A valid foreign passport is required, with at least one year remaining before expiration at the time of registration.\n\nThere are also additional forms of ownership such as Limited Partnership and Limited Liability Partnership. However, they are less common among foreign entrepreneurs because Corporation offers more benefits and allows cooperation with both local and foreign partners.\n\nCompany Registration in Canada: What's Required for a Corporation\n\nBefore opening a business in Canada, you need to choose a name and check its availability in the official registry. Additionally:\n\nProvide copies of a valid passport and a paid utility bill for property owned by the director. These documents require notarization. Prepare a bank reference from the institution where the entrepreneur has an account. Submit an application form and questionnaire for business registration.\n\nAll documents must be submitted in the official language \u2014 translated into either French or English, depending on the province where the registration takes place.",
      },
      {
        heading: "Taxation Details When Registering a Company in Canada",
        body: "Registering a company in Canada requires understanding the local tax system. Businesses must pay provincial, federal, and municipal taxes. Rates differ depending on the province and may change, so it's important to confirm with official sources. The system also includes:\n\nA 5% goods and services tax (GST) \u2014 with exemptions for some education and healthcare services. A general corporate tax rate of 38%. However, depending on turnover, this rate can be reduced. A federal tax credit can lower the rate to 15%.\n\nEntrepreneurs should also consider the Value Added Tax (VAT), which is applied on a progressive scale to businesses operating within Canada.\n\nSome companies may qualify for tax exemptions. For example, Extra-provincial Corporations (EPC) registered in certain provinces may not pay taxes if profits are earned outside of Canada.",
      },
      {
        heading: "Additional services",
        body: "See all countries",
      },
    ]}
    requirements={[
      "Founder must be of legal age",
      "No outstanding criminal record",
      "Valid foreign passport (at least 1 year before expiration)",
      "Copy of passport and paid utility bill (notarized)",
      "Bank reference from shareholder's institution",
      "Application form and business registration questionnaire",
    ]}
    faq={[
      {
        question: "What is the timeline for registering a company in Canada?",
        answer: "You can register a company in Canada in 3 weeks.",
      },
      {
        question: "Can a company in Canada be registered online?",
        answer: "Yes, a company in Canada can be registered remotely through local representatives.",
      },
      {
        question: "Can a non-resident open a business in Canada?",
        answer: "A non-resident who is not on sanctions lists and not a resident of a sanctioned country can register a company in Canada.",
      },
      {
        question: "What documents are required to register a company in Canada?",
        answer: "To register a company in Canada, you need to provide a copy of your passport and proof of address of the company participants.",
      },
    ]}

  />
);

export default CompanyRegistrationInCanadaPage;
export { CompanyRegistrationInCanadaPage };
