# Resend Email Setup

## Environment Variables Required

Add these to your `.env` file:

```env
# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Seemus <noreply@seemus.co.uk>
CONTACT_EMAIL=hello@seemus.co.uk

# Environment
NODE_ENV=development
```

## Setup Steps

1. **Sign up for Resend** at https://resend.com
2. **Get your API key** from the Resend dashboard
3. **Add your domain** to Resend (or use their default domain for testing)
4. **Update your .env file** with the API key
5. **Test the contact form** to ensure emails are working

## Benefits of Resend

- ✅ Better deliverability than SendGrid
- ✅ 3,000 free emails per month
- ✅ Developer-friendly API
- ✅ Excellent documentation
- ✅ No complex domain verification for testing

## Migration from SendGrid

The code has been updated to use Resend instead of SendGrid. The API endpoint remains the same (`/api/send-email`), so no frontend changes are needed.

## Testing

Once you've added your Resend API key to the `.env` file, test the contact form to ensure emails are being sent successfully.
