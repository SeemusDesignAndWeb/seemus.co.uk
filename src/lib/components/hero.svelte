<section id="hero" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
  <!-- Animated CSS gradient background -->
  <div class="absolute inset-0 -z-20" style="
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
    background-size: 600% 600%;
    animation: gradientShift 8s ease-in-out infinite;
  "></div>
  
  <!-- Subtle overlay for better text readability -->
  <div class="absolute inset-0 bg-white/2 -z-10"></div>
  
  <!-- Added decorative elements using CSS gradients -->
  <div class="absolute top-20 right-10 w-64 h-64 opacity-10 -z-10 hidden lg:block">
    <div class="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
  </div>
  <div class="absolute bottom-20 left-10 w-48 h-48 opacity-10 -z-10 hidden lg:block">
    <div class="w-full h-full rounded-full bg-gradient-to-br from-secondary/20 to-primary/20"></div>
  </div>
  
  <div class="max-w-5xl mx-auto text-center relative z-10">
    <div class="mb-8">
      <p class="text-sm text-foreground/80 mb-4 tracking-wide uppercase">
        Design • Development • Marketing • Print
      </p>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
        Crafting Digital Experiences That <span class="text-primary">Convert</span>
      </h1>
      <p class="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto text-balance leading-relaxed">
        Full-stack designer and developer specialising in creating beautiful, functional websites, digital marketing, brand identity and custom apparel that drive results for your business.
      </p>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
      <a 
        href="#services" 
        class="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        Explore Services
      </a>
      <a 
        href="#contact" 
        class="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        Get In Touch
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes gradientShift {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
</style>
