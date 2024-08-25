// src/routes/booking.js
const express = require('express');
const router = express.Router();
const { submitBooking } = require('../controllers/bookingController');

router.post('/booking', submitBooking);

module.exports = router;
