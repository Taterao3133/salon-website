// const Booking = require('../models/Booking');

// exports.submitBooking = async (req, res) => {
//   try {
//     const { name, email, phone, service, date, time, message } = req.body;

//     // Save booking information to the database
//     const newBooking = new Booking({ name, email, phone, service, date, time, message });
//     await newBooking.save();

//     res.status(200).send({ message: 'Booking submitted successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Server error' });
//   }
// };
