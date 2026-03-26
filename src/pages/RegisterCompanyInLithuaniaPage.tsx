import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";


// Source: service-texts.md | URL: /register-company-in-lithuania
const PAGE_DATA = {
  title: `Register company in Lithuania`,
  description: `Lithuania company registration allows business people to enter the European market and successfully develop their businesses. This is possible due to some of the lowest corporate taxes in Europe, a stable market economy, and a loyal banking system.`,
  sections: [
    {
      heading: `What company registration in Lithuania is the most suitable?`,
      body: `Lithuania company registration allows business people to enter the European market and successfully develop their businesses. It is possible due to various advantages of the state: some of the lowest corporate taxes in Europe, a stable market economy, and a loyal banking system.`,
    },
  ],
  requirements: [
    `Some of the lowest corporate taxes in Europe`,
    `Stable market economy`,
    `Loyal banking system`,
    `Copies of passport of company's participants`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `What are the terms for opening a company in Lithuania?`, answer: `The terms for opening a company in Lithuania pepends on the type of company's activity and is around 3-4 weeks.` },
    { question: `Can I register a company remotely in Lithuania?`, answer: `A company in Lithuania can be registered remotely using a power of attorney or during a personal visit.` },
    { question: `Can a non-resident open a business in Lithuania?`, answer: `A non-resident who is not included in the sanctions lists and is not a resident of the sanctioned country can open a company in Lithuania.` },
    { question: `What documents do I need to register a company in Lithuania?`, answer: `In order to register a company in Lithuania, you must submit copies of passport of company's participants. It is also necessary to submit completed registration forms.` },
  ],
};

const RegisterCompanyInLithuaniaPage = () => (
  <ServiceDetailPage
    slug="register-company-in-lithuania"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}

  />
);

export default RegisterCompanyInLithuaniaPage;
export { RegisterCompanyInLithuaniaPage };
