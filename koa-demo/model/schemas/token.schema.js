const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    access_token: {
        type: Schema.Types.String,
        //unique: true,
        require: true
    },
    created: {
        type: Schema.Types.Date,
        default: Date.now
    },
    update: {
        type: Schema.Types.Date,
        default: Date.now
    },
    userId: Schema.Types.ObjectId
});