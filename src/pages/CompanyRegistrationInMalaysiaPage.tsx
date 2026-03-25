import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-malaysia
const PAGE_DATA = {
  title: `Company Registration in Malaysia`,
  description: `What Malaysia Offers: Open a Company on Favorable Terms 100% foreign ownership of companies is allowed;no requirements for paid-up capital;registration applications can be submitted online.`,
  requirements: [
    `What Malaysia Offers: Open a Company on Favorable Terms`,
    `As a result of economic liberalization, the Malaysian authorities have significantly simplified the procedure for registering new enterprises:`,
    `100% foreign ownership of companies is allowed;no requirements for paid-up capital;registration applications can be submitted online`,
    `These conditions create favorable opportunities for entrepreneurs interested in registering companies in Malaysia. However, you should also pay attention to certain requirements and regulations regarding new companies:`,
    `at least one founder and one director are required, with the director being a resident of Malaysia;a registered legal address is required in Malaysia — this is where government correspondence will be sent;a company secretary is required;the director must not be bankrupt or have criminal convictions in the last 5 years`,
    `In practice, requirements for founders when registering a company in Malaysia are minimal. Even a foreign national can be a founder and director, provided they are a Malaysian resident, meaning they have a permanent address in the country. Additionally, a work permit is required`,
    `Company Registration in Malaysia: What Entrepreneurs Should Know`,
    `The process of creating a new company involves coming up with a company name before submitting the application. The legal form abbreviation, e.g., Sdn Bhd, is added to the end of the name`,
    `After this, a broad set of documents must be prepared, including identification of the founders and director, their addresses, the company charter, and more`,
    `You can get the full list of required documents during a consultation with our specialists. They will also provide detailed guidance on the entire company registration process in Malaysia. With our support, you can count on assistance at every stage of the procedure`,
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
