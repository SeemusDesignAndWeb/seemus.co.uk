<script>
  import Navigation from '$lib/components/navigation.svelte';
</script>

<svelte:head>
  <title>The Media Lounge — Web Applications by Seemus</title>
  <meta name="description" content="The Media Lounge builds custom web applications — internal tools, customer portals, dashboards and more. Designed well and built to last." />
</svelte:head>

<div class="min-h-screen">
  <Navigation />

  <!-- ── HERO ── -->
  <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden" style="min-height: 100vh; min-height: 100dvh;">
    <div class="absolute inset-0 -z-20 gradient-bg"></div>
    <div class="absolute inset-0 bg-white/2 -z-10"></div>
    <div class="absolute top-20 right-10 w-64 h-64 opacity-10 -z-10 hidden lg:block">
      <div class="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
    </div>
    <div class="absolute bottom-20 left-10 w-48 h-48 opacity-10 -z-10 hidden lg:block">
      <div class="w-full h-full rounded-full bg-gradient-to-br from-secondary/20 to-primary/20"></div>
    </div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <div class="mb-8">
        <p class="text-sm text-foreground/80 mb-4 tracking-wide uppercase">
          Web Application Development
        </p>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance text-foreground" style="line-height: 1.05;">
          The <span class="text-primary">Media Lounge</span>
        </h1>
        <p class="text-xl sm:text-2xl text-foreground/70 font-light mb-4">
          Custom web applications, built right.
        </p>
        <p class="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
          We build custom web applications for businesses that need something specific — internal tools,
          customer portals, booking systems, and dashboards. Designed well. Built to last.
        </p>
      </div>

      <div class="flex flex-row gap-4 justify-center items-center mt-12">
        <a
          href="#what-we-build"
          class="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          What we build
        </a>
        <a
          href="/#contact"
          class="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Start a project
        </a>
      </div>
    </div>
  </section>

  <!-- ── WHAT WE BUILD ── -->
  <section id="what-we-build" class="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">What We Build</h2>
      <p class="text-center text-muted-foreground mb-8 sm:mb-16 max-w-2xl mx-auto">
        Off-the-shelf software rarely fits your workflow perfectly. We build web applications
        tailored to how your business actually operates.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Internal Tools -->
        <div class="p-8 rounded-xl border border-border hover:border-primary transition-all bg-card hover:shadow-lg group">
          <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Internal Tools</h3>
          <p class="text-muted-foreground mb-4 leading-relaxed">
            Replace spreadsheets and manual processes with purpose-built tools your team will actually use.
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            {#each ['Stock & inventory management', 'Job & task tracking', 'Scheduling systems', 'Reporting & admin dashboards'] as item}
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Customer Portals -->
        <div class="p-8 rounded-xl border border-border hover:border-secondary transition-all bg-card hover:shadow-lg group">
          <div class="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Customer Portals</h3>
          <p class="text-muted-foreground mb-4 leading-relaxed">
            Give your customers a dedicated space to manage their account, bookings, orders, and documents.
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            {#each ['Online booking & reservations', 'Order tracking & history', 'Client document access', 'Self-service account management'] as item}
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Dashboards & Data -->
        <div class="p-8 rounded-xl border border-border hover:border-primary transition-all bg-card hover:shadow-lg group">
          <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3">Dashboards &amp; Data</h3>
          <p class="text-muted-foreground mb-4 leading-relaxed">
            Turn raw data into clear, actionable views built for the people who need to act on it.
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            {#each ['Sales & revenue dashboards', 'Operational KPI tracking', 'Live data visualisation', 'Custom reports & exports'] as item}
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {item}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ── HOW IT WORKS ── -->
  <section class="py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">How It Works</h2>
      <p class="text-center text-muted-foreground mb-8 sm:mb-16 max-w-2xl mx-auto">
        A clear process from first conversation to a live application — no surprises, no black boxes.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each [
          {
            num: '01',
            icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
            title: 'Discovery',
            body: "We talk through what you need, what problem it solves, and what success looks like. No jargon, just a clear conversation.",
            accent: 'primary',
          },
          {
            num: '02',
            icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            title: 'Design',
            body: 'Every screen is designed and approved before a line of code is written — so you know exactly what you\'re getting.',
            accent: 'secondary',
          },
          {
            num: '03',
            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
            title: 'Build',
            body: 'We develop using the right tools for your project, with regular check-ins throughout so nothing catches you off guard.',
            accent: 'primary',
          },
          {
            num: '04',
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            title: 'Launch & Support',
            body: 'We deploy, test, and hand over with full documentation. Ongoing support is available as your needs grow.',
            accent: 'secondary',
          },
        ] as step}
          <div class="p-8 rounded-xl border border-border transition-all bg-card hover:shadow-lg group cursor-default
            {step.accent === 'secondary' ? 'hover:border-secondary' : 'hover:border-primary'}">
            <div class="flex items-start justify-between mb-6">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all
                {step.accent === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary' : 'bg-primary/10 group-hover:bg-primary'}">
                <svg class="w-6 h-6 transition-colors
                  {step.accent === 'secondary' ? 'text-secondary group-hover:text-secondary-foreground' : 'text-primary group-hover:text-primary-foreground'}"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{step.icon}"/>
                </svg>
              </div>
              <span class="text-4xl font-black text-border leading-none">{step.num}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{step.title}</h3>
            <p class="text-muted-foreground leading-relaxed">{step.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ── WHY MEDIA LOUNGE ── -->
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Why the Media Lounge</h2>
      <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Built around your business, not a generic template.
      </p>

      <div class="space-y-6">
        {#each [
          { title: 'Design before development', body: 'Every project starts with design. You see and approve every screen before we write a single line of code — no guessing what the end result will look like.', accent: 'primary' },
          { title: 'Built by a designer and developer', body: 'Because design and development sit under the same roof, your application looks as good as it works. No handoff friction, no lost context.', accent: 'secondary' },
          { title: 'Scoped to fit your budget', body: 'We scope every project around what you actually need. No overselling, no bloat — just the right solution for the problem at hand.', accent: 'primary' },
          { title: 'Yours to own', body: 'You own the code, the data, and the infrastructure. Full documentation and handover as standard, with support options if you need them ongoing.', accent: 'secondary' },
        ] as reason, i}
          <div class="flex gap-6 p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all group
            {reason.accent === 'secondary' ? 'hover:border-secondary' : 'hover:border-primary'}">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all
              {reason.accent === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary' : 'bg-primary/10 group-hover:bg-primary'}">
              <span class="text-sm font-bold transition-colors
                {reason.accent === 'secondary' ? 'text-secondary group-hover:text-secondary-foreground' : 'text-primary group-hover:text-primary-foreground'}">0{i + 1}</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">{reason.title}</h3>
              <p class="text-muted-foreground leading-relaxed">{reason.body}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ── CTA ── -->
  <section class="py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">Got an app idea?</h2>
      <p class="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
        Tell us what you're trying to solve. We'll scope it out and let you know what's possible.
      </p>
      <a
        href="/#contact"
        class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        Start a conversation
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </section>

  <!-- ── FOOTER ── -->
  <footer class="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex items-center gap-4">
        <p class="text-sm text-muted-foreground">© 2026 The Media Lounge Ltd. All rights reserved.</p>
      </div>
      <div class="flex gap-6">
        <a href="/privacy-policy" class="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
        <a href="/terms-of-service" class="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .gradient-bg {
    background: linear-gradient(-45deg,
      rgba(46, 138, 169, 0.4),
      rgba(190, 105, 40, 0.35),
      rgba(46, 138, 169, 0.3),
      rgba(190, 105, 40, 0.25),
      rgba(46, 138, 169, 0.35),
      rgba(190, 105, 40, 0.4),
      rgba(46, 138, 169, 0.32),
      rgba(190, 105, 40, 0.28),
      rgba(46, 138, 169, 0.38),
      rgba(190, 105, 40, 0.33)
    );
    background-size: 800% 800%;
    animation: gradientShift 30s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    25%  { background-position: 100% 50%; }
    50%  { background-position: 100% 100%; }
    75%  { background-position: 0% 100%; }
    100% { background-position: 0% 50%; }
  }
</style>
