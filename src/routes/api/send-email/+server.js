import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import { env } from '$env/dynamic/private';

// Initialize SendGrid with API key from environment variables
sgMail.setApiKey(env.SENDGRID_API_KEY);

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return json(
        { error: 'Missing required fields: name, email, and message are required' },
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

    // Create email message
    const msg = {
      to: env.CONTACT_EMAIL || 'hello@seemus.co.uk', // Your email address
      from: env.SENDGRID_FROM_EMAIL || 'noreply@seemus.co.uk', // Verified sender email
      replyTo: email, // Allow replies to go to the sender
      subject: `New Contact Form Submission from ${name}`,
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
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2e8aa9;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 14px;">
            <p>This message was sent from the contact form on <a href="https://seemus.co.uk">seemus.co.uk</a></p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `
    };

    // Send email
    await sgMail.send(msg);

    // Send confirmation email to the sender (optional)
    const confirmationMsg = {
      to: email,
      from: env.SENDGRID_FROM_EMAIL || 'johnwatson@seemus.co.uk',
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
            <p>Hi ${name},</p>
            
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 4px; border-left: 4px solid #2e8aa9; margin: 20px 0;">
              <p><strong>Your message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
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
    };

    // Send confirmation email
    await sgMail.send(confirmationMsg);

    return json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('SendGrid error:', error);
    
    // Handle specific SendGrid errors
    if (error.response) {
      console.error('SendGrid response error:', error.response.body);
      return json(
        { 
          error: 'Failed to send email. Please try again later.',
          details: env.NODE_ENV === 'development' ? error.response.body : undefined
        },
        { status: 500 }
      );
    }

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
