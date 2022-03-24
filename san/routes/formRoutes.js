const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

router.route('/').get(formController.getForm).post(formController.createForm);

module.exports = router;
