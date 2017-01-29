// const post = require('../models/post.js');

// function load(req, res, next, id) {
//  post.get(id)
//     .then((post) => {
//       req.post =post; // eslint-disable-line no-param-reassign
//       return next();
//     })
//     .catch(e => next(e));
// }

// function get(req, res) {
//   return res.json(req.post);
// }

// function create(req, res, next) {
//   constpost = newpost({
//    title: req.body.title,
//     Descrption: req.body.Descrption
//   });

//  post.save()
//     .then(savedpost => res.json(savedpost))
//     .catch(e => next(e));
// }

// function update(req, res, next) {
//   constpost = req.post;
//  post.title = req.body.title;
//  post.Description = req.body.Descrption;

//  post.save()
//     .then(savedpost => res.json(savedpost))
//     .catch(e => next(e));
// }

// function list(req, res, next) {
//   const { limit = 50, skip = 0 } = req.query;
//  post.list({ limit, skip })
//     .then(posts => res.json(posts))
//     .catch(e => next(e));
// }

// function remove(req, res, next) {
//   constpost = req.post;
//  post.remove()
//     .then(deletedpost => res.json(deletedpost))
//     .catch(e => next(e));
// }

// module.exports = { load, get, create, update, list, remove };