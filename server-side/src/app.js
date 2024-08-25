// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Use CORS middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{ ssl: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


// Import and use routes
const contactRoutes = require('./routes/contact');
const bookingRoutes = require('./routes/Booking');

app.use('/api/contact', contactRoutes);
app.use('/api/booking', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({ message: 'Internal server error' });
});

// Export the app module
module.exports = app;
