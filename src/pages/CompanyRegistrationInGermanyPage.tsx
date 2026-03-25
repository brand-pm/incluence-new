import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-germany
const PAGE_DATA = {
  title: `Company Registration in Germany`,
  description: `Why it’s beneficial to open a company in Germany If an entrepreneur wants to do business in a safe environment, Germany may be the right choice — a country characterized by stability in social and political spheres.`,
  requirements: [
    `Why it’s beneficial to open a company in Germany`,
    `If an entrepreneur wants to do business in a safe environment, Germany may be the right choice — a country characterized by stability in social and political spheres. Its attractiveness is also due to several other factors: a developed banking system, a stable economy, a large solvent market, as well as a favorable climate for small and medium-sized businesses. Moreover, a company established in Germany immediately inspires trust from suppliers, partners, and clients`,
    `It is important to note that company registration in Germany is quite a labor-intensive process that includes several stages. In some cases, the procedure can take 6–7 months or even longer. To make company registration in Germany faster and smoother for entrepreneurs, we recommend seeking qualified assistance from our specialists`,
    `Company registration in Germany: benefits for business`,
    `When setting up a company in Germany, entrepreneurs can expect a number of advantages after successful registration. These include:`,
    `German companies have the status of reliable partners in the global market. This increases interest in cooperation with such firms from foreign businesses. Registering a company in Germany allows business owners to cross the Schengen zone border multiple times. They can also issue invitations on behalf of the company, enabling their partners to obtain work and visitor visas to enter the country. No limits are imposed on the export or transfer of capital. Company owners are entitled to export equipment, machinery, and other goods without customs duties and VAT. Business registration in Germany gives access to international markets. To achieve this, one can freely open a branch in any EU country`,
    `Starting a company in Germany: basic information`,
    `If you decide to register a company in Germany, the first step is to choose a legal form. Under current legislation, entrepreneurs have several options, with the most popular being a Limited Liability Company (GmbH). To register a GmbH in Germany, a share capital of at least €25,000 is required`,
    `In some cases, entrepreneurs choose to open a UG (mini GmbH), since the minimum share capital is only €1. Company registration for a UG in Germany follows a simplified procedure`,
    `However, there are certain nuances with this form:`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Germany?`, answer: `The final cost of starting a business in Germany depends on the type of activity, number of participants, and other factors. To find out the exact cost of company registration in Germany for your case, please contact our specialists.` },
    { question: `Can a company in Germany be registered online?`, answer: `A company in Germany can be registered remotely via power of attorney or by visiting the country in person.` },
    { question: `Can a non-resident open a business in Germany?`, answer: `A non-resident who is not on a sanctions list and is not a resident of a sanctioned state may register a company in Germany.` },
    { question: `What documents are required to register a company in Germany?`, answer: `To register a company in Germany, copies of passports and proof of address of the company’s participants are required. You must also submit completed registration forms, including information on the source of funding for the company’s establishment.` },
  ],
};

const CompanyRegistrationInGermanyPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInGermanyPage;
export { CompanyRegistrationInGermanyPage };
