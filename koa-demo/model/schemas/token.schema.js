const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
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