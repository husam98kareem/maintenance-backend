const express = require('express');
const { getSchools, setSchool, deleteSchool, InsertDeviceInSchool, getSchoolById } = require('../controllers/schoolControllers');
const router = express.Router()

router.get('/', getSchools)
router.get('/:id', getSchoolById)
router.post('/', setSchool)
router.delete('/:id',deleteSchool)
router.post('/:schoolId',InsertDeviceInSchool)


module.exports = router