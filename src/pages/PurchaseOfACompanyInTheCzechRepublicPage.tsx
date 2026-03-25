import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const PAGE_DATA = {
  title: `Purchase of a Company in the Czech Republic`,
  heroDescription: `To start a business in the Czech Republic, you need to register a company. Registration is a rather complex procedure that requires entrepreneurs not only time and effort but also knowledge of the specifics of this process, such as the legislative requirements of the Czech Republic. An alternative can be the purchase of a ready-made Czech company.`,

  buyOrRegister: {
    heading: `Company in the Czech Republic: Buy or Register from Scratch`,
    paragraphs: [
      `A ready-made company is a legal entity registered in the Commercial Register and listed with the tax office at the place of registration. Entrepreneurs can buy such a company, after which it will be re-registered to a new owner within a short time.`,
      `Deciding to buy a company in Czechia not only saves the entrepreneur from various formalities related to the registration process but also provides a company that already meets certain requirements. For example, it may already hold licenses or be registered as a VAT payer.`,
    ],
    useCases: [
      `obtain a residence visa in the Czech Republic`,
      `purchase real estate under the company's name`,
      `quickly start business operations in the Czech Republic`,
    ],
    vatNote: `The key advantage of buying a company in Czechia is that the new owner can immediately obtain a VAT number. This is not possible when registering a company from scratch, as obtaining the number requires an annual turnover exceeding 1 million CZK.`,
  },

  advantages: {
    heading: `Buying a Company in the Czech Republic: Advantages`,
    intro: `Purchasing a ready-made company has many advantages, including:`,
    items: [
      `the share capital is fully paid`,
      `some companies already hold licenses for specific activities`,
      `you can buy a company in Czechia with no business history, no contracts, and no prior activity`,
      `a company with history looks more attractive to potential partners`,
      `the enterprise already has a bank account`,
      `the buyer can make changes during the purchase process, such as changing the company name`,
      `the company has a legal address compliant with Czech legislation`,
      `offered ready-made companies have no debts or other obligations to the state or third parties`,
    ],
  },

  changes: {
    heading: `Ready-Made Company in the Czech Republic — What Can Be Changed`,
    intro: `If the new owner wishes to make changes, this can be done during the purchase process. Amendments can include:`,
    items: [
      `adding or modifying business activities`,
      `changing the legal address`,
      `choosing a new company name`,
      `closing or opening additional bank accounts in the desired currency`,
      `redistributing share capital among co-founders`,
    ],
    notes: [
      `By law, processing such changes may take up to 5 business days.`,
      `Business activities can begin immediately after signing the purchase contract; waiting for registry updates is not required.`,
    ],
  },

  considerations: {
    heading: `What to Consider When Buying a Ready-Made Company in Czechia`,
    paragraphs: [
      `It is important to note the difference between VAT-registered companies and those without business history. If the company's turnover falls below 1 million CZK, it may lose its VAT number. Therefore, such firms must remain active, keep accounting, and file reports. These factors directly influence the price of the company during sale.`,
      `If you are interested in a ready-made company in Czechia with a VAT number, it must undergo a thorough audit since it has already engaged in business activities.`,
    ],
    auditItems: [
      `verify the availability and compliance of all documents (founding, ownership, and licensing documents)`,
      `check ownership rights to company shares and the legitimacy of related transactions`,
      `provide recommendations to align documentation with legal standards if needed`,
    ],
  },

  requirements: [
    `High-resolution scan of international passport`,
    `Registered residential address (city and region)`,
    `Criminal record certificate from home country`,
    `Criminal record certificate from the Czech Republic`,
  ],

  costs: {
    heading: `What's Needed to Buy a Company in Czechia: Costs`,
    intro: `The cost of purchasing a company depends primarily on the firm itself: whether it is active, has licenses, and other factors. The price is also influenced by notary services and the preparation of various required documents:`,
    items: [
      `Criminal record certificates for the director from both the country of residence and the Czech Republic. To obtain a Czech certificate, a birth certificate is required as a mandatory supporting document.`,
      `If the legal address needs to be changed, written consent from the property owner is required.`,
    ],
    notes: [
      `Additional costs may arise due to personal presence requirements or issuing a power of attorney. If the purchase is by proxy, the document can be signed either in person in the Czech Republic or at a Czech consulate abroad.`,
      `Besides documentation and company costs, there are expenses for our due diligence services. Our specialists perform a thorough audit to ensure a transparent and secure transaction for all parties.`,
    ],
  },

  faq: [
    { question: `What documents are required to purchase a business in the Czech Republic?`, answer: `To buy a company in Czechia, you will need notarized copies of the participants' passports, a criminal record certificate, powers of attorney from shareholders, and registration forms. All documents must be originals.` },
    { question: `How can a foreigner buy a company in Czechia?`, answer: `You first need to find a seller, either directly or via intermediaries. To re-register the company, you must either travel to Czechia or issue a power of attorney to a local authorized representative. The purchase through a representative is the most common, convenient, fast, and cost-effective option.` },
    { question: `What taxes need to be paid when purchasing a company in the Czech Republic?`, answer: `No taxes are charged when purchasing a company in Czechia. Taxes apply to company profits and dividends. The company may also benefit from preferential tax regimes.` },
    { question: `Can I buy a company in Czechia online?`, answer: `A company in Czechia can be purchased remotely via power of attorney or by visiting the country in person.` },
  ],
};

