import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-a-company-in-thailand
const PAGE_DATA = {
  title: `Open a Company in Thailand`,
  description: `Thailand has a rapidly developing economy, and the government actively supports small and medium-sized businesses. A special investment program allows entrepreneurs to enjoy corporate tax exemption for up to 8 years.`,
  requirements: [
    `Proof of residence and copies of passports of directors and shareholders`,
    `A list of several possible names for the future company`,
    `A brief description of the business model and activities`,
    `At least one director and no fewer than three shareholders`,
    `No residency requirements for directors or shareholders`,
  ],
  faq: [
    { question: `How much does it cost to open a business in Thailand?`, answer: `The final cost depends on the type of activity, number of participants, and other factors. You can find out the exact cost by contacting our specialists.` },
    { question: `Can a company in Thailand be registered online?`, answer: `A company in Thailand can be registered remotely via power of attorney or by visiting Thailand in person.` },
    { question: `Can a non-resident open a business in Thailand?`, answer: `A non-resident who is not under sanctions and not a citizen of a sanctioned country can open a business in Thailand.` },
    { question: `What documents are required to register a company in Thailand?`, answer: `To register a company in Thailand, you need to provide copies of passports and proof of address of the company’s participants.` },
  ],
};

const OpenACompanyInThailandPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInThailandPage;
export { OpenACompanyInThailandPage };
