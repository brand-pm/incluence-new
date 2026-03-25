import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-malaysia
const PAGE_DATA = {
  title: `Company Registration in Malaysia`,
  description: `As a result of economic liberalization, the Malaysian authorities have significantly simplified the procedure for registering new enterprises. 100% foreign ownership is allowed with no requirements for paid-up capital.`,
  requirements: [
    `At least one founder and one director`,
    `Director must be a resident of Malaysia`,
    `Registered legal address in Malaysia`,
    `Company secretary`,
    `Director must not be bankrupt or have criminal convictions`,
    `Copies of passports and proof of addresses`,
    `Company charter`,
    `Company name with legal form abbreviation (e.g., Sdn Bhd)`,
  ],
  faq: [
    { question: `How long does it take to open a company in Malaysia?`, answer: `A company in Malaysia can be registered within 2 weeks.` },
    { question: `Can a company be registered online in Malaysia?`, answer: `A company in Malaysia can be registered remotely via local representatives.` },
    { question: `Can a non-resident open a business in Malaysia?`, answer: `A non-resident can register a company in Malaysia. Our specialists can advise you on all the specific requirements for non-residents.` },
    { question: `What documents are required to register a company in Malaysia?`, answer: `To register a company in Malaysia, copies of passports and proof of addresses of the company participants are required.` },
  ],
};

const CompanyRegistrationInMalaysiaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInMalaysiaPage;
export { CompanyRegistrationInMalaysiaPage };
