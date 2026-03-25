import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { GermanyCompanyVisual } from "@/components/templates/heroVisuals";


// Source: service-texts.md | URL: /company-registration-in-europe
const PAGE_DATA = {
  title: `Company Registration in Europe`,
  description: `The reputation of a European-registered company is much higher than that of companies incorporated outside the EU. The European Union attracts non-European entrepreneurs, as foreign banks and partners are more open to working with EU-based businesses.`,
  sections: [
    {
      heading: `Registering a company in Europe: how to start a business in the EU`,
      body: `If you decide to register a company in Europe, you should know that the procedure will differ depending on the country you choose and will have certain specific requirements.\n\nKeep in mind that you may be required to provide additional documents, but at the very least you need to prepare:\n\nCivil passport and a copy, as well as the beneficiary's international passport; Proof of residence of the beneficiary (e.g., utility bill); Proof of financial solvency, required to open a bank account in the EU.\n\nGeneral information about company formation in Europe\n\nCompany registration in the EU includes several general stages common to most European countries:\n\nSelecting the company's primary business activity, a suitable legal form, and the company name; Choosing and leasing a legal address in the selected country; Preparing incorporation documents in line with national legislation. The Articles of Association must specify: company name, legal form, registered office, founders and directors with personal details, and share capital; Opening a temporary bank account to deposit the share capital (amount varies by country); Signing incorporation documents. Registration in Europe also requires notarization of these documents; Registering the company in the Trade Register of the chosen country; Opening the company's permanent bank account and starting business activity.\n\nWhere to open a company in Europe\n\nConsider the following countries for company registration in Europe:\n\nEstonia. Offers relatively simple and quick company registration, favorable taxation, and enjoys investor and partner trust. Malta. Has a relatively low corporate tax rate for local companies \u2014 12.5%. No currency controls and minimal share capital requirements. Switzerland. Reliable banking system, stable currency, multiple double taxation treaties. Local companies enjoy high reputation among investors and partners.`,
    },
    {
      heading: `How to register a company in Europe`,
      body: `For tailored advice, contact Incluence. Registering companies in the EU is one of our core services. We will handle the business setup, prepare and file the necessary documents, and help you choose the most suitable jurisdiction.\n\nOur specialists will study the specifics of your business, analyze available options, and provide support throughout the process. This ensures you can quickly and easily choose the best jurisdiction \u2014 whether for favorable taxation or simplicity of business setup.\n\nTo get in touch with our experts, leave a request on our website or use any other convenient method: phone, email, or popular messengers.`,
    },
    {
      heading: `Company Registration in Europe: specifics of starting a business in the EU`,
      body: `The reputation of a European-registered company is much higher than that of companies incorporated outside the EU, particularly in offshore zones. The European Union attracts non-European entrepreneurs, as foreign banks and partners are more open to working with EU-based businesses.\n\nHowever, registering a European company is a complex task, since entrepreneurs must take into account many nuances. Moreover, the registration process varies greatly between countries.`,
    },
    {
      heading: `Buying or registering a company in Europe`,
      body: `If you don't want to spend time and effort, registering a company in the EU is not the only option. You can also purchase a ready-made company in your desired country with the help of our specialists.\n\nThere are shelf companies with no debts or obligations to local authorities or third parties. You can purchase such a business with a clean history and start operations almost immediately after signing the purchase agreement.`,
    },
    {
      heading: `Company registration in Europe: business advantages of the EU`,
      body: `The EU provides a very comfortable business environment for starting and developing a company. In addition, Europe offers numerous other benefits:\n\nmodern infrastructure; government support and interest in foreign investment; flexible taxation and various tax benefits; availability of free economic zones; low interest rates on loans from European banks; political and economic stability; multinational consumer market with diverse tastes and preferences; high living standards and purchasing power of consumers.\n\nFurthermore, registering a company in the EU allows entrepreneurs to trade across the entire European Union, not just in one country.`,
    },
  ],
  requirements: [
    `Civil passport and copy of beneficiary's international passport`,
    `Proof of residence of the beneficiary`,
    `Proof of financial solvency for bank account opening`,
    `Selected company name and legal form`,
    `Legal address lease in the selected country`,
    `Incorporation documents per national legislation`,
    `Articles of Association with company details`,
    `Temporary bank account for share capital deposit`,
    `Notarized incorporation documents`,
  ],
  faq: [
    { question: `Can a non-resident open a business in Europe?`, answer: `A non-resident who is not on sanctions lists and is not a resident of a sanctioned state can register a company in Europe. In some countries, however, a local director may be required to open a bank account.` },
    { question: `What is the cost of business registration in Europe?`, answer: `The final cost depends on the country of registration, business activity, number of participants, and other factors. To get an exact quote, please contact our specialists.` },
    { question: `Can a company in Europe be registered online?`, answer: `Yes, a company in Europe can be registered remotely via power of attorney or in person.` },
    { question: `How long does it take to open a company in Europe?`, answer: `The timeline depends on the country of registration and usually does not exceed 3 weeks.` },
  ],
};

const CompanyRegistrationInEuropePage = () => (
  <ServiceDetailPage
    title={PAGE_DATA.title}
    description={PAGE_DATA.description}
    sections={PAGE_DATA.sections}
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
    heroVisual={<GermanyCompanyVisual />}

  />
);

export default CompanyRegistrationInEuropePage;
export { CompanyRegistrationInEuropePage };
