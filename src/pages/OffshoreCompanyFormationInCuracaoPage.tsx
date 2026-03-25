import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /offshore-company-formation-in-curacao
const PAGE_DATA = {
  title: `Offshore company formation in Curacao`,
  description: `Curacao is a Caribbean island belonging to the Netherlands, notable for favorable conditions for registering a foreign company. Key advantages include easy gambling license procedures, no currency exchange control, and a stable, fast-growing economy.`,
  requirements: [
    `Copies of passports of company participants`,
    `Proof of address of company participants`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `How much does it cost to register a company in Curacao?`, answer: `The final cost is influenced by the type of activity, the number of participants, and other factors. Contact our specialists for an exact quote.` },
    { question: `Is it possible to register offshore on Curacao online?`, answer: `A company in Curacao can be registered remotely with the assistance of local representatives.` },
    { question: `What documents are required to register a company in Curacao?`, answer: `You should submit copies of passports, confirmation of address of participants, and completed registration forms.` },
    { question: `How long is the registration period for opening an offshore in Curacao?`, answer: `A company in Curacao can be registered in up to 2 weeks.` },
  ],
};

const OffshoreCompanyFormationInCuracaoPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OffshoreCompanyFormationInCuracaoPage;
export { OffshoreCompanyFormationInCuracaoPage };
