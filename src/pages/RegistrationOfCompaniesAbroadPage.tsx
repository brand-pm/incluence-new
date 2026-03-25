import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /registration-of-companies-abroad
const PAGE_DATA = {
  title: `Registration of companies abroad`,
  description: `Registration of companies abroad`,
  requirements: [
    `Contact our specialists for detailed requirements`,
  ],
  faq: [
    { question: `In which countries do we help to register a company?`, answer: `We help with the registration of companies around the world, including EU countries, European non-EU countries, Asian countries, USA, Australia and Oceania, offshore.` },
    { question: `Is it possible to register a company abroad online?`, answer: `Detailed conditions for registering a company depend on the legislation of the country of registration. Typically, companies are registered by local representatives on the basis of a power of attorney. Also, a company can be registered during a perso` },
    { question: `How long does it take to register a company abroad?`, answer: `The process of registering a company depends on the legislation of the country of incorporation. It usually takes 2-3 weeks to set up a company.` },
  ],
};

const RegistrationOfCompaniesAbroadPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default RegistrationOfCompaniesAbroadPage;
export { RegistrationOfCompaniesAbroadPage };
