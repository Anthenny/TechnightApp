// Basic crud functionality

// const Post = require('../models/postModel');
// const catchAsync = require('../utils/catchAsync');

// exports.getAllPosts = catchAsync(async (req, res, next) => {
//   const posts = await Post.find();
//   res.status(200).json({
//     status: 'succes',
//     results: posts.length,
//     data: { posts },
//   });
// });

// exports.getOnePost = catchAsync(async (req, res, next) => {
//   const post = await Post.findById(req.params.id);

//   res.status(200).json({
//     status: 'succes',
//     data: { post },
//   });
// });

// exports.createPost = catchAsync(async (req, res, next) => {
//   const post = await Post.create(req.body);

//   res.status(200).json({
//     status: 'succes',
//     data: { post },
//   });
// });

// exports.updatePost = catchAsync(async (req, res, next) => {
//   const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     status: 'succes',
//     data: { post },
//   });
// });

// exports.deletePost = catchAsync(async (req, res, next) => {
//   await Post.findByIdAndDelete(req.params);

//   res.status(200).json({
//     status: 'succes',
//   });
// });
