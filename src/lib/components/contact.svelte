<script>
  let formData = $state({ name: '', email: '', message: '' });
  
  let isSubmitting = $state(false);
  let submitStatus = $state('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('[v0] Form submitted:', formData);
    submitStatus = 'success';
    isSubmitting = false;
    
    // Reset form
    formData = { name: '', email: '', message: '' };
    
    setTimeout(() => {
      submitStatus = '';
    }, 3000);
  }
</script>

<section id="contact" class="py-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
    <p class="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
      Have a project in mind? Let's discuss how I can help bring your vision to life.
    </p>
    
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div>
        <form onsubmit={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {#if submitStatus === 'success'}
            <p class="text-sm text-primary text-center">Message sent successfully! I'll get back to you soon.</p>
          {/if}
        </form>
      </div>
      
      <!-- Contact Info -->
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Get In Touch</h3>
          <p class="text-muted-foreground leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div class="space-y-4">
          <a 
            href="mailto:hello@seemus.co.uk" 
            class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@seemus.co.uk
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        
        <div class="pt-8 border-t border-border">
          <p class="text-sm text-muted-foreground">
            Based in the UK, working with clients worldwide
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
  <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
    <p class="text-sm text-muted-foreground">
      © 2025 Seemus. All rights reserved.
    </p>
    <div class="flex gap-6">
      <a href="/privacy-policy" class="text-sm text-muted-foreground hover:text-primary transition-colors">
        Privacy Policy
      </a>
      <a href="/terms-of-service" class="text-sm text-muted-foreground hover:text-primary transition-colors">
        Terms of Service
      </a>
    </div>
  </div>
</footer>
