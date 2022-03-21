const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

router
  .route("/:id")
  .get(postController.getOnePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

router.route("/").get(postController.getAllPosts).post(postController.createPost);

module.exports = router;
