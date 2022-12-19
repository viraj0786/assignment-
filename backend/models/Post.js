var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
        tittle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        poster_image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)

// const mongoose = require('mongoose');

// const Users = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//     },
//     {
//         timestamps: true
//     }
// );
// const User = mongoose.model('Users', Users);
// module.exports = User;