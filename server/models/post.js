const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    Descrption: String,
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// PostSchema.statics = {
//     get(id) {
//         return this
//             .findById(id)
//             .exec()
//             .then((post) => {
//                 if (post) {
//                     return post;
//                 }
//                 const err = new APIError('No such posr exists!', httpStatus.NOT_FOUND);
//                 return Promise.reject(err);
//             });
//     },
//     list({
//         skip = 0,
//         limit = 50
//     } = {}) {
//         return this
//             .find()
//             .sort({createdAt: -1})
//             .skip(skip)
//             .limit(limit)
//             .exec();
//     }
// };
module.exports = mongoose.model('Post', PostSchema);