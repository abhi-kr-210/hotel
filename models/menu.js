const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_drink: {
        type: String,
        default: 'false'
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    }
});

//create the model
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;