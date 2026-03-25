import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-canada
const PAGE_DATA = {
  title: `Buying a Company in Canada`,
  description: `The Canadian market is characterized by dynamic growth and favorable conditions for entrepreneurs. Acquiring a ready-made Canadian company is a faster alternative to the complex process of creating one from scratch.`,
  requirements: [
    `Copies of participants’ passports`,
    `Proof of address for all participants`,
    `Completed re-registration forms`,
    `Information about the source of financing`,
    `Power of attorney (if buying remotely)`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Canada?`, answer: `The seller and buyer must either issue a power of attorney or visit Canada, prepare a copy of their passport, and complete the re-registration forms. The completed documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in Canada?`, answer: `Copies of the participants’ passports and proof of address must be submitted. Registration forms must also be completed, including information about the source of financing. Beneficiaries may need to provide proof of the origin of funds.` },
    { question: `What taxes need to be paid when buying a company in Canada?`, answer: `When buying a company in Canada, only the registration fee must be paid. Tax obligations arise only after the company begins operations, or if the previous owner failed to pay taxes on past activities.` },
    { question: `Can a company in Canada be purchased online?`, answer: `A company in Canada can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const BuyingACompanyInCanadaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInCanadaPage;
export { BuyingACompanyInCanadaPage };
