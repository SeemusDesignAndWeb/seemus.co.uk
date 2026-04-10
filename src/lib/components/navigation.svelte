<script>
  import SeemusLogo from './SeemusLogo.svelte';
  import { page } from '$app/stores';

  let isMenuOpen = $state(false);

  const isMediaLounge = $derived($page.url.pathname.startsWith('/media-lounge'));
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    } else {
      // On a sub-page — navigate home then scroll
      window.location.href = `/#${sectionId}`;
      isMenuOpen = false;
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      {#if isMediaLounge}
        <a href="/media-lounge" class="hover:opacity-80 transition-opacity">
          <img src="/images/TheMediaLounge.svg" alt="The Media Lounge" class="h-12 w-auto" />
        </a>
      {:else}
        <button
          onclick={() => scrollToSection('hero')}
          class="hover:opacity-80 transition-opacity cursor-pointer"
        >
          <SeemusLogo size="h-12 w-auto" />
        </button>
      {/if}
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#if isMediaLounge}
          <a href="https://seemus.co.uk" class="text-sm hover:text-primary transition-colors">
            Brand Services
          </a>
          <a href="/#contact" class="inline-flex items-center justify-center px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
            Contact Us
          </a>
        {:else}
          <button onclick={() => scrollToSection('about')} class="text-sm hover:text-primary transition-colors cursor-pointer">
            About
          </button>
          <button onclick={() => scrollToSection('services')} class="text-sm hover:text-primary transition-colors cursor-pointer">
            Services
          </button>
          <button onclick={() => scrollToSection('testimonials')} class="text-sm hover:text-primary transition-colors cursor-pointer">
            Testimonials
          </button>
          <button onclick={() => scrollToSection('contact')} class="text-sm hover:text-primary transition-colors cursor-pointer">
            Contact
          </button>
          <a href="/media-lounge" class="text-sm hover:text-secondary transition-colors font-medium">
            The Media Lounge
          </a>
        {/if}
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        onclick={() => isMenuOpen = !isMenuOpen}
        class="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden border-t border-border bg-background/80 backdrop-blur-md">
      <div class="px-4 py-4 space-y-3">
        {#if isMediaLounge}
          <a href="https://seemus.co.uk" class="block py-2 hover:text-primary transition-colors" onclick={() => isMenuOpen = false}>
            Brand Services
          </a>
          <a href="/#contact" class="block py-2 text-primary font-medium" onclick={() => isMenuOpen = false}>
            Contact Us
          </a>
        {:else}
          <button
            onclick={() => scrollToSection('about')}
            class="block w-full text-left py-2 hover:text-primary transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onclick={() => scrollToSection('services')}
            class="block w-full text-left py-2 hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onclick={() => scrollToSection('testimonials')}
            class="block w-full text-left py-2 hover:text-primary transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onclick={() => scrollToSection('contact')}
            class="block w-full text-left py-2 hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </button>
          <a href="/media-lounge" class="block py-2 hover:text-secondary transition-colors font-medium" onclick={() => isMenuOpen = false}>
            The Media Lounge
          </a>
        {/if}
      </div>
    </div>
  {/if}
</nav>
