var mongoose = require('mongoose');
var schema = mongoose.Schema;
var productSchema = new schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    sold: Boolean,
    dateOfSale: Date
})

var PRODUCT = mongoose.model('productSchema', productSchema);
module.exports = PRODUCT;