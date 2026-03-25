import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { EstoniaFundVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /open-an-investment-fund-in-estonia
const PAGE_DATA = {
  title: `Open an Investment Fund in Estonia`,
  description: `Since the Investment Funds Act came into force in 2017, Estonia's investment market has become significantly more attractive and competitive for investors. Entrepreneurs can open investment funds here to profit from a well-regulated structure aligned with EU Directive 2011/61/EU.`,
  sections: [
    {
      heading: `Investment Funds in Estonia`,
      body: `In 2017, the Investment Funds Act came into force in Estonia, adopted in accordance with Directive 2011/61/EU. Thanks to this, the investment market in the country became significantly more attractive for investors and more competitive. This has led to increased attention from entrepreneurs wishing to open investment funds in Estonia and profit from the activities of such a structure.`,
    },
    {
      heading: `How Investment Funds Are Established in Estonia`,
      body: `The process of registering an investment fund consists of several stages. First, you need to:\n\nappoint an auditor; prepare a package of founding documents; open a personal bank account as well as a securities account; register a joint-stock company, which will later be licensed and operate as an investment fund; open a corporate bank account into which the entire share capital is deposited.\n\nTo establish an investment fund in Estonia, its structure must include at least 5 individuals — three on the board of directors and two on the management board.\n\nAfter this, documents required for licensing must be collected and submitted to the Estonian Financial Supervision Authority. The list includes the articles of association, business plan, internal policies, details of management board members, and more.`,
    },
    {
      heading: `Investment Fund in Estonia: Licensing`,
      body: `To operate legally, investment funds must obtain a license issued by the Financial Supervision Authority. In the case of small alternative funds (SAF), management may be carried out under a license issued by the Estonian Anti-Money Laundering Bureau.\n\nThis second license has less stringent requirements, making it suitable for companies just starting out in the investment field. However, it comes with several restrictions on Estonian investment funds:\n\nonly SAFs in the form of limited partnerships may be managed; the total value of assets may not exceed EUR 100 million.\n\nIf you are interested in setting up an Estonian investment fund, contact our specialists for a detailed consultation. They will handle all matters related to the registration and licensing of your company so that you obtain an investment fund under the conditions you need.`,
    },
    {
      heading: `What is required to set up an investment fund in Estonia`,
      body: `To register an investment fund in this jurisdiction, two structural units are required. The first is the fund itself, and the second is a joint-stock company that will own the assets. This can be replaced by a contractual fund.\n\nTo manage the investment fund, a legal entity acting as the manager is required. It must obtain a license in Estonia granting the right to carry out the relevant activities. The license allows the provision of one or more of the following services:\n\ninvestment in fund assets; purchase of shares; trading in units; accounting; determining the net asset value of the investment fund; profit distribution; compliance monitoring according to legal requirements; other actions directly related to fund management.\n\nAll required services must be listed in the application.`,
    },
    {
      heading: `Requirements for Investment Funds in Estonia`,
      body: `The activities of such companies registered and licensed in Estonia are strictly regulated. In particular, fund units may be offered:\n\nonly to professional investors; to no more than 150 individuals from one EU country; at a minimum price of EUR 100,000 per unit; in an amount not exceeding EUR 2,500,000 per year — this is a general EU requirement.`,
    },
  ],
  requirements: [
    `At least 5 individuals in the fund structure`,
    `Three members on the board of directors`,
    `Two members on the management board`,
    `Registered joint-stock company for the fund`,
    `Corporate bank account with deposited share capital`,
    `Securities account opened`,
    `Appointed auditor`,
    `License from the Financial Supervision Authority`,
    `AML policy and internal policies prepared`,
  ],
  faq: [
    { question: `What are the requirements for opening an investment fund in Estonia?`, answer: `To create an investment fund in Estonia, it is necessary to prepare a business plan and policies, register a legal entity, open an account and deposit share capital if required, and confirm that the fund manager has sufficient experience. The fund must establish conditions for attracting participants. All new participants must be registered in accordance with the fund's rules and the legislation of the country of registration.` },
    { question: `What documents are required to open an investment fund in Estonia?`, answer: `The exact list of documents for opening an investment fund in Estonia depends on the type of fund. Typically, you need to submit personal documents of the founders, a draft investment agreement, fund rules and terms, and an AML policy.` },
    { question: `How long does it take to open an investment fund in Estonia?`, answer: `The time required to open a fund in Estonia depends on its type and usually takes several months.` },
    { question: `How much does it cost to open an investment fund in Estonia?`, answer: `The final cost of opening an investment fund in Estonia depends on the planned investment areas, the type of participants, and other factors. You can find out the exact cost of opening an investment fund in Estonia by contacting our specialists.` },
  ],
};

const OpenInvestmentFundInEstoniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<EstoniaFundVisual />}

  />
);

export default OpenInvestmentFundInEstoniaPage;
export { OpenInvestmentFundInEstoniaPage };
