import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

// Initialize Resend with API key from environment variables
const resend = new Resend(env.RESEND_API_KEY);

// HTML escape function to prevent XSS
function escapeHtml(text) {
  if (typeof text !== 'string') {
    text = String(text || '');
  }
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// In-memory rate limiting store (in production, use Redis or a database)
const rateLimitStore = new Map();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;
  for (const [key, data] of rateLimitStore.entries()) {
    if (data.lastSubmission < oneHourAgo) {
      rateLimitStore.delete(key);
    }
  }
}, 10 * 60 * 1000);

// Spam patterns to detect
const spamPatterns = [
  /\b(viagra|cialis|casino|poker|loan|mortgage|debt|free money|make money|get rich|click here|buy now|limited time)\b/gi,
  /(https?:\/\/){2,}/gi, // Multiple URLs
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g // Multiple email addresses
];

// Known spam email domains (common disposable email domains)
const spamDomains = [
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  '10minutemail.com',
  'throwaway.email',
  'temp-mail.org'
];

// Get client IP address
function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0]?.trim() || realIP || 'unknown';
}

// Check for spam content
function checkSpamContent(text) {
  if (!text) return false;
  
  const lowerText = text.toLowerCase();
  
  // Check for spam patterns
  for (const pattern of spamPatterns) {
    if (pattern.test(text)) {
      return true;
    }
  }
  
  // Check for excessive links (more than 3 URLs)
  const urlMatches = text.match(/https?:\/\/[^\s]+/gi);
  if (urlMatches && urlMatches.length > 3) {
    return true;
  }
  
  // Check for excessive email addresses (more than 2)
  const emailMatches = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  if (emailMatches && emailMatches.length > 2) {
    return true;
  }
  
  // Check for all caps (more than 50% of message)
  const capsMatches = text.match(/[A-Z]/g);
  const totalLetters = text.match(/[A-Za-z]/g);
  if (capsMatches && totalLetters && capsMatches.length / totalLetters.length > 0.5 && text.length > 20) {
    return true;
  }
  
  return false;
}

