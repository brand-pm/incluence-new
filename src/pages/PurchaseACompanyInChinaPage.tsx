import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-a-company-in-china
const PAGE_DATA = {
  title: `Purchase a Company in China`,
  description: `Pay a fixed tax – all businesses pay 25% of annual profit. Maintain accounting records. Prepare annual company reports. Comply with mandatory foreign exchange control requirements.`,
  requirements: [
    `What You Need to Know to Buy a Company in China`,
    `Thanks to inexpensive labor and foreign investment, the People’s Republic of China is trusted by investors and entrepreneurs worldwide. Many aspire to conduct business in this communist state with a relatively closed economy, but there are some difficulties`,
    `Setting up a company and scaling a business internationally requires entrepreneurs to follow a series of procedures, such as registration, licensing, obtaining approvals from various authorities, and more. However, instead of creating a company from scratch, you can purchase a company in China and immediately start business operations`,
    `By acquiring an existing business, you can simultaneously:`,
    `Legally operate across the country in any type of business permitted by law. Engage in import and export. This requires applying for a special license. We can assist in obtaining approval for licensing companies wishing to operate in this sector. Offset the value-added tax (VAT) through exports. Hire personnel who are Chinese residents, without the need for work visas required for foreigners`,
  ],
  faq: [
    { question: `What documents are required to purchase a business in China?`, answer: `To purchase a business in China, copies of passports and proof of address for all company participants are required. Additional documents may be requested in some cases.` },
    { question: `How long does it take to purchase a company in China?`, answer: `The process of purchasing a company in China takes about three weeks.` },
    { question: `What taxes need to be paid when buying a company in China?`, answer: `When purchasing a company in China, only the registration fee must be paid. Tax obligations arise only after the company begins operations or if the previous owner did not pay taxes for prior activities.` },
    { question: `Can a company in China be purchased online?`, answer: `A company in China can be transferred remotely through a local representative or via a personal visit.` },
  ],
};

const PurchaseACompanyInChinaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseACompanyInChinaPage;
export { PurchaseACompanyInChinaPage };
