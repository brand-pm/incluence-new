import { HubPage } from '@/components/templates/HubPage'

const GamblingHubPage = () => (
  <HubPage
    slug="gamble-license"
    categoryTag="LICENSING"
    titleAccent="Gambling"
    titleRest="License"
    description="The full-fledged operation of an online casino implies the obligatory availability of a gaming license. This document ensures the financial stability of the business and security for the owner and the company, as well as allows the legal development of gaming projects and the provision of appropriate services to customers."
    stats={[
      { value: '6+',     label: 'JURISDICTIONS AVAILABLE' },
      { value: '2 wk',   label: 'FASTEST LICENSE' },
      { value: '500+',   label: 'LICENSES OBTAINED' },
      { value: '12 yrs', label: 'INDUSTRY EXPERIENCE' },
    ]}
    jurisdictionsTitle="Choose Your Jurisdiction"
    jurisdictionsSubtitle="Each license serves different markets, budgets and timelines. We help you select and obtain the right one."
    jurisdictions={[
      {
        regulator: 'MGA',
        name: 'Malta',
        description: 'Malta is a state with one of the most well-regulated systems of gambling activities. The MGA directly licenses gambling entities. License issued for five years, renewable.',
        timeline: '6–9 months',
        badge: 'EU Regulated',
        href: '/malta-gaming-license',
      },
      {
        regulator: 'CGA',
        name: 'Curaçao',
        description: 'Curaçao hosts many companies operating in the gambling industry — explained by simple, business-friendly legislation and low taxation. Highly attractive for online casino operators.',
        timeline: '3–4 months',
        badge: 'Most Popular',
        href: '/curacao-gaming-license',
      },
      {
        regulator: 'GSC',
        name: 'Isle of Man',
        description: 'Applications reviewed within 10–12 weeks. Full assistance in obtaining the license in the shortest possible time with minimal risk of refusal.',
        timeline: '6–12 months',
        href: '/gambling-license-of-the-isle-of-man',
      },
      {
        regulator: 'Municipality',
        name: 'Costa Rica',
        description: 'Data Processing license issued by the local municipality. No business plan needed, no profit plan requirements, no software requirements, no financial reporting.',
        timeline: '2–5 weeks',
        badge: 'Offshore',
        href: '/gambling-license-in-costa-rica',
      },
    ]}
    processTitle="From Selection to License"
    processSubtitle="Fully managed. You focus on your business while we navigate the regulatory process end-to-end."
    steps={[
      { number: '01', title: 'Jurisdiction Selection', description: 'We analyze your target markets, player geography, payment needs and budget to recommend the optimal jurisdiction.' },
      { number: '02', title: 'Company Formation', description: 'Local entity incorporated with proper structure. Directors, shareholders, registered office — all requirements met.' },
      { number: '03', title: 'Bank Account Opening', description: 'Corporate account opened in jurisdiction-approved bank. Authorized capital deposited as required by regulator.' },
      { number: '04', title: 'Documentation Package', description: 'Business plan, AML policy, technical documentation, RNG certificates — full package prepared by our team.' },
      { number: '05', title: 'Regulator Submission', description: 'Application submitted to licensing authority. We manage all follow-up questions and compliance requests.' },
      { number: '06', title: 'License Issued', description: 'License granted. Full corporate package handed over with post-licensing compliance support included.' },
    ]}
    requirementsTitle="What You'll Need"
    requirementsIntro="Requirements vary by jurisdiction but share a common core. We prepare the full documentation package on your behalf — you only provide personal documents."
    requirements={[
      'Copies of passports and proof of address — all directors and shareholders of the company',
      'Documents confirming the experience and financial standing of company participants',
      'Statutory documents of the company',
      'Technical documentation',
      'Company policies (AML/KYC, Responsible Gaming)',
      'Detailed business plan and description of gaming activities',
    ]}
    faq={[
      { question: 'What are the conditions for obtaining a gaming license?', answer: 'In order to obtain a gambling license, you need to prepare a business plan, register a company, apply for a license, set up a technical base and open a bank account. In order to obtain a gambling license, you must carefully prepare all the documentation and correctly apply for a license. These processes should be entrusted to professionals.' },
      { question: 'In which countries we propose to make a license for gaming business', answer: 'We work with different regions such as Malta, Curacao, Costa Rica, Estonia, Isle of Man and others. In order to register a gambling business, it is necessary to take into account the list of future games, the region of activity, and other factors. We will easily select the country of registration, taking into account the characteristics of your business.' },
      { question: 'What are the terms for obtaining a gambling license?', answer: 'The term for obtaining a license depends on the chosen country of registration, business features, the chosen license class and other factors. It usually takes up to six months to register a company and obtain a license.' },
      { question: 'What documents are required to obtain a gaming license?', answer: 'In order to obtain a gambling license, you must submit: - copies of passports and confirmation of the address of directors and shareholders of the company; - documents confirming the experience and wealth of the company\'s participants; - statutory documents of the company; - technical documentation; - company policies.' },
    ]}
    formTitle="Ready to Apply for a Gambling License?"
    formSubtitle="Tell us about your project and we'll identify the best jurisdiction, timeline and cost structure for your business. Response within 24 hours."
  />
)

export default GamblingHubPage
