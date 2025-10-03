// SEO Configuration for Seemus.co.uk
export const seoConfig = {
  site: {
    name: 'Seemus',
    url: 'https://seemus.co.uk',
    description: 'Full-stack designer and developer specialising in web design, development, digital marketing, and custom apparel printing. 25+ years experience creating digital experiences that convert.',
    keywords: [
      'web design',
      'web development', 
      'digital marketing',
      'custom apparel',
      'screen printing',
      'embroidery',
      'brand design',
      'UI/UX design',
      'React development',
      'SvelteKit',
      'SEO optimisation',
      'conversion optimisation',
      'full-stack developer',
      'graphic design',
      'print design',
      'merchandise design',
      'business branding',
      'website development',
      'digital strategy',
      'content marketing'
    ],
    author: 'John Watson',
    locale: 'en_GB',
    type: 'website'
  },
  
  pages: {
    home: {
      title: 'Seemus - Web Design, Development & Custom Apparel | Digital Solutions That Convert',
      description: 'Professional web design, development, digital marketing, and custom apparel services. 25+ years experience creating beautiful, functional websites and branded merchandise that drive business results.',
      keywords: [
        'web design services',
        'website development',
        'custom website design',
        'digital marketing agency',
        'custom t-shirt printing',
        'screen printing services',
        'embroidery services',
        'brand identity design',
        'UI/UX design',
        'React development',
        'SvelteKit development',
        'SEO services',
        'conversion optimisation',
        'full-stack developer',
        'graphic design services',
        'print design',
        'merchandise design',
        'business branding',
        'professional web development',
        'digital strategy consulting'
      ],
      canonical: 'https://seemus.co.uk',
      ogImage: 'https://seemus.co.uk/og-image.jpg'
    }
  },

  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Seemus",
      "url": "https://seemus.co.uk",
      "logo": "https://seemus.co.uk/logo.png",
      "description": "Full-stack designer and developer specialising in web design, development, digital marketing, and custom apparel printing.",
      "foundingDate": "1999",
      "founder": {
        "@type": "Person",
        "name": "John Watson"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://seemus.co.uk#contact"
      },
      "sameAs": []
    },

    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "John Watson",
      "jobTitle": "Full-Stack Designer & Developer",
      "description": "Multi-disciplinary designer and developer with 25+ years experience in web design, development, digital marketing, and print production.",
      "url": "https://seemus.co.uk",
      "knowsAbout": [
        "Web Design",
        "Web Development", 
        "Digital Marketing",
        "Custom Apparel Design",
        "Screen Printing",
        "Embroidery",
        "Brand Identity",
        "UI/UX Design",
        "React Development",
        "SvelteKit",
        "SEO Optimization",
        "Print Design"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Web Designer and Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      }
    },

    services: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design and Development Services",
      "description": "Comprehensive digital solutions including web design, development, digital marketing, and custom apparel printing.",
      "provider": {
        "@type": "Organization",
        "name": "Seemus",
        "url": "https://seemus.co.uk"
      },
      "serviceType": "Web Design and Development",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Design",
              "description": "UI/UX design, brand identity, prototyping, and design systems"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Full-stack development, React & SvelteKit, API integration, and performance optimisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Digital Marketing",
              "description": "SEO optimisation, content strategy, analytics & tracking, and conversion optimisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Apparel",
              "description": "Custom t-shirt design, screen printing, embroidery services, and merchandise design"
            }
          }
        ]
      }
    },

    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Seemus",
      "url": "https://seemus.co.uk",
      "description": "Professional web design, development, digital marketing, and custom apparel services.",
      "publisher": {
        "@type": "Organization",
        "name": "Seemus"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://seemus.co.uk#contact",
        "query-input": "required name=search_term_string"
      }
    }
  }
};

// Helper function to generate meta tags
export function generateMetaTags(page = 'home') {
  const config = seoConfig.pages[page] || seoConfig.pages.home;
  const site = seoConfig.site;
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    canonical: config.canonical,
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: config.ogImage,
    ogUrl: config.canonical,
    ogType: 'website',
    ogSiteName: site.name,
    twitterCard: 'summary_large_image',
    twitterTitle: config.title,
    twitterDescription: config.description,
    twitterImage: config.ogImage,
    author: site.author,
    robots: 'index, follow',
    language: site.locale
  };
}

// Helper function to generate structured data JSON-LD
export function generateStructuredData() {
  return {
    organization: seoConfig.structuredData.organization,
    person: seoConfig.structuredData.person,
    services: seoConfig.structuredData.services,
    website: seoConfig.structuredData.website
  };
}