// Rate limiting check
function checkRateLimit(ip, email) {
  const now = Date.now();
  const ipKey = `ip:${ip}`;
  const emailKey = `email:${email.toLowerCase()}`;
  
  // Check IP rate limit (max 3 submissions per hour)
  const ipData = rateLimitStore.get(ipKey);
  if (ipData) {
    const timeSinceLastSubmission = now - ipData.lastSubmission;
    if (timeSinceLastSubmission < 60 * 60 * 1000) { // 1 hour
      if (ipData.count >= 3) {
        return { allowed: false, reason: 'Too many submissions from this IP. Please try again later.' };
      }
      ipData.count++;
      ipData.lastSubmission = now;
    } else {
      rateLimitStore.set(ipKey, { count: 1, lastSubmission: now });
    }
  } else {
    rateLimitStore.set(ipKey, { count: 1, lastSubmission: now });
  }
  
  // Check email rate limit (max 2 submissions per hour)
  const emailData = rateLimitStore.get(emailKey);
  if (emailData) {
    const timeSinceLastSubmission = now - emailData.lastSubmission;
    if (timeSinceLastSubmission < 60 * 60 * 1000) { // 1 hour
      if (emailData.count >= 2) {
        return { allowed: false, reason: 'Too many submissions from this email. Please try again later.' };
      }
      emailData.count++;
      emailData.lastSubmission = now;
    } else {
      rateLimitStore.set(emailKey, { count: 1, lastSubmission: now });
    }
  } else {
    rateLimitStore.set(emailKey, { count: 1, lastSubmission: now });
  }
  
  return { allowed: true };
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const clientIP = getClientIP(request);
    
    // Log received data for debugging (only in development)
    if (env.NODE_ENV === 'development') {
      console.log('Received form data:', JSON.stringify(body, null, 2));
      console.log('Client IP:', clientIP);
    }
    
    // Extract and sanitize fields
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();
    const honeypot = String(body.honeypot || '').trim();
    const timeSpent = parseInt(body.timeSpent) || 0;

    // SPAM CHECK 1: Honeypot field should be empty
    if (honeypot) {
      console.warn('Spam detected: Honeypot field filled', { clientIP, email });
      return json(
        { error: 'Invalid submission. Please try again.' },
        { status: 400 }
      );
    }

    // SPAM CHECK 2: Form submitted too quickly (less than 3 seconds = likely bot)
    if (timeSpent < 3000) {
      console.warn('Spam detected: Form submitted too quickly', { clientIP, email, timeSpent });
      return json(
        { error: 'Please take your time filling out the form.' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100) {
      return json(
        { error: 'Name is too long. Please keep it under 100 characters.' },
        { status: 400 }
      );
    }
    
    if (message.length < 10) {
      return json(
        { error: 'Message is too short. Please provide more details.' },
        { status: 400 }
      );
    }
    
    if (message.length > 5000) {
      return json(
        { error: 'Message is too long. Please keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // SPAM CHECK 3: Check for spam email domains
    const emailDomain = email.split('@')[1]?.toLowerCase();
    if (emailDomain && spamDomains.includes(emailDomain)) {
      console.warn('Spam detected: Known spam email domain', { clientIP, email });
      return json(
        { error: 'Invalid email address. Please use a valid email.' },
        { status: 400 }
      );
    }

    // SPAM CHECK 4: Check for spam content in name, message
    if (checkSpamContent(name) || checkSpamContent(message)) {
      console.warn('Spam detected: Spam content detected', { clientIP, email });
      return json(
        { error: 'Your message contains content that appears to be spam. Please revise and try again.' },
        { status: 400 }
      );
    }

    // SPAM CHECK 5: Rate limiting
    const rateLimitCheck = checkRateLimit(clientIP, email);
    if (!rateLimitCheck.allowed) {
      console.warn('Spam detected: Rate limit exceeded', { clientIP, email });
      return json(
        { error: rateLimitCheck.reason },
        { status: 429 } // Too Many Requests
      );
    }

    // Create email message for the site owner
    const { data, error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL || 'Seemus <noreply@seemus.co.uk>',
      to: [env.CONTACT_EMAIL || 'hello@seemus.co.uk'],
      replyTo: email,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      text: `
New contact form submission from your website:

Name: ${name}
Email: ${email}
Message: ${message}

---
This message was sent from the contact form on seemus.co.uk
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2e8aa9; border-bottom: 2px solid #2e8aa9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2e8aa9;">
              ${escapeHtml(message).replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
            <p>This message was sent from the contact form on <a href="https://seemus.co.uk">seemus.co.uk</a></p>
            <p>Reply directly to this email to respond to ${escapeHtml(name)}.</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to the sender
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL || 'Seemus <noreply@seemus.co.uk>',
      to: [email],
      subject: 'Thank you for contacting Seemus',
      text: `
Hi ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Your message:
${message}

Best regards,
John Watson
Seemus - Web Design, Development, Marketing and Branding
https://seemus.co.uk
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2e8aa9; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Seemus!</h1>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Hi ${escapeHtml(name)},</p>
            
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 4px; border-left: 4px solid #2e8aa9; margin: 20px 0;">
              <p><strong>Your message:</strong></p>
              <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>I typically respond within 24 hours. If you have any urgent questions, feel free to reach out directly on LinkedIn.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p><strong>Best regards,</strong><br>
              John Watson<br>
              <strong>Seemus</strong> - Web Design, Development, Marketing and Branding<br>
              <a href="https://seemus.co.uk" style="color: #2e8aa9;">seemus.co.uk</a></p>
            </div>
          </div>
        </div>
      `
    });

    if (confirmationError) {
      console.error('Resend confirmation error:', confirmationError);
      // Don't fail the whole request if confirmation fails
    }

    return json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return json(
      { 
        error: 'Internal server error. Please try again later.',
        details: env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return json(
    { error: 'Method not allowed. Use POST to send emails.' },
    { status: 405 }
  );
}
