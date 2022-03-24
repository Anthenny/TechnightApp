const Form = require('../models/formModel');

exports.createForm = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, role, refference } =
    req.body;

  try {
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
  } catch (e) {
    res.status(400).json({
      status: 'failed',
      message: e.message,
      stack: e.stack,
    });
  }
};

exports.getForm = async (req, res) => {
  try {
    const forms = await Form.find();

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
};
