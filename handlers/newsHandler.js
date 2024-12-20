const News = require("../models/news");

module.exports = {
    createUpdateNews: async (req, res) => {
        try {
            console.log('req.query :>> ', req.query);
            const { newsId } = req.query;
            if (!!newsId) {
                //update
                //update
                const blog = await News.findByIdAndUpdate(newsId, req.query, { new: true });
                return res.status(201).json({ status: true, returnData: [], message: "News updated successfully!" });
            }
            //create
            const news = new News(req.query);
            const savedNews = await news.save();
            return res.status(201).json({ status: true, returnData: savedNews, message: "News created successfully!" });

        } catch (error) {
            console.error(error);
            return res.status(201).json({ status: false, returnData: [], message: error.message });
        }

    },
    getNews: async (req, res) => {
        try {
            const { newsId } = req.query;
            if (!!newsId) {
                const news = await News.findById(newsId);
                return res.status(201).json({
                    status: true, returnData: news, message:
                        "News found successfully!"
                });
            }
            const news = await News.find().sort({ createdAt: -1 });
            return res.status(201).json({
                status: true, returnData: news, message:
                    "News found successfully!"
            });
        } catch (error) {
            console.error(error);
        }
    }
}