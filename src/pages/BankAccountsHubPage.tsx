import HubPage from "@/components/templates/HubPage";

const PAGE_DATA = {
  slug: "accounts-bank",
  categoryTag: "Banking Services",
  titleAccent: "Foreign bank",
  titleRest: "& payment system accounts",
  description:
    "Opening bank and payment system accounts, providing assistance in account maintenance. If you plan to use banking services in foreign jurisdictions, you should carefully choose a bank to ensure comfortable financial and tax conditions. As a rule, a foreign bank account is required for businessmen who plan to do business with foreign partners.",
  stats: [
    { value: "50+", label: "Jurisdictions" },
    { value: "200+", label: "Accounts Opened" },
    { value: "4 steps", label: "Our Process" },
    { value: "Remote", label: "Available in many cases" },
  ],
  jurisdictionsTitle: "Banking Across Jurisdictions",
  jurisdictionsSubtitle:
    "We help open accounts in EU countries, European non-EU, Asia, USA, Canada and offshore. Below — popular jurisdictions and account types we work with.",
  jurisdictions: [
    { regulator: "Switzerland", name: "Swiss Banks", badge: "Tier 1", description: "Open private and corporate accounts in Switzerland — secure storage, multi-currency, world-class private banking and reputation.", href: "/open-bank-account-in-switzerland" },
    { regulator: "United Kingdom", name: "UK Banking", badge: "Tier 1", description: "Open business accounts with UK high-street banks and challenger banks. GBP, EUR, USD multi-currency available with FCA-regulated providers.", href: "/open-a-bank-account-in-uk" },
    { regulator: "Cyprus", name: "Cyprus Banks", badge: "EU", description: "EU-passported banking with experienced corporate departments serving international companies. Multi-currency accounts and SEPA access.", href: "/open-a-bank-account-in-cyprus" },
    { regulator: "Luxembourg", name: "Luxembourg", badge: "EU · Private", description: "Premium private and corporate banking. Long-standing reputation for confidentiality, asset management and structured finance.", href: "/open-a-bank-account-in-luxembourg" },
    { regulator: "USA", name: "US Banks", badge: "Federal", description: "Open business accounts with US banks for LLC and C-Corp structures. USD operations, ACH, wire transfers and merchant services.", href: "/open-bank-account-in-usa" },
    { regulator: "Liechtenstein", name: "Liechtenstein", badge: "Private", description: "Discreet private and corporate banking in Liechtenstein. Strong asset protection, multi-jurisdictional flexibility.", href: "/open-an-account-in-liechtenstein" },
  ],
  processTitle: "How We Open a Foreign Bank Account",
  processSubtitle:
    "Controlling meeting the deadlines at every stage. From first contact to a fully operational account.",
  steps: [
    { number: "01", title: "First Contact", description: "Contacting you at your convenience, and discussing the task at hand." },
    { number: "02", title: "Determining Your Needs", description: "Selecting a bank considering the jurisdiction, quality of banking services and the bank's requirements." },
    { number: "03", title: "Handling the Paperwork", description: "Handling the paperwork necessary to open a bank account." },
    { number: "04", title: "Submitting and Following Through", description: "Submitting an account opening application and following it through." },
  ],
  requirementsTitle: "What You Need to Provide",
  requirementsIntro:
    "Today, entrepreneurs can open a foreign bank account online, but not all banks provide such an option. If you want to open a foreign bank account, you will need to go through Due Diligence. In some cases banks can do it remotely, but in most cases, the customer must be present in person.",
  requirements: [
    "A package of corporate documents",
    "A certain amount of information about the business, beneficiaries, and account manager, who is determined by the bank on an individual basis",
    "Confirmation of the identity of the beneficiary and the account manager, if it is not the same person",
    "A concise description of the company's activities, including products, business partners, expected turnover on the account, etc.",
    "Proof of the residence address of the beneficiary and the account manager",
  ],
  faq: [
    { question: "In which countries do we help to open a bank account?", answer: "We assist with accounts opening all over the world: in EU countries, European non-EU countries, Asia, USA, Canada, offshore." },
    { question: "Can I buy a bank account online?", answer: "Due to the gradual tightening of legislation, banks usually open accounts only after a personal visit to the bank's representative office by the beneficiary and / or the director of the company. Online opening is allowed in rare cases. At the same time, an account can be opened online in payment systems." },
    { question: "How long does it take to open a bank account?", answer: "The duration and features of opening a bank account depends on the characteristics of the company and the rules of a particular bank. Usually the opening process takes from 2 months." },
    { question: "How much does it cost to open a bank account in foreign banks?", answer: "The exact cost depends on the country of registration of the company, the type of activity, the residency of its participants and the selected bank. You can find out the exact cost of opening an account for your company from our specialists." },
  ],
  formTitle: "Open Your Foreign Bank Account",
  formSubtitle:
    "Tell us about your company and banking needs. We'll select the right bank and handle the paperwork.",
};

const BankAccountsHubPage = () => <HubPage {...PAGE_DATA} />;
export default BankAccountsHubPage;
