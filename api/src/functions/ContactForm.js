const { app } = require('@azure/functions');
const sgMail = require('@sendgrid/mail');

app.http('ContactForm', {
  methods: ['POST', 'OPTIONS'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    // 1. CORS Preflight Handling
    if (request.method === 'OPTIONS') {
      return {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      };
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    try {
      // 2. Parse request body
      const body = await request.json();
      const { name, email, subject, message } = body;

      if (!name || !email || !subject || !message) {
        return {
          status: 400,
          headers: corsHeaders,
          jsonBody: { error: 'All fields (name, email, subject, message) are required.' },
        };
      }

      // 3. Configure SendGrid
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: process.env.NOTIFICATION_EMAIL || 'luzon.arcilla@outlook.com',
        from: process.env.VERIFIED_SENDER_EMAIL || 'contact@arcilla.org',
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        text: `From: ${name} <${email}>\n\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <h3>New Portfolio Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      };

      // 4. Send Email
      await sgMail.send(msg);

      return {
        status: 200,
        headers: corsHeaders,
        jsonBody: { success: true, message: 'Message sent successfully!' },
      };
    } catch (error) {
      context.error('Error sending email:', error);
      return {
        status: 500,
        headers: corsHeaders,
        jsonBody: { error: 'Failed to send message. Please try again later.' },
      };
    }
  },
});