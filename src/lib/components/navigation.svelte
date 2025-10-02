<script>
  import SeemusLogo from './SeemusLogo.svelte';
  
  let isMenuOpen = $state(false);
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <button 
        onclick={() => scrollToSection('hero')}
        class="hover:opacity-80 transition-opacity"
      >
        <SeemusLogo size="h-12 w-auto" />
      </button>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <button onclick={() => scrollToSection('about')} class="text-sm hover:text-primary transition-colors">
          About
        </button>
        <button onclick={() => scrollToSection('services')} class="text-sm hover:text-primary transition-colors">
          Services
        </button>
        <button onclick={() => scrollToSection('testimonials')} class="text-sm hover:text-primary transition-colors">
          Testimonials
        </button>
        <button onclick={() => scrollToSection('contact')} class="text-sm hover:text-primary transition-colors">
          Contact
        </button>
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
    <div class="md:hidden border-t border-border bg-background">
      <div class="px-4 py-4 space-y-3">
        <button 
          onclick={() => scrollToSection('about')} 
          class="block w-full text-left py-2 hover:text-primary transition-colors"
        >
          About
        </button>
        <button 
          onclick={() => scrollToSection('services')} 
          class="block w-full text-left py-2 hover:text-primary transition-colors"
        >
          Services
        </button>
        <button 
          onclick={() => scrollToSection('testimonials')} 
          class="block w-full text-left py-2 hover:text-primary transition-colors"
        >
          Work
        </button>
        <button 
          onclick={() => scrollToSection('contact')} 
          class="block w-full text-left py-2 hover:text-primary transition-colors"
        >
          Contact
        </button>
      </div>
    </div>
  {/if}
</nav>
