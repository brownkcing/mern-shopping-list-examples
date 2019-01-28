const mongoose = require ('mongoose');
const Schema  = mongoose.Schema;



//schemas
const shopList = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = item = mongoose.model('itemRoute', shopList)