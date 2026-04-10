<script>
  import Navigation from '$lib/components/navigation.svelte';
</script>

<svelte:head>
  <title>Privacy Policy — Seemus</title>
  <meta name="description" content="Privacy Policy for Seemus and The Media Lounge Ltd. How we collect, use and protect your personal data." />
</svelte:head>

<div class="min-h-screen">
  <Navigation />

  <main class="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">

      <div class="mb-12">
        <p class="text-sm text-foreground/60 uppercase tracking-wide mb-3">Legal</p>
        <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
        <p class="text-muted-foreground">Last updated: 10 April 2026</p>
      </div>

      <div class="prose-seemus space-y-10">

        <section>
          <h2>Who we are</h2>
          <p>
            This website is operated by <strong>The Media Lounge Ltd</strong>, trading as <strong>Seemus</strong>
            ("we", "us", "our"). Our registered address is in London, United Kingdom. You can contact us at
            <a href="mailto:johnwatson@seemus.co.uk">johnwatson@seemus.co.uk</a>.
          </p>
          <p>
            We are committed to protecting your personal data and complying with the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2>What data we collect</h2>
          <p>We only collect personal data that you provide directly to us. This includes:</p>
          <ul>
            <li><strong>Contact form submissions</strong> — your name, email address, and message content.</li>
            <li><strong>Email correspondence</strong> — any information you include when emailing us directly.</li>
          </ul>
          <p>
            We do not use tracking cookies, analytics scripts, or advertising pixels. We do not collect
            browsing behaviour, device fingerprints, or any data without your active input.
          </p>
        </section>

        <section>
          <h2>How we use your data</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Respond to your enquiry or message.</li>
            <li>Provide services you have engaged us for.</li>
            <li>Send you a confirmation email acknowledging receipt of your message.</li>
          </ul>
          <p>
            We will never sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>Legal basis for processing</h2>
          <p>We process your data under the following lawful bases:</p>
          <ul>
            <li><strong>Legitimate interests</strong> — to respond to enquiries and manage client relationships.</li>
            <li><strong>Contract performance</strong> — to deliver services you have requested.</li>
            <li><strong>Legal obligation</strong> — where we are required by law to retain certain records.</li>
          </ul>
        </section>

        <section>
          <h2>Email delivery</h2>
          <p>
            Contact form submissions are processed via <strong>Resend</strong> (resend.com), an email delivery
            service. Your name, email address, and message are transmitted to Resend's servers solely to
            deliver the email to us and send you a confirmation. Resend processes this data as a data processor
            on our behalf. Please refer to
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend's Privacy Policy</a>
            for details of their data handling.
          </p>
        </section>

        <section>
          <h2>Data retention</h2>
          <p>
            We retain contact enquiries for up to <strong>24 months</strong> from receipt, after which they
            are securely deleted. Data relating to active client engagements is retained for the duration of
            the engagement and for up to <strong>6 years</strong> thereafter for legal and accounting purposes,
            in line with UK statutory requirements.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data.</li>
            <li><strong>Erasure</strong> — request deletion of your data where we have no lawful reason to retain it.</li>
            <li><strong>Restriction</strong> — ask us to limit how we use your data in certain circumstances.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at
            <a href="mailto:johnwatson@seemus.co.uk">johnwatson@seemus.co.uk</a>.
            We will respond within 30 days. If you are unhappy with our response, you have the right to
            lodge a complaint with the
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">Information Commissioner's Office (ICO)</a>.
          </p>
        </section>

        <section>
          <h2>Third-party links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of those sites and encourage you to read their privacy policies independently.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The date at the top of this page will always
            reflect the most recent revision. Continued use of the website after any changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For any questions about this policy or how we handle your data, please contact:<br />
            <strong>The Media Lounge Ltd</strong><br />
            London, United Kingdom<br />
            <a href="mailto:johnwatson@seemus.co.uk">johnwatson@seemus.co.uk</a>
          </p>
        </section>

      </div>
    </div>
  </main>

  <footer class="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-sm text-muted-foreground">© 2026 The Media Lounge Ltd. All rights reserved.</p>
      <div class="flex gap-6">
        <a href="/privacy-policy" class="text-sm text-primary transition-colors">Privacy Policy</a>
        <a href="/terms-of-service" class="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .prose-seemus h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: hsl(var(--foreground));
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid hsl(var(--border));
  }

  .prose-seemus p {
    color: hsl(var(--muted-foreground));
    line-height: 1.75;
    margin-bottom: 0.75rem;
  }

  .prose-seemus ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0.75rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .prose-seemus ul li {
    color: hsl(var(--muted-foreground));
    line-height: 1.7;
    padding-left: 1.25rem;
    position: relative;
  }

  .prose-seemus ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: hsl(var(--primary));
  }

  .prose-seemus a {
    color: hsl(var(--primary));
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .prose-seemus a:hover {
    opacity: 0.8;
  }

  .prose-seemus strong {
    color: hsl(var(--foreground));
    font-weight: 600;
  }
</style>
