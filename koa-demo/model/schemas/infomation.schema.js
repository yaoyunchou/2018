const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    link: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    title: Schema.Types.String,
    description: String,
    pubDate: Schema.Types.Date,
    source: Object,
    author: String,
    typeId: Schema.Types.Number,
    created: {
        type: Schema.Types.Date,
        default: Date.now
    },
    update: {
        type: Schema.Types.Date,
        default: Date.now
    },
    createdBy: Schema.Types.ObjectId,
    updateBy: Schema.Types.ObjectId
});