import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { HungaryResidenceVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /residence-permit-in-hungary
const PAGE_DATA = {
  title: `Residence Permit in Hungary`,
  description: `If you want to live in Europe with official status, Hungary may turn out to be one of the simplest ways to achieve this goal. A Hungarian residence permit is one of the most accessible options that allows you to relocate to Europe for permanent residence.`,
  sections: [
    {
      heading: `Obtaining a Residence Permit in Hungary: Key Features`,
      body: `If you want to live in Europe with official status, Hungary may turn out to be one of the simplest ways to achieve this goal. Generally, it is difficult to obtain a residence permit (RP) in European countries because the queue of applicants numbers in the thousands, while quotas are limited to only a few dozen. At the same time, a Hungarian residence permit is one of the most accessible options that allows you to relocate to Europe for permanent residence.`,
    },
    {
      heading: `What Are the Advantages of a Residence Permit in Hungary?`,
      body: `The main and most important advantage is obtaining residency in a country that is a member of the European Union. This means you will gain access to all EU privileges on par with its citizens.\nAdditionally, a Hungarian residence permit provides many other benefits:\nThe ability to travel freely within all Schengen countries without applying for a visa. A "backup option" of relocation in case of social or economic instability in your home country. The ability to keep savings in secure European banks. Legal access to running a business across the EU. Your children can study at European universities without applying for student visas. The right to purchase real estate anywhere in the European Union.`,
    },
    {
      heading: `Why Obtain a Hungarian Residence Permit?`,
      body: `Many people choose Hungary because:\nRelatively low profit tax (9%) and dividend tax (15%). Clean environment, beautiful scenery, and favorable climate. Simplified company registration procedures. Presence of universities and international schools offering English-language education.\nTypically, obtaining a Hungarian RP is seen as a transitional step: once acquired, it allows you to relocate and live in any other EU country. However, Hungary itself is also an excellent permanent residence option. The reasons include:\nHigh-quality healthcare that meets EU standards. Relatively affordable real estate and groceries compared to other EU countries. Plenty of opportunities for active leisure and a well-developed domestic tourism sector. Crime rates below the EU average.`,
    },
    {
      heading: `Ways to Obtain a Residence Permit in Hungary`,
      body: `There are several pathways for obtaining residency in Hungary. Let's consider the most common ones.\nResidence Permit for Financially Independent Migrants\nThis procedure exists in many European countries. It allows a person to live in Hungary temporarily, with the permit being extended repeatedly. However, the holder cannot work or earn income (including running a business) in the EU. This RP does not grant simplified citizenship eligibility \u2014 only on general grounds.\nTo obtain this RP card in Hungary, you need to:\nDeposit \u20AC10,000 per family member into a Hungarian bank account. Purchase medical insurance (\u20AC36 per year per person). Buy or rent housing in Hungary. Provide a criminal record certificate. Pass Due Diligence (applies if a company is applying).\nResidence Permit Through Real Estate Acquisition\nSome EU states offer "golden visas" for property purchases (e.g., Greece, Spain, Portugal), but Hungary does not. Purchasing property only places you in the general queue of applicants.\nOther requirements include:\nMedical insurance. A deposit of at least \u20AC6,000 per family member into a Hungarian bank account. Proof of no criminal record.\nWhen purchasing property, ensure at least 12\u201315 m2 of living space per person. The property must be residential, not commercial.\nResidence Permit Through Business\nThe cost of this RP is about \u20AC2,500 \u2014 the minimum amount required to register a company (similar to an LLC). Entrepreneurs may then apply for residency.\nBusiness owners must ensure that the company:\nOperates legally under Hungarian law. Passes regular audits. Pays taxes on time according to applicable rates.\nHungarian tax law is complex, so it\u2019s advisable to hire an experienced local accountant. Quotas for this type of RP are limited, and the final decision rests with the Registration Court, which considers the business\u2019s importance for a given region.\nOther Ways to Obtain Residency\nOther options include:\nMarriage to a Hungarian citizen \u2014 RP is granted within one month, with thorough fraud checks. Citizenship may be applied for after 3 years. Family reunification \u2014 applicable to minor children or dependent parents. Employment \u2014 high-skilled workers or executives invited by large companies may qualify. Education \u2014 students proficient in Hungarian may apply. Pensioners \u2014 after residing in Hungary for at least 3 years, elderly migrants may apply, subject to additional documentation.\nResidence Permit by Investment \u2014 Abolished Program\nFrom 2013 to 2017, Hungary allowed wealthy individuals to obtain RP in about 3 weeks by investing \u20AC360,000 in government bonds. The program has since been canceled.`,
    },
    {
      heading: `Residence Permit for Ukrainians`,
      body: `Since February 24, 2022, Hungary has introduced special conditions for Ukrainian citizens, who may apply for temporary asylum or RP directly.`,
    },
    {
      heading: `Incluence Services for RP in Hungary`,
      body: `Our firm employs experienced professionals who monitor legislative changes across various countries, including Hungary. Contact our experts if you\u2019re interested in residency in this country: we will answer your questions and handle all required documentation.\nTo obtain a Hungarian residence permit, reach out via phone, our website, or Telegram, WhatsApp, Facebook, Instagram, or Messenger.`,
    },
  ],
  faq: [
    { question: `What are the benefits of a Hungarian residence permit?`, answer: `A Hungarian RP grants the right to live, work, access social protection and healthcare, and travel freely within the Schengen zone.` },
    { question: `Can I obtain Hungarian residency through investment?`, answer: `Currently, Hungary has no direct residency-by-investment program. The previous program has been canceled.` },
    { question: `How to obtain a Hungarian residence permit?`, answer: `A Hungarian RP is issued based on employment, self-employment, studies, marriage to a Hungarian citizen, or proof of sufficient financial resources. Applications are submitted at the local immigration office.` },
    { question: `What documents are required for a Hungarian RP?`, answer: `You will need a valid passport, proof of grounds for residence (employment, study, family ties), proof of financial resources, medical insurance, and proof of housing in Hungary.` },
  ],
};

const ResidencePermitInHungaryPage = () => (
  <ServiceDetailPage
    slug="residence-permit-in-hungary"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}

  />
);

export default ResidencePermitInHungaryPage;
export { ResidencePermitInHungaryPage };
