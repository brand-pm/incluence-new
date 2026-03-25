import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /purchase-of-a-company-in-cyprus
const PAGE_DATA = {
  title: `Purchase of a Company in Cyprus`,
  description: `When new companies are incorporated in Cyprus, they must meet specific requirements such as having a registered legal office on the island and appointing a Cypriot-resident secretary. Buying a ready-made company is usually much faster, and operations can begin within just a few days after the purchase.`,
  requirements: [
    `Registered legal office on the island required`,
    `Cypriot-resident secretary must be appointed`,
    `At least one shareholder required`,
    `One or more directors (individuals or legal entities)`,
    `Minimum share capital around EUR 1,000`,
    `Copies of participants’ passports and proof of address`,
    `Proof of the origin of funds`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `What documents are required to buy a business in Cyprus?`, answer: `To buy a business in Cyprus, you need to provide copies of the participants’ passports and proof of address. You also need to submit completed registration forms, including information about the source of funds used to establish the company.` },
    { question: `How can a foreigner buy a company in Cyprus?`, answer: `You must provide personal documents, pay all fees and charges, and ensure the appointment of a Cypriot-resident director and local registered address. Before purchase, due diligence should be conducted to check the company’s status and possible debts.` },
    { question: `What taxes must be paid when buying a company in Cyprus?`, answer: `When buying a company in Cyprus, you only need to pay the registration fee. Tax obligations arise only after the company starts operating, or if the previous owner failed to pay taxes on prior activities.` },
    { question: `Can I buy a company in Cyprus online?`, answer: `You can choose a company online and re-register it through a power of attorney or by visiting Cyprus in person.` },
  ],
};

const PurchaseOfACompanyInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default PurchaseOfACompanyInCyprusPage;
export { PurchaseOfACompanyInCyprusPage };
