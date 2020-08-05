var Mailgen = require('../');

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'zava',
    product: {
        // Appears in header & footer of e-mails
        name: 'The Zava team',
        link: 'https://www.zavamed.com/uk/',
        logo: '/Users/edwardbattistini/Documents/GitHub/mailgen/assets/logo.png',
        copyright: '<strong>Health Bridge Ltd (t/a Zava), 46 Essex Rd, Islington, London, N1 8LN, England, Company number 07392646</strong><br><br> This e-mail is confidential to the intended recipient. If you are not the intended recipient you must not disclose, copy or distribute its contents to any other person nor use its contents in any way. Please contact us immediately on hello@zavamed.com and delete the e-mail from your system.'
    }
});

// Prepare email contents
var email = {
    body: {
        greeting: 'Dear',
        name: 'John Appleseed',
        intro: "Thanks for joining Zava. We're thrilled you're here, and we're looking forward to treating you soon. Before we get started, you need to confirm your email address.",
        action: {
            instructions: 'Copy the verification code below:',
            button: {
                color: '#F5F6F9',
                text: '422069',
            },
        },
        signature: 'Sincerely',
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};

// Generate an HTML email with the provided contents
var emailBody = mailGenerator.generate(email);

// Generate the plaintext version of the e-mail (for clients that do not support HTML)
var emailText = mailGenerator.generatePlaintext(email);

// Optionally, preview the generated HTML e-mail by writing it to a local file
require('fs').writeFileSync('output/verify_preview.html', emailBody, 'utf8');
require('fs').writeFileSync('output/verify_preview.txt', emailText, 'utf8');

// `emailBody` now contains the HTML body,
// and `emailText` contains the textual version.
// 
// It's up to you to send the e-mail.
// Check out nodemailer to accomplish this:
// https://nodemailer.com/

// Send the e-mail with your favorite mailer
// transporter.sendMail({
//     from: 'no-reply@mailgen.js',
//     to: 'target@email.com',
//     subject: 'Mailgen',
//     html: emailBody,
//     text: emailText,
// }, function (err) {
//     if (err) return console.log(err);
//     console.log('Message sent successfully.');
// });
