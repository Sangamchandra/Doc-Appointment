const express = require('express');
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require('../controllers/doctorCtrl');
const authmiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//post single doc info
router.post('/getDoctorInfo', authmiddleware, getDoctorInfoController);

//post update profile
router.post('/updateProfile', authmiddleware, updateProfileController);

//gget single doc info
router.post('/getDoctorById', authmiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  '/doctor-appointments',
  authmiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.post('/update-status', authmiddleware, updateStatusController);

module.exports = router;
