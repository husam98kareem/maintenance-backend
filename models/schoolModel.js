const mongoose = require("mongoose");
const schoolSchema = mongoose.Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    name: {
      type: String,
      require: true,
    },
    device: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Device",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("School", schoolSchema);
