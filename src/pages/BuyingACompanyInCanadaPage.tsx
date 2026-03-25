import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /buying-a-company-in-canada
const PAGE_DATA = {
  title: `Buying a Company in Canada`,
  description: `The country attracts entrepreneurs with its investment potential. The corporate tax rate in Canada is 15%, applied to enterprises with profits not exceeding CAD 500,000. Most contracts and agreements with business partners can be concluded without additional approval from regulatory authorities.`,
  requirements: [
    `Why it is recommended to buy a company in Canada instead of starting one from scratch`,
    `Today, the Canadian market is characterized by dynamic growth and favorable conditions for entrepreneurs. Because of this, many businessmen are interested in registering a local company. However, creating a company from scratch is a rather complex and time-consuming process. For many entrepreneurs, acquiring a ready-made Canadian company is a more suitable option`,
    `The decision to buy a company in Canada also comes from the fact that although commercial competition is quite high here, market stability and favorable legislation are much more significant advantages. One should not forget that any disputes are resolved fairly and within the framework of the law. An additional advantage for foreign entrepreneurs is the right to apply for a residence permit, which is granted to all non-residents who own a company in this country`,
    `Why entrepreneurs decide to buy a company in Canada`,
    `This country offers many advantages for entrepreneurs. Essentially, the main obstacle is the necessity of starting a company. This process requires completing a number of procedures, preparing and submitting multiple documents, and complying with certain legal requirements, among other things. However, the ability to buy a company in Canada relieves the entrepreneur of all these difficulties, while granting access to a wide range of benefits available in this jurisdiction`,
    `In particular, entrepreneurs value Canada as a suitable place for business expansion for the following reasons:`,
    `The country attracts entrepreneurs with its investment potential. The corporate tax rate in Canada is 15%, applied to enterprises with profits not exceeding CAD 500,000. Most contracts and agreements with business partners can be concluded without additional approval from regulatory authorities. Canada has a convenient geographical location, allowing local companies to supply goods and services throughout North America. The country is characterized by stability not only in politics but also in the financial sector`,
    `What to consider before buying a company in Canada`,
    `Canadian legislation allows entrepreneurs to establish companies in various legal forms, though most often the choice falls on Limited Partnership, Limited Liability Partnership, or Corporation. Each form has its own features, so we recommend contacting our firm for a detailed consultation and discussion of all your questions`,
    `When deciding which company to buy in Canada, an entrepreneur should first make sure that they are eligible to acquire a local business. Generally, a purchase agreement can be concluded with any foreign investor who has proven management experience. The investor must also have sufficient assets to acquire a Canadian business`,
  ],
  faq: [
    { question: `How to re-register a ready-made company in Canada?`, answer: `To re-register a company in Canada, the seller and buyer must either issue a power of attorney or visit Canada, prepare a copy of their passport, and complete the re-registration forms. The completed documents must then be submitted to the Registry.` },
    { question: `What documents are required to purchase a company in Canada?`, answer: `To purchase a company in Canada, copies of the participants’ passports and proof of address must be submitted. Registration forms must also be completed, including information about the source of financing for the company’s creation. During re-regist` },
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
