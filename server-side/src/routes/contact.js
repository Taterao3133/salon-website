const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (e.g., 'gmail', 'yahoo')
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST: Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save contact form data to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send confirmation email to the customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send confirmation to the user's email
      subject: 'Thank You for Contacting Us',
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest regards,\nUnique Beauty Salon,\nBanswada.`
    };

    await transporter.sendMail(customerMailOptions);

    // Send notification email to the owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Owner's email address
      subject: 'New Contact Form Submission',
      text: `A new contact form has been submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nPlease check your contact form responses for more details.`
    };

    await transporter.sendMail(ownerMailOptions);

    // Respond to the client
    res.status(201).json({ message: 'Contact form submitted successfully and notifications sent!' });
  } catch (error) {
    console.error('Error saving contact form or sending emails:', error);
    res.status(500).json({ message: 'Failed to submit contact form or send notifications.' });
  }
});

module.exports = router;
