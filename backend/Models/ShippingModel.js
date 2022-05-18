const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({

    orderid: {
        type: String,
        required: true
    },

    shipingId: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Shipping', ShippingSchema)