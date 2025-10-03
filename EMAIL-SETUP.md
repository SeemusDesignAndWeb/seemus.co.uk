# Email Setup with SendGrid

This document explains how to set up and use the SendGrid email functionality for the Seemus website contact form.

## 🚀 Quick Setup

### 1. Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/) and create a free account
2. Verify your email address
3. Complete the account setup process

### 2. Get API Key
1. Log into your SendGrid dashboard
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Choose **Restricted Access** and give it **Mail Send** permissions
5. Copy the generated API key (you won't see it again!)

### 3. Verify Sender Email
1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Add your email address (e.g., `noreply@seemus.co.uk`)
4. Check your email and click the verification link

### 4. Environment Variables
Create a `.env` file in your project root with:

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_actual_api_key_here
SENDGRID_FROM_EMAIL=noreply@seemus.co.uk
CONTACT_EMAIL=hello@seemus.co.uk
NODE_ENV=development
```

## 📧 How It Works

### Contact Form Flow
1. **User submits form** → Form data sent to `/api/send-email`
2. **Server validates** → Checks required fields and email format
3. **SendGrid sends email** → Two emails are sent:
   - **Notification email** to you (hello@seemus.co.uk)
   - **Confirmation email** to the user

### Email Templates

#### Notification Email (to you)
- **Subject**: "New Contact Form Submission from [Name]"
- **Content**: Formatted HTML with user details
- **Reply-To**: Set to user's email for easy responses

#### Confirmation Email (to user)
- **Subject**: "Thank you for contacting Seemus"
- **Content**: Professional thank you message with their original message
- **Branding**: Matches your website design

## 🛠️ API Endpoint

### POST `/api/send-email`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message",
  "details": "Additional details in development mode"
}
```

## 🔧 Configuration Options

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `SENDGRID_API_KEY` | Your SendGrid API key | Yes | - |
| `SENDGRID_FROM_EMAIL` | Verified sender email | Yes | `noreply@seemus.co.uk` |
| `CONTACT_EMAIL` | Where to send notifications | Yes | `hello@seemus.co.uk` |
| `NODE_ENV` | Environment mode | No | `development` |

### Customization

#### Email Templates
Edit the HTML templates in `/src/routes/api/send-email/+server.js`:

```javascript
// Notification email template
const msg = {
  to: process.env.CONTACT_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `New Contact Form Submission from ${name}`,
  html: `<!-- Your custom HTML template -->`
};

// Confirmation email template
const confirmationMsg = {
  to: email,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: 'Thank you for contacting Seemus',
  html: `<!-- Your custom HTML template -->`
};
```

#### Form Validation
Modify validation rules in the API endpoint:

```javascript
// Add custom validation
if (message.length < 10) {
  return json(
    { error: 'Message must be at least 10 characters long' },
    { status: 400 }
  );
}
```

## 🚨 Error Handling

### Common Issues

#### 1. "Invalid API Key"
- Check your API key is correct
- Ensure the key has Mail Send permissions
- Verify the key is in your `.env` file

#### 2. "Sender not verified"
- Verify your sender email in SendGrid dashboard
- Check the email address matches `SENDGRID_FROM_EMAIL`

#### 3. "Rate limit exceeded"
- SendGrid free tier has limits
- Consider upgrading for higher limits
- Implement rate limiting in your app

#### 4. "Email not delivered"
- Check spam folders
- Verify recipient email addresses
- Check SendGrid activity feed

### Debugging

Enable detailed error messages in development:

```javascript
// In your API endpoint
if (error.response) {
  console.error('SendGrid response error:', error.response.body);
  return json(
    { 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.response.body : undefined
    },
    { status: 500 }
  );
}
```

## 📊 Monitoring

### SendGrid Dashboard
- **Activity Feed**: See all sent emails
- **Statistics**: Track delivery rates
- **Suppressions**: Manage bounced emails

### Logs
Check your server logs for:
- API key issues
- Validation errors
- SendGrid responses

## 🔒 Security

### Best Practices
1. **Never commit API keys** to version control
2. **Use environment variables** for sensitive data
3. **Validate all inputs** on the server
4. **Rate limit** form submissions
5. **Use HTTPS** in production

### Rate Limiting
Consider adding rate limiting to prevent spam:

```javascript
// Simple rate limiting example
const rateLimit = new Map();

export async function POST({ request, getClientAddress }) {
  const clientIP = getClientAddress();
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (rateLimit.has(clientIP)) {
    const requests = rateLimit.get(clientIP);
    const recentRequests = requests.filter(time => now - time < windowMs);
    
    if (recentRequests.length >= maxRequests) {
      return json({ error: 'Too many requests' }, { status: 429 });
    }
    
    recentRequests.push(now);
    rateLimit.set(clientIP, recentRequests);
  } else {
    rateLimit.set(clientIP, [now]);
  }
  
  // Continue with email sending...
}
```

## 🚀 Production Deployment

### Environment Setup
1. Set environment variables in your hosting platform
2. Ensure `NODE_ENV=production`
3. Verify all email addresses are working

### Testing
1. Test the contact form
2. Check both notification and confirmation emails
3. Verify email formatting and links
4. Test error handling

## 📞 Support

### SendGrid Resources
- [SendGrid Documentation](https://docs.sendgrid.com/)
- [API Reference](https://docs.sendgrid.com/api-reference/)
- [Support Center](https://support.sendgrid.com/)

### Common Commands

```bash
# Install SendGrid package
npm install @sendgrid/mail

# Test email sending
curl -X POST http://localhost:5173/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

---

*This email system is production-ready and includes proper error handling, validation, and user feedback.*
