import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: https://www.incluence.com/buying-a-company-in-bulgaria (1:1 copy)
const PAGE_DATA = {
  title: `Buying a Company in Bulgaria`,
  description: `Today, Bulgaria offers a favorable business environment, largely due to the simplicity and convenience of most processes necessary for enterprises. Registering a new business in this jurisdiction is not complicated, however, starting operations in a foreign country, entrepreneurs often face a number of bureaucratic and legal challenges. Fortunately, all of this can be avoided, and business activities can be launched quickly by deciding to buy a company in Bulgaria.

The choice of business direction is limited only by the volume of planned investments. Today, you can find almost any options, from small shops to enterprises focused on the international market. Thanks to this, you can specify any conditions and requirements, and we will find the right option for you.

Often, the choice of Bulgaria as a business location is determined by the following factors:

- favorable taxation — corporate tax is 10%;
- economic and political stability;
- absence of racial and religious conflicts;
- possibility of duty-free trade with EU countries.

If you decide to buy a company in Bulgaria, the list of advantages expands:

- most organizational matters are already resolved;
- you can start generating profit immediately, it is enough to simply maintain the company’s current activities;
- the company already has a market, a stable client base, established supplier relationships, necessary equipment, etc.

Another advantage not to be overlooked is financing. Investors are rarely eager to invest in a new, untested business project. However, when purchasing a ready-made company, you will have a better chance of obtaining financing, since having an established business reputation is one of the key factors for both investors and bankers.

Regardless of the legal form of the enterprise you choose to acquire, the country applies a similar taxation model for all businesses. Given that Bulgaria’s corporate tax is the lowest in all of Europe, entrepreneurs can focus on growing their business rather than worrying about tax burdens.

Which company to buy in Bulgaria and how to develop it later is a personal decision of each entrepreneur. However, companies with turnover exceeding 50,000 BGN deserve special mention. In such firms, accounting must be handled using VAT accounts, meaning it is recommended to hire a qualified employee to manage financial reporting without errors.

If the company has temporarily suspended operations, it is still necessary to submit annual reports confirming the absence of activity.

The process of purchasing a business in this country consists of several steps:

- **Selection of an offer.** Once you compile a list of requirements for the company you wish to acquire, we will prepare several options that meet your criteria.
- **Obtaining detailed information.** We will provide full information about the enterprise and its current operations.
- **Economic analysis.** After reviewing the company’s data, you will be able to assess its business reputation, growth prospects, and other project features.

After completing these steps, the purchase and sale transaction is carried out, involving the transfer of ownership rights. We provide support at all stages, offer comprehensive consulting services, and take care of all bureaucratic procedures.`,
  sections: [
    {
      heading: `01. Choosing a Company in Bulgaria`,
      body: `You need to find a company for purchase and discuss the terms of the deal. This can be done independently or with our help. We have clients and partners who are looking for buyers for their companies.`,
    },
    {
      heading: `02. Company Audit`,
      body: `Before purchasing, the company should be checked for debts to government bodies, including tax authorities, as well as for receivables and payables.`,
    },
    {
      heading: `03. Document Preparation`,
      body: `You need to prepare the buyer’s personal documents, powers of attorney, and re-registration forms.`,
    },
    {
      heading: `04. Submission of Documents for Re-Registration`,
      body: `The collected set of documents is submitted to the Registry. After this, the registrar processes the documents, and the company’s details are updated in the Registry database.`,
    },
    {
      heading: `05. Receiving Confirmation of Company Re-Registration`,
      body: `After the company’s data has been updated in the Registry, you can see its registration details there and, if necessary, order paper versions of the statutory documents with or without certification. Our specialists will help with all necessary certifications (notarization, apostille) and, if required, translations into other languages.`,
    },
    {
      heading: `Additional services — Shelf company for sale in Singapore`,
      body: `A favorable tax environment and business friendliness of the Republic of Singapore are the main advantages of the jurisdiction. To a large extent, this country is now an attractive destination for business people thanks to these benefits. If you also want to buy shelf company Singapore, you can do it in two ways: by registering a company "from scratch" or by buying a shelf company in Singapore.The registration process takes more time, but difficulties may concern other nuances of the procedure. For example, businessmen need to prepare plenty of documents, obtain licenses and permits from various bodies without rejection from regulatory authorities.By deciding to buy a Singapore shelf company, the businessman avoids almost all procedures, except for some mandatory ones. This can significantly speed up the process, saving time and effort that can be spent on running a business immediately after the purchase of a shelf company Singapore.`,
    },
    {
      heading: `Additional services — Buying a Company in Germany`,
      body: `The maximum time to register a new legal entity in Germany through the standard procedure can take up to 3 months. This requires an in-person meeting with a notary and visits to several government authorities. However, if for any reason the registration procedure needs to be completed in a shorter period, you can buy a company in Germany and save time.`,
    },
    {
      heading: `Additional services — Buy company in Estonia`,
      body: `Buying a ready-made company in Estonia is an opportunity for businessmen to simplify and speed up the process of starting business operations. If you buy company in Estonia, you will be able to start a business faster and also decrease the costs required for the formation of share capital.Buying a ready-made company in Estonia is an opportunity for businessmen to simplify and speed up the process of starting business operations. If you buy company in Estonia, you will be able to start a business faster and also decrease the costs required for the formation of share capital.`,
    },
  ],
  faq: [
    { question: `What documents are required to buy a business in Bulgaria?`, answer: `To buy a business in Bulgaria, you need to provide copies of the shareholders’ passports, proof of address, tax number, and certified registration forms.` },
    { question: `How long does the process of buying a company in Bulgaria take?`, answer: `The process of buying a company in Bulgaria takes 3–4 weeks.` },
    { question: `What taxes must be paid when buying a company in Bulgaria?`, answer: `When purchasing a company in Bulgaria, only the registration fee needs to be paid. Tax obligations arise only after the company starts its activities or if the previous owner failed to pay taxes related to past operations.` },
    { question: `Can a company in Bulgaria be purchased online?`, answer: `A company in Bulgaria can be re-registered remotely on the basis of a power of attorney or during a personal visit.` },
  ],
};

const BuyingACompanyInBulgariaPage = () => (
  <ServiceDetailPage
    slug="buying-a-company-in-bulgaria"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default BuyingACompanyInBulgariaPage;
export { BuyingACompanyInBulgariaPage };
