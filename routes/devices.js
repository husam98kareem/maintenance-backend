const express = require("express");
const router = express.Router();
const {
  getDevices,
  getDevice,
  setDevice,
  deleteDevice,
  updateDevice,
} = require("../controllers/devices");
// const { updateDeviceInSchool } = require("../controllers/schoolControllers");

router.get("/", getDevices);
router.get("/:id", getDevice);
router.post("/", setDevice);
router.delete("/:id", deleteDevice);
router.put("/:id", updateDevice);

module.exports = router;
