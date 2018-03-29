const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    title: {
        type: Schema.Types.String,
        required: true
    },
    desc: String,
    type:String,
    author:String,
    smImg: String,
    fullImg: String,
    created: {
        type: Schema.Types.Date,
        default: Date.now
    },
    update: {
        type: Schema.Types.Date,
        default: Date.now
    },
    createdBy: Schema.Types.ObjectId
});