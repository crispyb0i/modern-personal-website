# Resend Email Setup Instructions

## Prerequisites
- Resend account created (✅ you mentioned you've done this)

## Setup Steps

### 1. Get Your Resend API Key
1. Go to [Resend API Keys](https://resend.com/api-keys)
2. Create a new API key
3. Copy the API key (starts with `re_`)

### 2. Add API Key to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (paste the key you copied)
   - **Environment**: Select all environments (Production, Preview, Development)
4. Click **Save**

### 3. Update Email Configuration (Optional)
The API route is currently configured to:
- **From**: `onboarding@resend.dev` (default Resend email for testing)
- **To**: `dvdshn@proton.me` (your email)

To use your own domain:
1. Go to [Resend Domains](https://resend.com/domains)
2. Add and verify your domain
3. Update the `from` field in `/src/app/api/send-email/route.ts`:
   ```typescript
   from: 'Contact Form <noreply@yourdomain.com>',
   ```

### 4. Test the Contact Form
1. Deploy your changes to Vercel
2. Visit your website
3. Fill out the contact form
4. Check your email inbox for the message

## Local Development
For local development, create a `.env.local` file in the root directory:
```
RESEND_API_KEY=re_your_api_key_here
```

**Note**: Never commit `.env.local` to git (it should already be in `.gitignore`)

## Troubleshooting
- If emails aren't sending, check the Vercel function logs
- Make sure the API key is set in all environments (Production, Preview, Development)
- Verify your Resend account has sufficient credits/quota

