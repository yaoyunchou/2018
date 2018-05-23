const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({

    name: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },

    nikeName: {
        type: Schema.Types.String,
        require: true
    },
    /**
     * 
     */
    category: Number,
    desc: String,
    calory: Number, //热量 100g/大卡
    carbohydrate: Number, //碳水化合物 100g/g
    fat: Number, //脂肪 100g/g
    protein: Number, //蛋白质 100g/g
    cellulose: Number, //纤维素 100g/g
    vitamin_A: Number, //维生素A 100g/g
    vitamin_B: Number, //维生素B 100g/g  
    vitamin_C: Number, //维生素C 100g/g
    vitamin_D: Number, //维生素D 100g/g
    vitamin_E: Number, //维生素E 100g/g
    carotene: Number, //胡萝卜素 100g/微克
    thiamine: Number, //硫胺素 100g/毫克
    riboflavin: Number, //核黄素 100g//毫克
    niacin: Number, //烟酸 100g/毫克
    cholesterol: Number, //胆固醇 100g/毫克
    magnesium: Number, //镁 100g/毫克
    calcium: Number, //钙 100g/毫克
   
    iron: Number, //铁 100g/毫克
    zinc: Number, //锌 100g/毫克
    copper: Number, //铜 100g/毫克
    manganese: Number, //锰 100g/毫克
    potassium: Number, //钾 100g/毫克
    phosphorus: Number, //磷 100g/毫克
    sodium: Number, //钠 100g/毫克
    selenium: Number, //硒 100g/毫克
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