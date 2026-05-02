import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/open-a-company-in-estonia (1:1 copy)
const PAGE_DATA = {
  title: `Open a company in Estonia`,
  description: `Planning to open a company in Estonia? You can do so remotely with us. Company formation in Estonia is a practical option for entrepreneurs who want access to the European market. Estonia supports founders who value speed and transparent rules. With our guidance, company formation in Estonia becomes a structured legal step rather than a complex project.

To start a company in Estonia, you need more than documents. You need clarity on structure, taxation, and compliance. Incluence supports clients from the first consultation to final registration. We prepare documentation, review the ownership structure, and coordinate company registration in Estonia in line with current legal standards.

When you open a company in Estonia through Incluence, you avoid common technical errors. We keep communication direct and focused. You receive clear timelines and realistic cost expectations. Estonian company registration requires precision, and we handle that carefully.

Estonian company registration operates within a fully digital system. Most procedures are completed online, and reporting remains predictable. This suits international founders and technology-focused businesses.

Another reason to open a company in Estonia is the tax structure. Retained profits are taxed only when distributed. This can support reinvestment, though accounting duties still apply.

Estonian company registration provides access to the European Union framework. At the same time, you need to follow local compliance rules from the start.

- Digital registration and administration. Most procedures are completed online, which reduces time and paperwork.
- The corporate tax system is based on distributed profits. Retained earnings are not taxed until paid out.
- Access to the European Union market. An Estonian entity can operate within the EU legal framework.
- Transparent legal environment. Corporate rules are clear and publicly accessible.
- Suitable for international founders. Remote management is possible in many cases.

- Ongoing accounting and reporting obligations must be maintained.
- Substance requirements may apply depending on business activity.
- Compliance rules must be followed carefully to avoid penalties.
- Banking procedures can require additional documentation.

Estonian company formation usually follows five key steps:

- Initial consultation and structure planning.
- Preparation of incorporation documents and shareholder details.
- Submission of documents to register a company in Estonia through the electronic system or via a notary.
- Entry into the official records and confirmation from the authorities.
- Post-registration steps, such as accounting setup and tax registration, were required.

Company formation in Estonia is suitable for founders who value digital administration. Incluence coordinates each stage, from preparation to entry in the Estonian business register. If you plan to form a company in Estonia, professional guidance reduces delays and misunderstandings.`,
  sections: [
    {
      heading: `01. Choosing a name for a future company in Estonia`,
      body: `The client needs to provide 3 variant names of the company. We will check the availability of these variants for registration and offer free options for the final choice. If all three names are filled, we will ask for additional ones. Three names provision isn't a mandatory requirement, but will speed up the verification process.`,
    },
    {
      heading: `02. Preparation of documents`,
      body: `The client needs to prepare personal documents for company registration. Preparation can be carried out in parallel with the first stage. The exact list of documents depends on the characteristics of the future company. Usually, a copy of the passport and confirmation of the address of the company's participants, as well as a power of attorney, should be provided.`,
    },
    {
      heading: `03. Preparation of registration forms`,
      body: `A package of documents is formed for submission to the Register based on the data provided by the client.`,
    },
    {
      heading: `04. Submission of documents for registration`,
      body: `The collected package of documents is submitted to the Register. After that, the documents are processed by the registrar and the company is entered into the Register database.`,
    },
    {
      heading: `05. Obtaining confirmation of company registration`,
      body: `After entering the company into the Register, you can see its registration data in it and if necessary order paper versions of the statutory documents with or without certification. The specialists of our company will help you with all the necessary certification (notarization, apostille) and translations into other languages, if necessary.`,
    },
    {
      heading: `Additional services — Starting a business in Montenegro`,
      body: `Montenegro is a country in southeastern Europe that attracts hundreds of thousands of tourists annually. It is noteworthy that the locals understand both English and Russian. It is the main candidate for joining the EU in the near future, and although Montenegro gained independence only in 2006, the prospect of successful business development here is extremely high.`,
    },
    {
      heading: `Additional services — Starting a business in Hungary`,
      body: `One of the best options for people wishing to open a company in Europe is to start a business in Hungary. Has about 70 agreements on the avoidance of double taxation. The popularity of starting a business in Hungary is due to the low corporate tax, the central location in Europe, and the developed economic infrastructure.`,
    },
    {
      heading: `Additional services — Register company in UK`,
      body: `Registering a company UK is an option for stable business development rather than a way to take your business offshore. There is a clear system of taxation, which implies paying taxes on profits. Moreover, competent planning of the future company structure and the right choice of organizational-legal form will help to considerably reduce the financial burden.`,
    },
  ],
  faq: [
    { question: `How long does company registration take?`, answer: `Estonian company registration can be completed within a few working days once documents are ready.` },
    { question: `Can a foreigner register a company in Estonia?`, answer: `Yes. Foreign founders can register a company in Estonia. You can rely on us for proper help.` },
    { question: `Is physical presence required?`, answer: `Often, it is not required, especially with digital procedures, but this depends on the specific case and structure.` },
  ],
};

const OpenACompanyInEstoniaPage = () => (
  <ServiceDetailPage
    slug="open-a-company-in-estonia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default OpenACompanyInEstoniaPage;
export { OpenACompanyInEstoniaPage };
