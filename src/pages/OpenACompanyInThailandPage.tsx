import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-thailand
const PAGE_DATA = {
  title: `Open a Company in Thailand`,
  description: `Thailand has a rapidly developing economy, and the government actively supports small and medium-sized businesses. A special investment program allows entrepreneurs to enjoy corporate tax exemption for up to 8 years.`,
  sections: [
    {
      heading: `How to Open a Company in Thailand: Features of the Registration Process`,
      body: `Businesspeople interested in Southeast Asia are recommended to pay attention to Thailand. If an entrepreneur is aiming for success and approaches planning carefully, this country can become the right place to realize all business ideas. The reason is that Thailand has a rapidly developing economy, and the government actively supports small and medium-sized businesses.\n\nThe country places great emphasis on attracting foreign investors. In particular, there is a special investment program that allows entrepreneurs to enjoy corporate tax exemption for up to 8 years. The greatest chance of receiving such a benefit is for entrepreneurs who decide to open a company in Thailand to engage in:\n\nscientific research; educational activities related to advanced technologies; licensing certain technologies, with the intention of introducing them to the market in the future.\n\nIn other words, if you decide to open a business in Thailand in the field of high technology, you will have the maximum chances of obtaining corporate tax exemption.`,
    },
    {
      heading: `Company Registration in Thailand: Stages of the Procedure`,
      body: `If you decide to open a company in Thailand, the process involves the following steps:\n\nChoosing a name for the company. Drafting the Articles of Association. Holding a shareholders' meeting. Direct company registration. Registering with the Revenue Department and obtaining a Tax ID. If the annual turnover exceeds 1.8 million Thai baht, a VAT certificate will also be required.\n\nThe most common option is opening a company in Thailand as a Limited Company. The minimum authorized capital is 15 Thai baht. There are no requirements regarding its payment.\n\nPlease note that when opening a Thai company, a one-time registration fee must be paid. The amount depends on the authorized capital and is determined individually. For detailed consultation on this or any other matter, contact our specialists.`,
    },
    {
      heading: `What You Should Know About Opening a Company in Thailand`,
      body: `Self-registration of a company in Thailand is a complex and time-consuming process. An experienced entrepreneur can complete it quickly, but for a beginner, it may take many months.\n\nContact our company to save time and effort. Our specialists will quickly register a company in Thailand for you and provide full support at every stage of the procedure.`,
    },
  ],
  requirements: [
    `Proof of residence and copies of passports of the director and shareholders`,
    `A list of several possible names for the future company`,
    `A brief description of the business model and activities`,
    `At least one director and no fewer than three shareholders`,
    `No requirements regarding their residency`,
  ],
  faq: [
    { question: `How much does it cost to open a business in Thailand?`, answer: `The final cost of opening a business in Thailand depends on the type of activity, number of participants, and other factors. You can find out the exact cost of company registration in Thailand by contacting our specialists.` },
    { question: `Can a company in Thailand be registered online?`, answer: `A company in Thailand can be registered remotely via power of attorney or by visiting Thailand in person.` },
    { question: `Can a non-resident open a business in Thailand?`, answer: `A non-resident who is not under sanctions and not a citizen of a sanctioned country can open a business in Thailand.` },
    { question: `What documents are required to register a company in Thailand?`, answer: `To register a company in Thailand, you need to provide copies of passports and proof of address of the company's participants.` },
  ],
};

const OpenACompanyInThailandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInThailandPage;
export { OpenACompanyInThailandPage };
