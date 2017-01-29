const express = require('express');
//const postRoutes  = require('./post.js');
const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});
// router.use('/posts', postRoutes);
module.exports = router;