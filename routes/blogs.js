const express = require('express');
const blogsRouter = express.Router();
const blogsHandler = require("../handlers/blogsHandler")

blogsRouter.post("/createBlogs", blogsHandler.createBlogs)
blogsRouter.post("/getBlogs", blogsHandler.getBlogs)

module.exports = blogsRouter
