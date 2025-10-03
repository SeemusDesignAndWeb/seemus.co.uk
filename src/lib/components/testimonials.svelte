<script>
  import testimonialsData from '../data/testimonials.json';
  import { onMount, onDestroy } from 'svelte';
  
  let currentIndex = 0;
  let autoScrollInterval;
  let isAutoScrolling = true;
  let isTransitioning = false;
  let screenWidth = 1024; // Default to desktop size
  
  // Helper function to generate initials from name
  function generateInitials(name) {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
  
  // Helper function to get gradient class
  function getGradientClass(gradient) {
    return `bg-gradient-to-br ${gradient}`;
  }
  
  // Get visible testimonials (always 3)
  function getVisibleTestimonials() {
    const testimonials = testimonialsData.testimonials;
    const visible = [];
    
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    
    return visible;
  }
  
  // Get all testimonials for smooth sliding
  function getAllTestimonials() {
    return testimonialsData.testimonials;
  }

  // Get the number of visible cards based on screen size
  function getVisibleCardsCount() {
    if (screenWidth < 640) return 1; // Mobile: 1 card
    if (screenWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  }
  
  // Navigation functions with smooth transitions
  function nextTestimonial() {
    if (isTransitioning) return;
    isTransitioning = true;
    const maxIndex = testimonialsData.testimonials.length - getVisibleCardsCount();
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setTimeout(() => isTransitioning = false, 500);
  }

  function prevTestimonial() {
    if (isTransitioning) return;
    isTransitioning = true;
    const maxIndex = testimonialsData.testimonials.length - getVisibleCardsCount();
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    setTimeout(() => isTransitioning = false, 500);
  }
  
  function goToTestimonial(index) {
    if (isTransitioning || index === currentIndex) return;
    isTransitioning = true;
    currentIndex = index;
    setTimeout(() => isTransitioning = false, 500);
  }
  
  // Auto-scroll functionality
  function startAutoScroll() {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
      if (isAutoScrolling) {
        nextTestimonial();
      }
    }, 5000); // Change every 5 seconds
  }
  
  function stopAutoScroll() {
    isAutoScrolling = false;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
  }
  
  function resumeAutoScroll() {
    isAutoScrolling = true;
    startAutoScroll();
  }
  
  onMount(() => {
    // Set initial screen width
    screenWidth = window.innerWidth;
    
    // Add resize listener
    const handleResize = () => {
      screenWidth = window.innerWidth;
      // Reset current index if it's beyond the new maximum
      const maxIndex = testimonialsData.testimonials.length - getVisibleCardsCount();
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    startAutoScroll();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  onDestroy(() => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
  });
</script>

<section id="testimonials" class="py-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">What Our Customers Say</h2>
    <p class="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
      Don't just take our word for it
    </p>
    
    <!-- Carousel Container -->
    <div class="relative">
      <!-- Navigation Buttons -->
      <button 
        on:click={prevTestimonial}
        on:mouseenter={stopAutoScroll}
        on:mouseleave={resumeAutoScroll}
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-border hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Previous testimonial"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        on:click={nextTestimonial}
        on:mouseenter={stopAutoScroll}
        on:mouseleave={resumeAutoScroll}
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-border hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        aria-label="Next testimonial"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Testimonials Carousel with smooth scrolling -->
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          style="transform: translateX(-{currentIndex * (100 / getVisibleCardsCount())}%)"
        >
          {#each getAllTestimonials() as testimonial, index}
            <div class="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
              <div class="p-6 sm:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div class="flex items-center gap-1 mb-4">
                  {#each Array(testimonial.rating) as _}
                    <svg class="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  {/each}
                </div>
                <p class="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full {getGradientClass(testimonial.gradient)} flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    {testimonial.initials || generateInitials(testimonial.name)}
                  </div>
                  <div>
                    <p class="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p class="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Dot Indicators -->
      <div class="flex justify-center mt-8 gap-2">
        {#each testimonialsData.testimonials as _, index}
          <button
            on:click={() => goToTestimonial(index)}
            on:mouseenter={stopAutoScroll}
            on:mouseleave={resumeAutoScroll}
            class="w-3 h-3 rounded-full transition-all duration-200 {index === currentIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/60'}"
            aria-label="Go to testimonial {index + 1}"
          ></button>
        {/each}
      </div>
      
      <!-- Auto-scroll indicator -->
      <div class="flex justify-center mt-4">
        <button
          on:click={isAutoScrolling ? stopAutoScroll : resumeAutoScroll}
          class="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          {#if isAutoScrolling}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
            Pause
          {:else}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          {/if}
        </button>
      </div>
    </div>
  </div>
</section>
