const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Device = require("../models/DevicesModel");
const School = require("../models/schoolModel");

const getSchools = asyncHandler(async (req, res) => {
  const schools = await School.find({}).populate("device");
  res.status(200).json(schools);
});

const setSchool = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const school = await School.create({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  res.status(200).json(school);
});

const getSchoolById = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id).populate("device");
  res.status(200).json(school);
});

const deleteSchool = asyncHandler(async (req, res) => {
  const school = await School.findById(req.params.id);

  if (!school) {
    res.status(400);
    throw new Error("device not found");
  }

  await school.remove();

  res.status(200).json({ id: req.params.id });
});

const InsertDeviceInSchool = asyncHandler(async (req, res) => {
  let schoolId = req.body.schoolId;

  const device = await Device.create({
    _id: mongoose.Types.ObjectId(),
    nameAndType: req.body.nameAndType,
    desc: req.body.desc,
    status: req.body.status,
    place: req.body.place,
    notes: req.body.notes,
    schoolId: req.body.schoolId,
  });

  const school = await School.findById(schoolId);
  school.device.push(device);
  await school.save();

  res.json({ device });
});

// const updateDeviceInSchool = asyncHandler(async (req, res) => {
//   const device = await Device.findById(req.params.id);
//   if (!device) {
//     res.status(400);
//     throw new Error("device not found");
//   }
//   const updatedDevice = await Device.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );
//   res.status(200).json(updatedDevice);
// });

module.exports = {
  getSchools,
  setSchool,
  deleteSchool,
  InsertDeviceInSchool,
  getSchoolById,
  // updateDeviceInSchool,
};
