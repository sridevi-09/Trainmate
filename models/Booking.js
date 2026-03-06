const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  seatNumber: { type: String, required: true },
  coach: { type: String, required: true },
  berthType: { type: String, required: true }, // LB, MB, UB, SL, SU
});

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  trainId: { type: mongoose.Schema.Types.ObjectId, ref: "Train", required: true },
  trainNumber: { type: String, required: true },
  trainName: { type: String, required: true },
  passengers: [PassengerSchema],
  seats: { type: Number, required: true },
  date: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  fare: { type: String, required: true },
  genderPreference: { type: String, enum: ['Male', 'Female', 'Other', 'Any'], required: true },
  bookingStatus: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'], default: 'Confirmed' },
  pnr: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
