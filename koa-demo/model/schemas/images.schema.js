const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    url:String,
    ctg:String,
    owner:Schema.Types.ObjectId,
    created: {
        type: Schema.Types.Date,
        default: Date.now
    },
    update: {
        type: Schema.Types.Date,
        default: Date.now
    }
});