import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-dubai
const PAGE_DATA = {
  title: `Residence Permit in Dubai`,
  description: `In the UAE, instead of “residence permit,” the term “residence visa” is used. This permit is issued for a specific period, which may vary depending on the grounds for relocation to the Emirates.`,
  requirements: [
    `Valid passport (at least 6 months remaining)`,
    `Color copies of all passport pages`,
    `Passport-standard photograph`,
    `Certificate of no criminal record`,
    `Medical examination results`,
    `Proof of employment or investment`,
    `Emirates ID biometric data`,
  ],
  faq: [
    { question: `What does a residence permit in Dubai provide?`, answer: `A residence permit in Dubai gives the right to live, work, and conduct business in the Emirates, access medical and educational institutions, as well as open bank accounts and obtain loans.` },
    { question: `Can you obtain a residence permit in the UAE through investment?`, answer: `Yes, you can obtain residency in the UAE through investment. Options include investing in real estate of a certain value or investing in a business.` },
    { question: `How can you obtain a residence permit in the UAE?`, answer: `A residence permit in the UAE can be obtained through investment, real estate purchase, business setup, or employment. There are different types of visas, including long-term visas for investors and highly qualified specialists.` },
    { question: `What documents are required to obtain a residence permit in Dubai?`, answer: `You need a valid passport, a certificate of no criminal record, medical examination results, proof of employment or investment, and documents confirming ownership of real estate in the UAE.` },
  ],
};

const ResidencePermitInDubaiPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInDubaiPage;
export { ResidencePermitInDubaiPage };
