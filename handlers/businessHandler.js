const Business = require("../models/business");



module.exports = {
    createUpdateBusiness: async (req, res) => {
        try {
            const { name, businessId, imageId } = req.body;
            if (!!imageId) {
                //update image data
                const file = req.file;

                return
            }
            if (!!businessId) {
                //update
                return
            }
            //create
            const files = req.files;
            const images = files?.map((file) => ({
                data: file.buffer,
                contentType: file.mimetype,
            }));
            req.body.images = images;
            const newBusiness = new Business(req.body);
            const savedBusiness = await newBusiness.save();
            return res.status(201).json({ status: true, message: 'Business created successfully', returnData: savedBusiness });
        } catch (error) {
            console.error(error);
            return res.status(201).json({ status: false, message: error.message, returnData: [] });

        }
    },
    getBusiness: async (req, res) => {
        try {
            const businessId = req.body.businessId;
            if (!!businessId) {
                //get with id
            }
            //get all
            const businesses = await Business.find().sort({ createdAt: -1 })
            res.status(201).json({ status: true, message: "Business fetched successfully", returnData: businesses });
        } catch (error) {
            console.error(error);
            res.status(201).json({ status: false, message: error.message, returnData: [] });

        }
    }
}