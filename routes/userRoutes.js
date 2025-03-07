const express = require('express');
const {
  registerController,
  loginController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController);

//Register || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController);

//Apply-Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController);

//Notification Doctor || POST
router.post(
  '/get-all-notification',
  authMiddleware,
  getAllNotificationController
);

// delete Notification || POST
router.post(
  '/delete-all-notification',
  authMiddleware,
  deleteAllNotificationController
);

//get all doc
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController);

//Booking Avliability
router.post(
  '/booking-availbility',
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get('/user-appointments', authMiddleware, userAppointmentsController);

module.exports = router;
