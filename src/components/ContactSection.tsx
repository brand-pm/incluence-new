const sectionPad = { padding: "var(--space-24) var(--space-12)" };

const ContactSection = () => (
  <section className="bg-surface" style={sectionPad}>
    <div className="mx-auto max-w-[1280px]">
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--space-16)" }}>
        <div>
          <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>Get In Touch</div>
          <h2 className="text-display-lg" style={{ marginBottom: "var(--space-6)" }}>Let's discuss your project</h2>
          <p className="text-body-lg text-muted-foreground">
            Schedule a free consultation with our experts. We'll analyze your business needs and recommend the optimal licensing strategy.
          </p>
        </div>
        <form className="flex flex-col" style={{ gap: "var(--space-5)" }} onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2" style={{ gap: "var(--space-4)" }}>
            <input placeholder="Full Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            <input placeholder="Email" type="email" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
          </div>
          <input placeholder="Company Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
          <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
          <button type="submit" className="btn-primary self-start">Get Free Consultation</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
