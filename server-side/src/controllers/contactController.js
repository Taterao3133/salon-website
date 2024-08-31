// src/controllers/contactController.js
const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save contact information to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Dear ${name},\n\nThank you for reaching out to us. We will get back to you shortly.\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ message: 'Email not sent' });
      }
      res.status(200).send({ message: 'Contact form submitted successfully' });
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send({ message: 'Server error' });
  }
};

