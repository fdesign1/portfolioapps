# EmailJS Setup & Netlify Deployment Guide

## 🚀 **Step 1: Set Up EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 📧 **Step 2: Configure Email Service**

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Copy your Service ID** (e.g., `service_abc123`)

## 📝 **Step 3: Create Email Template**

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Design your email template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Message: {{message}}
   ```
4. **Copy your Template ID** (e.g., `template_xyz789`)

## 🔑 **Step 4: Get Your Public Key**

1. Go to **"Account" → "API Keys"**
2. **Copy your Public Key** (e.g., `user_def456`)

## ⚙️ **Step 5: Configure Environment Variables**

1. **For Local Development:**
   - Edit `client/.env.local`
   - Replace the placeholder values:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_def456
   ```

2. **For Netlify Deployment:**
   - Go to your Netlify dashboard
   - Navigate to **"Site settings" → "Environment variables"**
   - Add these variables:
     - `VITE_EMAILJS_SERVICE_ID` = `service_abc123`
     - `VITE_EMAILJS_TEMPLATE_ID` = `template_xyz789`
     - `VITE_EMAILJS_PUBLIC_KEY` = `user_def456`

## 🌐 **Step 6: Deploy to Netlify**

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## ✅ **What's Already Done:**

- ✅ EmailJS package installed
- ✅ ContactForm component updated
- ✅ Environment variables configured
- ✅ TypeScript types added
- ✅ Error handling implemented
- ✅ `.env.local` added to `.gitignore`

## 🧪 **Testing:**

1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Check your email inbox
4. Check browser console for success/error messages

## 🔒 **Security Notes:**

- ✅ `.env.local` is in `.gitignore` (won't be committed)
- ✅ Environment variables are prefixed with `VITE_` (required for Vite)
- ✅ Credentials are not hardcoded in the source code

## 🆘 **Troubleshooting:**

- **"EmailJS configuration is missing"**: Check your `.env.local` file
- **"Failed to send email"**: Verify your EmailJS credentials
- **Build errors**: Make sure all environment variables are set in Netlify

Your contact form is now ready to send real emails! 🎉
