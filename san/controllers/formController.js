const Form = require('../models/formModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createForm = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, company, role, refference } =
    req.body;

  const form = await Form.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    company,
    role,
    refference,
  });

  res.status(200).json({
    status: 'succes',
    data: form,
  });
});

exports.getForm = catchAsync(async (req, res, next) => {
  try {
    const forms = await Form.find();

    if (forms.length === 0) {
      return next(new AppError(`We don't have any postst yet`, 404));
    }

    res.status(200).json({
      status: 'succes',
      data: forms,
    });
  } catch (e) {
    res.status(400).json({
      status: 'failed',
      message: e.message,
      stack: e.stack,
    });
  }
});
