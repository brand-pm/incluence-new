import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";

// Source: service-texts.md | URL: /company-registration-in-europe
const PAGE_DATA = {
  title: `Company Registration in Europe`,
  description: `Registering a company in Europe: how to start a business in the EU Selecting the company’s primary business activity, a suitable legal form, and the company name; Choosing and leasing a legal address in the selected country; Preparing incorporation documents in line with national legislation.`,
  requirements: [
    `Company Registration in Europe: specifics of starting a business in the EU`,
    `The reputation of a European-registered company is much higher than that of companies incorporated outside the EU, particularly in offshore zones. The European Union attracts non-European entrepreneurs, as foreign banks and partners are more open to working with EU-based businesses`,
    `However, registering a European company is a complex task, since entrepreneurs must take into account many nuances. Moreover, the registration process varies greatly between countries`,
    `Buying or registering a company in Europe`,
    `If you don’t want to spend time and effort, registering a company in the EU is not the only option. You can also purchase a ready-made company in your desired country with the help of our specialists`,
    `There are shelf companies with no debts or obligations to local authorities or third parties. You can purchase such a business with a clean history and start operations almost immediately after signing the purchase agreement`,
    `Company registration in Europe: business advantages of the EU`,
    `The EU provides a very comfortable business environment for starting and developing a company. In addition, Europe offers numerous other benefits:`,
    `modern infrastructure; government support and interest in foreign investment; flexible taxation and various tax benefits; availability of free economic zones; low interest rates on loans from European banks; political and economic stability; multinational consumer market with diverse tastes and preferences; high living standards and purchasing power of consumers`,
    `Furthermore, registering a company in the EU allows entrepreneurs to trade across the entire European Union, not just in one country`,
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
    requirements={PAGE_DATA.requirements}
    faq={PAGE_DATA.faq}
  />
);

export default CompanyRegistrationInEuropePage;
export { CompanyRegistrationInEuropePage };
