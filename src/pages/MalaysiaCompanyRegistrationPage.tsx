import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /malaysia-company-registration
const PAGE_DATA = {
  title: `Online Company Registration Malaysia for Foreigners - Incluence`,
  description: `Step-by-Step Company Registration Process Here's a practical, easy-to-follow guide:Step 1: Company Name Application and ReservationNaming rules: Your proposed name must be unique, not offensive, and not infringe existing trademarks or reserved names.Use SSM's MyCoID portal to search availability.Fee.`,
  requirements: [
    `Requirements for Company Registration in Malaysia`,
    `Thinking about setting up business in Malaysia? Before you dive in, it\'s vital to understand the basic requirements. Malaysia has clear regulatory expectations that are business-friendly but require precision. Here\'s your definitive checklist to register a company in Malaysia as a foreigner:Minimum Director and Shareholder RequirementsSetting up a business isn\'t just about paperwork—it\'s about people. Every Sdn. Bhd. must have at least one resident director in Malaysia. If you\'re overseas, don\'t worry: many licensed providers offer nominee director services to meet this legal requirement. You\'ll also need at least one shareholder, which can be an individual or a corporation.Registered Office Address RequirementYour business needs a legal home. A registered office address in Malaysia is mandatory for all entities. Luckily, this doesn\'t have to be a full-fledged office—many firms offer virtual or coworking space addresses as part of their service packages.Appointing a Company SecretaryBehind every compliant company is a capable company secretary. Malaysia law mandates that every Sdn. Bhd. appoint a licensed company secretary within 30 days of incorporation. They ensure that your business remains compliant and up to date with filings and legal obligations.Minimum Share CapitalThink you need millions to start? Think again. The legal minimum paid-up capital is just MYR 1. However, for work permits, licenses, and banking, a higher amount—usually MYR 2,500 or more—is advised. Paid-up capital reflects your operational commitment and can influence approvals`,
    `Discuss the project`,
  ],
  faq: [
    { question: `Can a foreigner own 100% of a company in Malaysia?`, answer: `Yes, most industries allow full foreign ownership, especially under a Sdn. Bhd. structure.` },
    { question: `How long does it take to register a company in Malaysia?`, answer: `Between 3–10 working days depending on document readiness.` },
    { question: `Do I need to be in Malaysia to register a company?`, answer: `No, but you’ll need a resident director and address. Bank account openings often require physical presence.` },
    { question: `What is the minimum capital requirement to start a company in Malaysia?`, answer: `Legally MYR 1; practically MYR 2,500–500,000 depending on business nature and visa needs.` },
    { question: `What is a Company Secretary and why do I need one?`, answer: `It’s a legal requirement. The secretary ensures regulatory compliance and manages company filings.` },
    { question: `How much does it cost to register a company in Malaysia?`, answer: `Expect to pay around €3,500–3,800.` },
    { question: `What documents are required for a foreigner to register a company?`, answer: `Name approval, incorporation forms, passport, proof of address, capital documentation.` },
    { question: `Can I open a corporate bank account in Malaysia as a non-resident?`, answer: `Yes, but many banks require at least one director to be present in person.` },
  ],
};

const MalaysiaCompanyRegistrationPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default MalaysiaCompanyRegistrationPage;
export { MalaysiaCompanyRegistrationPage };
