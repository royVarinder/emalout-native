const express = require('express');
const businessRouter = express.Router();
const businessHandler = require("../handlers/businessHandler");
const multer = require("multer");
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage });

businessRouter.post("/createUpdateBusiness", upload.array("images"), businessHandler.createUpdateBusiness)
businessRouter.post("/getBusiness", businessHandler.getBusiness)

module.exports = businessRouter
