import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-portugal
const PAGE_DATA = {
  title: `Residence Permit in Portugal`,
  description: `Portugal is mostly sunny, has a relatively high level of safety, and many other advantages. The country is considered an excellent place to live, but migrants need to obtain a residence permit (V.N.J.) to relocate here.`,
  sections: [
    {
      heading: `Obtaining a Residence Permit: Portugal`,
      body: `Portugal is mostly sunny, has a relatively high level of safety, and many other advantages. The country is considered an excellent place to live, but migrants need to obtain a residence permit (V.N.J.) to relocate here. This can be done in several ways: purchasing property, starting a business, marrying a citizen, etc. The most common method is obtaining a residence permit in Portugal through investment. The state offers many options for investment opportunities.`,
    },
    {
      heading: `Portugal: Residence Permit and Its Advantages`,
      body: `Holders of a Portuguese residence permit gain several unique benefits:\nEU resident status. Living in a highly developed country with a high standard of living. The right to include parents, children, and spouse in the residence permit application. Travel within the Schengen area without a visa. The right to apply for permanent residence and/or EU citizenship, among other benefits.\nObtaining a residence permit in Portugal grants you the same rights and obligations as citizens, except voting rights and certain state benefits.`,
    },
    {
      heading: `How Investors Can Obtain a Residence Permit in Portugal`,
      body: `Investing in the country\u2019s economy is the fastest way to obtain a Portuguese residence permit. Note that there are minimal physical presence requirements: the permit remains valid if the migrant spends just one week per year in Portugal.\nBefore applying, it\u2019s recommended to review the current investment options.\nObtaining Residency Through Real Estate Purchase\nWealthy migrants can obtain a Portuguese residence permit by investing in real estate. For low-density areas, a minimum investment of EUR 280,000 is required. For other areas, the minimum investment ranges from EUR 500,000.\nInvestments in properties requiring renovation are also eligible. Buildings must be at least 30 years old and located in renovation zones. Minimum investments are EUR 280,000 in low-density areas and EUR 350,000 elsewhere.\nObtaining a Residence Permit for Business Owners\nStarting a company is another route to obtain a residence permit. Portugal allows migrants to invest in new or existing companies. In both cases, a minimum investment of EUR 500,000 is required.\nAdditional benefits are available if the investor creates at least 10 full-time jobs. In this case, the amount invested does not matter.\nAdditional Options for a Residence Permit\nInvestors who prefer not to invest in real estate can explore other options, such as investment funds with a minimum of EUR 500,000. Returns may range from 3\u201310% annually. After 6 years, investments may be returned, depending on fund terms.\nOther investment options include:\nCultural development projects \u2013 from EUR 250,000. Research and scientific projects \u2013 from EUR 500,000. Transferring funds to a local bank \u2013 from EUR 1,500,000.\nThese investments grant a 1-year residence permit, which must be renewed twice. Each renewal extends validity by 2 years, totaling 5 years. Funds cannot be withdrawn during this period; doing so will cancel the residence permit.`,
    },
    {
      heading: `Permanent Residence and V.N.J. in Portugal`,
      body: `After obtaining a residence permit, you may apply for permanent residence (valid 5 years) without repeating the V.N.J. renewal steps. Portugal allows dual citizenship. Permanent residence requires passing a language exam and residing in Portugal for at least 5 years. Since 2018, some migrants can apply directly for citizenship.`,
    },
    {
      heading: `Residence Permit in Portugal with Incluence`,
      body: `Contact our specialists for expert guidance on legalizing your status in Portugal. They will answer questions about costs, required documents, applicant obligations, and more. Reach us via Instagram, WhatsApp, Telegram, Facebook, Messenger, or our website.`,
    },
  ],
  requirements: [
    `Passport`,
    `Temporary visa for EU travel`,
    `Marriage/birth certificates (if applicable)`,
    `Health insurance`,
    `Criminal record check`,
    `Proof of no debts or legal issues`,
    `Property purchase agreement (for investors)`,
    `Proof of bank transfer of investment (for investors)`,
    `Certificate of property rights transfer (for investors)`,
    `All documents must be properly apostilled and translated`,
  ],
  faq: [
    { question: `What does a residence permit in Portugal provide?`, answer: `A Portuguese residence permit allows living, working, studying, accessing social benefits, and traveling/residing in the Schengen zone without a visa.` },
    { question: `Can a residence permit be obtained via investment?`, answer: `Yes, through Portugal's "Golden Visa" program via real estate, capital, or job creation.` },
    { question: `How to obtain a residence permit in Portugal?`, answer: `It can be obtained through employment, investment, property purchase, or family reunification.` },
    { question: `What documents are required for a residence permit in Portugal?`, answer: `Passport, proof of legal basis (work, investment, study, family), financial guarantees, medical insurance, and proof of accommodation.` },
  ],
};

const ResidencePermitInPortugalPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInPortugalPage;
export { ResidencePermitInPortugalPage };
