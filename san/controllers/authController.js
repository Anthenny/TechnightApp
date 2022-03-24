// Basic auth

// const bcrypt = require('bcryptjs');
// const User = require('../models/userModel');
// const catchAsync = require('../utils/catchAsync');

// exports.signUp = catchAsync(async (req, res) => {
//   const { username, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 12);

//   const newUser = await User.create({ username, password: hashedPassword });

//   res.status(200).json({
//     status: 'succes',
//     data: {
//       user: newUser,
//     },
//   });
// });

// exports.login = catchAsync(async (req, res) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ username });

//   if (!user) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'user not found',
//     });
//   }

//   const isCorrect = await bcrypt.compare(password, user.password);

//   if (!isCorrect) {
//     res.status(400).json({
//       status: 'fail',
//       message: 'incorrect username or password',
//     });
//   }

//   res.status(200).json({
//     status: 'succes',
//     data: {
//       user: user,
//     },
//   });
// });
