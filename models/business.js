const mongoose = require('mongoose');

// Define the schema
const BusinessSchema = new mongoose.Schema({
    images: [
        {
            data: Buffer,
            contentType: String,
        },
    ],
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerNumber: { type: String, required: true },
    businessNumber: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    businessEmail: { type: String, required: true },
    categoryName: { type: String, required: true },
    weekdays: { type: Array, required: true },
    features: { type: Array, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number, required: true },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Business', BusinessSchema);
