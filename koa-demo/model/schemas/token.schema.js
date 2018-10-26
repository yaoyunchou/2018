const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    access_token: {
        type: Schema.Types.String,
        unique: true,
        required: true
    },
    expires_in:Number,
    created: {
        type: Schema.Types.Date,
        default: Date.now
    },
    update: {
        type: Schema.Types.Date,
        default: Date.now
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true
    } 
});