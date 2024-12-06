const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({

        city: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },
        contact: {
            type: String,
            required: true,
            maxLength: 10
            
        },

    category: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = {
    Rental
};
