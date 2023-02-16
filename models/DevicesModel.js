const mongoose = require("mongoose");
const deviceSchema = mongoose.Schema(
  {
    nameAndType: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: false,
    },

    notes: {
      type: String,
      required: false,
    },
    schoolId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", deviceSchema);
