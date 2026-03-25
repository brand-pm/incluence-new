import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { SlovakiaResidenceVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /residence-permit-in-slovakia
const PAGE_DATA = {
  title: `Residence Permit in Slovakia`,
  description: `Slovakia is a relatively small yet cozy country located in the heart of Europe. If you want to move here for work, study, or other reasons, you will need a special document \u2014 a residence permit in Slovakia (RP), also called the Slovak Pobyt Card.`,
  sections: [
    {
      heading: `Obtaining a Residence Permit: Slovakia`,
      body: `Slovakia is a relatively small yet cozy country located in the heart of Europe. If you want to move here for work, study, or other reasons, you will need a special document \u2014 a residence permit in Slovakia (RP). It is also called the Slovak Pobyt Card. To obtain this permit, contact the specialists at Incluence. Our experts will answer all your questions and prepare the necessary documents.`,
    },
    {
      heading: `Residence Permit in Slovakia: Key Information`,
      body: `Permanent residence in Slovakia can only be granted to a limited group of individuals, such as:\nSpouses of Slovak citizens; Minor children of foreigners who already have permanent residence in Slovakia; Relatives dependent on a Slovak citizen.\nTemporary residence permits in Slovakia, on the other hand, can be issued to various categories of migrants, provided they meet the state\u2019s requirements.`,
    },
    {
      heading: `Grounds for Obtaining a Temporary Residence Permit`,
      body: `Slovakia may issue a temporary residence permit on the following grounds:\nStarting a company or running a business; Conducting research activities; Status of a Slovak citizen living abroad; Serving in Slovakia as a peacekeeper; Permanent residence in another EU country; Employment; Long-term studies; Family reunification; Lecturing, cultural, or certain other activities.\nThe type of grounds determines both the application procedure and the list of required documents. Failure to comply with the rules may result in refusal.\nApplications for residence must be submitted using a special form, which can be obtained at:\nThe consulate in your country of residence; The migration office if you are already in Slovakia.`,
    },
    {
      heading: `Types of Residence Permits in Slovakia`,
      body: `The most common options include:\nResidence Permit for Studies\nStudents must apply for admission to a Slovak educational institution and provide:\nPassport; Registered address in the home country; Grades from the last 3 years; Short CV; Motivation letter; Certificates/awards (if available).\nApplications are usually accepted from January 1 to March 31 (private universities accept all year round).\nIf accepted, students must submit:\nApplication in Slovak; Two color photos (3x3.5 cm); Acceptance letter; Criminal record certificate with apostille; Proof of at least \u20AC2600 in a personal bank account; Registered address; Parental authorization (for minors).\nResidence Permit for Employment\nIssued only if the employer invites the migrant and registers the company with the Ministry of Labor, confirming vacancies.\nRequired documents:\nCompleted application form; Two color photos (3x3.5 cm); Employment contract; Criminal record certificate with apostille; Registered address.\nState fee for this category: \u20AC165.50. Applications are reviewed within 2\u20133 months.\nResidence Permit for Entrepreneurs\nAvailable for both sole traders and company founders. Requirements differ by category.\nEntrepreneurs must hold a "\u017divnostensk\u00fd list" (trade license). Costs vary depending on status.\nFor sole traders:\nApplication form; Two color photos (3x3.5 cm); Certificate of registration as a sole trader; Bank statements confirming \u20AC4500 in a business account and \u20AC2600 in a personal account; Criminal record certificate; Registered address.\nFor company founders:\nCompleted application form; Two color photos (3x3.5 cm); Extract from the Slovak Commercial Register; Protocol of director changes signed by the founder; Criminal record certificate with apostille; Proof of \u20AC21,200 in a corporate account and \u20AC2600 in a personal account.\nOther options are available \u2014 Incluence experts will select the best solution for your case during a consultation.`,
    },
  ],
  requirements: [
    `Completed application form`,
    `Two color photos (3x3.5 cm)`,
    `Bank statement proving financial means`,
    `Receipt confirming payment of the state fee (cost depends on the grounds and place of application)`,
    `Valid passport`,
    `Proof of accommodation in Slovakia`,
    `Criminal record certificate`,
    `Proof of purpose of stay`,
  ],
  faq: [
    { question: `What does a residence permit in Slovakia provide?`, answer: `A Slovak residence permit allows foreigners to legally reside in the country, work, or study. It also grants access to healthcare, education, social services, and visa-free travel across the Schengen area.` },
    { question: `Can I get a residence permit in Slovakia through investment?`, answer: `Yes, Slovakia offers residence permits through investment programs, usually requiring investment in local businesses or entrepreneurial activities. This involves significant financial contributions and a business development plan.` },
    { question: `How can I obtain a residence permit in Slovakia?`, answer: `To obtain a residence permit, you must apply to the Slovak Foreigners' Police, providing all required documents and proof of grounds (employment, studies, or family ties with Slovak citizens).` },
    { question: `What documents are required for a residence permit in Slovakia?`, answer: `You will need: a valid passport, proof of grounds (job contract, university invitation), proof of sufficient financial means, accommodation confirmation, and health insurance.` },
  ],
};

const ResidencePermitInSlovakiaPage = () => (
  <ServiceDetailPage
    slug="residence-permit-in-slovakia"
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<SlovakiaResidenceVisual />}

  />
);

export default ResidencePermitInSlovakiaPage;
export { ResidencePermitInSlovakiaPage };
