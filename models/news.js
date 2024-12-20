const mongoose = require('mongoose');

// Define the schema
const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    channel: { type: String, default: 'Anonymous' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);
