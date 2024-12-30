const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: 'string',
    },
    firstName: {
      type: 'string',
      required: [true, 'First Name is required'],
    },
    lastName: {
      type: 'string',
      required: [true, 'Last Name is required'],
    },
    phone: {
      type: 'string',
      required: [true, 'Phone is required'],
    },
    email: {
      type: 'string',
      required: [true, 'Email is required'],
    },
    address: {
      type: 'string',
      required: [true, 'Address is required'],
    },
    specialization: {
      type: 'string',
      required: [true, 'Specialization is required'],
    },
    experience: {
      type: 'string',
      required: [true, 'Experience is required'],
    },
    feesPerConsultation: {
      type: 'number',
      required: [true, 'Fees is required'],
    },
    status: {
      type: String,
      default: 'Pending',
    },
    timings: {
      type: 'Object',
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model('doctors', doctorSchema);
module.exports = doctorModel;
