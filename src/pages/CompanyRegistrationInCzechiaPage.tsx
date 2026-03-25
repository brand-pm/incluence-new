import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { CzechiaCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-czechia
const PAGE_DATA = {
  title: `Company Registration in Czechia`,
  description: `The Czech Republic is notable for its stable economic and political environment. It also grants entrepreneurs access to all EU markets with wide opportunities for tax optimization.`,
  sections: [
    {
      heading: `Starting a Business in Czechia: Key Features`,
      body: `The Czech Republic is notable for its stable economic and political environment. It also grants entrepreneurs access to all EU markets. The wide opportunities for tax optimization are an additional advantage for Ukrainian business owners.\n\nOne of the most popular forms of business in Czechia is the Limited Liability Company (s.r.o.). Such a company is easier to establish and is not subject to transfer pricing rules. At the same time, you can register a company in Czechia and become its founder without having resident status.\n\nDoing business in Czechia opens up a wide range of opportunities:\n\nforeign nationals who register a company in the Czech Republic obtain the same rights as Czech citizens when running a business; opening a company in Czechia grants access to all EU markets; a Czech company allows entrepreneurs to purchase real estate in Czechia or obtain a loan for this purpose.\n\nCompany founders also have the right to apply for a long-term visa, allowing them to stay in Czechia for up to one year.`,
    },
    {
      heading: `Company Registration in Czechia: Taxation Details`,
      body: `Since joining the EU in 2004, Czechia falls under the EU Parent-Subsidiary Directive. This means corporate income tax does not apply to capital gains and dividends if the company is affiliated with a Czech parent company in the EU and ownership exceeds 10%.\n\nStandard rates in Czechia:\n\npersonal income tax \u2014 15%; corporate income tax \u2014 19%; value-added tax \u2014 21%.`,
    },
    {
      heading: `Company Registration in Czechia: Business Advantages`,
      body: `Many Ukrainian entrepreneurs choose to register companies in Czechia for several reasons:\n\nno currency control; ability to open an account in a European bank; possibility of obtaining a tax residency certificate; as a full EU member, companies can operate in any EU state; double taxation treaties signed with 80+ countries, covering most jurisdictions in Eastern and Central Europe; EU directives on parent-subsidiary companies as well as interest and royalties are applicable; Czechia is not an offshore jurisdiction and has never been blacklisted by the EU; a wide range of corporate tax optimization methods are available.\n\nTaxation\n\nSpecial attention should be given to taxation, since the profit tax rate is relatively high. However, companies can choose different strategies to reduce the tax burden, for example:\n\nacting as a general supplier \u2014 all documentation can be replaced with a single transaction passport; acting as a sales agent \u2014 via an agency agreement with a company from a favorable tax jurisdiction; acting as an intermediary for payments between supplier and end customer \u2014 without a sales contract. Payments go directly through a Czech bank account.\n\nOther Benefits of Registering a Company in Czechia\n\nSince January 1, 2014, corporate law in Czechia has undergone the following changes:\n\ntransfer pricing rules abolished for LLCs and simplified for joint-stock companies; to open a company in Czechia, only a one-time share capital is required \u2014 reduced from \u20AC8,000 to just 1 Czech crown for LLCs; Czech companies may have collective managers or corporate directors.\n\nCompared to countries like the Netherlands or Sweden, setting up a company in Czechia requires significantly fewer financial resources.`,
    },
    {
      heading: `How Company Registration in Czechia Has Changed Over Time`,
      body: `Until 2014, the process of opening new companies in Czechia was relatively complex and time-consuming compared to other European countries or offshore jurisdictions. Later, an updated Civil Code was adopted, significantly simplifying company registration by delegating some powers to notaries.\n\nThanks to this, setting up a business in Czechia has become faster and easier. Notaries are now authorized to:\n\nregister new companies; make changes to certain documents; add new records to the Commercial Register and issue extracts from it.\n\nThese Civil Code changes, along with the affordable registration costs, have made Czechia a popular choice among entrepreneurs \u2014 especially as an alternative to jurisdictions with more favorable tax regimes.`,
    },
    {
      heading: `How Much Does It Cost to Register a Company in Czechia?`,
      body: `The cost of setting up a company in Czechia depends largely on notary fees and government charges. To register an LLC, you will need:\n\nnotarial services; issuance of a trade license; rental of a legal address; entry into the Commercial Register; other minor expenses.\n\nThis minimum package of services costs approximately 10\u201312 thousand Czech crowns.\n\nIf you want to open a company in Czechia, the price may increase due to additional expenses, as operating a business requires a range of supporting services, such as:\n\naccounting services for one year; VAT registration; translations of documents into Czech; professional legal assistance and more.`,
    },
    {
      heading: `Company Registration Services in Czechia and Timeframes`,
      body: `You can either register a new company in Czechia or re-register an existing one. No personal visit to Czechia is required. A notarized copy of your passport and a criminal record certificate from your country of residence are sufficient.\n\nIf you are interested in registering a company in Czechia, the cost will be calculated individually by our experts, as it depends on many factors. For example, a businessman may want to purchase a ready-made company but change its name. The availability of a company name can be checked on the Czech Commercial Register website.\n\nFull registration typically takes 2\u20133 weeks on average, though exact timeframes may vary depending on Czech officials and state authorities.`,
    },
  ],
  requirements: [
    `Notarized copies of participants' passports`,
    `Criminal record certificates`,
    `Powers of attorney from shareholders`,
    `Registration forms (all originals)`,
    `Share capital of 1 Czech crown minimum for LLCs`,
    `No resident status required for founders`,
    `No currency control`,
  ],
  faq: [
    { question: `What is the cost of company registration in Czechia?`, answer: `The final cost of registering a company in Czechia depends on various factors. You can find out the exact price by contacting our specialists.` },
    { question: `How long does company registration in Czechia take?`, answer: `You can register a company in Czechia within 2\u20133 weeks after submitting all original documents and payment.` },
    { question: `What documents are required to register a company in Czechia?`, answer: `You will need notarized copies of the participants' passports, criminal record certificates, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `Can I register a company in Czechia online?`, answer: `Yes, a company in Czechia can be registered remotely by proxy or during a personal visit to Czechia.` },
  ],
};

const CompanyRegistrationInCzechiaPage = () => (
  <ServiceDetailPage
    slug="company-registration-in-czechia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<CzechiaCompanyVisual />}

  />
);

export default CompanyRegistrationInCzechiaPage;
export { CompanyRegistrationInCzechiaPage };
