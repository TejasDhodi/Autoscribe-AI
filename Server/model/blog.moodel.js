const {model, Schema} = require("mongoose");

const blogSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    },
    schedulerName: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;