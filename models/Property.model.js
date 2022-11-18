const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    price: {
      type: Number,
    },
    available: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    category: {
      type: String,
      enum: ["apartment", "house", "condo", "cabine", "room", "tend"],
    },
    amenities: [{ type: Schema.Types.ObjectId, ref: "Amenity" }],
    photo: String,
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Property", propertySchema);
