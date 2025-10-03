<script>
  let formData = $state({ name: '', email: '', message: '' });
  
  let isSubmitting = $state(false);
  let submitStatus = $state('');
  let errorMessage = $state('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    submitStatus = '';
    errorMessage = '';
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        submitStatus = 'success';
        // Reset form
        formData = { name: '', email: '', message: '' };
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          submitStatus = '';
        }, 5000);
      } else {
        submitStatus = 'error';
        errorMessage = result.error || 'Failed to send message. Please try again.';
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          submitStatus = '';
          errorMessage = '';
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      submitStatus = 'error';
      errorMessage = 'Network error. Please check your connection and try again.';
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        submitStatus = '';
        errorMessage = '';
      }, 5000);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="py-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-center">Let's Work Together</h2>
    <p class="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
      Have a project in mind? Let's discuss how we can help bring your vision to life.
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
            class="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <span class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            {:else}
              Send Message
            {/if}
          </button>
          
          {#if submitStatus === 'success'}
            <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-sm text-green-800 font-medium">Message sent successfully!</p>
              </div>
              <p class="text-sm text-green-700 mt-1">I'll get back to you within 24 hours. You should also receive a confirmation email shortly.</p>
            </div>
          {/if}
          
          {#if submitStatus === 'error'}
            <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-red-800 font-medium">Failed to send message</p>
              </div>
              <p class="text-sm text-red-700 mt-1">{errorMessage}</p>
            </div>
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
            johnwatson@seemus.co.uk
          </a>
          
          <a 
            href="https://www.linkedin.com/in/john-watson-1666471/" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
     
        </div>
        
        <div class="pt-8 border-t border-border">
          <p class="text-sm text-muted-foreground">
            Based in London, UK
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
