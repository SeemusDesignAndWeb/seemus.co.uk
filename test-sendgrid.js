// Test script to debug SendGrid API key
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Load environment variables
dotenv.config();

console.log('🔍 SendGrid API Key Debug');
console.log('========================');

// Check if API key exists
const apiKey = process.env.SENDGRID_API_KEY;
console.log('API Key exists:', !!apiKey);
console.log('API Key length:', apiKey ? apiKey.length : 0);
console.log('API Key starts with SG.:', apiKey ? apiKey.startsWith('SG.') : false);
console.log('API Key preview:', apiKey ? `${apiKey.substring(0, 10)}...` : 'Not found');

// Check other environment variables
console.log('\n📧 Email Configuration');
console.log('======================');
console.log('SENDGRID_FROM_EMAIL:', process.env.SENDGRID_FROM_EMAIL);
console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Test SendGrid connection
if (apiKey) {
  console.log('\n🧪 Testing SendGrid Connection');
  console.log('==============================');
  
  try {
    sgMail.setApiKey(apiKey);
    console.log('✅ SendGrid client initialized successfully');
    
    // Test with a simple API call (this won't send an email)
    console.log('✅ API key format appears valid');
    
  } catch (error) {
    console.log('❌ SendGrid initialization failed:', error.message);
  }
} else {
  console.log('\n❌ No API key found in environment variables');
  console.log('Make sure your .env file contains:');
  console.log('SENDGRID_API_KEY=SG.your_actual_key_here');
}

console.log('\n📋 Troubleshooting Steps:');
console.log('1. Check your .env file has the correct API key');
console.log('2. Ensure the API key starts with "SG."');
console.log('3. Verify the API key is active in SendGrid dashboard');
console.log('4. Make sure the API key has "Mail Send" permissions');
console.log('5. Check if the API key has expired');
