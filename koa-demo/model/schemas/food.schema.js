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
    image:Object,
    desc: String,
    calory: String, //热量 100g/大卡
    carbohydrate: String, //碳水化合物 100g/g
    fat: String, //脂肪 100g/g
    protein: String, //蛋白质 100g/g
    cellulose: String, //纤维素 100g/g
    vitamin_A: String, //维生素A 100g/g
    vitamin_B: String, //维生素B 100g/g  
    vitamin_C: String, //维生素C 100g/g
    vitamin_D: String, //维生素D 100g/g
    vitamin_E: String, //维生素E 100g/g
    carotene: String, //胡萝卜素 100g/微克
    thiamine: String, //硫胺素 100g/毫克
    riboflavin: String, //核黄素 100g//毫克
    niacin: String, //烟酸 100g/毫克
    cholesterol: String, //胆固醇 100g/毫克
    magnesium: String, //镁 100g/毫克
    calcium: String, //钙 100g/毫克
   
    iron: String, //铁 100g/毫克
    zinc: String, //锌 100g/毫克
    copper: String, //铜 100g/毫克
    manganese: String, //锰 100g/毫克
    potassium: String, //钾 100g/毫克
    phosphorus: String, //磷 100g/毫克
    sodium: String, //钠 100g/毫克
    selenium: String, //硒 100g/毫克
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