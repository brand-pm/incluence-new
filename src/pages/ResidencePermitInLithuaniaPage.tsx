import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-lithuania
const PAGE_DATA = {
  title: `Residence Permit in Lithuania`,
  description: `There are many reasons to move to Lithuania \u2014 numerous business opportunities, plenty of employment options, prestigious educational institutions, and more. For relocation, foreigners must obtain a residence permit.`,
  sections: [
    {
      heading: `Obtaining a Residence Permit: Lithuania`,
      body: `There are many reasons to move to Lithuania \u2014 numerous business opportunities, plenty of employment options, prestigious educational institutions, and more. However, for relocation, foreigners must obtain the appropriate status \u2014 a residence permit. Lithuania grants it to migrants who meet certain conditions.\nIn particular, grounds are required to obtain such a permit. This may include employment in a Lithuanian company, a significant investment in the country\u2019s economy, running a business, and so on. For additional information about residence permits in Lithuania, contact the specialists at Incluence.`,
    },
    {
      heading: `Basic Information About a Temporary Residence Permit: Lithuania`,
      body: `In most cases, authorities issue residence permits to migrants for 1\u20132 years. However, in some situations, the period may be longer. For example, if a foreigner has the right to restore Lithuanian citizenship, their permit will be valid for 5 years. In all cases, residence permits can be extended, but the total term cannot exceed 5 years.\nTo apply, you must first submit the application electronically via Lithuania\u2019s migration information system \u2014 MIGRIS. After that, the foreigner has 4 months to appear in person at the Migration Department. To obtain the permit, they must provide biometric data and a set of required documents.\nWhen applying for a residence permit, the migrant must legally reside in Lithuania. The same applies at the time the ready permit is issued. Legal residence means holding a visa, or in some cases, using the visa-free regime if applicable. Migrants may also request a national visa from the Migration Department, valid for no more than 5 months.`,
    },
    {
      heading: `Grounds for Obtaining a Residence Permit in Lithuania`,
      body: `If you are interested in Lithuania, you can obtain a residence permit based on specific grounds. The most common are:\nFamily reunification (only close relatives \u2014 spouses, parents, children). Official employment with a Lithuanian company. Enrollment in an educational institution in Lithuania. Engagement in legal activities in the country. Restoration of Lithuanian citizenship.\nLithuania also grants residence permits to persons of Lithuanian origin, meaning applicants whose parents or grandparents were Lithuanians. In addition, the applicant must identify as Lithuanian and submit a written statement. Such foreigners may apply for a residence permit even if they never held Lithuanian citizenship before.`,
    },
    {
      heading: `Ways to Obtain a Residence Permit in Lithuania`,
      body: `Requirements and validity periods depend on the grounds for residence. Below are the most popular options for legalization available to applicants.\nEmployment\nTo legally stay in Lithuania, a migrant must have a signed employment contract with a Lithuanian employer. The agreement must specify the employee\u2019s salary and be valid for at least 1 year.\nResidence permits may also be granted if the foreigner has a work permit or if their skills match the needs of Lithuania\u2019s labor market.\nEmployers must also take certain steps, such as registering the vacancy with the Employment Service at the firm\u2019s registered legal address.\nOnce approved, the residence permit will be valid for:\n2 years \u2014 for regular employees. 3 years \u2014 for highly qualified specialists.\nThe permit can be extended, but the total term cannot exceed 5 years.\nFamily Reunification\nIf the migrant\u2019s spouse or close relatives are Lithuanian citizens residing in the country, the migrant may apply for a residence permit. Proof must be submitted, such as:\nA marriage certificate, if the spouse is a Lithuanian citizen. A birth certificate, if one parent is a Lithuanian citizen.\nThis type of permit is usually issued for 1 year and can be extended once for another 2 years.\nEducation\nForeigners admitted to Lithuanian universities or colleges may apply for a residence permit. They must sign an enrollment agreement with the institution. If the applicant is under 18, parental consent is also required.\nThe permit is issued for 1 year and can be extended while studies continue. After graduation, the foreigner may apply again based on employment or internship.\nBusiness and Investment\nLithuania offers favorable conditions for migrants seeking residence permits through investment. Business owners must establish a new company or acquire an existing one that has been operating for at least 6 months.\nTo qualify quickly, the required investment is \u20AC26,000 in company share capital. Additionally, the following conditions must be met:\nThe company operates commercially for at least 6 months. At least 3 full-time jobs are created. All taxes and fees are paid on time.`,
    },
    {
      heading: `Residence Permit in Lithuania: Cost`,
      body: `If you need help obtaining a residence permit, our experts are ready to assist. We will answer your questions, prepare documents, and submit the application on your behalf.\nThe cost depends on the grounds for residence and varies widely. Factors include:\nThe list of required documents. Conditions for legalization. The number of interactions with the migration authorities.\nFor example, the cost may depend on whether the applicant engages in journalism, religious, sports, or creative activities.\nRegardless of the grounds, we will help you legally obtain a residence permit in Lithuania. The exact cost of services will be provided during a personal consultation. Contact us via the Incluence website or message us on Instagram, Facebook, Telegram, Messenger, or WhatsApp.`,
    },
  ],
  faq: [
    { question: `What does a residence permit in Lithuania provide?`, answer: `A residence permit in Lithuania allows foreigners to legally live in the country, work, study, access healthcare and social services, and travel freely within the Schengen Area without a visa.` },
    { question: `Can I obtain a residence permit in Lithuania through investment?`, answer: `Yes. Foreigners can obtain a residence permit in Lithuania through investments. This requires investing in Lithuanian companies or making significant financial contributions to the country's economy.` },
    { question: `How to obtain a residence permit in Lithuania?`, answer: `To obtain a residence permit in Lithuania, you must apply to the Lithuanian Migration Department with the appropriate application and supporting documents proving your grounds for residence (e.g., employment, education, or marriage to a Lithuanian citizen).` },
    { question: `What documents are required?`, answer: `The main documents include a valid passport, documents confirming the grounds for residence (e.g., work contract or university admission letter), proof of financial means, valid health insurance, and proof of accommodation in Lithuania.` },
  ],
};

const ResidencePermitInLithuaniaPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInLithuaniaPage;
export { ResidencePermitInLithuaniaPage };