const SectionTag = ({ label }: { label: string }) => (
  <div className="text-[11px] text-[hsl(var(--text-muted))] uppercase tracking-[0.15em] mb-4 flex items-center gap-3">
    <span className="w-5 h-px bg-[hsl(var(--accent))]" />
    {label}
  </div>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] mt-2 shrink-0" />
    <span className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.7]">{children}</span>
  </div>
);

const PurchaseOfACompanyInTheCzechRepublicPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbLabel = pathSegments[pathSegments.length - 1]
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || PAGE_DATA.title;

  return (
    <div className="min-h-screen bg-[hsl(var(--bg-1))] font-manrope">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[hsl(var(--bg-1))] border-b border-[hsl(var(--border-default))]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-3">
          <div className="flex items-center gap-2 text-[12px] text-[hsl(var(--text-muted))]">
            <Link to="/" className="hover:text-[hsl(var(--text-secondary))] transition-colors">Incluence</Link>
            <span>/</span>
            <span className="text-[hsl(var(--text-secondary))]">{breadcrumbLabel}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[hsl(var(--bg-1))] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h1 className="text-[clamp(32px,5vw,56px)] font-light text-[hsl(var(--text-primary))] leading-[1.1] tracking-[-0.02em] mb-6">
            {PAGE_DATA.title}
          </h1>
          <p className="text-[16px] text-[hsl(var(--text-secondary))] leading-[1.8] max-w-[720px] mb-10">
            {PAGE_DATA.heroDescription}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-[hsl(var(--primary-foreground))] text-[13px] font-medium uppercase tracking-[0.1em] px-8 py-4 transition-colors"
          >
            Discuss the project →
          </Link>
        </div>
      </section>

      {/* BUY OR REGISTER */}
      <section className="bg-[hsl(var(--bg-2))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="Overview" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-8">
            {PAGE_DATA.buyOrRegister.heading}
          </h2>

          <div className="flex flex-col gap-5 max-w-[800px] mb-10">
            {PAGE_DATA.buyOrRegister.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8]">{p}</p>
            ))}
          </div>

          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-4">
            A ready-made company can be the best choice for entrepreneurs who want to:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {PAGE_DATA.buyOrRegister.useCases.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </div>

          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] max-w-[800px]">
            {PAGE_DATA.buyOrRegister.vatNote}
          </p>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-[hsl(var(--bg-1))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="Advantages" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-4">
            {PAGE_DATA.advantages.heading}
          </h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-8">
            {PAGE_DATA.advantages.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--border-default))]">
            {PAGE_DATA.advantages.items.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--bg-1))] p-5">
                <BulletItem>{item}</BulletItem>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CAN BE CHANGED */}
      <section className="bg-[hsl(var(--bg-2))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="Modifications" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-4">
            {PAGE_DATA.changes.heading}
          </h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-8">
            {PAGE_DATA.changes.intro}
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {PAGE_DATA.changes.items.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </div>

          {PAGE_DATA.changes.notes.map((note, i) => (
            <p key={i} className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-3 max-w-[800px]">
              {note}
            </p>
          ))}
        </div>
      </section>

      {/* CONSIDERATIONS & AUDIT */}
      <section className="bg-[hsl(var(--bg-1))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="Due Diligence" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-8">
            {PAGE_DATA.considerations.heading}
          </h2>

          <div className="flex flex-col gap-5 max-w-[800px] mb-10">
            {PAGE_DATA.considerations.paragraphs.map((p, i) => (
              <p key={i} className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8]">{p}</p>
            ))}
          </div>

          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-4">
            During this process, our experts will:
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {PAGE_DATA.considerations.auditItems.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </div>

          {/* Requirements sub-section */}
          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-4">
            To buy a company in Czechia, you will need:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--border-default))]">
            {PAGE_DATA.requirements.map((req, i) => (
              <div key={i} className="bg-[hsl(var(--bg-1))] p-5">
                <BulletItem>{req}</BulletItem>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mt-8 max-w-[800px]">
            If you are interested in acquiring a ready-made company in Czechia, our specialists will review available offers and select the best option for you. We also provide many additional services, which you can learn about during a consultation with our manager.
          </p>
        </div>
      </section>

      {/* COSTS */}
      <section className="bg-[hsl(var(--bg-2))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="Costs" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-4">
            {PAGE_DATA.costs.heading}
          </h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-8 max-w-[800px]">
            {PAGE_DATA.costs.intro}
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {PAGE_DATA.costs.items.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </div>

          {PAGE_DATA.costs.notes.map((note, i) => (
            <p key={i} className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8] mb-3 max-w-[800px]">
              {note}
            </p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[hsl(var(--bg-1))] py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <SectionTag label="FAQ" />
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[hsl(var(--text-primary))] leading-[1.2] mb-10">
            Common Questions
          </h2>

          <div className="flex flex-col gap-px bg-[hsl(var(--border-default))]">
            {PAGE_DATA.faq.map((item, i) => (
              <div key={i} className="bg-[hsl(var(--bg-1))]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[15px] text-[hsl(var(--text-primary))] font-normal pr-4">
                    {item.question}
                  </span>
                  <span className="text-[20px] text-[hsl(var(--text-muted))] shrink-0 w-6 text-center">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.8]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default PurchaseOfACompanyInTheCzechRepublicPage;
export { PurchaseOfACompanyInTheCzechRepublicPage };
