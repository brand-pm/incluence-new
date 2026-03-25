import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-croatia
const PAGE_DATA = {
  title: `Company Registration in Croatia`,
  description: `Access to tax incentives established at the legislative level; Stability in the country’s social and political spheres; Developed infrastructure; High economic growth rates. Company registration in Croatia is also attractive due to favorable business lending options available in local banks.`,
  requirements: [
    `Why Company Registration in Croatia is Popular`,
    `Doing business in Croatia has several advantages for entrepreneurs:`,
    `Access to tax incentives established at the legislative level; Stability in the country’s social and political spheres; Developed infrastructure; High economic growth rates`,
    `Company registration in Croatia is also attractive due to favorable business lending options available in local banks`,
    `Company Registration in Croatia: What Entrepreneurs Should Know`,
    `Entrepreneurs interested in business registration in Croatia typically prefer opening an LLC (limited liability company). Other options are also available, such as joint-stock companies and others`,
    `Registering a company in Croatia requires meeting several conditions. One of them is having at least one director and one shareholder. Before officially starting the company, the entrepreneur must pay the share capital. Its amount depends on the legal form of the company — for an LLC it is 20,000 HRK`,
    `Note that there are no requirements for a company secretary. The shareholder register is public`,
    `Company Registration in Croatia: Taxation`,
    `All companies must pay corporate income tax at a rate of 20%. However, preferential rates apply to some types of activities. For detailed consultations on this and any other issues, contact our specialists`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Croatia?`, answer: `The final cost of starting a business in Croatia depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Croatia by contacting our specialists.` },
    { question: `Can a company in Croatia be registered online?`, answer: `A company in Croatia can be registered remotely via power of attorney or by visiting Croatia.` },
    { question: `Can a non-resident open a business in Croatia?`, answer: `A non-resident who is not on sanctions lists and not a resident of a sanctioned country can open a business in Croatia.` },
    { question: `What documents are required to register a company in Croatia?`, answer: `To register a company in Croatia, you must submit copies of passports and proof of address of the company’s participants.` },
  ],
};

const CompanyRegistrationInCroatiaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCroatiaPage;
export { CompanyRegistrationInCroatiaPage };
