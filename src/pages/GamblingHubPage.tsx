import { HubPage } from '@/components/templates/HubPage'

const GamblingHubPage = () => (
  <HubPage
    categoryTag="LICENSING"
    titleAccent="Gambling"
    titleRest="License"
    description="Obtain an online gambling license in the right jurisdiction for your business. We handle the full process — from jurisdiction selection to license issuance."
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
        description: 'Tier-1 prestige license from the Gambling Supervision Commission. Covers all verticals under one permit.',
        timeline: '6–12 months',
        href: '/gambling-license-of-the-isle-of-man',
      },
      {
        regulator: 'Municipality',
        name: 'Costa Rica',
        description: 'Data Processing license — fastest path to operation. No business plan required. Income tax exempt for international operators.',
        timeline: '2–5 weeks',
        badge: 'Offshore',
        href: '/gambling-license-in-costa-rica',
      },
      {
        regulator: 'GBGA',
        name: 'Gibraltar',
        description: 'Highly respected EU-adjacent jurisdiction. Full B2C and B2B coverage. Recognized by major payment processors globally.',
        timeline: '6–12 months',
        badge: 'Prestige',
        href: '/gambling-license-gibraltar',
      },
      {
        regulator: 'CySEC / NGA',
        name: 'Cyprus',
        description: 'National Gaming Authority license. Full EU market access. Favorable tax regime for licensed gaming companies.',
        timeline: '6–9 months',
        badge: 'EU Member',
        href: '/gambling-license-cyprus',
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
      'Passport copies and proof of address — all directors and shareholders',
      'Documents confirming financial standing and source of funds',
      'Company statutory documents',
      'Detailed business plan and description of gaming activities',
      'AML/KYC policy compliant with local and international legislation',
      'Technical documentation and RNG certificates',
      'Responsible Gaming policy published on the platform',
      'Registered office in jurisdiction (we assist with setup)',
      'Proof of authorized capital deposit',
    ]}
    faq={[
      { question: 'What conditions are required to obtain a gaming license?', answer: 'Requirements vary by jurisdiction. Generally you need a registered local company, a business plan, AML/KYC policy, technical documentation, and personal documents for all directors and shareholders.' },
      { question: 'Which jurisdictions do you work with for gambling licenses?', answer: 'We work with Malta (MGA), Curaçao (CGA), Isle of Man (GSC), Costa Rica, Gibraltar (GBGA), Cyprus, and several other jurisdictions globally.' },
      { question: 'How long does it take to obtain a gambling license?', answer: 'Timeline varies: Costa Rica — 2–5 weeks; Curaçao — 3–4 months; Malta, Gibraltar, Cyprus — 6–12 months.' },
      { question: 'What documents are required for a gambling license application?', answer: 'Passport copies, proof of address, bank reference letters, criminal record certificates, company documents, technical documentation, AML policy, and business plan.' },
      { question: 'Can a foreign company apply for a gambling license?', answer: 'Yes. Most jurisdictions allow foreign nationals to register a local company and obtain a license. We handle the full process remotely.' },
      { question: 'How much does a gambling license cost?', answer: 'Costs vary by jurisdiction and scope of services. Contact our specialists for an exact quote tailored to your business requirements.' },
    ]}
    formTitle="Ready to Apply for a Gambling License?"
    formSubtitle="Tell us about your project and we'll identify the best jurisdiction, timeline and cost structure for your business. Response within 24 hours."
  />
)

export default GamblingHubPage
