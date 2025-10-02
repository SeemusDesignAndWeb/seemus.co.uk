<script>
  import Hero from '$lib/components/hero.svelte';
  import About from '$lib/components/about.svelte';
  import Services from '$lib/components/services.svelte';
  import Testimonials from '$lib/components/testimonials.svelte';
  import Contact from '$lib/components/contact.svelte';
  import Navigation from '$lib/components/navigation.svelte';
</script>

<div class="min-h-screen">
  <Navigation />
  <Hero />
  <About />
  <Services />
  <Testimonials />
  <Contact />
</div>
