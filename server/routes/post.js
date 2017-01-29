const express = require('express');
const validate = require('express-validation');
const postValidation = require('../models/validations/postValidation.js');
var postCtrl = require('../controller/postController.js');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/posts - Get list of posts */
  .get(postCtrl.list)

  /** POST /api/posts - Create new post */
  .post(validate(postValidation.createpost), postCtrl.create);

router.route('/:postId')
  /** GET /api/posts/:postId - Get post */
  .get(postCtrl.get)

  /** PUT /api/posts/:postId - Update post */
  .put(validate(postValidation.updatepost), postCtrl.update)

  /** DELETE /api/posts/:postId - Delete post */
  .delete(postCtrl.remove);

/** Load post when API with postId route parameter is hit */
router.param('postId', postCtrl.load);


module.exports = router;