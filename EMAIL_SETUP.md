# Email Setup Instructions

To enable email functionality for form submissions, you need to set up environment variables for the email service.

## Steps:

1. Copy the `.env.example` file to `.env.local`:
   ```
   cp .env.example .env.local
   ```

2. For Gmail (recommended):
   - Go to your Google Account settings
   - Enable 2-Factor Authentication if not already enabled
   - Go to https://myaccount.google.com/apppasswords
   - Generate an App Password for "Mail"
   - Use your Gmail address as EMAIL_USER
   - Use the generated App Password as EMAIL_PASS

3. For other email providers:
   - Set EMAIL_USER to your email address
   - Set EMAIL_PASS to your email password or app password
   - You may need to adjust the service in the API routes (currently set to 'gmail')

## Current Setup:

- All form submissions (Contact and Apply forms) will be sent to: theculturaldiplomats@gmail.com
- Contact form sends: name, email, subject, message
- Apply form sends: firstName, lastName, email, phone, school, program, businessIdea

## Testing:

After setting up the environment variables, restart your development server:
```
npm run dev
```

Then test the forms to ensure emails are being sent correctly.