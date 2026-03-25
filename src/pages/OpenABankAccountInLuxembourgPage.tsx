import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-bank-account-in-luxembourg
const PAGE_DATA = {
  title: `Open a Bank Account in Luxembourg`,
  description: `Luxembourg has over 200 financial institutions and requires proof of solvency for non-residents. Opening a bank account always requires preparing documents confirming the legality of business activities.`,
  requirements: [
    `Documents confirming identity and residence of directors`,
    `Corporate and registration documents for the legal entity`,
    `Business description in free form`,
    `References from other banks`,
    `KYC and AML forms`,
    `In-person bank visit required for non-residents`,
  ],
  faq: [
    { question: `What are the conditions for opening an account in Luxembourg banks?`, answer: `You must complete and submit KYC and AML forms, company incorporation documents, and personal documents of directors and beneficiaries. The bank may additionally request contracts with partners. Key individuals must pass verification.` },
    { question: `Which bank in Luxembourg is best for opening an account?`, answer: `The choice should be based on the company’s country of incorporation, type of activity, the need for substance, and whether the company has it. Consult our specialists for the best option.` },
    { question: `How can a non-resident open an account in Luxembourg?`, answer: `Luxembourg banks consider non-resident companies for account opening, but having a local participant in the company structure significantly increases the chances of approval.` },
    { question: `Can a Luxembourg bank account be opened online?`, answer: `A non-resident can open an account in Luxembourg banks only by visiting the bank in person.` },
  ],
};

const OpenABankAccountInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenABankAccountInLuxembourgPage;
export { OpenABankAccountInLuxembourgPage };
