import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-dubai
const PAGE_DATA = {
  title: `Residence Permit in Dubai`,
  description: `A residence permit in Dubai allows foreigners to legally live and work in the United Arab Emirates. Today, the UAE is experiencing significant growth across various sectors of the economy, creating numerous employment opportunities.`,
  sections: [
    {
      heading: `How to Get a Residence Permit in Dubai: Key Information`,
      body: `In the UAE, instead of "residence permit," the term "residence visa" is used. This permit is issued for a specific period, which may vary depending on the grounds for relocation to the Emirates. Permanent residency is not provided in this country, so migrants must regularly renew their existing permit. Note that if you have repeatedly renewed your visa, you may later apply for UAE citizenship.\nThere are many ways to obtain residency in the Emirates. For example, you can invest in the economy, purchase real estate in the UAE, study long-term, or work in the country.\nIf you have obtained a residence permit in the Emirates, you cannot leave the country for more than 6 consecutive months; otherwise, your visa will become invalid.`,
    },
    {
      heading: `How to Obtain a Residence Permit in Dubai: Step-by-Step`,
      body: `A migrant planning to work, study, or live in the UAE can apply for a residence visa. To do this, you need to:\nChoose a suitable way to obtain residency. Obtain an entry permit. Prepare the required documents for the residence visa. Submit the application to the UAE government authorities.\nThere are additional mandatory procedures for those applying for a residence permit in the UAE. Let's look at some of them in detail.\nEntry Permit to the UAE\nRegardless of the type of residence visa you want to obtain, you must first enter the country. To do this, you need an entry permit issued by the authorities. This requires submitting an application along with supporting documents.\nYou will also need to provide color copies of all passport pages (valid for at least 6 more months) and a photograph that meets passport standards.\nIn certain cases, additional documents are required. For example, doctors and teachers coming for employment must provide a legalized copy of their professional diploma.\nStatus Change\nAfter receiving an entry permit, a migrant must go through the process called "status change," which activates the entry permit (valid for only 2 months). This procedure is mandatory to obtain a residence permit in Dubai.\nThere are two ways to change status:\nInside the UAE \u2013 the simplest option. You send your entry permit to the UAE immigration office, where it is stamped within 3\u20135 business days. Outside the UAE \u2013 you enter the country directly, and immigration officers at the airport provide your residency visa.\nMedical Examination and Emirates ID\nA residence permit in the UAE requires medical screening: chest X-ray and blood tests to detect infectious diseases. If a migrant has tuberculosis or similar conditions, residency cannot be granted.\nBefore issuing the residence permit, the UAE also provides an Emirates ID \u2013 the national identification card. It is used to open bank accounts, sign rental agreements, and access government services.\nTo obtain an Emirates ID, migrants must apply to the appropriate authority and provide biometric data.\nIssuance of a Residence Visa\nTo complete the process, the migrant submits their passport to the immigration office. The residency visa stamp is placed inside, usually within 15 days.\nThe visa must be regularly renewed. With a residence permit in Dubai, foreigners can legally stay, work, and conduct business in the UAE.`,
    },
    {
      heading: `How to Obtain Residency in the UAE with Incluence`,
      body: `Our experts will handle document preparation, applications to immigration authorities, and all other procedures required for obtaining residency in the UAE.\nContact Incluence for a personal consultation if you have further questions.`,
    },
    {
      heading: `Residence Permit in Dubai with Incluence Professionals`,
      body: `A residence permit in Dubai allows foreigners to legally live and work in the United Arab Emirates. Migrants can obtain this permit not only for themselves but also for family members, and, in the case of establishing a foreign company, for business partners. Today, the United Arab Emirates (UAE) is experiencing significant growth across various sectors of the economy, creating numerous employment opportunities. This contributes to the rising number of migrants seeking residency in the UAE.\nIf you want to obtain a residence permit in the Emirates, contact Incluence specialists. They will answer all your questions and handle the preparation of the necessary documents.`,
    },
    {
      heading: `Ways to Obtain a Residence Permit in the UAE`,
      body: `You can apply for a residence visa in the UAE based on:\nEmployment \u2013 if a company hires you as a full-time employee. The visa is issued for 2\u20133 years and allows you to work anywhere in the UAE, even if you change jobs. Education \u2013 for those accepted into a UAE university. The visa is valid for 1 year and can be renewed throughout the study period, provided proof of enrollment is shown. Business setup \u2013 entrepreneurs who establish a company in the UAE are eligible for residency. The visa is valid for 3 years and can be renewed. Real estate purchase \u2013 a residency visa can be obtained only for ready-to-move-in properties. If the property is under construction, the visa will be issued only after completion. In all cases, the permit is valid for 3 years.`,
    },
  ],
  faq: [
    { question: `What does a residence permit in Dubai provide?`, answer: `A residence permit in Dubai gives the right to live, work, and conduct business in the Emirates, access medical and educational institutions, as well as open bank accounts and obtain loans.` },
    { question: `Can you obtain a residence permit in the UAE through investment?`, answer: `Yes, you can obtain residency in the UAE through investment. Options include investing in real estate of a certain value or investing in a business.` },
    { question: `How can you obtain a residence permit in the UAE?`, answer: `A residence permit in the UAE can be obtained through investment, real estate purchase, business setup, or employment in the Emirates. There are different types of visas, including long-term visas for investors and highly qualified specialists.` },
    { question: `What documents are required to obtain a residence permit in Dubai?`, answer: `To obtain a residence permit in Dubai, you need: a valid passport, a certificate of no criminal record, medical examination results, proof of employment or investment, and documents confirming ownership of real estate in the UAE.` },
  ],
};

const ResidencePermitInDubaiPage = () => (
  <ServiceDetailPage
    slug="residence-permit-in-dubai"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInDubaiPage;
export { ResidencePermitInDubaiPage };
