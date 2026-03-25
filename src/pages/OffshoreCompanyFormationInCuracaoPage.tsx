import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { CuracaoOffshoreVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /offshore-company-formation-in-curacao
const PAGE_DATA = {
  title: `Offshore company formation in Curacao`,
  description: `If you are looking for a jurisdiction notable for favorable conditions for registering a foreign company, pay attention to Curacao. It is an island in the Caribbean Sea, which belongs to the Netherlands.`,
  sections: [
    {
      heading: `How to register a Curacao offshore company: Peculiarities of the jurisdiction`,
      body: `If you are looking for a jurisdiction notable for favorable conditions for registering a foreign company, pay attention to Curacao. It is an island in the Caribbean Sea, which belongs to the Netherlands. The key sectors of the economy are tourism, trade, and gambling. The easy procedure of obtaining gambling licenses, the absence of currency exchange control, and a stable and fast-growing economy are among the advantages that attract foreign businessmen and investors to start a business Curacao.`,
    },
  ],
  requirements: [
    `Copies of passports of company participants`,
    `Proof of address of company participants`,
    `Completed registration forms`,
  ],
  faq: [
    { question: `How much does it cost to register a company in Curacao?`, answer: `The final cost of registering a company in Curacao is influenced by the type of activity, the number of participants and other factors. You can find out the exact cost of registering a company in Curacao by contacting our specialists.` },
    { question: `Is it possible to register offshore on Curacao online?`, answer: `A company in Curacao can be registered remotely with the assistance of local representatives.` },
    { question: `What documents are required to register a company in Curacao?`, answer: `In order to register a company in Curacao, you should submit copies of passports and confirmation of the address of the company's participants. You should also submit completed registration forms.` },
    { question: `How long is the registration period for opening an offshore in Curacao?`, answer: `A company in Curacao can be registered for up to 2 weeks.` },
  ],
};

const OffshoreCompanyFormationInCuracaoPage = () => (
  <ServiceDetailPage
    slug="offshore-company-formation-in-curacao"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<CuracaoOffshoreVisual />}

  />
);

export default OffshoreCompanyFormationInCuracaoPage;
export { OffshoreCompanyFormationInCuracaoPage };
