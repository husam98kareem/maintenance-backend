const asyncHandler = require("express-async-handler");

const Device = require("../models/DevicesModel");
const School = require("../models/schoolModel");

const getDevices = asyncHandler(async (req, res) => {
  const devices = await Device.find({});
  res.status(200).json(devices);
});
const getDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);
  res.status(200).json(device);
});

const setDevice = asyncHandler(async (req, res) => {
  if (!req.body.nameAndType) {
    res.status(400);
    throw new Error("ادخل اسم الجهاز رجاءا");
  }
  const device = await Device.create({
    nameAndType: req.body.nameAndType,
    desc: req.body.desc,
    status: req.body.status,
    place: req.body.place,
    notes: req.body.notes,
    school: req.body.school,
  });
  res.status(200).json(device);
});

const updateDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);

  if (!device) {
    res.status(400);
    throw new Error("device not found");
  }

  const updatedDevice = await Device.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedDevice);
});

const deleteDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);

  if (!device) {
    res.status(400);
    throw new Error("device not found");
  }

  await device.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getDevices,
  setDevice,
  deleteDevice,
  updateDevice,
  getDevice,
};
