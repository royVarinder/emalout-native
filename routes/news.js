const express = require('express');
const newsRouter = express.Router();
const newsHandler = require("../handlers/newsHandler")

newsRouter.post("/createUpdateNews", newsHandler.createUpdateNews)
newsRouter.post("/getNews", newsHandler.getNews)

module.exports = newsRouter
