import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { GermanyCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-germany
const PAGE_DATA = {
  title: `Company Registration in Germany`,
  description: `Germany offers a safe business environment characterized by stability in social and political spheres, a developed banking system, a stable economy, and a favorable climate for small and medium-sized businesses.`,
  sections: [
    {
      heading: `Why it's beneficial to open a company in Germany`,
      body: `If an entrepreneur wants to do business in a safe environment, Germany may be the right choice \u2014 a country characterized by stability in social and political spheres. Its attractiveness is also due to several other factors: a developed banking system, a stable economy, a large solvent market, as well as a favorable climate for small and medium-sized businesses. Moreover, a company established in Germany immediately inspires trust from suppliers, partners, and clients.\n\nIt is important to note that company registration in Germany is quite a labor-intensive process that includes several stages. In some cases, the procedure can take 6\u20137 months or even longer. To make company registration in Germany faster and smoother for entrepreneurs, we recommend seeking qualified assistance from our specialists.`,
    },
    {
      heading: `Company registration in Germany: benefits for business`,
      body: `When setting up a company in Germany, entrepreneurs can expect a number of advantages after successful registration. These include:\n\nGerman companies have the status of reliable partners in the global market. This increases interest in cooperation with such firms from foreign businesses. Registering a company in Germany allows business owners to cross the Schengen zone border multiple times. They can also issue invitations on behalf of the company, enabling their partners to obtain work and visitor visas to enter the country. No limits are imposed on the export or transfer of capital. Company owners are entitled to export equipment, machinery, and other goods without customs duties and VAT. Business registration in Germany gives access to international markets. To achieve this, one can freely open a branch in any EU country.`,
    },
    {
      heading: `Starting a company in Germany: basic information`,
      body: `If you decide to register a company in Germany, the first step is to choose a legal form. Under current legislation, entrepreneurs have several options, with the most popular being a Limited Liability Company (GmbH). To register a GmbH in Germany, a share capital of at least \u20AC25,000 is required.\n\nIn some cases, entrepreneurs choose to open a UG (mini GmbH), since the minimum share capital is only \u20AC1. Company registration for a UG in Germany follows a simplified procedure.\n\nHowever, there are certain nuances with this form:\n\n25% of profits must be allocated to the share capital until it reaches \u20AC25,000; Partners often distrust UG companies, as the simplified registration increases the risk of entering into contracts with unreliable entrepreneurs.\n\nOnce the legal form has been chosen, the process of opening a company in Germany begins. This involves numerous steps, various procedures, preparation of a significant number of documents, and more.\n\nSince company registration in Germany can be challenging, we recommend seeking assistance from our specialists. We provide comprehensive legal support, handle bureaucratic procedures, and will register a company in Germany for you.`,
    },
  ],
  requirements: [
    `Copies of passports of all participants`,
    `Proof of address for all participants`,
    `Completed registration forms`,
    `Information on the source of funding`,
    `Share capital of at least \u20AC25,000 for GmbH`,
    `Share capital of \u20AC1 minimum for UG (mini GmbH)`,
    `Choice of legal form (GmbH or UG)`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Germany?`, answer: `The final cost of starting a business in Germany depends on the type of activity, number of participants, and other factors. To find out the exact cost of company registration in Germany for your case, please contact our specialists.` },
    { question: `Can a company in Germany be registered online?`, answer: `A company in Germany can be registered remotely via power of attorney or by visiting the country in person.` },
    { question: `Can a non-resident open a business in Germany?`, answer: `A non-resident who is not on a sanctions list and is not a resident of a sanctioned state may register a company in Germany.` },
    { question: `What documents are required to register a company in Germany?`, answer: `To register a company in Germany, copies of passports and proof of address of the company's participants are required. You must also submit completed registration forms, including information on the source of funding for the company's establishment.` },
  ],
};

const CompanyRegistrationInGermanyPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-germany"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default CompanyRegistrationInGermanyPage;
export { CompanyRegistrationInGermanyPage };
