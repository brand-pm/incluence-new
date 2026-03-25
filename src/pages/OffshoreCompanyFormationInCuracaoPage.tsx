import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /offshore-company-formation-in-curacao
const PAGE_DATA = {
  title: `Offshore company formation in Curacao`,
  description: `How to register a Curacao offshore company: Peculiarities of the jurisdiction If you are looking for a jurisdiction notable for favorable conditions for registering a foreign company, pay attention to Curacao. It is an island in the Caribbean Sea, which belongs to the Netherlands.`,
  requirements: [
    `Contact our specialists for detailed requirements`,
  ],
  faq: [
    { question: `How much does it cost to register a company in Curacao?`, answer: `The final cost of registering a company in Curacao is influenced by the type of activity, the number of participants and other factors. You can find out the exact cost of registering a company in Curacao by contacting our specialists.` },
    { question: `Is it possible to register offshore on Curacao online?`, answer: `A company in Curacao can be registered remotely with the assistance of local representatives.` },
    { question: `What documents are required to register a company in Curacao?`, answer: `In order to register a company in Curacao, you should submit copies of passports and confirmation of the address of the company\'s participants. You should also submit completed registration forms.` },
    { question: `How long is the registration period for opening an offshore in Curacao?`, answer: `A company in Curacao can be registered for up to 2 weeks.` },
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
