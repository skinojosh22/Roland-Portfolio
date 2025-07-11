require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // allows JSON body from frontend

// POST route to handle contact form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
  from: email,
  to: process.env.EMAIL_USER,
  subject: `New Contact Form Message from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
      <h2 style="color: #333;">📩 New Message from <span style="color: #007BFF;">Ronald&Co. Contact Form</span></h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <br>
      <p style="font-size: 12px; color: #999;">This message was sent from your website's contact form.</p>
    </div>
  `
};

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});