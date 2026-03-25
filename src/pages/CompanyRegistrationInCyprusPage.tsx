import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-cyprus
const PAGE_DATA = {
  title: `Company Registration in Cyprus`,
  description: `How to register companies in Cyprus: taxation overview Choose a name for the future company. It's better to have several options to check them in the Registry. Collect and submit the package of documents.`,
  requirements: [
    `Company Registration in Cyprus: Key Points`,
    `Undoubtedly, setting up a company in Cyprus is considered a promising undertaking for several reasons:`,
    `The island state is not classified as an offshore jurisdiction and is not included in any “black” or “grey” lists. There are full opportunities to open a bank account. Thus, an entrepreneur can have an account in the same country where the company is registered. In Cyprus, company registration is always accompanied by a relatively low corporate income tax (Profit Tax), which is 12.5%. This rule applies regardless of the type of business activity. Since autumn 2017, Cyprus has been a full participant in the automatic exchange of tax information. The cost of registering substance — the actual business presence of a legal entity at the place of registration — is relatively low`,
    `Limited Company (LTD) — the business form most commonly chosen by entrepreneurs. Before registering a company in Cyprus in this form, consider:`,
    `Share capital from €1,000 to €5,000, with a minimum of €1. This is the standard range. A fee of 0.6% is charged, depending on the amount of share capital. Before opening a company in Cyprus, you must appoint a secretary — this position is mandatory for LTDs. Number of directors — from 1. The director does not have to be a Cyprus resident. This requirement applies unconditionally only if the company wants to be a tax resident. Number of shareholders — from 1, individual or legal entity. Shareholder data is always kept confidential`,
    `Company registration in Cyprus will be successful if its legal structure is properly designed. The simpler it is, the fewer issues with local authorities and the faster you will be able to open an account at any local bank`,
    `Proof of tax residency when opening a company in Cyprus`,
    `Proof is certified by an official document — a certificate. It confirms that the company is successfully registered in Cyprus and has resident status. This document allows 100% exclusion of double taxation and is issued for a specific country with an indication of the year. Local organizations are residents by default`,
    `To register a company in Cyprus and obtain the certificate, certain requirements have been introduced. They also apply to local legal entities`,
    `The company\'s management must be located on the island. If the company\'s interests are represented by power of attorney, it must be specific, i.e., limited to certain powers. Timely submission of reporting is mandatory`,
  ],
  faq: [
    { question: `How much does it cost to start a business in Cyprus?`, answer: `The final cost of starting a business in Cyprus depends on various factors. You can learn the exact cost of business registration in Cyprus by contacting our specialists.` },
    { question: `How long does company registration in Cyprus take?`, answer: `Company registration in Cyprus takes 10–15 business days.` },
    { question: `What documents are required to register a company in Cyprus?`, answer: `To register a company in Cyprus, it is necessary to submit copies of the participants’ passports and proof of address. It is also required to submit completed registration forms, including information about the source of funds for setting up the comp` },
    { question: `Can a company in Cyprus be registered online?`, answer: `A company in Cyprus can be registered remotely by proxy or by visiting Cyprus.` },
  ],
};

const CompanyRegistrationInCyprusPage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInCyprusPage;
export { CompanyRegistrationInCyprusPage };
