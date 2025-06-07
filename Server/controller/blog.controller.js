const Blog = require("../model/blog.moodel");

const storeBlog = async (req, res) => {
  try {
    const { userName, blogContent, schedulerName, topic } = req.body;

    if (!userName || !blogContent || !schedulerName || !topic) {
      return res.status(500).json({
        success: false,
        message: "all fields are required",
      });
    }

    const storedBlog = await Blog.create({
      userName,
      blogContent,
      schedulerName,
      topic
    });

    return res.status(200).json({
      success: true,
      message: "Blog stored successfully",
      storedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from storeBlog",
      error: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const {blogContent} = req.body;

    if(!blogContent) {
      return res.status(404).json({
        success: false,
        message: "blog content required"
      })
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, {
      blogContent
    }, {
      new: true
    })

    return res.status(200).json({
      success: true,
      message: "Blog updated Successfully",
      updatedBlog
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from getSpecificBlog",
      error: error.message,
    });
  }
}

const deleteBlog = async (req, res) => {
  try {
    const {blogId} = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(blogId)

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: deletedBlog,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from getSpecificBlog",
      error: error.message,
    });
  }
}

const getSpecificBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    return res.status(200).json({
      success: true,
      message: "Blog found",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error from getSpecificBlog",
      error: error.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        return res.status(200).json({
            success: true,
            message: "Found All Blogs",
            blogs
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error from getAllBlogs",
            error: error.message,
          });
    }
}

module.exports = { storeBlog, getSpecificBlog, getAllBlogs, updateBlog, deleteBlog };
