// Test script to debug SendGrid email sending
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Load environment variables
dotenv.config();

console.log('🧪 SendGrid Email Send Test');
console.log('===========================');

const apiKey = process.env.SENDGRID_API_KEY;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;
const contactEmail = process.env.CONTACT_EMAIL;

console.log('From Email:', fromEmail);
console.log('Contact Email:', contactEmail);

if (!apiKey) {
  console.log('❌ No API key found');
  process.exit(1);
}

sgMail.setApiKey(apiKey);

// Test email
const testMsg = {
  to: contactEmail, // Send to yourself for testing
  from: fromEmail,
  subject: 'SendGrid Test Email',
  text: 'This is a test email to verify SendGrid is working correctly.',
  html: '<p>This is a test email to verify SendGrid is working correctly.</p>'
};

console.log('\n📧 Attempting to send test email...');
console.log('From:', fromEmail);
console.log('To:', contactEmail);

try {
  await sgMail.send(testMsg);
  console.log('✅ Test email sent successfully!');
  console.log('Check your inbox for the test email.');
} catch (error) {
  console.log('❌ Failed to send test email');
  console.log('Error:', error.message);
  
  if (error.response) {
    console.log('\n📋 SendGrid Response Details:');
    console.log('Status Code:', error.response.status);
    console.log('Response Body:', JSON.stringify(error.response.body, null, 2));
    
    // Check for specific error types
    if (error.response.body && error.response.body.errors) {
      error.response.body.errors.forEach((err, index) => {
        console.log(`\nError ${index + 1}:`);
        console.log('Message:', err.message);
        console.log('Field:', err.field);
        console.log('Help:', err.help);
      });
    }
  }
  
  console.log('\n🔧 Common Solutions:');
  console.log('1. Verify your sender email in SendGrid dashboard');
  console.log('2. Check API key has "Mail Send" permissions');
  console.log('3. Ensure sender email is verified (check email for verification link)');
  console.log('4. Try using a different verified sender email');
  console.log('5. Check SendGrid account status (not suspended)');
}
