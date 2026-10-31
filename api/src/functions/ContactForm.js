const { app } = require('@azure/functions');
const sgMail = require('@sendgrid/mail');

app.http('ContactForm', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        };

        // Handle CORS Preflight
        if (request.method === 'OPTIONS') {
            return { status: 204, headers: corsHeaders };
        }

        try {
            const body = await request.json();
            const { name, email, subject, message } = body;

            if (!name || !email || !message) {
                return {
                    status: 400,
                    headers: corsHeaders,
                    jsonBody: { error: 'Missing required fields' }
                };
            }

            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const msg = {
                to: process.env.NOTIFICATION_EMAIL || 'luzon.arcilla@outlook.com',
                from: process.env.VERIFIED_SENDER_EMAIL || 'luzon.arcilla@outlook.com',
                subject: `Portfolio Contact: ${subject || 'New Inquiry'}`,
                text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
            };

            await sgMail.send(msg);

            return {
                status: 200,
                headers: corsHeaders,
                jsonBody: { success: true, message: 'Message sent successfully!' }
            };
        } catch (error) {
            context.error('SendGrid Error:', error);
            return {
                status: 500,
                headers: corsHeaders,
                jsonBody: { error: 'Failed to send message.' }
            };
        }
    }
});
// trigger build