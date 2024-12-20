const Blog = require("../models/Blog");


module.exports = {
    getBlogs: async (req, res) => {
        try {
            const { blogId } = req.query;
            if (blogId) {
                const blog = await Blog.findById(blogId);
                return res.status(201).json({ status: true, returnData: blog, message: "Blog fetched successfully!" });
            }
            const blogs = await Blog.find().sort({ createdAt: -1 });
            return res.status(201).json({ status: true, returnData: blogs, message: "Blogs fetched successfully!" });
        } catch (error) {
            console.error(error);
            return res.status(201).json({ status: false, returnData: [], message: error.message });

        }
    },
    createBlogs: async (req, res) => {
        try {
            const { blogId } = req.query;
            if (!!blogId) {
                //update
                const blog = await Blog.findByIdAndUpdate(blogId, req.query, { new: true });
                return res.status(201).json({ status: true, returnData: [], message: "Blog updated successfully!" });
            }
            //create
            const blog = new Blog(req.query);
            const savedBlog = await blog.save();
            return res.status(201).json({ status: true, returnData: savedBlog, message: "Blog created successfully!" });
        } catch (error) {
            console.error(error.message);
            return res.status(201).json({ status: false, returnData: [], message: error.message });
        }
    }
}