const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DrinkType = new Schema(
  {
    name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        typeOfCaffiene:{ type: String, required: true },
        caffieneLevel: { type: String, required: true },
        levelOfEffectiveness:{ type: Number, required: true }
  },
  {timestamps:true}
)

module.exports= mongoose.model('DrinkType', DrinkType)