import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /open-an-investment-fund-in-luxembourg
const PAGE_DATA = {
  title: `Open an Investment Fund in Luxembourg`,
  description: `Luxembourg is the leading investment center in the EU and ranks second in the world after the United States, offering a well-developed legal framework that combines investor protection with flexibility. Investment funds registered here benefit from strong jurisdictional reputation, transparent taxation, and wide opportunities for operating across the EU and the European Economic Area.`,
  sections: [
    {
      heading: `Investment Fund in Luxembourg`,
      body: `Thanks to its advantageous geographical location in the heart of Europe and extensive experience with financial instruments, Luxembourg is in demand among entrepreneurs who decide to establish an investment fund in this country. It is the leading investment center in the EU and ranks second in the world after the United States. This is largely due to its well-developed legal framework, which combines a high degree of investor protection with flexibility in many other areas.\n\nLuxembourg investment funds are popular among entrepreneurs as they can be intended not only for a wide audience but also for a limited number of investors through private placements. The regulatory authority for these structures is the Commission de Surveillance du Secteur Financier (CSSF).`,
    },
    {
      heading: `What Are the Advantages of an Investment Fund in Luxembourg`,
      body: `Setting up an investment structure in this jurisdiction offers numerous advantages for entrepreneurs:\n\nstability in politics and economy; transparent and clear taxation of investment funds; a sufficiently high level of protection of investor rights and interests; attractiveness for corporate investors due to the jurisdiction's credibility; a well-established legal environment.\n\nThe strong reputation of the jurisdiction and its registered investment funds provides wide opportunities for operating in the EU and the European Economic Area, as well as for cooperating with leading international banks.\n\nTaxation in this jurisdiction also deserves special mention. Essentially, specialized investment funds are not subject to taxation. Exceptions include:\n\na fixed registration fee; a subscription tax of 0.05% of the net asset value of all fund assets.\n\nNo stamp duty is charged on the issuance or transfer of shares and units.`,
    },
    {
      heading: `Types of Investment Funds in Luxembourg`,
      body: `The Specialized Investment Fund (SIF) is particularly popular among entrepreneurs. It is characterized by management flexibility and financial efficiency.\n\nIn fact, SIF investments are available to investors who meet one of two conditions:\n\nwilling to invest at least EUR 125,000; able to prove they understand all risks associated with investments.\n\nSince 2016, a law has been in force allowing entrepreneurs to register a new type of investment fund in Luxembourg — the Reserved Alternative Investment Fund (RAIF). It is available to all investors and authorized fund managers. The advantage of such a structure is that the CSSF does not require licensing. This also means there are no requirements for maintaining financial reporting.`,
    },
    {
      heading: `Requirements for Investment Funds in Luxembourg`,
      body: `The own assets of an SIF must be at least EUR 1,250,000, and this amount must be reached within the first 12 months after licensing. Having a resident director or a physical office in Luxembourg is not required, nor are there minimum investor requirements.\n\nIf you decide to establish an investment fund in Luxembourg, it must have:\n\na custodian of assets; a manager; an administrator.\n\nAuditors are also required.\n\nIf you are interested in setting up a Luxembourg investment fund, our company is ready to provide full legal support throughout the entire process. Our specialists will handle all legal matters and take responsibility for implementing your project. To contact our managers and proceed with opening a fund in Luxembourg, please use the contact numbers provided by our company.`,
    },
  ],
  requirements: [
    `Own assets of at least EUR 1,250,000 within 12 months`,
    `Custodian of assets appointed for the fund`,
    `Fund manager with relevant experience`,
    `Fund administrator in place`,
    `Auditors engaged for the fund`,
    `Business plan and internal policies prepared`,
    `AML policy documentation`,
  ],
  faq: [
    { question: `What are the requirements for opening an investment fund in Luxembourg?`, answer: `To establish an investment fund in Luxembourg, you need to prepare a business plan and policies, register a legal entity, open a bank account if necessary, and contribute the share capital. You must also confirm that the fund manager has sufficient experience. The fund must define conditions for attracting participants. All new participants must be registered in accordance with the fund's rules and the country's legislation.` },
    { question: `What documents are required to open an investment fund in Luxembourg?`, answer: `The exact list of documents required depends on the type of fund. Typically, you will need to submit the founders' personal documents, a draft investment agreement, the fund's rules and conditions, and an AML policy.` },
    { question: `How long does it take to open an investment fund in Luxembourg?`, answer: `The timeframe for opening a fund in Luxembourg depends on its type and usually takes several months.` },
    { question: `How much does it cost to open an investment fund in Luxembourg?`, answer: `The final cost of opening an investment fund in Luxembourg depends on the future investment directions, the type of participants, and other factors. You can learn the exact cost of opening an investment fund in Luxembourg by consulting our specialists.` },
  ],
};

const OpenInvestmentFundInLuxembourgPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default OpenInvestmentFundInLuxembourgPage;
export { OpenInvestmentFundInLuxembourgPage };
