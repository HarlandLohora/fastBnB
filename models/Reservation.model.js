const { Schema, model } = require("mongoose");

const reservationSchema = new Schema(
  {
    startDate: Date,
    endDate: Date,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalDays: Number,
    realPrice: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
