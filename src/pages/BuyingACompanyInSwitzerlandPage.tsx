import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-switzerland
const PAGE_DATA = {
  title: `Buying a Company in Switzerland`,
  description: `Switzerland is a country of strict rules and specific standards, making registration complex. Buying a ready-made company saves effort as these companies have already completed all registration procedures and have an open bank account.`,
  requirements: [
    `Copies of participants’ passports`,
    `Proof of address for all participants`,
    `Completed registration forms`,
    `Information on the source of funds`,
    `Business plan (may be requested by the bank)`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Switzerland?`, answer: `You must provide copies of the participants’ passports and proof of address. Completed registration forms including information on the source of funds are also required. Beneficiaries may be asked to provide confirmation of the origin of funds.` },
    { question: `How long does the process of buying a company in Switzerland take?`, answer: `Buying a company in Switzerland takes about 2–3 weeks.` },
    { question: `What taxes must be paid when buying a company in Switzerland?`, answer: `When buying a company in Switzerland, you only need to pay the registration fee. Tax obligations arise only after the company begins its activity or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Switzerland online?`, answer: `Yes, a company in Switzerland can be transferred remotely through a power of attorney or in person.` },
  ],
};

const BuyingACompanyInSwitzerlandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInSwitzerlandPage;
export { BuyingACompanyInSwitzerlandPage };
