const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: 'N/A',
    },
    like: {
        type: Number,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: Array,
        default: ["https://via.placeholder.com/550x750"]
    },
    category: {
        type: String,
        default: 'N/A'
    }

})

const product = mongoose.model('product', productSchema);
module.exports = product;