import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-dubai
const PAGE_DATA = {
  title: `Residence Permit in Dubai`,
  description: `How to Get a Residence Permit in Dubai: Key Information In the UAE, instead of “residence permit,” the term “residence visa” is used. This permit is issued for a specific period, which may vary depending on the grounds for relocation to the Emirates.`,
  requirements: [
    `Residence Permit in Dubai with Incluence Professionals`,
    `A residence permit in Dubai allows foreigners to legally live and work in the United Arab Emirates. Migrants can obtain this permit not only for themselves but also for family members, and, in the case of establishing a foreign company, for business partners. Today, the United Arab Emirates (UAE) is experiencing significant growth across various sectors of the economy, creating numerous employment opportunities. This contributes to the rising number of migrants seeking residency in the UAE`,
    `If you want to obtain a residence permit in the Emirates, contact Incluence specialists. They will answer all your questions and handle the preparation of the necessary documents`,
    `Ways to Obtain a Residence Permit in the UAE`,
    `You can apply for a residence visa in the UAE based on:`,
    `Employment – if a company hires you as a full-time employee. The visa is issued for 2–3 years and allows you to work anywhere in the UAE, even if you change jobs. Education – for those accepted into a UAE university. The visa is valid for 1 year and can be renewed throughout the study period, provided proof of enrollment is shown. Business setup – entrepreneurs who establish a company in the UAE are eligible for residency. The visa is valid for 3 years and can be renewed. Real estate purchase – a residency visa can be obtained only for ready-to-move-in properties. If the property is under construction, the visa will be issued only after completion. In all cases, the permit is valid for 3 years`,
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
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInDubaiPage;
export { ResidencePermitInDubaiPage };
