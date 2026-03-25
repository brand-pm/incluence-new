import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /residence-permit-in-hungary
const PAGE_DATA = {
  title: `Residence Permit in Hungary`,
  description: `Obtaining a Residence Permit in Hungary: Key Features Relatively low profit tax (9%) and dividend tax (15%). Clean environment, beautiful scenery, and favorable climate. Simplified company registration procedures.`,
  requirements: [
    `Obtaining a Residence Permit in Hungary: Key Features`,
    `If you want to live in Europe with official status, Hungary may turn out to be one of the simplest ways to achieve this goal. Generally, it is difficult to obtain a residence permit (RP) in European countries because the queue of applicants numbers in the thousands, while quotas are limited to only a few dozen. At the same time, a Hungarian residence permit is one of the most accessible options that allows you to relocate to Europe for permanent residence`,
    `What Are the Advantages of a Residence Permit in Hungary?`,
    `The main and most important advantage is obtaining residency in a country that is a member of the European Union. This means you will gain access to all EU privileges on par with its citizens`,
    `Additionally, a Hungarian residence permit provides many other benefits:`,
    `The ability to travel freely within all Schengen countries without applying for a visa. A “backup option” of relocation in case of social or economic instability in your home country. The ability to keep savings in secure European banks. Legal access to running a business across the EU. Your children can study at European universities without applying for student visas. The right to purchase real estate anywhere in the European Union`,
    `Why Obtain a Hungarian Residence Permit?`,
    `Relatively low profit tax (9%) and dividend tax (15%). Clean environment, beautiful scenery, and favorable climate. Simplified company registration procedures. Presence of universities and international schools offering English-language education`,
    `Typically, obtaining a Hungarian RP is seen as a transitional step: once acquired, it allows you to relocate and live in any other EU country. However, Hungary itself is also an excellent permanent residence option. The reasons include:`,
    `High-quality healthcare that meets EU standards. Relatively affordable real estate and groceries compared to other EU countries. Plenty of opportunities for active leisure and a well-developed domestic tourism sector. Crime rates below the EU average`,
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
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default ResidencePermitInHungaryPage;
export { ResidencePermitInHungaryPage };
