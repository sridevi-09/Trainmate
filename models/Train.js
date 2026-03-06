const mongoose = require("mongoose");

const TrainSchema = new mongoose.Schema({
  trainNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  duration: { type: String, required: true },
  fare: { type: Number, required: true },
  seatsAvailable: { type: Number, required: true },
  totalSeats: { type: Number, default: 100 },
  classes: [{
    type: { type: String, required: true }, // AC1, AC2, AC3, Sleeper, etc.
    fare: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true }
  }],
  runningDays: [{ type: String }], // Mon, Tue, Wed, etc.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Train", TrainSchema);
