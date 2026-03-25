import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { ChinaCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /purchase-a-company-in-china
const PAGE_DATA = {
  title: `Purchase a Company in China`,
  description: `Instead of creating a company from scratch, you can purchase a company in China and immediately start business operations. By acquiring an existing business, you can legally operate across the country in any permitted type of activity.`,
  sections: [
    {
      heading: `What to Consider When Deciding to Buy a Ready-Made Company in China`,
      body: `Business in this jurisdiction has specific rules that every entrepreneur should know. In particular, after acquiring a company, you will need to:\n\nPay a fixed tax – all businesses pay 25% of annual profit. Maintain accounting records. Prepare annual company reports. Comply with mandatory foreign exchange control requirements.\n\nIt's also important to note that information about directors, shareholders, and owners is publicly available, so anonymity is not guaranteed.\n\nIf you decide to purchase a company in China, you may also consider Hong Kong. Although part of the People's Republic of China, it operates under different laws, particularly with more business-friendly taxation and general commercial openness.`,
    },
    {
      heading: `Recommended Companies to Buy in China`,
      body: `Several legal forms of business are popular in mainland China. However, not all are suitable for entrepreneurs. For instance, representative offices are used for market monitoring and building business contacts but are legally prohibited from conducting commercial activities.\n\nWFOEs (Wholly Foreign-Owned Enterprises), on the other hand, are companies where 100% of the capital belongs to foreign investors. Such entities can earn profits, pay taxes, and conduct business operations. WFOEs are often used as service providers, technology manufacturers, and more.\n\nOnce you decide which type of ready-made company you want to buy in China, contact us to order the service. We will handle all bureaucratic and legal issues and guide you through all stages of the purchase transaction in the People's Republic of China.`,
    },
    {
      heading: `What You Need to Know to Buy a Company in China`,
      body: `Thanks to inexpensive labor and foreign investment, the People's Republic of China is trusted by investors and entrepreneurs worldwide. Many aspire to conduct business in this communist state with a relatively closed economy, but there are some difficulties.\n\nSetting up a company and scaling a business internationally requires entrepreneurs to follow a series of procedures, such as registration, licensing, obtaining approvals from various authorities, and more. However, instead of creating a company from scratch, you can purchase a company in China and immediately start business operations.\n\nBy acquiring an existing business, you can simultaneously:\n\nLegally operate across the country in any type of business permitted by law. Engage in import and export. This requires applying for a special license. We can assist in obtaining approval for licensing companies wishing to operate in this sector. Offset the value-added tax (VAT) through exports. Hire personnel who are Chinese residents, without the need for work visas required for foreigners.`,
    },
  ],
  requirements: [
    `Copies of passports of all company participants`,
    `Proof of address for all company participants`,
    `Fixed tax of 25% of annual profit after operations begin`,
    `Mandatory accounting records and annual company reports`,
    `Compliance with foreign exchange control requirements`,
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
    slug="purchase-a-company-in-china"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<ChinaCompanyVisual />}

  />
);

export default PurchaseACompanyInChinaPage;
export { PurchaseACompanyInChinaPage };
